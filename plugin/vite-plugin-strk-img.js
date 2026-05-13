import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'
import { parse } from '@babel/parser'
import _traverse from '@babel/traverse'
const traverse = _traverse.default ?? _traverse

const CONFIG_FILENAME = 'strk-img-config.json'
const CACHE_FILENAME  = '.strk-cache.json'
const CACHE_TTL_MS = 30 * 24 * 60 * 60 * 1000
const CACHE_MAX_ENTRIES = 500

let viteRoot = ''
let configPath = ''
let cachePath  = ''
let configData = {}
let cacheData  = {}
let pendingFlush = null
let _lastWrittenConfigHash = null
let _dirty = false
let _isBuild = false

// ---------------------------------------------------------------------------
// Native .env parser (no dotenv)
// Called in buildStart() where we have the confirmed Vite root path.
// Loads .env.local first (higher priority), then .env.
// Does NOT overwrite vars already set in the real environment.
// ---------------------------------------------------------------------------
function loadEnvFile(root) {
  const candidates = ['.env.local', '.env']
  let loaded = false
  for (const name of candidates) {
    const envPath = path.resolve(root, name)
    if (!fs.existsSync(envPath)) continue
    const lines = fs.readFileSync(envPath, 'utf-8').split('\n')
    for (const raw of lines) {
      const line = raw.trim()
      if (!line || line.startsWith('#')) continue
      const eq = line.indexOf('=')
      if (eq === -1) continue
      const key = line.slice(0, eq).trim()
      let val = line.slice(eq + 1).trim()
      if ((val.startsWith('"') && val.endsWith('"')) ||
          (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1)
      }
      if (key && !(key in process.env)) {
        process.env[key] = val
      }
    }
    console.log('[strk-img] Loaded env from ' + envPath)
    loaded = true
  }
  if (!loaded) {
    console.warn(
      '[strk-img] WARNING: No .env file found in ' + root + '\n' +
      '[strk-img]   Copy .env.example to .env and add your UNSPLASH_ACCESS_KEY'
    )
  }
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
const hashQuery = q => crypto.createHash('md5').update(q).digest('hex').slice(0, 8)
const isSameJson = (a, b) => JSON.stringify(a) === JSON.stringify(b)

function readJson(p) {
  try { return JSON.parse(fs.readFileSync(p, 'utf-8')) }
  catch { return {} }
}

// Atomically replace `p`'s contents: write to a sibling .tmp file, then rename.
// This avoids a half-written JSON file if the process is killed mid-write,
// which would make `readJson` silently return {} and discard all cached
// Unsplash results on the next start.
function writeJsonAtomic(p, data) {
  const text = JSON.stringify(data, null, 2)
  const tmp = p + '.tmp'
  fs.writeFileSync(tmp, text, 'utf-8')
  fs.renameSync(tmp, p)
  return text
}

const md5Hex = s => crypto.createHash('md5').update(s).digest('hex')

function normalizeCacheData(raw) {
  const now = Date.now()
  const out = {}
  for (const [k, v] of Object.entries(raw || {})) {
    if (!v) continue
    const results = Array.isArray(v) ? v : v.results
    if (!Array.isArray(results)) continue
    out[k] = {
      results,
      _ts: typeof v._ts === 'number' ? v._ts : now,
    }
  }
  return out
}

function isExpiredCacheEntry(entry, now) {
  if (!entry || !Array.isArray(entry.results)) return true
  const ts = typeof entry._ts === 'number' ? entry._ts : 0
  return now - ts > CACHE_TTL_MS
}

function pruneCacheData() {
  const now = Date.now()
  const rows = Object.entries(cacheData)
    .filter(([, v]) => !isExpiredCacheEntry(v, now))
    .sort((a, b) => (b[1]._ts || 0) - (a[1]._ts || 0))
    .slice(0, CACHE_MAX_ENTRIES)
  cacheData = Object.fromEntries(rows)
}

function buildSharpUrl(rawUrl, targetWidth, dpr = 2) {
  if (!rawUrl) return rawUrl
  let url
  try {
    url = new URL(rawUrl)
  } catch {
    return rawUrl
  }
  const width = Math.max(800, Math.round((Number(targetWidth) || 1600) * dpr))
  url.searchParams.set('w', String(width))
  url.searchParams.set('q', '90')
  url.searchParams.set('fit', 'max')
  url.searchParams.set('fm', 'jpg')
  return url.toString()
}

// ---------------------------------------------------------------------------
// Static evaluation helpers
//
// We need to support patterns like:
//   const eggTypes = [{ id: 'chicken', imgId: 'x' }, ...]
//   eggTypes.map((egg) => <img data-strk-img-id={egg.imgId}
//                              data-strk-img={`[label-${egg.id}]`} />)
//
// To do this at compile-time without running JS, we:
//   1. Pre-scan top-level `const NAME = [{...}, ...]` arrays whose elements
//      are object literals of primitive values.
//   2. When extracting entries, recognize `NAME.map((param) => ...)` and
//      expand the callback body once per item, pushing a substitution
//      `{ paramName, item }` onto a scope stack.
//   3. Evaluate attribute / child expressions against that stack.
// ---------------------------------------------------------------------------

// Extract a literal value from an AST node. Supports primitives plus nested
// arrays / object literals of primitives. Returns undefined when the node is
// too dynamic to evaluate statically.
function literalValue(node) {
  if (!node) return undefined
  if (node.type === 'StringLiteral') return node.value
  if (node.type === 'NumericLiteral') return node.value
  if (node.type === 'BooleanLiteral') return node.value
  if (node.type === 'NullLiteral') return null
  if (node.type === 'TemplateLiteral' && node.expressions.length === 0) {
    return node.quasis[0].value.cooked
  }
  if (node.type === 'ArrayExpression') {
    const out = []
    for (const el of node.elements) {
      if (!el) return undefined
      const v = literalValue(el)
      if (v === undefined) return undefined
      out.push(v)
    }
    return out
  }
  if (node.type === 'ObjectExpression') {
    const out = {}
    for (const prop of node.properties) {
      if (prop.type !== 'ObjectProperty' || prop.computed) return undefined
      let key
      if (prop.key.type === 'Identifier') key = prop.key.name
      else if (prop.key.type === 'StringLiteral') key = prop.key.value
      else return undefined
      const v = literalValue(prop.value)
      if (v === undefined) return undefined
      out[key] = v
    }
    return out
  }
  return undefined
}

// Turn an ArrayExpression AST node into a plain JS array of plain objects.
//
// Tolerant mode: if a single property's value is too dynamic to evaluate, we
// drop just that property (it stays undefined in the registered item). This
// way, a `const items = [{ id: 'x', cb: () => {} }]` is still usable for any
// JSX expression that only references `.id`. JSX expressions that DO touch
// the dropped property will naturally resolve to undefined and skip cleanly.
//
// Returns null only when the top-level shape isn't an array of object
// literals at all — there's nothing to register in that case.
function parseArrayLiteral(arrayNode) {
  if (!arrayNode || arrayNode.type !== 'ArrayExpression') return null
  const items = []
  for (const el of arrayNode.elements) {
    if (!el || el.type !== 'ObjectExpression') return null
    const obj = {}
    for (const prop of el.properties) {
      if (prop.type !== 'ObjectProperty' || prop.computed) continue
      let key
      if (prop.key.type === 'Identifier') key = prop.key.name
      else if (prop.key.type === 'StringLiteral') key = prop.key.value
      else continue
      const v = literalValue(prop.value)
      if (v === undefined) continue
      obj[key] = v
    }
    items.push(obj)
  }
  return items.length ? items : null
}

// Resolve a relative import specifier ("./foo", "../data/bar") against the
// current file, trying common JS/TS extensions and /index variants.
// Returns an absolute path or null. Bare-specifier and alias paths are skipped.
const _IMPORT_EXT_CANDIDATES = [
  '', '.js', '.jsx', '.ts', '.tsx', '.mjs', '.cjs',
  '/index.js', '/index.jsx', '/index.ts', '/index.tsx',
]
function resolveImportPath(currentFile, spec) {
  if (!currentFile || !spec) return null
  if (!spec.startsWith('./') && !spec.startsWith('../')) return null
  const base = path.resolve(path.dirname(currentFile), spec)
  for (const ext of _IMPORT_EXT_CANDIDATES) {
    const p = base + ext
    try {
      const st = fs.statSync(p)
      if (st.isFile()) return p
    } catch {}
  }
  return null
}

// Shared JSX/TS parser. Babel always sets `start`/`end` on every node, so
// downstream code that does source-range patching works on this AST without
// any extra parser flags.
function parseJsxOnce(code) {
  try {
    return parse(code, {
      sourceType: 'module',
      plugins: ['jsx', 'typescript'],
      errorRecovery: true,
    })
  } catch {
    return null
  }
}

// LRU AST cache keyed by absolute path, invalidated by mtime. Bounded so that
// a long dev session with many data files doesn't grow memory unboundedly
// (each Babel AST is heavy — nested objects with positions on every node).
const _AST_CACHE_MAX = 100
const _fileAstCache = new Map()

function _astCacheTouch(key, val) {
  if (_fileAstCache.has(key)) _fileAstCache.delete(key)
  _fileAstCache.set(key, val)
  while (_fileAstCache.size > _AST_CACHE_MAX) {
    const oldest = _fileAstCache.keys().next().value
    _fileAstCache.delete(oldest)
  }
}

function parseFileCached(filePath) {
  let stat
  try { stat = fs.statSync(filePath) } catch { return null }
  const cached = _fileAstCache.get(filePath)
  if (cached && cached.mtime === stat.mtimeMs) {
    _astCacheTouch(filePath, cached)
    return cached.ast
  }
  let code
  try { code = fs.readFileSync(filePath, 'utf-8') } catch { return null }
  const ast = parseJsxOnce(code)
  _astCacheTouch(filePath, { mtime: stat.mtimeMs, ast })
  return ast
}

// Memoize `collectLocalArrays` per AST. Each named/default-import lookup into
// the same imported file would otherwise re-walk its whole top-level body.
const _localArraysByAst = new WeakMap()
function getLocalArrays(ast) {
  let v = _localArraysByAst.get(ast)
  if (!v) {
    v = collectLocalArrays(ast)
    _localArraysByAst.set(ast, v)
  }
  return v
}

// Build a local-name -> primitive-array map of all top-level const arrays
// declared (or aliased via `export { x }`) in the given AST.
function collectLocalArrays(ast) {
  const local = {}
  const body = ast.program?.body || []
  for (const stmt of body) {
    const decl =
      stmt.type === 'ExportNamedDeclaration' && !stmt.source
        ? stmt.declaration
        : stmt
    if (!decl || decl.type !== 'VariableDeclaration') continue
    for (const d of decl.declarations) {
      if (!d.id || d.id.type !== 'Identifier') continue
      const items = parseArrayLiteral(d.init)
      if (items) local[d.id.name] = items
    }
  }
  return local
}

// Find the array exported under `exportName` from an already-parsed file.
// Handles:
//   export const NAME = [...]
//   const NAME = [...]; export { NAME }
//   const X = [...]; export { X as NAME }
function findNamedExportArray(ast, exportName) {
  if (!ast) return null
  const local = getLocalArrays(ast)
  if (local[exportName]) {
    const body = ast.program?.body || []
    for (const stmt of body) {
      if (stmt.type !== 'ExportNamedDeclaration' || stmt.source) continue
      if (stmt.declaration?.type === 'VariableDeclaration') {
        for (const d of stmt.declaration.declarations) {
          if (d.id?.name === exportName) return local[exportName]
        }
      }
    }
  }
  const body = ast.program?.body || []
  for (const stmt of body) {
    if (stmt.type !== 'ExportNamedDeclaration' || stmt.source) continue
    for (const spec of stmt.specifiers || []) {
      if (spec.exported?.name === exportName && spec.local?.name) {
        const items = local[spec.local.name]
        if (items) return items
      }
    }
  }
  return null
}

// Find the array exported as default. Handles:
//   export default [...]
//   const X = [...]; export default X
function findDefaultExportArray(ast) {
  if (!ast) return null
  const local = getLocalArrays(ast)
  const body = ast.program?.body || []
  for (const stmt of body) {
    if (stmt.type !== 'ExportDefaultDeclaration') continue
    const decl = stmt.declaration
    if (decl.type === 'ArrayExpression') return parseArrayLiteral(decl)
    if (decl.type === 'Identifier' && local[decl.name]) return local[decl.name]
  }
  return null
}

// Build a registry of identifier -> primitive items[], visible at the top
// of `ast`. Includes:
//   - local top-level const arrays (incl. `export const NAME = [...]`)
//   - named / default imports whose source file is a sibling .js/.jsx/.ts/.tsx
//     that exports a primitive-valued array constant.
// `onImportResolved(absolutePath)` is invoked for every imported file we
// successfully parsed (regardless of whether it contributed an array), so
// the caller can register it with vite's watcher.
function buildArrayRegistry(ast, currentFile, onImportResolved) {
  const reg = new Map()
  const localArrays = getLocalArrays(ast)
  for (const [name, items] of Object.entries(localArrays)) {
    reg.set(name, items)
  }

  const body = ast.program?.body || []
  for (const stmt of body) {
    if (stmt.type !== 'ImportDeclaration') continue
    const resolved = resolveImportPath(currentFile, stmt.source.value)
    if (!resolved) continue
    const importedAst = parseFileCached(resolved)
    if (!importedAst) continue
    if (typeof onImportResolved === 'function') onImportResolved(resolved)

    for (const spec of stmt.specifiers || []) {
      const localName = spec.local?.name
      if (!localName) continue
      if (spec.type === 'ImportSpecifier') {
        const exportName = spec.imported?.name || localName
        const items = findNamedExportArray(importedAst, exportName)
        if (items) reg.set(localName, items)
      } else if (spec.type === 'ImportDefaultSpecifier') {
        const items = findDefaultExportArray(importedAst)
        if (items) reg.set(localName, items)
      }
      // ImportNamespaceSpecifier (`import * as ns`) intentionally unsupported.
    }
  }

  return reg
}

// Resolve an expression to a raw JS value under the given substitution stack.
// `subs` is an array of `{ paramName, item }`; innermost last.
// Returns undefined when the expression can't be statically evaluated.
//
// Used both for stringification (via `resolveExpr`) and for plumbing real
// values across local-component call sites (e.g. `<AnimalCard animal={animal}/>`
// needs `animal` to resolve to an OBJECT, not a string, so the component body
// can later do `animal.id` against it).
function resolveExprValue(node, subs) {
  if (!node) return undefined
  if (node.type === 'StringLiteral') return node.value
  if (node.type === 'NumericLiteral') return node.value
  if (node.type === 'BooleanLiteral') return node.value
  if (node.type === 'NullLiteral') return null
  if (node.type === 'Identifier') {
    for (let i = subs.length - 1; i >= 0; i--) {
      if (subs[i].paramName === node.name) return subs[i].item
    }
    return undefined
  }
  if (node.type === 'MemberExpression' && !node.computed) {
    if (node.property?.type !== 'Identifier') return undefined
    const obj = resolveExprValue(node.object, subs)
    if (obj == null) return undefined
    if (typeof obj !== 'object') return undefined
    return obj[node.property.name]
  }
  if (node.type === 'TemplateLiteral') {
    let out = ''
    for (let i = 0; i < node.quasis.length; i++) {
      out += node.quasis[i].value.cooked
      if (i < node.expressions.length) {
        const v = resolveExprValue(node.expressions[i], subs)
        if (v === undefined) return undefined
        if (v === null) continue
        if (typeof v === 'object') return undefined
        out += String(v)
      }
    }
    return out
  }
  if (node.type === 'BinaryExpression' && node.operator === '+') {
    const a = resolveExprValue(node.left, subs)
    const b = resolveExprValue(node.right, subs)
    if (a === undefined || b === undefined) return undefined
    return a + b
  }
  if (node.type === 'ArrayExpression') {
    const out = []
    for (const el of node.elements) {
      if (!el) return undefined
      const v = resolveExprValue(el, subs)
      if (v === undefined) return undefined
      out.push(v)
    }
    return out
  }
  if (node.type === 'ObjectExpression') {
    const out = {}
    for (const prop of node.properties) {
      if (prop.type !== 'ObjectProperty' || prop.computed) return undefined
      let key
      if (prop.key.type === 'Identifier') key = prop.key.name
      else if (prop.key.type === 'StringLiteral') key = prop.key.value
      else return undefined
      const v = resolveExprValue(prop.value, subs)
      if (v === undefined) return undefined
      out[key] = v
    }
    return out
  }
  return undefined
}

// String wrapper around resolveExprValue. Returns undefined for values that
// can't be sensibly coerced to a string (raw objects).
function resolveExpr(node, subs) {
  const v = resolveExprValue(node, subs)
  if (v === undefined) return undefined
  if (v === null) return ''
  if (Array.isArray(v)) return v.join(' ')
  if (typeof v === 'object') return undefined
  return String(v)
}

// Resolve a JSXAttribute to a string under the given substitutions.
// Returns null when the value isn't a string (or can't be resolved).
function resolveAttrString(attr, subs) {
  if (!attr) return null
  if (attr.value === null) return true
  if (attr.value.type === 'StringLiteral') return attr.value.value
  if (attr.value.type === 'JSXExpressionContainer') {
    const v = resolveExpr(attr.value.expression, subs)
    return typeof v === 'string' ? v : null
  }
  return null
}

// Detect `<expr>.map(cb)` where <expr> resolves statically to a known items
// array and the callback's first param is shaped well enough to bind.
// Returns { paramShape, items, body } or null.
//
// Supported `<expr>` forms (delegated to resolveItemsAlias):
//   items                        — bare identifier in the current scope's registry
//   [{...}, {...}]               — inline array literal
//   items.filter(p) / .slice(...) / .sort(...) / .reverse() / .concat(x)
//   cond ? items : items.filter(...)
//   a || b   /   a ?? b
//
// Supported callback param shapes (delegated to paramShapeOf):
//   (item)                       — single identifier
//   ({ a, b })                   — destructure
//   ({ a: alias, b })            — destructure with rename (e.g. `icon: Icon`)
//
// Anything outside these whitelists returns null so the map is left
// untouched — same conservative behaviour as before for unsupported cases.
function matchMapCall(node, registry) {
  if (node.type !== 'CallExpression') return null
  const callee = node.callee
  if (!callee || callee.type !== 'MemberExpression' || callee.computed) return null
  if (callee.property?.type !== 'Identifier' || callee.property.name !== 'map') return null
  const items = resolveItemsAlias(callee.object, registry, null)
  if (!items) return null
  const cb = node.arguments[0]
  if (!cb) return null
  if (cb.type !== 'ArrowFunctionExpression' && cb.type !== 'FunctionExpression') return null
  const shape = paramShapeOf(cb.params?.[0])
  if (!shape) return null
  return { paramShape: shape, items, body: cb.body }
}

// Expand one item from the array registry into the subs that should be
// pushed onto the scope stack for that map iteration. Returns [] for items
// that don't fit the shape (e.g. destructure against a non-object item) —
// the iteration is then visited with no new bindings, matching how an
// `Identifier` lookup would fail to resolve anyway.
function subsFromMapItem(paramShape, item) {
  if (paramShape.kind === 'identifier') {
    return [{ paramName: paramShape.name, item }]
  }
  if (item == null || typeof item !== 'object') return []
  const out = []
  for (const { prop, local } of paramShape.keys) {
    out.push({ paramName: local, item: item[prop] })
  }
  return out
}

// Methods that derive a new collection from an existing one without changing
// each element's shape. Safe to "see through" when resolving an alias back to
// its underlying registered array. Methods that DO reshape elements (map,
// flatMap, reduce) or extract scalars (find, some, every) are intentionally
// excluded — using their result as if it were the same shape would silently
// bind wrong field values.
const _SHAPE_PRESERVING_METHODS = new Set([
  'filter', 'slice', 'sort', 'reverse', 'toSorted', 'toReversed', 'concat',
])

// Try to resolve `node` (typically the init of a `const X = ...` declaration)
// back to a registered items array. Used to make patterns like
//   const filtered = items.filter(...)
//   const ordered  = cond ? items : items.toSorted(byX)
// work the same as the bare `items` identifier inside a `.map((p) => ...)`.
//
// Whitelisted only; anything not in the recognised forms returns null so the
// declaration is silently ignored and the existing behaviour kicks in.
//
//   parentRegistry: the registry visible just before this declaration (Map)
//   additions:      a Map of bindings already resolved in the same block
//                   (so chains like `const a = items; const b = a.filter(...)`
//                   work in one pass).
function resolveItemsAlias(node, parentRegistry, additions, depth = 0) {
  if (!node || depth > 4) return null

  if (node.type === 'ArrayExpression') return parseArrayLiteral(node)

  if (node.type === 'Identifier') {
    if (additions && additions.has(node.name)) return additions.get(node.name)
    return (parentRegistry && parentRegistry.get(node.name)) || null
  }

  if (
    node.type === 'CallExpression' &&
    node.callee &&
    node.callee.type === 'MemberExpression' &&
    !node.callee.computed &&
    node.callee.property &&
    node.callee.property.type === 'Identifier' &&
    _SHAPE_PRESERVING_METHODS.has(node.callee.property.name)
  ) {
    return resolveItemsAlias(node.callee.object, parentRegistry, additions, depth + 1)
  }

  if (node.type === 'ConditionalExpression') {
    const a = resolveItemsAlias(node.consequent, parentRegistry, additions, depth + 1)
    const b = resolveItemsAlias(node.alternate, parentRegistry, additions, depth + 1)
    if (a && b) {
      // For `cond ? base : base.filter(...)` both sides resolve to the SAME
      // base array, so pick whichever is larger (the unfiltered superset).
      // This makes sure runtime category-switch UIs see images for every
      // possible item, not just the ones in the default branch.
      return a.length >= b.length ? a : b
    }
    return a || b
  }

  if (node.type === 'LogicalExpression' && (node.operator === '||' || node.operator === '??')) {
    return (
      resolveItemsAlias(node.left, parentRegistry, additions, depth + 1) ||
      resolveItemsAlias(node.right, parentRegistry, additions, depth + 1)
    )
  }

  return null
}

// Walk a BlockStatement's direct statements (NOT nested blocks — those get
// their own scope when the visitor recurses into them) and collect any
// `const/let/var X = <resolvable>` bindings whose init resolves via
// resolveItemsAlias. Returns the parent registry unchanged when no new
// bindings are discovered, so common blocks are zero-cost.
function extendRegistryWithBlock(parentRegistry, blockNode) {
  if (!blockNode || blockNode.type !== 'BlockStatement') return parentRegistry
  const stmts = blockNode.body || []
  let additions = null
  for (const stmt of stmts) {
    if (!stmt || stmt.type !== 'VariableDeclaration') continue
    for (const d of stmt.declarations) {
      if (!d || !d.id || d.id.type !== 'Identifier' || !d.init) continue
      const items = resolveItemsAlias(d.init, parentRegistry, additions)
      if (!items) continue
      if (!additions) additions = new Map()
      additions.set(d.id.name, items)
    }
  }
  if (!additions) return parentRegistry
  const next = new Map(parentRegistry)
  for (const [k, v] of additions) next.set(k, v)
  return next
}

// Keys on AST nodes we should not recurse into.
const NON_TRAVERSAL_KEYS = new Set([
  'loc', 'start', 'end', 'range', 'extra',
  'leadingComments', 'trailingComments', 'innerComments',
  'tokens', 'comments',
])

// ---------------------------------------------------------------------------
// Local component inlining
//
// Pattern we want to support:
//
//   const animals = [{ id: 'lion', name: '...' }, ...]
//   const AnimalCard = ({ animal }) => (
//     <img data-strk-img-id={`animal-img-${animal.id}-7x2k`} ... />
//   )
//   ...
//   {animals.map((animal) => <AnimalCard animal={animal} />)}
//
// The map expansion alone reaches `<AnimalCard animal={animal}/>` which has
// no data-strk-img-* attrs of its own. We need to follow into AnimalCard's
// body with a substitution derived from the JSX call site's attrs.
//
// Only same-file components are inlined; cross-file components would require
// import resolution + dataflow across boundaries (a much harder problem).
// ---------------------------------------------------------------------------

// Detect an arrow / function expression / function declaration usable as a
// component. We don't try to assert "returns JSX" — if the body has no JSX,
// visiting it is a harmless no-op.
function extractFnDecl(node) {
  if (!node) return null
  if (node.type === 'ArrowFunctionExpression') return node
  if (node.type === 'FunctionExpression') return node
  if (node.type === 'FunctionDeclaration') return node
  return null
}

// Translate a function's first parameter into a "param shape" describing how
// JSX call-site attrs map onto local variables visible in the body.
//   ({ animal })          => { kind: 'destructure', keys: [{prop:'animal', local:'animal'}] }
//   ({ animal: a })       => { kind: 'destructure', keys: [{prop:'animal', local:'a'}] }
//   (props)               => { kind: 'identifier', name: 'props' }
// Unsupported forms (rest, default values, nested patterns) return null,
// which causes the component to be left out of the registry.
function paramShapeOf(param) {
  if (!param) return null
  if (param.type === 'Identifier') return { kind: 'identifier', name: param.name }
  if (param.type !== 'ObjectPattern') return null
  const keys = []
  for (const prop of param.properties) {
    if (prop.type !== 'ObjectProperty' || prop.computed) return null
    if (prop.key?.type !== 'Identifier') return null
    if (prop.value?.type !== 'Identifier') return null
    keys.push({ prop: prop.key.name, local: prop.value.name })
  }
  return { kind: 'destructure', keys }
}

// Walk the file's top-level statements and collect every local component-like
// binding. Returns Map<name, { paramShape, body }>.
function buildLocalComponentRegistry(ast) {
  const reg = new Map()
  const body = ast.program?.body || []

  function registerFromDecl(name, fn) {
    if (!name || !fn) return
    const shape = paramShapeOf(fn.params?.[0])
    if (!shape) return
    reg.set(name, { paramShape: shape, body: fn.body })
  }

  for (const stmt of body) {
    if (stmt.type === 'FunctionDeclaration') {
      registerFromDecl(stmt.id?.name, stmt)
      continue
    }
    const decl =
      stmt.type === 'ExportNamedDeclaration' && !stmt.source
        ? stmt.declaration
        : stmt.type === 'ExportDefaultDeclaration'
          ? stmt.declaration
          : stmt
    if (!decl) continue
    if (decl.type === 'FunctionDeclaration') {
      registerFromDecl(decl.id?.name, decl)
    } else if (decl.type === 'VariableDeclaration') {
      for (const d of decl.declarations) {
        if (d.id?.type !== 'Identifier') continue
        const fn = extractFnDecl(d.init)
        if (fn) registerFromDecl(d.id.name, fn)
      }
    }
  }

  return reg
}

// Given a JSX call-site like `<AnimalCard animal={animal} title="Hi"/>`,
// produce the substitution scopes the component body should be visited with.
// Returns null if no usable bindings could be derived (in which case the
// caller should fall back to normal traversal).
function buildComponentCallSubs(comp, openingElement, currentSubs) {
  const attrs = openingElement?.attributes || []
  const attrValueByName = {}
  for (const a of attrs) {
    if (a.type !== 'JSXAttribute' || a.name?.type !== 'JSXIdentifier') continue
    attrValueByName[a.name.name] = a.value
  }

  function evalAttr(valueNode) {
    if (valueNode == null) return true
    if (valueNode.type === 'StringLiteral') return valueNode.value
    if (valueNode.type === 'JSXExpressionContainer') {
      return resolveExprValue(valueNode.expression, currentSubs)
    }
    return undefined
  }

  const out = []
  if (comp.paramShape.kind === 'destructure') {
    for (const { prop, local } of comp.paramShape.keys) {
      if (!(prop in attrValueByName)) continue
      const v = evalAttr(attrValueByName[prop])
      if (v === undefined) continue
      out.push({ paramName: local, item: v })
    }
  } else {
    const propsObj = {}
    let hasAny = false
    for (const [name, valNode] of Object.entries(attrValueByName)) {
      const v = evalAttr(valNode)
      if (v === undefined) continue
      propsObj[name] = v
      hasAny = true
    }
    if (!hasAny) return null
    out.push({ paramName: comp.paramShape.name, item: propsObj })
  }
  return out.length ? out : null
}

// How many leading Title-Case / ALL-CAPS words to keep when deriving a
// fallback from a pure-literal `data-strk-img` value (no `[xxx]` placeholders).
// Two is a sweet spot: most landmark proper-noun phrases ("James Webb",
// "Crab Nebula", "Andromeda Galaxy", "Hubble Telescope") survive the cap,
// while longer chains that empirically AND-match zero on Unsplash get
// trimmed (e.g. "James Webb Space Telescope JWST" → 0 results, but
// "James Webb" → 742).
const LITERAL_FALLBACK_WORD_CAP = 2

// Derive a fallback query from a literal `data-strk-img` value that has no
// `[xxx]` placeholders. Picks the leading run of words that start with an
// uppercase letter (covers Title-Case and ALL-CAPS acronyms like "JWST"),
// capped at LITERAL_FALLBACK_WORD_CAP. Returns null when the leading run is
// empty (query starts with a lowercase word) or when the fallback would be
// identical to the original query (nothing to shorten).
function deriveLiteralFallback(query) {
  if (!query) return null
  const words = query.split(/\s+/).filter(Boolean)
  const leading = []
  for (const w of words) {
    if (!/^[A-Z]/.test(w)) break
    leading.push(w)
    if (leading.length >= LITERAL_FALLBACK_WORD_CAP) break
  }
  if (!leading.length) return null
  const fb = leading.join(' ')
  return fb === query ? null : fb
}

// ---------------------------------------------------------------------------
// JSX/TSX parser
// Returns: Array<{ imgId, query, ratio, width, kind }>
//
// Options:
//   filePath:           absolute path of `code`. Required to resolve cross-file
//                       data imports (otherwise only same-file consts are seen).
//   onImportResolved:   called with the absolute path of every imported data
//                       file we parsed; pass this to `this.addWatchFile` in
//                       vite's transform hook so edits invalidate properly.
// ---------------------------------------------------------------------------
export function extractStrkEntries(code, options = {}) {
  const ast = parseJsxOnce(code)
  if (!ast) return []
  return extractStrkEntriesFromAst(ast, options)
}

// Variant for callers that already have a parsed AST (e.g. the Vite transform
// hook, which also feeds the same AST to `inlineBuildImageSourcesFromAst`).
// Avoids reparsing the same file twice per build.
export function extractStrkEntriesFromAst(ast, options = {}) {
  const { filePath = null, onImportResolved = null } = options
  const registry = buildArrayRegistry(ast, filePath, onImportResolved)
  const componentRegistry = buildLocalComponentRegistry(ast)
  // Guard against recursive component calls during a single expansion chain
  // (e.g. <Foo/> rendering <Foo/> would otherwise visit forever).
  const inlineStack = new Set()
  const idTextMap = {}
  const entries = []

  // Collect the visible text inside a JSXElement under the given subs.
  // Handles JSXText and `{expr}` containers whose expr resolves statically.
  function collectText(jsxElement, subs) {
    const children = jsxElement.children || []
    const parts = []
    for (const c of children) {
      if (c.type === 'JSXText') {
        const t = c.value.trim()
        if (t) parts.push(t)
      } else if (c.type === 'JSXExpressionContainer') {
        const v = resolveExpr(c.expression, subs)
        if (typeof v === 'string') {
          const t = v.trim()
          if (t) parts.push(t)
        }
      }
    }
    return parts.join(' ')
  }

  const resolveQuery = raw =>
    raw ? raw.replace(/\[([^\]]+)\]/g, (_, id) => idTextMap[id] || '').trim() : ''

  // Pick a fallback query for when the full assembled query returns 0 hits.
  //
  // Unsplash's search ANDs all the words in the query, so long prose like
  //   "A symbol of freedom and power, soaring high above ... Bald Eagle"
  //   "James Webb Space Telescope JWST infrared deep space orbit"
  // matches zero photos even though "Bald Eagle" or "James Webb" alone
  // would each return hundreds.
  //
  // Two strategies, in priority order:
  //   1. Templated query (`[id1] [id2] ...`): walk placeholders from the last
  //      backward, return the first non-empty resolved chunk — typically the
  //      most specific noun phrase carried in by an `id` like animal-name.
  //   2. Pure literal query (no `[xxx]` markers): take the leading run of
  //      Title-Case / ALL-CAPS words, capped at 2 words. This catches the
  //      common pattern of "ProperNoun ProperNoun + descriptive modifiers",
  //      e.g. "James Webb Space Telescope JWST infrared..." → "James Webb".
  //      Cap 2 because longer proper-noun chains tend to AND-match zero on
  //      Unsplash too (e.g. "James Webb Space Telescope JWST" → 0 results).
  //
  // Returns null if neither strategy produces a fallback distinct from the
  // original query.
  function resolveFallbackQuery(raw, fullQuery) {
    if (!raw) return null
    const ms = [...raw.matchAll(/\[([^\]]+)\]/g)]
    for (let i = ms.length - 1; i >= 0; i--) {
      const t = (idTextMap[ms[i][1]] || '').trim()
      if (t && t !== fullQuery) return t
    }
    if (ms.length === 0) return deriveLiteralFallback(fullQuery)
    return null
  }

  // Generic walker that:
  //   - extends the array registry on each BlockStatement entry to pick up
  //     function-body locals like `const filtered = items.filter(...)`;
  //   - expands `arr.map((p) => body)` once per item (with subs);
  //   - processes JSXElement nodes (phase 1 builds idTextMap, phase 2 emits entries);
  //   - recurses into all other child nodes.
  //
  // `regMap` is the array registry visible in the current lexical scope. It
  // starts as the file-level registry and grows (immutably, copy-on-extend)
  // on each new BlockStatement so siblings don't see each other's locals.
  function visit(node, subs, phase, regMap) {
    if (!node || typeof node !== 'object' || typeof node.type !== 'string') return

    if (node.type === 'BlockStatement') {
      regMap = extendRegistryWithBlock(regMap, node)
    }

    const mapCtx = matchMapCall(node, regMap)
    if (mapCtx) {
      for (const item of mapCtx.items) {
        const itemSubs = subsFromMapItem(mapCtx.paramShape, item)
        visit(mapCtx.body, [...subs, ...itemSubs], phase, regMap)
      }
      return
    }

    if (node.type === 'JSXElement') {
      const opening = node.openingElement
      const attrs = opening?.attributes || []
      const findAttr = name =>
        attrs.find(a => a.type === 'JSXAttribute' && a.name?.name === name)

      // Local component call site? Inline the body once with call-derived
      // subs. This is what makes `<AnimalCard animal={animal}/>` reach the
      // data-strk-img-* attrs that live inside AnimalCard's own definition.
      const tagName = opening?.name
      if (tagName?.type === 'JSXIdentifier' && componentRegistry.has(tagName.name)) {
        const comp = componentRegistry.get(tagName.name)
        if (!inlineStack.has(comp.body)) {
          const callSubs = buildComponentCallSubs(comp, opening, subs)
          if (callSubs) {
            inlineStack.add(comp.body)
            visit(comp.body, [...subs, ...callSubs], phase, regMap)
            inlineStack.delete(comp.body)
          }
        }
      }

      if (phase === 1) {
        const idAttr = findAttr('id')
        if (idAttr) {
          const idVal = resolveAttrString(idAttr, subs)
          if (typeof idVal === 'string' && idVal) {
            const text = collectText(node, subs)
            if (text) idTextMap[idVal] = text
          }
        }
      } else {
        const imgId  = resolveAttrString(findAttr('data-strk-img-id'), subs)
        const imgRaw = resolveAttrString(findAttr('data-strk-img'), subs)
        if (typeof imgId === 'string' && imgId && typeof imgRaw === 'string') {
          const query = resolveQuery(imgRaw)
          entries.push({
            imgId,
            query,
            fallbackQuery: resolveFallbackQuery(imgRaw, query),
            ratio: resolveAttrString(findAttr('data-strk-img-ratio'), subs) || '16x9',
            width: resolveAttrString(findAttr('data-strk-img-width'), subs) || '800',
            kind:  'img',
          })
        }

        const bgId  = resolveAttrString(findAttr('data-strk-bg-id'), subs)
        const bgRaw = resolveAttrString(findAttr('data-strk-bg'), subs)
        if (typeof bgId === 'string' && bgId && typeof bgRaw === 'string') {
          const query = resolveQuery(bgRaw)
          entries.push({
            imgId: bgId,
            query,
            fallbackQuery: resolveFallbackQuery(bgRaw, query),
            ratio: resolveAttrString(findAttr('data-strk-bg-ratio'), subs) || '16x9',
            width: resolveAttrString(findAttr('data-strk-bg-width'), subs) || '1600',
            kind:  'bg',
          })
        }
      }
    }

    for (const key in node) {
      if (NON_TRAVERSAL_KEYS.has(key)) continue
      const v = node[key]
      if (Array.isArray(v)) {
        for (const c of v) visit(c, subs, phase, regMap)
      } else if (v && typeof v === 'object' && typeof v.type === 'string') {
        visit(v, subs, phase, regMap)
      }
    }
  }

  visit(ast.program, [], 1, registry)
  visit(ast.program, [], 2, registry)

  return entries
}

// ---------------------------------------------------------------------------
// Unsplash API
// ---------------------------------------------------------------------------
async function fetchUnsplash(query, perPage) {
  perPage = perPage || 10
  const key = process.env.UNSPLASH_ACCESS_KEY
  if (!key || key === 'your_key_here') {
    console.warn('[strk-img] UNSPLASH_ACCESS_KEY missing in .env -- skipping: ' + query)
    return []
  }

  const url = new URL('https://api.unsplash.com/search/photos')
  url.searchParams.set('query', query)
  url.searchParams.set('per_page', String(perPage))
  url.searchParams.set('orientation', 'landscape')

  let res
  try {
    res = await fetch(url.toString(), {
      headers: { Authorization: 'Client-ID ' + key },
    })
  } catch (err) {
    console.warn('[strk-img] Network error: ' + err.message)
    return []
  }

  if (!res.ok) {
    const body = await res.text().catch(() => '')
    console.warn('[strk-img] Unsplash ' + res.status + ' for "' + query + '"' + (body ? ' -- ' + body.slice(0, 120) : ''))
    return []
  }

  const json = await res.json()
  return (json.results || []).map(p => ({
    id:          p.id,
    url:         p.urls?.regular || p.urls?.full,
    thumb:       p.urls?.thumb,
    alt:         p.alt_description || p.description || query,
    credit:      p.user?.name,
    creditUrl:   p.user?.links?.html,
    unsplashUrl: p.links?.html,
    color:       p.color,
  }))
}

// ---------------------------------------------------------------------------
// Process entries
//
// Concurrency is capped so first-time builds with many fresh queries don't
// fan out 50+ simultaneous Unsplash requests and trip the per-app rate limit.
//
// Sticky picks:
//   Each entry stores a `picked` field (Unsplash photo id) that is the photo
//   the runtime should display. Once decided, we never change it unless the
//   entry's results no longer contain it (e.g. the query was edited).
//
//   This is what prevents the "edit one item's description and watch the
//   neighbours' images shuffle" cascade: image2 / image3's `picked` stays
//   pointing at the same photo even as image1's candidates change.
//
//   `globalUsed` is built once per processEntries call from the current
//   configData and grown synchronously by each worker as it commits a pick.
//   Mutations are safe under JS single-threading because the read/check and
//   the add to the Set happen with no `await` between them.
// ---------------------------------------------------------------------------
const UNSPLASH_MAX_CONCURRENCY = 5

// Pick the photo id this entry should display.
// - If prevPicked is still in results: keep it (sticky).
// - Else prefer a photo whose id isn't in globalUsed.
// - Else fall back to results[0] (visual duplicate is the lesser evil vs
//   showing the placeholder).
function decidePick(prevPicked, results, globalUsed) {
  if (!Array.isArray(results) || results.length === 0) return null
  if (prevPicked && results.some(r => r.id === prevPicked)) return prevPicked
  for (const r of results) {
    if (r.id && !globalUsed.has(r.id)) return r.id
  }
  return results[0]?.id || null
}

async function processEntry(entry, now, globalUsed) {
  const { imgId, query, fallbackQuery, ratio, width } = entry
  if (!query) return
  const ex = configData[imgId]

  // Path A: configData already matches this query. Nothing to fetch; just
  // make sure `picked` is set (backfill for entries written by older
  // versions of this plugin that didn't track it) and reserve it.
  if (ex && ex.query === query && ex.results && ex.results.length > 0) {
    if (!ex.picked) {
      const picked = decidePick(null, ex.results, globalUsed)
      if (picked) {
        ex.picked = picked
        globalUsed.add(picked)
        _dirty = true
      }
    } else {
      globalUsed.add(ex.picked)
    }
    return
  }

  const prevPicked = ex?.picked || null

  // Path B: cache hit for this query — reuse results, don't hit Unsplash.
  const h = hashQuery(query)
  const cacheHit = cacheData[h]
  if (cacheHit && !isExpiredCacheEntry(cacheHit, now)) {
    const picked = decidePick(prevPicked, cacheHit.results, globalUsed)
    if (picked) globalUsed.add(picked)
    const next = { query, ratio, width, results: cacheHit.results, picked, cached: true }
    if (!isSameJson(ex, next)) {
      configData[imgId] = next
      _dirty = true
    }
    return
  } else if (cacheHit && isExpiredCacheEntry(cacheHit, now)) {
    delete cacheData[h]
    _dirty = true
  }

  // Path C: fetch fresh from Unsplash.
  console.log('[strk-img] Searching: "' + query + '"')
  let results = await fetchUnsplash(query)
  let usedFallback = null

  // Fallback: if the full assembled query returns 0 hits (typical when the
  // user concatenates a long description and Unsplash AND-matches every word),
  // retry once with the last [xxx] placeholder's content alone — usually the
  // most specific noun phrase (e.g. "Bald Eagle"). Cache the fallback's
  // results under its OWN hash so future entries with the same fallback
  // skip the network entirely.
  if (results.length === 0 && fallbackQuery && fallbackQuery !== query) {
    const fh = hashQuery(fallbackQuery)
    const fbCache = cacheData[fh]
    if (fbCache && !isExpiredCacheEntry(fbCache, now)) {
      results = fbCache.results
      usedFallback = fallbackQuery
    } else {
      console.log('[strk-img]   0 hits — retrying with fallback: "' + fallbackQuery + '"')
      const fbResults = await fetchUnsplash(fallbackQuery)
      if (fbResults.length > 0) {
        const cacheNext = { results: fbResults, _ts: now }
        if (!isSameJson(cacheData[fh], cacheNext)) {
          cacheData[fh] = cacheNext
          _dirty = true
        }
        results = fbResults
        usedFallback = fallbackQuery
      }
    }
  }

  if (results.length > 0) {
    // Only cache against the ORIGINAL query's hash when those results came
    // from the original itself — caching fallback hits there would lie to
    // future entries that share the same long query.
    if (!usedFallback) {
      const cacheNext = { results, _ts: now }
      if (!isSameJson(cacheData[h], cacheNext)) {
        cacheData[h] = cacheNext
        _dirty = true
      }
    }
    const picked = decidePick(prevPicked, results, globalUsed)
    if (picked) globalUsed.add(picked)
    const next = { query, ratio, width, results, picked }
    if (usedFallback) next.fallback = usedFallback
    if (!isSameJson(ex, next)) {
      configData[imgId] = next
      _dirty = true
    }
    console.log(
      '[strk-img] Got ' + results.length + ' results' +
      (usedFallback ? ' (via fallback "' + usedFallback + '")' : '') +
      ' for "' + query + '"'
    )
  } else {
    const next = { query, ratio, width, results: [], picked: null }
    if (!isSameJson(ex, next)) {
      configData[imgId] = next
      _dirty = true
    }
    if (fallbackQuery && fallbackQuery !== query) {
      console.warn('[strk-img] No hits even via fallback "' + fallbackQuery + '" — skipping ' + imgId)
    }
  }
}

async function processEntries(entries) {
  if (!entries.length) return
  const now = Date.now()

  // Pre-seed globalUsed with photos that are currently committed to other
  // slots in the on-disk config. Workers grow this Set as they decide picks.
  const globalUsed = new Set()
  for (const e of Object.values(configData)) {
    if (e?.picked) globalUsed.add(e.picked)
  }

  const queue = entries.slice()
  const workerCount = Math.min(UNSPLASH_MAX_CONCURRENCY, queue.length)

  async function worker() {
    while (queue.length) {
      const item = queue.shift()
      try {
        await processEntry(item, now, globalUsed)
      } catch (err) {
        console.warn('[strk-img] processEntry failed for "' + item.query + '": ' + err.message)
      }
    }
  }

  const workers = []
  for (let i = 0; i < workerCount; i++) workers.push(worker())
  await Promise.all(workers)
}

// ---------------------------------------------------------------------------
// Flush to disk
// ---------------------------------------------------------------------------
function flushToDisk() {
  if (!_dirty) return
  pruneCacheData()
  const configText = writeJsonAtomic(configPath, configData)
  writeJsonAtomic(cachePath, cacheData)
  _lastWrittenConfigHash = md5Hex(configText)
  _dirty = false
  console.log('[strk-img] Config written')
}

function scheduleFlush(server) {
  if (pendingFlush) clearTimeout(pendingFlush)
  pendingFlush = setTimeout(async function() {
    pendingFlush = null
    flushToDisk()
    if (server) {
      const mod = server.moduleGraph.getModuleById(configPath)
      if (mod) server.moduleGraph.invalidateModule(mod)
      server.ws.send({ type: 'full-reload' })
    }
  }, 400)
}

function inlineBuildImageSources(code) {
  const ast = parseJsxOnce(code)
  if (!ast) return code
  return inlineBuildImageSourcesFromAst(code, ast)
}

// Variant that accepts a pre-parsed AST. Shared with extractStrkEntries via
// the Vite transform hook so each `.jsx`/`.tsx` file is only parsed once
// per build, not twice.
function inlineBuildImageSourcesFromAst(code, ast) {
  const patches = []
  const pushPatch = (start, end, text) => {
    if (typeof start !== 'number' || typeof end !== 'number') return
    if (start > end) return
    patches.push({ start, end, text })
  }

  traverse(ast, {
    JSXOpeningElement(np) {
      const attrs = np.node.attributes || []
      const getAttrNode = name =>
        attrs.find(a => a.type === 'JSXAttribute' && a.name?.name === name)
      const getAttrVal = name => {
        const a = getAttrNode(name)
        if (!a) return null
        if (a.value?.type === 'StringLiteral') return a.value.value
        if (a.value?.expression?.type === 'StringLiteral') return a.value.expression.value
        return null
      }

      const imgId = getAttrVal('data-strk-img-id')
      if (imgId) {
        const srcAttr = getAttrNode('src')
        const url = configData[imgId]?.results?.[0]?.url
        if (srcAttr?.value?.type === 'StringLiteral' && url) {
          pushPatch(srcAttr.value.start, srcAttr.value.end, JSON.stringify(url))
        }
      }

      const bgId = getAttrVal('data-strk-bg-id')
      if (bgId) {
        const bgEntry = configData[bgId]
        const url = buildSharpUrl(bgEntry?.results?.[0]?.url, bgEntry?.width, 2)
        if (!url) return
        const styleAttr = getAttrNode('style')
        const urlExpr = JSON.stringify('url(' + url + ')')
        const mergedStyleExprFromRaw = raw =>
          `{ ...(${raw}), backgroundImage: ${urlExpr}, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 1 }`
        if (styleAttr?.value?.type === 'JSXExpressionContainer') {
          const raw = code.slice(styleAttr.value.expression.start, styleAttr.value.expression.end)
          const mergedAttr = `style={${mergedStyleExprFromRaw(raw)}}`
          pushPatch(styleAttr.start, styleAttr.end, mergedAttr)
        } else if (styleAttr) {
          const replacedAttr = `style={{ backgroundImage: ${urlExpr}, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 1 }}`
          pushPatch(styleAttr.start, styleAttr.end, replacedAttr)
        } else {
          const styleExpr = `{{ backgroundImage: ${urlExpr}, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 1 }}`
          const insertPos = np.node.selfClosing ? np.node.end - 2 : np.node.end - 1
          pushPatch(insertPos, insertPos, ` style=${styleExpr}`)
        }
      }
    },
  })

  if (!patches.length) return code
  patches.sort((a, b) => b.start - a.start)
  let out = code
  for (const p of patches) {
    out = out.slice(0, p.start) + p.text + out.slice(p.end)
  }
  return out
}

// ---------------------------------------------------------------------------
// Plugin export
// ---------------------------------------------------------------------------
export default function strkImgPlugin() {
  let server = null

  return {
    name: 'vite-plugin-strk-img',
    enforce: 'pre',

    // config() hook runs first and gives us the resolved Vite root.
    config(cfg) {
      viteRoot = cfg.root ? path.resolve(cfg.root) : process.cwd()
      loadEnvFile(viteRoot)
    },

    configResolved(rc) {
      _isBuild = rc.command === 'build'
      // Resolved root is authoritative; `config(cfg)` may have an unresolved
      // value when other plugins rewrite it.
      if (rc.root) viteRoot = path.resolve(rc.root)
    },

    buildStart() {
      configPath = path.resolve(viteRoot || process.cwd(), 'src', CONFIG_FILENAME)
      cachePath  = path.resolve(viteRoot || process.cwd(), CACHE_FILENAME)
      configData = readJson(configPath)
      cacheData  = normalizeCacheData(readJson(cachePath))
      _dirty = false
      try {
        _lastWrittenConfigHash = md5Hex(fs.readFileSync(configPath, 'utf-8'))
      } catch {
        _lastWrittenConfigHash = null
      }

      const key = process.env.UNSPLASH_ACCESS_KEY
      const keyStatus = (key && key !== 'your_key_here')
        ? ('set (' + key.slice(0, 8) + '...)')
        : 'NOT SET -- add UNSPLASH_ACCESS_KEY to .env'
      console.log('[strk-img] Ready. UNSPLASH_ACCESS_KEY: ' + keyStatus)
    },

    async transform(code, id) {
      if (!/\.(jsx|tsx)$/.test(id))     return null
      if (id.includes(CONFIG_FILENAME)) return null
      if (id.includes(CACHE_FILENAME))  return null

      // Parse the file once and share the AST between extraction and the
      // optional build-time inlining pass — saves a full reparse per file.
      const ast = parseJsxOnce(code)
      if (!ast) return null

      const entries = extractStrkEntriesFromAst(ast, {
        filePath: id,
        onImportResolved: (p) => {
          try { this.addWatchFile(p) } catch {}
        },
      })
      if (!entries.length) return null

      await processEntries(entries)
      if (_dirty) scheduleFlush(server)
      if (_isBuild) {
        const transformed = inlineBuildImageSourcesFromAst(code, ast)
        if (transformed !== code) return { code: transformed, map: null }
      }
      return null
    },

    async buildEnd() {
      if (pendingFlush) { clearTimeout(pendingFlush); pendingFlush = null }
      flushToDisk()
    },

    closeBundle() {
      flushToDisk()
    },

    configureServer(s) {
      server = s
      s.watcher.add(configPath)
    },

    // Suppress the HMR full-reload that fires when we ourselves wrote
    // strk-img-config.json. Compare the on-disk content hash to the hash we
    // saved at write-time — robust against any disk/IO timing.
    handleHotUpdate({ file }) {
      if (file !== configPath || !_lastWrittenConfigHash) return
      try {
        const cur = md5Hex(fs.readFileSync(file, 'utf-8'))
        if (cur === _lastWrittenConfigHash) return []
      } catch {}
    },
  }
}
