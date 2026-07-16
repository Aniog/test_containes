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
let _entriesByScanFile = new Map()
let _buildEntriesBySourceFile = new Map()

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
      '[strk-img]   Copy .env.example to .env and add your STRIKINGLY_IMAGES_API_KEY'
    )
  }
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
const hashQuery = q => crypto.createHash('md5').update(q).digest('hex').slice(0, 8)

// Cache key for image-search results. Background slots (`data-strk-bg-id`)
// send `without_text: true` to the API and can return a different list than
// `<img>` slots for the same textual query — keep separate cache buckets.
// `ar_range` is folded in so two slots with the same query but different
// `data-strk-*-ratio` values do not incorrectly share cached results.
function hashSearchCacheKey(query, kind, arRange) {
  const ar = arRange || '1.0,1.0'
  if (kind === 'bg') {
    return crypto.createHash('md5').update(query + '\0strk-img:kind=bg\0' + ar).digest('hex').slice(0, 8)
  }
  return crypto.createHash('md5').update(query + '\0strk-img:kind=img\0' + ar).digest('hex').slice(0, 8)
}

/**
 * Parse `data-strk-*-ratio` into a numeric width/height (e.g. "16x9" → 16/9).
 * Also accepts a plain positive number string like "1.5".
 * @param {string|number|undefined|null} ratio
 * @returns {number|null}
 */
function parseRatioToAspectNumber(ratio) {
  if (ratio == null) return null
  if (typeof ratio === 'number') {
    return Number.isFinite(ratio) && ratio > 0 ? ratio : null
  }
  const s = String(ratio).trim()
  if (!s) return null
  const m = s.match(/^(\d+(?:\.\d+)?)\s*[xX]\s*(\d+(?:\.\d+)?)$/)
  if (m) {
    const w = parseFloat(m[1])
    const h = parseFloat(m[2])
    if (w > 0 && h > 0) return w / h
    return null
  }
  const n = parseFloat(s)
  if (Number.isFinite(n) && n > 0) return n
  return null
}

/** @param {number} n */
function formatArRangeComponent(n) {
  const t = Math.round(n * 100) / 100
  if (Number.isInteger(t)) return String(t)
  return t.toFixed(2).replace(/\.?0+$/, '')
}

/**
 * Strikingly `ar_range`: "min,max" with ±20% around the slot aspect ratio.
 * Missing / unparseable ratio → "1.0,1.0"
 * @param {string|number|undefined|null} ratio
 */
function arRangeFromRatio(ratio) {
  const base = parseRatioToAspectNumber(ratio)
  if (base == null) return '1.0,1.0'
  const low = base * 0.8
  const high = base * 1.2
  return `${formatArRangeComponent(low)},${formatArRangeComponent(high)}`
}

const isSameJson = (a, b) => JSON.stringify(a) === JSON.stringify(b)

function readJson(p) {
  try { return JSON.parse(fs.readFileSync(p, 'utf-8')) }
  catch { return {} }
}

// Atomically replace `p`'s contents: write to a sibling .tmp file, then rename.
// This avoids a half-written JSON file if the process is killed mid-write,
// which would make `readJson` silently return {} and discard all cached
// image-search results on the next start.
function writeJsonAtomic(p, data) {
  const text = JSON.stringify(data, null, 2)
  try {
    if (fs.readFileSync(p, 'utf-8') === text) return text
  } catch {}
  const tmp = p + '.tmp'
  fs.writeFileSync(tmp, text, 'utf-8')
  fs.renameSync(tmp, p)
  return text
}

const md5Hex = s => crypto.createHash('md5').update(s).digest('hex')

const EMPTY_SVG_PLACEHOLDER_RE =
  /data:image\/svg\+xml(?:;[^,]*)?,(?:%3c|<)svg\b(?:(?!%3e|>).){0,1000}(?:(?:\/|%2f)(?:%3e|>)|(?:%3e|>)\s*(?:%3c|<)\/svg(?:%3e|>))/is

function isImagePlaceholderUrl(value) {
  return typeof value === 'string' && EMPTY_SVG_PLACEHOLDER_RE.test(value)
}

function buildSourceFileKey(filePath) {
  if (!filePath) return ''
  return path.resolve(filePath)
}

function rememberBuildEntriesBySourceFile(entries) {
  for (const entry of entries || []) {
    const key = buildSourceFileKey(entry?.sourceFile)
    if (!key) continue
    const rows = _buildEntriesBySourceFile.get(key) || []
    rows.push({ ...entry })
    _buildEntriesBySourceFile.set(key, rows)
  }
}

function buildEntriesForSourceFile(filePath) {
  return (_buildEntriesBySourceFile.get(buildSourceFileKey(filePath)) || []).map(entry => ({ ...entry }))
}

function mergeBuildEntries(...groups) {
  const out = []
  const seen = new Set()
  for (const entries of groups) {
    for (const entry of entries || []) {
      const key = [
        entry?.kind || '', entry?.imgId || '', entry?.sourceFile || '',
        entry?.sourceIndex ?? '', JSON.stringify(entry?.sourceContext || []),
      ].join('\0')
      if (seen.has(key)) continue
      seen.add(key)
      out.push(entry)
    }
  }
  return out
}

function hasStrkMarkers(code) {
  return code.includes('data-strk-img') || code.includes('data-strk-bg')
}

function mayReachStrkMarkersViaLocalComponent(code) {
  return /from\s+['"](?:\.{1,2}\/|@\/)/.test(code) && /<[A-Z][A-Za-z0-9_.]*/.test(code)
}

const _EXTRACT_CACHE_MAX = 200
const _extractCache = new Map()
const _parseFailureWarned = new Set()

function _mtimeMs(filePath) {
  try { return fs.statSync(filePath).mtimeMs }
  catch { return -1 }
}

function _cloneEntries(entries) {
  return entries.map(e => ({ ...e }))
}

function _extractCacheTouch(key, val) {
  if (_extractCache.has(key)) _extractCache.delete(key)
  _extractCache.set(key, val)
  while (_extractCache.size > _EXTRACT_CACHE_MAX) {
    const oldest = _extractCache.keys().next().value
    _extractCache.delete(oldest)
  }
}

function _getExtractCacheHit(filePath, codeHash) {
  if (!filePath) return null
  const cached = _extractCache.get(filePath)
  if (!cached || cached.codeHash !== codeHash) return null
  for (const dep of cached.imports || []) {
    if (_mtimeMs(dep.path) !== dep.mtime) return null
  }
  _extractCacheTouch(filePath, cached)
  return _cloneEntries(cached.entries)
}

function _setExtractCache(filePath, codeHash, imports, entries) {
  if (!filePath) return
  const seen = new Set()
  const importSigs = []
  for (const p of imports || []) {
    if (!p || seen.has(p)) continue
    seen.add(p)
    importSigs.push({ path: p, mtime: _mtimeMs(p) })
  }
  _extractCacheTouch(filePath, {
    codeHash,
    imports: importSigs,
    entries: _cloneEntries(entries),
  })
}

function warnParseFailure(filePath) {
  const label = filePath || '<inline code>'
  if (_parseFailureWarned.has(label)) return
  _parseFailureWarned.add(label)
  console.warn(
    '[strk-img] Could not parse JSX containing data-strk-* markers: ' + label + '\n' +
    '[strk-img]   Image config for this file was not refreshed. Fix the JSX syntax and save again.'
  )
}

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

function selectedConfigImageUrl(entry) {
  const results = entry?.results
  if (!Array.isArray(results) || results.length === 0) return null
  if (entry?.picked) {
    const picked = results.find(r => String(r.id) === String(entry.picked))
    if (picked?.url) return picked.url
  }
  return results[0]?.url || null
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

function bindingSubs(bindings) {
  if (!bindings) return []
  return Object.entries(bindings)
    .filter(([, item]) => item !== undefined)
    .map(([paramName, item]) => ({ paramName, item }))
}

function literalValueWithBindings(node, bindings) {
  if (!node) return undefined
  if (
    node.type === 'TSAsExpression' ||
    node.type === 'TSSatisfiesExpression' ||
    node.type === 'TSNonNullExpression' ||
    node.type === 'TypeCastExpression' ||
    node.type === 'ParenthesizedExpression'
  ) {
    return literalValueWithBindings(node.expression, bindings)
  }
  if (node.type === 'Identifier' && bindings && bindings[node.name] !== undefined) {
    return bindings[node.name]
  }
  const resolved = resolveExprValue(node, bindingSubs(bindings))
  if (resolved !== undefined) return resolved
  if (node.type === 'MemberExpression' || node.type === 'OptionalMemberExpression') {
    const obj = literalValueWithBindings(node.object, bindings)
    if (obj == null || typeof obj !== 'object') return undefined
    let key
    if (node.computed) {
      key = literalValueWithBindings(node.property, bindings)
    } else if (node.property?.type === 'Identifier') {
      key = node.property.name
    }
    return key === undefined ? undefined : obj[key]
  }
  if (node.type === 'TemplateLiteral') {
    let out = ''
    for (let i = 0; i < node.quasis.length; i++) {
      out += node.quasis[i].value.cooked
      if (i < node.expressions.length) {
        const value = literalValueWithBindings(node.expressions[i], bindings)
        if (value === undefined || typeof value === 'object') return undefined
        out += value == null ? '' : String(value)
      }
    }
    return out
  }
  if (node.type === 'BinaryExpression' && node.operator === '+') {
    const left = literalValueWithBindings(node.left, bindings)
    const right = literalValueWithBindings(node.right, bindings)
    return left === undefined || right === undefined ? undefined : left + right
  }
  if (node.type === 'ArrayExpression') {
    const out = []
    for (const el of node.elements) {
      if (!el) return undefined
      if (el.type === 'SpreadElement') {
        const spread = literalValueWithBindings(el.argument, bindings)
        if (!Array.isArray(spread)) return undefined
        out.push(...spread)
        continue
      }
      const v = literalValueWithBindings(el, bindings)
      if (v === undefined) return undefined
      out.push(v)
    }
    return out
  }
  if (node.type === 'ObjectExpression') {
    const out = {}
    for (const prop of node.properties) {
      if (prop.type === 'SpreadElement') {
        const spread = literalValueWithBindings(prop.argument, bindings)
        if (spread && typeof spread === 'object' && !Array.isArray(spread)) {
          Object.assign(out, spread)
        }
        continue
      }
      if (prop.type !== 'ObjectProperty') continue
      let key
      if (prop.computed) key = literalValueWithBindings(prop.key, bindings)
      else if (prop.key.type === 'Identifier') key = prop.key.name
      else if (prop.key.type === 'StringLiteral') key = prop.key.value
      if (typeof key !== 'string' && typeof key !== 'number') continue
      const v = literalValueWithBindings(prop.value, bindings)
      if (v === undefined) continue
      out[key] = v
    }
    return out
  }
  return literalValue(node)
}

function parseArrayLiteralWithBindings(arrayNode, bindings) {
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
      const v = literalValueWithBindings(prop.value, bindings)
      if (v === undefined) continue
      obj[key] = v
    }
    items.push(obj)
  }
  return items.length ? items : null
}

function functionMarker(fn, closureSubs = []) {
  if (functionMarkerValue(fn)) return fn
  return fn ? { __strkFunctionNode: fn, __strkFunctionSubs: closureSubs } : undefined
}

function functionMarkerValue(value) {
  return value && typeof value === 'object' && !Array.isArray(value) && value.__strkFunctionNode
    ? value
    : null
}

function functionMarkerNode(value) {
  return functionMarkerValue(value)?.__strkFunctionNode || null
}

function bindParamNodes(params, argNodes, outerSubs) {
  const out = []
  for (let i = 0; i < (params || []).length; i++) {
    const param = params[i]
    const shape = paramShapeOf(param)
    if (!shape) continue
    let value = resolveExprValue(argNodes?.[i], outerSubs)
    if (
      value === undefined &&
      param?.type === 'AssignmentPattern' &&
      param.right
    ) {
      value = resolveExprValue(param.right, outerSubs)
    }
    bindParamShape(shape, value, out)
  }
  return out
}

function bindDeclarationValue(idNode, value, out) {
  const shape = paramShapeOf(idNode)
  if (!shape) return
  bindParamShape(shape, value, out)
}

const _staticFunctionCallStack = []
function evaluateStaticFunctionCall(fn, argNodes, outerSubs) {
  const marker = functionMarkerValue(fn)
  const closureSubs = marker?.__strkFunctionSubs || []
  fn = marker?.__strkFunctionNode || fn
  if (!fn || _staticFunctionCallStack.length > 8 || _staticFunctionCallStack.includes(fn)) {
    return undefined
  }
  _staticFunctionCallStack.push(fn)
  try {
    let localSubs = [...closureSubs, ...outerSubs, ...bindParamNodes(fn.params, argNodes, outerSubs)]
    if (fn.body?.type !== 'BlockStatement') {
      return resolveExprValue(fn.body, localSubs)
    }
    for (const stmt of fn.body.body || []) {
      if (stmt.type === 'VariableDeclaration') {
        const additions = []
        for (const d of stmt.declarations || []) {
          if (!d?.id || !d.init) continue
          const value = resolveExprValue(d.init, localSubs)
          if (value !== undefined) bindDeclarationValue(d.id, value, additions)
        }
        if (additions.length) localSubs = [...localSubs, ...additions]
        continue
      }
      if (stmt.type === 'FunctionDeclaration' && stmt.id?.name) {
        localSubs = [...localSubs, { paramName: stmt.id.name, item: functionMarker(stmt) }]
        continue
      }
      if (stmt.type === 'ReturnStatement') {
        return resolveExprValue(stmt.argument, localSubs)
      }
      if (stmt.type === 'SwitchStatement') {
        const discriminant = resolveExprValue(stmt.discriminant, localSubs)
        const cases = stmt.cases || []
        let startIndex = -1
        let defaultIndex = -1
        for (let caseIndex = 0; caseIndex < cases.length; caseIndex++) {
          const c = cases[caseIndex]
          if (!c.test) {
            defaultIndex = caseIndex
            continue
          }
          if (startIndex === -1 && Object.is(resolveExprValue(c.test, localSubs), discriminant)) {
            startIndex = caseIndex
          }
        }
        if (startIndex === -1) startIndex = defaultIndex

        // JavaScript switch cases fall through until a return/break. Generated
        // code commonly groups an empty named case with default, e.g.
        // `case 'featured': default: return items`, so stopping immediately
        // after the matched case would incorrectly lose the shared return.
        let switchDone = false
        for (let caseIndex = startIndex; caseIndex >= 0 && caseIndex < cases.length; caseIndex++) {
          for (const s of cases[caseIndex].consequent || []) {
            if (s.type === 'ReturnStatement') return resolveExprValue(s.argument, localSubs)
            if (s.type === 'BreakStatement') {
              switchDone = true
              break
            }
          }
          if (switchDone) break
        }
      }
    }
    return undefined
  } finally {
    _staticFunctionCallStack.pop()
  }
}

// Resolve an import specifier to an absolute file path for static data files.
// Supports:
//   ./foo, ../bar  — relative to `currentFile`
//   @/foo         — Vite-style alias to `<projectRoot>/src/foo` (matches the
//                   common `vite.config.js` pattern `"@": …/src"`).
// Returns null for bare specifiers (e.g. `react`) or unresolvable paths.
const _IMPORT_EXT_CANDIDATES = [
  '', '.js', '.jsx', '.ts', '.tsx', '.mjs', '.cjs',
  '.json',
  '/index.js', '/index.jsx', '/index.ts', '/index.tsx',
]
function resolveImportPath(currentFile, spec) {
  if (!spec) return null
  const root = viteRoot && viteRoot.length ? viteRoot : process.cwd()

  if (spec.startsWith('@/')) {
    const base = path.resolve(root, 'src', spec.slice(2))
    for (const ext of _IMPORT_EXT_CANDIDATES) {
      const p = base + ext
      try {
        const st = fs.statSync(p)
        if (st.isFile()) return p
      } catch {}
    }
    return null
  }

  if (!currentFile || (!spec.startsWith('./') && !spec.startsWith('../'))) return null
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
  const candidates = []
  for (const stmt of body) {
    const decl =
      stmt.type === 'ExportNamedDeclaration' && !stmt.source
        ? stmt.declaration
        : stmt
    if (!decl || decl.type !== 'VariableDeclaration') continue
    for (const d of decl.declarations) {
      if (!d.id || d.id.type !== 'Identifier') continue
      if (d.init?.type === 'ArrayExpression') candidates.push(d)
    }
  }

  let grew
  do {
    grew = false
    for (const d of candidates) {
      if (local[d.id.name]) continue
      const items = parseArrayLiteralWithBindings(d.init, local)
      if (items) {
        local[d.id.name] = items
        grew = true
      }
    }
  } while (grew)

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

// Collect statically readable top-level values, not just arrays. Generated
// pages often keep image data in an object (`content.gallery`, records used
// through `Object.values(...)`) and assemble ids from prefix constants.
function collectLocalStaticValues(ast, seed = {}) {
  const local = { ...seed }
  const candidates = []
  for (const stmt of ast.program?.body || []) {
    const decl =
      stmt.type === 'ExportNamedDeclaration' && !stmt.source
        ? stmt.declaration
        : stmt
    if (!decl || decl.type !== 'VariableDeclaration') continue
    for (const d of decl.declarations || []) {
      if (d.id?.type === 'Identifier' && d.init) candidates.push(d)
    }
  }

  let grew
  do {
    grew = false
    for (const d of candidates) {
      if (Object.prototype.hasOwnProperty.call(local, d.id.name)) continue
      const value = literalValueWithBindings(d.init, local)
      if (value !== undefined) {
        local[d.id.name] = value
        grew = true
      }
    }
  } while (grew)
  return local
}

const _localStaticValuesByAst = new WeakMap()
function getLocalStaticValues(ast) {
  let values = _localStaticValuesByAst.get(ast)
  if (!values) {
    values = collectLocalStaticValues(ast)
    _localStaticValuesByAst.set(ast, values)
  }
  return values
}

function findNamedExportStaticValue(ast, exportName) {
  if (!ast) return undefined
  const local = getLocalStaticValues(ast)
  for (const stmt of ast.program?.body || []) {
    if (stmt.type !== 'ExportNamedDeclaration' || stmt.source) continue
    if (stmt.declaration?.type === 'VariableDeclaration') {
      for (const d of stmt.declaration.declarations || []) {
        if (d.id?.name === exportName) return local[exportName]
      }
    }
    for (const spec of stmt.specifiers || []) {
      if (spec.exported?.name === exportName && spec.local?.name) {
        return local[spec.local.name]
      }
    }
  }
  return undefined
}

function findDefaultExportStaticValue(ast) {
  if (!ast) return undefined
  const local = getLocalStaticValues(ast)
  for (const stmt of ast.program?.body || []) {
    if (stmt.type !== 'ExportDefaultDeclaration') continue
    if (stmt.declaration.type === 'Identifier') return local[stmt.declaration.name]
    return literalValueWithBindings(stmt.declaration, local)
  }
  return undefined
}

function buildStaticValueRegistry(ast, currentFile, onImportResolved) {
  const imported = {}
  for (const stmt of ast.program?.body || []) {
    if (stmt.type !== 'ImportDeclaration') continue
    const resolved = resolveImportPath(currentFile, stmt.source.value)
    if (!resolved) continue
    if (typeof onImportResolved === 'function') onImportResolved(resolved)
    if (resolved.endsWith('.json')) {
      let jsonValue
      try { jsonValue = JSON.parse(fs.readFileSync(resolved, 'utf-8')) } catch { continue }
      for (const spec of stmt.specifiers || []) {
        if (spec.type === 'ImportDefaultSpecifier' && spec.local?.name) {
          imported[spec.local.name] = jsonValue
        }
      }
      continue
    }
    const importedAst = parseFileCached(resolved)
    if (!importedAst) continue
    for (const spec of stmt.specifiers || []) {
      const localName = spec.local?.name
      if (!localName) continue
      let value
      if (spec.type === 'ImportSpecifier') {
        value = findNamedExportStaticValue(importedAst, spec.imported?.name || localName)
      } else if (spec.type === 'ImportDefaultSpecifier') {
        value = findDefaultExportStaticValue(importedAst)
      }
      if (value !== undefined) imported[localName] = value
    }
  }
  return new Map(Object.entries(collectLocalStaticValues(ast, imported)))
}

// Build a registry of identifier -> primitive items[], visible at the top
// of `ast`. Includes:
//   - local top-level const arrays (incl. `export const NAME = [...]`)
//   - imports of named/default array exports from resolvable paths (`./`,
//     `../`, and Vite-style `@/…` → `<root>/src/…` when `viteRoot` is set)
//   - top-level derived arrays (`const featured = animals.slice(0, 6)`)
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

  // Top-level `const featured = animals.slice(0, 6)` — register derived arrays
  // once their dependencies (imports / prior consts) are in `reg`. Repeat
  // until a fixed point so simple chains resolve in order.
  let grew
  do {
    grew = false
    for (const stmt of body) {
      const decl =
        stmt.type === 'ExportNamedDeclaration' && !stmt.source
          ? stmt.declaration
          : stmt
      if (!decl || decl.type !== 'VariableDeclaration') continue
      for (const d of decl.declarations) {
        if (!d.id || d.id.type !== 'Identifier' || !d.init) continue
        const name = d.id.name
        if (reg.has(name)) continue
        const items = resolveItemsAlias(d.init, reg, null)
        if (items && Array.isArray(items)) {
          reg.set(name, items)
          grew = true
        }
      }
    }
  } while (grew)

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
  if (
    node.type === 'TSAsExpression' ||
    node.type === 'TSSatisfiesExpression' ||
    node.type === 'TSNonNullExpression' ||
    node.type === 'TypeCastExpression' ||
    node.type === 'ParenthesizedExpression'
  ) {
    return resolveExprValue(node.expression, subs)
  }
  if (node.type === 'StringLiteral') return node.value
  if (node.type === 'NumericLiteral') return node.value
  if (node.type === 'BooleanLiteral') return node.value
  if (node.type === 'NullLiteral') return null
  if (node.type === 'RegExpLiteral') return new RegExp(node.pattern, node.flags || '')
  if (
    node.type === 'ArrowFunctionExpression' ||
    node.type === 'FunctionExpression' ||
    node.type === 'FunctionDeclaration'
  ) {
    return functionMarker(node)
  }
  if (node.type === 'Identifier') {
    for (let i = subs.length - 1; i >= 0; i--) {
      if (subs[i].paramName === node.name) return subs[i].item
    }
    return undefined
  }
  if (node.type === 'UnaryExpression') {
    const value = resolveExprValue(node.argument, subs)
    if (value === undefined) return undefined
    if (node.operator === '!') return !value
    if (node.operator === '+') return +value
    if (node.operator === '-') return -value
    return undefined
  }
  if (node.type === 'MemberExpression' || node.type === 'OptionalMemberExpression') {
    if (
      !node.computed &&
      node.property?.type === 'Identifier' &&
      (
        node.object?.type === 'MemberExpression' ||
        node.object?.type === 'OptionalMemberExpression'
      ) &&
      node.object.computed
    ) {
      const base = resolveExprValue(node.object.object, subs)
      const indexValue = resolveExprValue(node.object.property, subs)
      const key = node.property.name
      if (Array.isArray(base) && Array.isArray(indexValue)) {
        const values = []
        for (const index of indexValue) {
          const value = Number.isInteger(index) ? base[index]?.[key] : undefined
          if (value !== undefined) values.push(value)
        }
        if (values.length) return values
      }
    }
    let key
    if (node.computed) {
      key = resolveExprValue(node.property, subs)
      if (key === undefined || key === null) return undefined
    } else if (node.property?.type === 'Identifier') {
      key = node.property.name
    } else {
      return undefined
    }
    const obj = resolveExprValue(node.object, subs)
    if (obj == null) return undefined
    if (typeof obj !== 'object') return undefined
    return obj[key]
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
  if (node.type === 'ConditionalExpression') {
    const test = resolveExprValue(node.test, subs)
    if (test !== undefined) {
      return resolveExprValue(test ? node.consequent : node.alternate, subs)
    }
    const a = resolveExprValue(node.consequent, subs)
    const b = resolveExprValue(node.alternate, subs)
    return Object.is(a, b) ? a : undefined
  }
  if (node.type === 'LogicalExpression') {
    const a = resolveExprValue(node.left, subs)
    if (a === undefined) {
      if (node.operator === '??' || node.operator === '||') {
        return resolveExprValue(node.right, subs)
      }
      return undefined
    }
    if (node.operator === '??') {
      return a == null ? resolveExprValue(node.right, subs) : a
    }
    if (node.operator === '||') {
      return a ? a : resolveExprValue(node.right, subs)
    }
    if (node.operator === '&&') {
      return a ? resolveExprValue(node.right, subs) : a
    }
  }
  if (node.type === 'BinaryExpression') {
    const a = resolveExprValue(node.left, subs)
    const b = resolveExprValue(node.right, subs)
    if (a === undefined || b === undefined) return undefined
    if (node.operator === '+') return a + b
    if (node.operator === '-') return a - b
    if (node.operator === '*') return a * b
    if (node.operator === '/') return a / b
    if (node.operator === '%') return a % b
    if (node.operator === '===') return a === b
    if (node.operator === '!==') return a !== b
    if (node.operator === '==') return a == b
    if (node.operator === '!=') return a != b
    if (node.operator === '<') return a < b
    if (node.operator === '<=') return a <= b
    if (node.operator === '>') return a > b
    if (node.operator === '>=') return a >= b
  }
  if (node.type === 'ArrayExpression') {
    const out = []
    for (const el of node.elements) {
      if (!el) return undefined
      if (el.type === 'SpreadElement') {
        const spread = resolveExprValue(el.argument, subs)
        if (!Array.isArray(spread)) return undefined
        out.push(...spread)
        continue
      }
      const v = resolveExprValue(el, subs)
      if (v === undefined) return undefined
      out.push(v)
    }
    return out
  }
  if (node.type === 'ObjectExpression') {
    const out = {}
    for (const prop of node.properties) {
      if (prop.type === 'SpreadElement') {
        const spread = resolveExprValue(prop.argument, subs)
        if (spread && typeof spread === 'object' && !Array.isArray(spread)) {
          Object.assign(out, spread)
        }
        continue
      }
      if (prop.type !== 'ObjectProperty') continue
      let key
      if (prop.computed) key = resolveExprValue(prop.key, subs)
      else if (prop.key.type === 'Identifier') key = prop.key.name
      else if (prop.key.type === 'StringLiteral') key = prop.key.value
      if (typeof key !== 'string' && typeof key !== 'number') continue
      const v = resolveExprValue(prop.value, subs)
      if (v === undefined) continue
      out[key] = v
    }
    return out
  }
  if (
    node.type === 'NewExpression' &&
    node.callee?.type === 'Identifier' &&
    node.callee.name === 'Array'
  ) {
    const arg = resolveExprValue(node.arguments?.[0], subs)
    if (node.arguments.length === 1 && Number.isInteger(arg) && arg >= 0 && arg <= 1000) {
      return Array.from({ length: arg })
    }
    return undefined
  }
  if (node.type === 'CallExpression' || node.type === 'OptionalCallExpression') {
    const calledFn = functionMarkerValue(resolveExprValue(node.callee, subs))
    if (calledFn) return evaluateStaticFunctionCall(calledFn, node.arguments || [], subs)

    if (node.callee?.type === 'Identifier') {
      if (node.callee.name === 'useMemo') {
        const callback = node.arguments?.[0]
        return (
          callback?.type === 'ArrowFunctionExpression' ||
          callback?.type === 'FunctionExpression'
        )
          ? evaluateStaticFunctionCall(callback, [], subs)
          : undefined
      }
      const arg = resolveExprValue(node.arguments?.[0], subs)
      if (arg === undefined) return undefined
      if (node.callee.name === 'String') return String(arg)
      if (node.callee.name === 'Number') return Number(arg)
      if (node.callee.name === 'Boolean') return Boolean(arg)
      if (
        node.callee.name === 'Array' &&
        node.arguments.length === 1 &&
        Number.isInteger(arg) &&
        arg >= 0 &&
        arg <= 1000
      ) {
        return Array.from({ length: arg })
      }
    }

    const callee = node.callee
    if (
      callee &&
      (callee.type === 'MemberExpression' || callee.type === 'OptionalMemberExpression') &&
      !callee.computed &&
      callee.property?.type === 'Identifier'
    ) {
      const method = callee.property.name
      if (callee.object?.type === 'Identifier' && callee.object.name === 'Object') {
        const arg = resolveExprValue(node.arguments?.[0], subs)
        if (method === 'fromEntries') {
          if (!Array.isArray(arg)) return undefined
          const out = {}
          for (const entry of arg) {
            if (!Array.isArray(entry) || entry.length < 2) return undefined
            const key = entry[0]
            if (typeof key !== 'string' && typeof key !== 'number' && typeof key !== 'symbol') {
              return undefined
            }
            out[key] = entry[1]
          }
          return out
        }
        if (!arg || typeof arg !== 'object' || Array.isArray(arg)) return undefined
        if (method === 'values') return Object.values(arg)
        if (method === 'keys') return Object.keys(arg)
        if (method === 'entries') return Object.entries(arg)
      }
      if (callee.object?.type === 'Identifier' && callee.object.name === 'Array') {
        const arg = resolveExprValue(node.arguments?.[0], subs)
        if (method === 'from') {
          let values
          if (Array.isArray(arg) || typeof arg === 'string') {
            values = Array.from(arg)
          } else if (
            arg &&
            typeof arg === 'object' &&
            Number.isInteger(arg.length) &&
            arg.length >= 0 &&
            arg.length <= 1000
          ) {
            values = Array.from({ length: arg.length })
          }
          if (!values) return undefined
          return node.arguments[1]
            ? resolveMappedItems(values, node.arguments[1], subs, false)
            : values
        }
        if (method === 'isArray') return Array.isArray(arg)
      }
      const obj = resolveExprValue(callee.object, subs)
      if (obj === undefined || obj === null) return undefined

      if (Array.isArray(obj)) {
        if (method === 'map') return resolveMappedItems(obj, node.arguments?.[0], subs, false)
        if (method === 'flatMap') return resolveMappedItems(obj, node.arguments?.[0], subs, true)
        if (method === 'reduce') {
          const chunked = resolveChunkedReduceValue(obj, node, subs)
          if (chunked) return chunked
        }
        if (method === 'join') {
          const sep = node.arguments.length ? resolveExprValue(node.arguments[0], subs) : ','
          if (sep === undefined || typeof sep === 'object') return undefined
          return obj.join(String(sep))
        }
        if (method === 'slice') {
          if (node.arguments.length > 2) return undefined
          const a0 = node.arguments[0] ? resolveExprValue(node.arguments[0], subs) : 0
          const a1 = node.arguments[1] ? resolveExprValue(node.arguments[1], subs) : obj.length
          if (typeof a0 !== 'number' || typeof a1 !== 'number') return undefined
          return obj.slice(a0, a1)
        }
        if (method === 'flat') {
          const depth = node.arguments.length ? resolveExprValue(node.arguments[0], subs) : 1
          if (typeof depth !== 'number') return undefined
          return obj.flat(depth)
        }
        if (method === 'at') {
          const index = resolveExprValue(node.arguments?.[0], subs)
          return typeof index === 'number' ? obj.at(index) : undefined
        }
        if (method === 'fill') {
          const value = node.arguments.length ? resolveExprValue(node.arguments[0], subs) : undefined
          const start = node.arguments[1] ? resolveExprValue(node.arguments[1], subs) : 0
          const end = node.arguments[2] ? resolveExprValue(node.arguments[2], subs) : obj.length
          if (typeof start !== 'number' || typeof end !== 'number') return undefined
          return obj.slice().fill(value, start, end)
        }
        if (method === 'filter' || method === 'sort' || method === 'toSorted') return obj
        if (method === 'reverse' || method === 'toReversed') return obj.slice().reverse()
        if (method === 'concat') {
          const args = []
          for (const arg of node.arguments || []) {
            const v = resolveExprValue(arg, subs)
            if (v === undefined) return undefined
            args.push(v)
          }
          return obj.concat(...args)
        }
      }

      if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean') {
        const s = String(obj)
        if (method === 'toString') return s
        if (method === 'toLowerCase') return s.toLowerCase()
        if (method === 'toUpperCase') return s.toUpperCase()
        if (method === 'trim') return s.trim()
        if (method === 'padStart' || method === 'padEnd') {
          if (node.arguments.length < 1 || node.arguments.length > 2) return undefined
          const targetLength = resolveExprValue(node.arguments[0], subs)
          const padString = node.arguments[1] ? resolveExprValue(node.arguments[1], subs) : ' '
          if (typeof targetLength !== 'number') return undefined
          if (padString == null || typeof padString === 'object') return undefined
          return s[method](targetLength, String(padString))
        }
        if (method === 'charAt') {
          const index = node.arguments.length ? resolveExprValue(node.arguments[0], subs) : 0
          return typeof index === 'number' ? s.charAt(index) : undefined
        }
        if (method === 'split') {
          if (node.arguments.length > 2) return undefined
          const sep = node.arguments[0] ? resolveExprValue(node.arguments[0], subs) : undefined
          const limit = node.arguments[1] ? resolveExprValue(node.arguments[1], subs) : undefined
          if (sep !== undefined && typeof sep !== 'string' && !(sep instanceof RegExp)) return undefined
          if (limit !== undefined && typeof limit !== 'number') return undefined
          return s.split(sep, limit)
        }
        if (method === 'slice' || method === 'substring' || method === 'substr') {
          if (node.arguments.length > 2) return undefined
          const a0 = node.arguments[0] ? resolveExprValue(node.arguments[0], subs) : undefined
          const a1 = node.arguments[1] ? resolveExprValue(node.arguments[1], subs) : undefined
          if (a0 !== undefined && typeof a0 !== 'number') return undefined
          if (a1 !== undefined && typeof a1 !== 'number') return undefined
          return s[method](a0, a1)
        }
        if (method === 'replace') {
          const a = resolveExprValue(node.arguments?.[0], subs)
          const b = resolveExprValue(node.arguments?.[1], subs)
          if ((typeof a !== 'string' && !(a instanceof RegExp)) || b == null || typeof b === 'object') return undefined
          return s.replace(a, String(b))
        }
      }
    }
  }
  return undefined
}

function resolveChunkedReduceValue(baseItems, callNode, subs) {
  const cb = callNode.arguments?.[0]
  const initial = callNode.arguments?.[1]
  if (!Array.isArray(baseItems) || !cb || !initial) return null
  if (initial.type !== 'ArrayExpression' || initial.elements.length !== 0) return null
  if (cb.type !== 'ArrowFunctionExpression' && cb.type !== 'FunctionExpression') return null
  const accName = cb.params?.[0]?.type === 'Identifier' ? cb.params[0].name : null
  const indexName = cb.params?.[2]?.type === 'Identifier' ? cb.params[2].name : null
  if (!accName || !indexName || cb.body?.type !== 'BlockStatement') return null

  function isIndexRef(n) {
    return n?.type === 'Identifier' && n.name === indexName
  }

  function chunkSizeFromSliceArg(n) {
    if (!n) return null
    if (n.type === 'BinaryExpression' && n.operator === '+') {
      if (isIndexRef(n.left) && n.right.type === 'NumericLiteral') return n.right.value
      if (isIndexRef(n.right) && n.left.type === 'NumericLiteral') return n.left.value
    }
    return null
  }

  function pushedSliceChunkSize(n) {
    if (
      n?.type !== 'CallExpression' ||
      n.callee?.type !== 'MemberExpression' ||
      n.callee.computed ||
      n.callee.property?.type !== 'Identifier' ||
      n.callee.property.name !== 'slice'
    ) return null
    const start = n.arguments?.[0]
    const end = n.arguments?.[1]
    if (!isIndexRef(start)) return null
    const size = chunkSizeFromSliceArg(end)
    return typeof size === 'number' && size > 0 ? size : null
  }

  function pushedChunkSize(n) {
    if (
      n?.type !== 'CallExpression' ||
      n.callee?.type !== 'MemberExpression' ||
      n.callee.computed ||
      n.callee.object?.type !== 'Identifier' ||
      n.callee.object.name !== accName ||
      n.callee.property?.type !== 'Identifier' ||
      n.callee.property.name !== 'push'
    ) return null
    return pushedSliceChunkSize(n.arguments?.[0])
  }

  for (const stmt of cb.body.body || []) {
    const consequent = stmt.type === 'IfStatement' ? stmt.consequent : stmt
    const statements = consequent?.type === 'BlockStatement' ? consequent.body : [consequent]
    for (const s of statements) {
      const expr = s?.type === 'ExpressionStatement' ? s.expression : null
      const size = pushedChunkSize(expr)
      if (size) {
        const out = []
        for (let i = 0; i < baseItems.length; i += size) {
          out.push(baseItems.slice(i, i + size))
        }
        return out
      }
    }
  }

  return null
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

function dynamicComputedMemberValueCandidates(node, subs, registry) {
  if (!node) return []

  if (
    !node.computed &&
    node.property?.type === 'Identifier' &&
    (
      node.object?.type === 'MemberExpression' ||
      node.object?.type === 'OptionalMemberExpression'
    ) &&
    node.object.computed
  ) {
    const indexNode = node.object.property
    const isLiteralIndex =
      indexNode?.type === 'NumericLiteral' ||
      indexNode?.type === 'StringLiteral' ||
      (
        indexNode?.type === 'TemplateLiteral' &&
        indexNode.expressions.length === 0
      )
    if (!isLiteralIndex) {
      const resolvedIndex = resolveExprValue(indexNode, subs)
      if (resolvedIndex !== undefined && resolvedIndex !== null && !Array.isArray(resolvedIndex)) {
        return []
      }
      const items =
        resolveItemsAlias(node.object.object, registry, null, 0, subs) ||
        resolveExprValue(node.object.object, subs)
      if (Array.isArray(items)) {
        const key = node.property.name
        return items.map(item => item?.[key]).filter(value => value !== undefined)
      }
    }
  }

  return []
}

function exprShapeKey(node) {
  if (!node) return null
  if (node.type === 'Identifier') return node.name
  if (
    (node.type === 'MemberExpression' || node.type === 'OptionalMemberExpression') &&
    !node.computed &&
    node.property?.type === 'Identifier'
  ) {
    const objectKey = exprShapeKey(node.object)
    return objectKey ? objectKey + '.' + node.property.name : null
  }
  if (
    (node.type === 'MemberExpression' || node.type === 'OptionalMemberExpression') &&
    node.computed &&
    node.property?.type === 'Identifier'
  ) {
    const objectKey = exprShapeKey(node.object)
    return objectKey ? objectKey + '[' + node.property.name + ']' : null
  }
  return null
}

function collectDynamicIndexSources(node, registry, subs, out = new Map(), depth = 0) {
  if (!node || typeof node !== 'object' || depth > 16) return out

  if (
    (node.type === 'MemberExpression' || node.type === 'OptionalMemberExpression') &&
    node.computed &&
    node.property?.type === 'Identifier'
  ) {
    const items =
      resolveItemsAlias(node.object, registry, null, 0, subs) ||
      resolveExprValue(node.object, subs)
    if (Array.isArray(items) && items.length) {
      const objectKey = exprShapeKey(node.object)
      const selectorName = node.property.name
      if (objectKey && selectorName) {
        const key = objectKey + '[' + selectorName + ']'
        if (!out.has(key)) {
          out.set(key, {
            key,
            selectorName,
            branches: items.map((item, index) => ({
              item,
              index,
              subs: [{ paramName: selectorName, item: index }],
            })),
          })
        }
      }
    }
  }

  for (const key in node) {
    if (NON_TRAVERSAL_KEYS.has(key)) continue
    const value = node[key]
    if (Array.isArray(value)) {
      for (const child of value) collectDynamicIndexSources(child, registry, subs, out, depth + 1)
    } else if (value && typeof value === 'object') {
      collectDynamicIndexSources(value, registry, subs, out, depth + 1)
    }
  }
  return out
}

function resolvePlusOperandCandidates(node, subs, registry, maxBranches) {
  const dynamicValues = dynamicComputedMemberValueCandidates(node, subs, registry)
  if (dynamicValues.length) {
    return [...new Set(dynamicValues
      .filter(value => value !== undefined && value !== null && typeof value !== 'object'))]
      .slice(0, maxBranches)
  }

  const exactValue = resolveExprValue(node, subs)
  if (exactValue !== undefined) {
    const values = Array.isArray(exactValue) ? exactValue : [exactValue]
    return [...new Set(values
      .filter(value => value !== undefined && value !== null && typeof value !== 'object'))]
      .slice(0, maxBranches)
  }

  const staticValues = staticValueCandidates(node, registry, subs)
    .filter(value => value !== undefined && value !== null && typeof value !== 'object')
  if (staticValues.length) return [...new Set(staticValues)].slice(0, maxBranches)

  return resolveExprCandidates(node, subs, registry, maxBranches)
}

function resolveExprCandidates(node, subs, registry, maxBranches = 80) {
  if (!node) return []

  if (
    node.type === 'TSAsExpression' ||
    node.type === 'TSSatisfiesExpression' ||
    node.type === 'TSNonNullExpression' ||
    node.type === 'TypeCastExpression' ||
    node.type === 'ParenthesizedExpression'
  ) {
    return resolveExprCandidates(node.expression, subs, registry, maxBranches)
  }

  if (node.type === 'TemplateLiteral') {
    let branches = ['']
    for (let i = 0; i < node.quasis.length; i++) {
      const quasi = node.quasis[i].value.cooked
      branches = branches.map(value => value + quasi)
      if (i >= node.expressions.length) continue
      const values = resolveExprCandidates(node.expressions[i], subs, registry, maxBranches)
      if (!values.length) return []
      const next = []
      for (const prefix of branches) {
        for (const value of values) {
          if (value === undefined || value === null || typeof value === 'object') continue
          next.push(prefix + String(value))
          if (next.length >= maxBranches) break
        }
        if (next.length >= maxBranches) break
      }
      branches = next
    }
    return [...new Set(branches)]
  }

  if (node.type === 'BinaryExpression' && node.operator === '+') {
    const left = resolvePlusOperandCandidates(node.left, subs, registry, maxBranches)
    const right = resolvePlusOperandCandidates(node.right, subs, registry, maxBranches)
    if (!left.length || !right.length) return []
    const out = []
    for (const a of left) {
      for (const b of right) {
        const value = typeof a === 'string' || typeof b === 'string'
          ? String(a) + String(b)
          : a + b
        out.push(String(value))
        if (out.length >= maxBranches) break
      }
      if (out.length >= maxBranches) break
    }
    return [...new Set(out)]
  }

  // Candidate extraction describes every value a runtime render can select,
  // not only the value selected by the initial render. This is especially
  // important for `useState(false)` driven image swaps: normal constant
  // evaluation sees the initial false value, while a later event can select
  // the other branch. Keep both finite branches and let exact runtime state
  // choose between their generated URLs.
  if (node.type === 'ConditionalExpression') {
    return [...new Set([
      ...resolveExprCandidates(node.consequent, subs, registry, maxBranches),
      ...resolveExprCandidates(node.alternate, subs, registry, maxBranches),
    ])].slice(0, maxBranches)
  }

  if (node.type === 'LogicalExpression') {
    return [...new Set([
      ...resolveExprCandidates(node.left, subs, registry, maxBranches),
      ...resolveExprCandidates(node.right, subs, registry, maxBranches),
    ])].slice(0, maxBranches)
  }

  const dynamicValues = dynamicComputedMemberValueCandidates(node, subs, registry)
  if (dynamicValues.length) {
    return [...new Set(
      dynamicValues
        .filter(value => value !== undefined && value !== null && typeof value !== 'object')
        .map(value => String(value))
    )]
  }

  const exactValue = resolveExprValue(node, subs)
  if (Array.isArray(exactValue)) {
    return [...new Set(
      exactValue
        .filter(value => value !== undefined && value !== null && typeof value !== 'object')
        .map(value => String(value))
    )]
  }
  const exact = resolveExpr(node, subs)
  if (exact !== undefined) return [exact]

  const candidates = staticValueCandidates(node, registry, subs)
  const out = []
  for (const value of candidates) {
    if (value === undefined || value === null || typeof value === 'object') continue
    out.push(String(value))
    if (out.length >= maxBranches) break
  }
  return [...new Set(out)]
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

function resolveJsxAttrString(attrs, name, subs) {
  for (let i = (attrs || []).length - 1; i >= 0; i--) {
    const attr = attrs[i]
    if (attr.type === 'JSXAttribute' && attr.name?.name === name) {
      return resolveAttrString(attr, subs)
    }
    if (attr.type === 'JSXSpreadAttribute') {
      const spread = resolveExprValue(attr.argument, subs)
      if (
        spread &&
        typeof spread === 'object' &&
        !Array.isArray(spread) &&
        Object.prototype.hasOwnProperty.call(spread, name)
      ) {
        const value = spread[name]
        if (value === true) return true
        if (value == null || typeof value === 'object') return null
        return String(value)
      }
    }
  }
  return null
}

function resolveJsxAttrStringCandidates(attrs, name, subs, registry) {
  for (let i = (attrs || []).length - 1; i >= 0; i--) {
    const attr = attrs[i]
    if (attr.type === 'JSXAttribute' && attr.name?.name === name) {
      if (attr.value === null) return [true]
      if (attr.value?.type === 'StringLiteral') return [attr.value.value]
      if (attr.value?.type === 'JSXExpressionContainer') {
        const values = resolveExprCandidates(attr.value.expression, subs, registry)
        return values.filter(value => typeof value === 'string')
      }
      return []
    }
    if (attr.type === 'JSXSpreadAttribute') {
      const spread = resolveExprValue(attr.argument, subs)
      if (
        spread &&
        typeof spread === 'object' &&
        !Array.isArray(spread) &&
        Object.prototype.hasOwnProperty.call(spread, name)
      ) {
        const value = spread[name]
        if (value === true) return [true]
        if (value == null || typeof value === 'object') return []
        return [String(value)]
      }
    }
  }
  return []
}

function jsxAttrExpression(attrs, name) {
  for (let i = (attrs || []).length - 1; i >= 0; i--) {
    const attr = attrs[i]
    if (attr.type === 'JSXAttribute' && attr.name?.name === name) {
      return attr.value?.type === 'JSXExpressionContainer' ? attr.value.expression : null
    }
  }
  return null
}

function combineAttrCandidates(attrs, idName, rawName, subs, registry) {
  const idExpr = jsxAttrExpression(attrs, idName)
  const rawExpr = jsxAttrExpression(attrs, rawName)
  const sources = new Map()
  collectDynamicIndexSources(idExpr, registry, subs, sources)
  collectDynamicIndexSources(rawExpr, registry, subs, sources)

  const branches = [...sources.values()].flatMap(source => source.branches)
  const out = []
  const seen = new Set()

  function append(branchSubs) {
    const scopedSubs = branchSubs?.length ? [...subs, ...branchSubs] : subs
    const ids = resolveJsxAttrStringCandidates(attrs, idName, scopedSubs, registry)
      .filter(value => typeof value === 'string' && value)
    const raws = resolveJsxAttrStringCandidates(attrs, rawName, scopedSubs, registry)
      .filter(value => typeof value === 'string')
    for (const id of ids) {
      for (const raw of raws) {
        const key = id + '\0' + raw
        if (seen.has(key)) continue
        seen.add(key)
        out.push({ id, raw, subs: scopedSubs })
      }
    }
  }

  if (branches.length) {
    for (const branch of branches) append(branch.subs)
  } else {
    append([])
  }

  return out
}

// Resolve the collection side of `<expr>.map(...)`.
//
// Historically this only looked at the file/block array registry, so it could
// expand `worlds.map(...)` but not `world.images.map(...)` after `<WorldSection
// world={world} />` had been inlined. The second path evaluates against the
// current substitution stack, which is where inlined component props live.
function resolveMapItems(node, registry, additions, subs) {
  const fromRegistry = resolveItemsAlias(node, registry, additions, 0, subs)
  if (fromRegistry) return fromRegistry
  const fromSubs = resolveExprValue(node, subs)
  if (Array.isArray(fromSubs)) return fromSubs
  const candidateArrays = staticValueCandidates(node, registry, subs)
    .filter(value => Array.isArray(value))
  return candidateArrays.length ? mergeCandidateArrays(candidateArrays) : null
}

function mergeCandidateArrays(arrays) {
  const merged = []
  const seen = new Set()
  for (const array of arrays) {
    for (const item of array || []) {
      let key
      try { key = JSON.stringify(item) } catch { key = null }
      if (key != null && seen.has(key)) continue
      if (key != null) seen.add(key)
      merged.push(item)
    }
  }
  return merged
}

// Recover arrays behind an unresolved runtime selector such as
// `catalog[active].items.map(...)` or `itemsByTab[selected].map(...)`.
// Each possible static branch is visited, because a later user action can
// make any one of its image slots appear in the DOM.
function staticValueCandidates(node, registry, subs, depth = 0) {
  if (!node || depth > 8) return []
  const exact = resolveExprValue(node, subs)
  if (exact !== undefined) return [exact]
  if (
    (node.type === 'MemberExpression' || node.type === 'OptionalMemberExpression') &&
    node.computed
  ) {
    const items = resolveItemsAlias(node.object, registry, null, 0, subs)
    if (Array.isArray(items)) {
      const key = resolveExprValue(node.property, subs)
      if (key !== undefined && key !== null) {
        return [items[key]].filter(value => value !== undefined)
      }
      return items
    }
  }
  if (node.type === 'Identifier' && registry?.has(node.name)) return [registry.get(node.name)]
  if (node.type === 'ConditionalExpression') {
    return [
      ...staticValueCandidates(node.consequent, registry, subs, depth + 1),
      ...staticValueCandidates(node.alternate, registry, subs, depth + 1),
    ]
  }
  if (node.type !== 'MemberExpression' && node.type !== 'OptionalMemberExpression') return []
  const objects = staticValueCandidates(node.object, registry, subs, depth + 1)
  if (!objects.length) return []
  if (node.computed) {
    const key = resolveExprValue(node.property, subs)
    if (key !== undefined && key !== null) {
      return objects.map(object => object?.[key]).filter(value => value !== undefined)
    }
    const values = []
    for (const object of objects) {
      if (Array.isArray(object)) values.push(...object)
      else if (object && typeof object === 'object') values.push(...Object.values(object))
    }
    return values
  }
  if (node.property?.type !== 'Identifier') return []
  return objects
    .map(object => object?.[node.property.name])
    .filter(value => value !== undefined)
}

function dynamicIndexedCollectionIterations(node, registry, subs) {
  let selectedNode = null
  let childKey = null
  if (
    (node.type === 'MemberExpression' || node.type === 'OptionalMemberExpression') &&
    !node.computed &&
    node.property?.type === 'Identifier' &&
    (node.object?.type === 'MemberExpression' || node.object?.type === 'OptionalMemberExpression') &&
    node.object.computed
  ) {
    selectedNode = node.object
    childKey = node.property.name
  } else if (
    (node.type === 'MemberExpression' || node.type === 'OptionalMemberExpression') &&
    node.computed
  ) {
    selectedNode = node
  }
  if (!selectedNode || selectedNode.property?.type !== 'Identifier') return null
  if (resolveExprValue(selectedNode.property, subs) !== undefined) return null
  const selectorName = selectedNode.property.name
  const roots = staticValueCandidates(selectedNode.object, registry, subs)
  const rows = []
  for (const root of roots) {
    const choices = Array.isArray(root)
      ? root.map((value, index) => [index, value])
      : root && typeof root === 'object'
        ? Object.entries(root)
        : []
    for (const [selectorValue, choice] of choices) {
      const items = childKey == null ? choice : choice?.[childKey]
      if (!Array.isArray(items)) continue
      for (const item of items) {
        rows.push({
          item,
          contextSubs: [{ paramName: selectorName, item: selectorValue }],
        })
      }
    }
  }
  return rows.length ? rows : null
}

// Detect `<expr>.map(cb)` / `<expr>.flatMap(cb)` where <expr> resolves
// statically to a known items
// array and the callback's first param is shaped well enough to bind.
// Returns { paramShape, indexName, items, body } or null.
//
// Supported `<expr>` forms:
//   items                        — bare identifier in the current scope's registry
//   props.items / item.children   — arrays carried through component/map substitutions
//   [{...}, {...}]               — inline array literal
//   items.filter(p) / .slice(...) / .sort(...) / .reverse() / .concat(x)
//   Object.values(record) / Object.entries(record)
//   cond ? items : items.filter(...)
//   a || b   /   a ?? b
//
// Supported callback param shapes (delegated to paramShapeOf):
//   (item)                       — single identifier
//   ({ a, b })                   — destructure
//   ({ a: alias, b })            — destructure with rename (e.g. `icon: Icon`)
//
// Second `index` param (if it's a bare Identifier) is also bound so JSX
// expressions like `data-strk-img-id={`item-${i}`}` can resolve. Third
// `array` param and any non-identifier index forms are intentionally
// skipped — uncommon in real JSX and safer to leave unresolved.
//
// Anything outside these whitelists returns null so the map is left
// untouched — same conservative behaviour as before for unsupported cases.
function matchMapCall(node, registry, subs, itemAliases = null) {
  if (node.type !== 'CallExpression' && node.type !== 'OptionalCallExpression') return null
  const callee = node.callee
  if (
    callee?.type === 'MemberExpression' &&
    !callee.computed &&
    callee.object?.type === 'Identifier' &&
    callee.object.name === 'Array' &&
    callee.property?.type === 'Identifier' &&
    callee.property.name === 'from'
  ) {
    const source = resolveExprValue(node.arguments?.[0], subs)
    let items
    if (Array.isArray(source) || typeof source === 'string') {
      items = Array.from(source)
    } else if (
      source &&
      typeof source === 'object' &&
      Number.isInteger(source.length) &&
      source.length >= 0 &&
      source.length <= 1000
    ) {
      items = Array.from({ length: source.length })
    }
    const cb = node.arguments?.[1]
    if (!items || (cb?.type !== 'ArrowFunctionExpression' && cb?.type !== 'FunctionExpression')) {
      return null
    }
    const shape = paramShapeOf(cb.params?.[0])
    if (!shape) return null
    const idxParam = cb.params?.[1]
    return {
      paramShape: shape,
      indexName: idxParam?.type === 'Identifier' ? idxParam.name : null,
      items,
      body: cb.body,
    }
  }
  if (
    !callee ||
    (callee.type !== 'MemberExpression' && callee.type !== 'OptionalMemberExpression') ||
    callee.computed
  ) return null
  if (
    callee.property?.type !== 'Identifier' ||
    (callee.property.name !== 'map' && callee.property.name !== 'flatMap')
  ) return null
  const cb = node.arguments[0]
  if (!cb) return null
  if (cb.type !== 'ArrowFunctionExpression' && cb.type !== 'FunctionExpression') return null
  const shape = paramShapeOf(cb.params?.[0])
  if (!shape) return null
  const idxParam = cb.params?.[1]
  const indexName =
    idxParam && idxParam.type === 'Identifier' ? idxParam.name : null
  const contextualItems = dynamicIndexedCollectionIterations(callee.object, registry, subs)
  if (contextualItems) {
    return { paramShape: shape, indexName, items: contextualItems, body: cb.body, contextual: true }
  }
  const branchedItems = resolveRuntimeCollectionBranches(callee.object, registry, null, subs, itemAliases)
  const items = branchedItems
    ? mergeCandidateArrays(branchedItems)
    : resolveMapItems(callee.object, registry, null, subs)
  if (!items) return null
  return { paramShape: shape, indexName, items, body: cb.body, contextual: false }
}

// Expand one item from the array registry into the subs that should be
// pushed onto the scope stack for that map iteration. Returns [] for items
// that don't fit the shape (e.g. destructure against a non-object item) —
// the iteration is then visited with no new bindings, matching how an
// `Identifier` lookup would fail to resolve anyway.
//
// If the map callback declared an index param (`(s, i) => ...`), binds it
// to the current iteration's numeric index so JSX template-literal refs to
// `${i}` resolve at extraction time.
function subsFromMapItem(paramShape, item, indexName, idx) {
  const out = []
  bindParamShape(paramShape, item, out)
  if (indexName) out.push({ paramName: indexName, item: idx })
  return out
}

// Methods that derive a collection while preserving its element shape. Static
// `map` / `flatMap` projections are evaluated separately; they must not use
// this fallback because an unresolved callback can change the shape.
const _SHAPE_PRESERVING_METHODS = new Set([
  'filter', 'slice', 'sort', 'reverse', 'toSorted', 'toReversed', 'concat',
])

function callbackExpression(callback) {
  if (!callback) return null
  if (callback.type !== 'ArrowFunctionExpression' && callback.type !== 'FunctionExpression') return null
  if (callback.body.type !== 'BlockStatement') return callback.body
  for (const stmt of callback.body.body || []) {
    if (stmt.type === 'ReturnStatement' && stmt.argument) return stmt.argument
  }
  return null
}

function resolveCallbackReturnValue(callback, subs) {
  if (!callback) return undefined
  if (callback.type !== 'ArrowFunctionExpression' && callback.type !== 'FunctionExpression') return undefined
  if (callback.body.type !== 'BlockStatement') return resolveExprValue(callback.body, subs)

  let localSubs = subs
  for (const stmt of callback.body.body || []) {
    if (stmt.type === 'VariableDeclaration') {
      for (const d of stmt.declarations || []) {
        if (!d?.id || !d.init) continue
        const value = resolveExprValue(d.init, localSubs)
        if (value === undefined) continue
        const additions = []
        bindDeclarationValue(d.id, value, additions)
        if (additions.length) localSubs = [...localSubs, ...additions]
      }
      continue
    }
    if (stmt.type === 'FunctionDeclaration' && stmt.id?.name) {
      localSubs = [...localSubs, { paramName: stmt.id.name, item: functionMarker(stmt) }]
      continue
    }
    if (stmt.type === 'EmptyStatement') continue
    if (stmt.type === 'ReturnStatement') {
      return stmt.argument ? resolveExprValue(stmt.argument, localSubs) : undefined
    }

    // Preserve the older behavior for complex callback blocks: use the return
    // expression without block-local bindings instead of interpreting control flow.
    const expression = callbackExpression(callback)
    return expression ? resolveExprValue(expression, subs) : undefined
  }
  return undefined
}

// Evaluate collection-producing `map` / `flatMap` callbacks used as an
// intermediate value before JSX rendering, e.g.
// `groups.flatMap(group => group.items).map(item => <img ... />)`.
// JSX callback bodies naturally return undefined here and are instead
// expanded by the JSX walker through `matchMapCall`.
function resolveMappedItems(items, callback, subs, flatten) {
  const shape = paramShapeOf(callback?.params?.[0])
  if (!shape) return undefined
  const idxParam = callback.params?.[1]
  const indexName = idxParam?.type === 'Identifier' ? idxParam.name : null
  const mapped = []
  for (let idx = 0; idx < items.length; idx++) {
    const itemSubs = subsFromMapItem(shape, items[idx], indexName, idx)
    const value = resolveCallbackReturnValue(callback, [...subs, ...itemSubs])
    if (value === undefined) return undefined
    if (flatten && Array.isArray(value)) mapped.push(...value)
    else mapped.push(value)
  }
  return mapped
}

// Evaluate ordinary `items.filter((item) => predicate)` calls when all
// values referenced by `predicate` are available in the current expansion
// context. If runtime-only state is still involved, return null and let the
// caller keep a conservative superset.
function resolveFilteredItems(items, callback, subs) {
  const expression = callbackExpression(callback)
  const shape = paramShapeOf(callback?.params?.[0])
  if (!expression || !shape) return null
  const idxParam = callback.params?.[1]
  const indexName = idxParam?.type === 'Identifier' ? idxParam.name : null
  const filtered = []
  for (let idx = 0; idx < items.length; idx++) {
    const itemSubs = subsFromMapItem(shape, items[idx], indexName, idx)
    const keep = resolveExprValue(expression, [...subs, ...itemSubs])
    if (typeof keep !== 'boolean') return null
    if (keep) filtered.push(items[idx])
  }
  return filtered
}

function paramShapeNames(shape, out = new Set()) {
  if (!shape) return out
  if (shape.kind === 'identifier') {
    out.add(shape.name)
    return out
  }
  if (shape.kind === 'object') {
    for (const key of shape.keys || []) paramShapeNames(key.shape, out)
    return out
  }
  if (shape.kind === 'array') {
    for (const element of shape.elements || []) paramShapeNames(element.shape, out)
  }
  return out
}

function collectRuntimeFilterSelectors(callback, itemAliases) {
  if (!itemAliases || !itemAliases.size) return []
  const expression = callbackExpression(callback)
  if (!expression) return []
  const localNames = paramShapeNames(paramShapeOf(callback?.params?.[0]))
  const names = new Set()

  function walk(node) {
    if (!node || typeof node !== 'object') return
    if (
      node.type === 'Identifier' &&
      !localNames.has(node.name) &&
      itemAliases.has(node.name)
    ) {
      const selection = itemAliases.get(node.name)
      if (selection?.items?.length) names.add(node.name)
      return
    }
    for (const key in node) {
      if (NON_TRAVERSAL_KEYS.has(key)) continue
      const value = node[key]
      if (Array.isArray(value)) {
        for (const child of value) walk(child)
      } else if (value && typeof value === 'object') {
        walk(value)
      }
    }
  }

  walk(expression)
  return [...names]
}

function runtimeSelectorSubBranches(selectorNames, itemAliases) {
  if (!selectorNames.length) return null
  let branches = [[]]
  for (const name of selectorNames) {
    const items = itemAliases.get(name)?.items || []
    if (!items.length) continue
    const next = []
    for (const branch of branches) {
      for (const item of items) {
        next.push([...branch, { paramName: name, item }])
      }
    }
    branches = next
  }
  return branches.length ? branches : null
}

function resolveCollectionBranchesBase(node, registry, additions, subs, itemAliases, depth) {
  const branches = resolveRuntimeCollectionBranches(node, registry, additions, subs, itemAliases, depth + 1)
  if (branches) return branches
  const items = resolveMapItems(node, registry, additions, subs)
  return Array.isArray(items) ? [items] : null
}

function resolveRuntimeCollectionBranches(node, registry, additions, subs, itemAliases, depth = 0) {
  if (!node || depth > 8 || !itemAliases || !itemAliases.size) return null

  if (
    node.type === 'TSAsExpression' ||
    node.type === 'TSSatisfiesExpression' ||
    node.type === 'TSNonNullExpression' ||
    node.type === 'TypeCastExpression' ||
    node.type === 'ParenthesizedExpression'
  ) {
    return resolveRuntimeCollectionBranches(node.expression, registry, additions, subs, itemAliases, depth + 1)
  }

  if (node.type === 'ConditionalExpression') {
    const a = resolveCollectionBranchesBase(node.consequent, registry, additions, subs, itemAliases, depth)
    const b = resolveCollectionBranchesBase(node.alternate, registry, additions, subs, itemAliases, depth)
    const out = [...(a || []), ...(b || [])]
    return out.length ? out : null
  }

  if (node.type === 'LogicalExpression' && (node.operator === '||' || node.operator === '??')) {
    const a = resolveCollectionBranchesBase(node.left, registry, additions, subs, itemAliases, depth)
    const b = resolveCollectionBranchesBase(node.right, registry, additions, subs, itemAliases, depth)
    const out = [...(a || []), ...(b || [])]
    return out.length ? out : null
  }

  if (
    (node.type !== 'CallExpression' && node.type !== 'OptionalCallExpression') ||
    !node.callee ||
    (node.callee.type !== 'MemberExpression' && node.callee.type !== 'OptionalMemberExpression') ||
    node.callee.computed ||
    node.callee.property?.type !== 'Identifier'
  ) {
    return null
  }

  const method = node.callee.property.name
  if (!_SHAPE_PRESERVING_METHODS.has(method)) return null

  const baseBranches = resolveCollectionBranchesBase(
    node.callee.object, registry, additions, subs, itemAliases, depth,
  )
  if (!baseBranches?.length) return null

  if (method === 'filter') {
    const selectorNames = collectRuntimeFilterSelectors(node.arguments?.[0], itemAliases)
    const selectorBranches = runtimeSelectorSubBranches(selectorNames, itemAliases)
    if (!selectorBranches) {
      const out = baseBranches.map(base =>
        resolveFilteredItems(base, node.arguments?.[0], subs || []) || base
      )
      return out.length ? out : null
    }

    const out = []
    for (const base of baseBranches) {
      for (const selectorSubs of selectorBranches) {
        const filtered = resolveFilteredItems(
          base, node.arguments?.[0], [...(subs || []), ...selectorSubs],
        )
        if (filtered) out.push(filtered)
      }
    }
    return out.length ? out : baseBranches
  }

  if (method === 'slice') {
    if (node.arguments.length > 2) return baseBranches
    return baseBranches.map(base => {
      const start = node.arguments[0] == null ? 0 : resolveExprValue(node.arguments[0], subs || [])
      const end = node.arguments[1] == null ? base.length : resolveExprValue(node.arguments[1], subs || [])
      if (typeof start !== 'number' || typeof end !== 'number') return base
      return base.slice(start, end)
    })
  }

  return baseBranches
}

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
function collectionHasRuntimeSensitiveSliceBase(node, parentRegistry, additions, subs, depth = 0) {
  if (!node || depth > 8) return false

  if (
    node.type === 'TSAsExpression' ||
    node.type === 'TSSatisfiesExpression' ||
    node.type === 'TSNonNullExpression' ||
    node.type === 'TypeCastExpression' ||
    node.type === 'ParenthesizedExpression'
  ) {
    return collectionHasRuntimeSensitiveSliceBase(
      node.expression, parentRegistry, additions, subs, depth + 1,
    )
  }

  if (node.type === 'ConditionalExpression' || node.type === 'LogicalExpression') {
    return true
  }

  if (
    (node.type !== 'CallExpression' && node.type !== 'OptionalCallExpression') ||
    !node.callee ||
    (node.callee.type !== 'MemberExpression' && node.callee.type !== 'OptionalMemberExpression') ||
    node.callee.computed ||
    node.callee.property?.type !== 'Identifier'
  ) {
    return false
  }

  const method = node.callee.property.name
  if (method === 'filter') {
    const base = resolveItemsAlias(node.callee.object, parentRegistry, additions, depth + 1, subs)
    if (!Array.isArray(base)) return true
    const filtered = resolveFilteredItems(base, node.arguments?.[0], subs || [])
    if (!filtered) return true
    return collectionHasRuntimeSensitiveSliceBase(
      node.callee.object, parentRegistry, additions, subs, depth + 1,
    )
  }

  if (
    method === 'sort' ||
    method === 'toSorted' ||
    method === 'reverse' ||
    method === 'toReversed' ||
    method === 'concat'
  ) {
    return true
  }

  if (method === 'slice') {
    return collectionHasRuntimeSensitiveSliceBase(
      node.callee.object, parentRegistry, additions, subs, depth + 1,
    )
  }

  return false
}

function resolveItemsAlias(node, parentRegistry, additions, depth = 0, subs = null) {
  if (!node || depth > 8) return null

  if (
    node.type === 'TSAsExpression' ||
    node.type === 'TSSatisfiesExpression' ||
    node.type === 'TSNonNullExpression' ||
    node.type === 'TypeCastExpression' ||
    node.type === 'ParenthesizedExpression'
  ) {
    return resolveItemsAlias(node.expression, parentRegistry, additions, depth + 1, subs)
  }

  if (node.type === 'ArrayExpression') {
    if (subs) {
      const value = resolveExprValue(node, subs)
      if (Array.isArray(value)) return value
    }
    return parseArrayLiteral(node)
  }

  if (node.type === 'Identifier') {
    if (additions && additions.has(node.name)) return additions.get(node.name)
    const registered = (parentRegistry && parentRegistry.get(node.name)) || null
    if (registered) return registered
    if (subs) {
      const value = resolveExprValue(node, subs)
      if (Array.isArray(value)) return value
    }
    return null
  }

  if (node.type === 'CallExpression' || node.type === 'OptionalCallExpression') {
    const calledFn = functionMarkerValue(resolveExprValue(node.callee, subs || []))
    if (calledFn) {
      const items = resolveFunctionCallItemsAlias(
        calledFn, node.arguments || [], parentRegistry, additions, depth + 1, subs,
      )
      if (items) return items
    }
  }

  if (
    (node.type === 'CallExpression' || node.type === 'OptionalCallExpression') &&
    (
      (node.callee?.type === 'Identifier' && node.callee.name === 'useMemo') ||
      (
        (node.callee?.type === 'MemberExpression' || node.callee?.type === 'OptionalMemberExpression') &&
        !node.callee.computed &&
        node.callee.object?.type === 'Identifier' &&
        node.callee.object.name === 'React' &&
        node.callee.property?.type === 'Identifier' &&
        node.callee.property.name === 'useMemo'
      )
    )
  ) {
    const expression = callbackExpression(node.arguments?.[0])
    return expression
      ? resolveItemsAlias(expression, parentRegistry, additions, depth + 1, subs)
      : null
  }

  if (
    (node.type === 'CallExpression' || node.type === 'OptionalCallExpression') &&
    node.callee &&
    (node.callee.type === 'MemberExpression' || node.callee.type === 'OptionalMemberExpression') &&
    !node.callee.computed &&
    node.callee.property &&
    node.callee.property.type === 'Identifier' &&
    (node.callee.property.name === 'reduce' || _SHAPE_PRESERVING_METHODS.has(node.callee.property.name))
  ) {
    const method = node.callee.property.name
    const base = resolveItemsAlias(node.callee.object, parentRegistry, additions, depth + 1, subs)
    if (!base || !Array.isArray(base)) return null

    if (method === 'reduce') {
      return resolveChunkedReduceValue(base, node, subs || [])
    }

    if (method === 'filter') {
      return resolveFilteredItems(base, node.arguments?.[0], subs || []) || base
    }

    // Statically bounded slices can stay narrow (`items.slice(0, 6)`).
    // A runtime-controlled slice (`items.slice(0, expanded ? items.length : 2)`)
    // can later render every item, so retain the full candidate set for config.
    // Likewise, a static slice after runtime filter/sort can render items from
    // anywhere in the base collection, so it must stay conservative.
    if (method === 'slice') {
      if (collectionHasRuntimeSensitiveSliceBase(
        node.callee.object, parentRegistry, additions, subs, depth + 1,
      )) {
        return base
      }
      if (node.arguments.length > 2) return base
      const a0 = node.arguments[0]
      const a1 = node.arguments[1]
      const start = a0 == null ? 0 : resolveExprValue(a0, subs || [])
      const end = a1 == null ? base.length : resolveExprValue(a1, subs || [])
      if (typeof start !== 'number' || typeof end !== 'number') return base
      return base.slice(start, end)
    }

    // Sort/reverse-style ordering does not affect which image slots exist.
    // Preserve the base set; filter was handled above when resolvable.
    return base
  }

  if (node.type === 'ConditionalExpression') {
    const test = subs ? resolveExprValue(node.test, subs) : undefined
    if (test !== undefined) {
      return resolveItemsAlias(test ? node.consequent : node.alternate, parentRegistry, additions, depth + 1, subs)
    }
    const a = resolveItemsAlias(node.consequent, parentRegistry, additions, depth + 1, subs)
    const b = resolveItemsAlias(node.alternate, parentRegistry, additions, depth + 1, subs)
    if (a && b) {
      // Runtime tabs often choose disjoint arrays of equal length. Keep the
      // union; for `cond ? base : base.filter(...)` dedupe reduces it to base.
      return mergeCandidateArrays([a, b])
    }
    return a || b
  }

  if (node.type === 'LogicalExpression' && (node.operator === '||' || node.operator === '??')) {
    if (subs) {
      const v = resolveExprValue(node, subs)
      if (Array.isArray(v)) return v
    }
    return (
      resolveItemsAlias(node.left, parentRegistry, additions, depth + 1, subs) ||
      resolveItemsAlias(node.right, parentRegistry, additions, depth + 1, subs)
    )
  }

  if (subs) {
    const v = resolveExprValue(node, subs)
    if (Array.isArray(v)) return v
  }

  return null
}

const _itemsFunctionCallStack = []

function resolveFunctionCallItemsAlias(marker, argNodes, parentRegistry, additions, depth, subs) {
  const fn = functionMarkerNode(marker)
  if (!fn || depth > 8 || _itemsFunctionCallStack.length > 8 || _itemsFunctionCallStack.includes(fn)) {
    return null
  }

  const closureSubs = functionMarkerValue(marker)?.__strkFunctionSubs || []
  let localSubs = [
    ...closureSubs,
    ...(subs || []),
    ...bindParamNodes(fn.params, argNodes || [], subs || []),
  ]
  let localAdditions = additions

  function rememberArrayAlias(name, items) {
    if (!name || !Array.isArray(items)) return
    if (!localAdditions) localAdditions = new Map()
    localAdditions.set(name, items)
  }

  function resolveReturnedItems(expr) {
    const items = resolveItemsAlias(expr, parentRegistry, localAdditions, depth + 1, localSubs)
    if (items) return items
    const value = resolveExprValue(expr, localSubs)
    return Array.isArray(value) ? value : null
  }

  _itemsFunctionCallStack.push(fn)
  try {
    if (fn.body?.type !== 'BlockStatement') {
      return resolveReturnedItems(fn.body)
    }

    for (const stmt of fn.body.body || []) {
      if (stmt.type === 'FunctionDeclaration' && stmt.id?.name) {
        localSubs = [...localSubs, { paramName: stmt.id.name, item: functionMarker(stmt) }]
        continue
      }

      if (stmt.type === 'VariableDeclaration') {
        for (const d of stmt.declarations || []) {
          if (!d?.id || !d.init) continue

          if (d.id.type === 'Identifier') {
            const items = resolveItemsAlias(d.init, parentRegistry, localAdditions, depth + 1, localSubs)
            if (items) {
              rememberArrayAlias(d.id.name, items)
              localSubs = [...localSubs, { paramName: d.id.name, item: items }]
              continue
            }
          }

          const value = resolveExprValue(d.init, localSubs)
          if (value === undefined) continue
          const additionsForDecl = []
          bindDeclarationValue(d.id, value, additionsForDecl)
          if (additionsForDecl.length) localSubs = [...localSubs, ...additionsForDecl]
          if (d.id.type === 'Identifier' && Array.isArray(value)) rememberArrayAlias(d.id.name, value)
        }
        continue
      }

      if (stmt.type === 'ReturnStatement') {
        return resolveReturnedItems(stmt.argument)
      }
    }
  } finally {
    _itemsFunctionCallStack.pop()
  }
  return null
}

// Runtime selection patterns such as `items.find(...)` and `items[active]`
// choose one visible item, but every possible tab/panel image must exist in
// config. Return the candidate items plus an optional numeric selector name
// that can be rebound during expansion (`active` for `items[active]`).
const _selectedFunctionCallStack = []

function resolveFunctionCallSelectedItemSource(marker, argNodes, parentRegistry, additions, depth, subs) {
  const fn = functionMarkerNode(marker)
  if (!fn || _selectedFunctionCallStack.length > 8 || _selectedFunctionCallStack.includes(fn)) {
    return null
  }

  const closureSubs = functionMarkerValue(marker)?.__strkFunctionSubs || []
  let localSubs = [
    ...closureSubs,
    ...(subs || []),
    ...bindParamNodes(fn.params, argNodes || [], subs || []),
  ]
  let localAdditions = additions
  const selectedByName = new Map()

  function rememberArrayAlias(name, items) {
    if (!name || !Array.isArray(items)) return
    if (!localAdditions) localAdditions = new Map()
    localAdditions.set(name, items)
  }

  _selectedFunctionCallStack.push(fn)
  try {
    if (fn.body?.type !== 'BlockStatement') {
      return resolveSelectedItemSource(fn.body, parentRegistry, localAdditions, depth + 1, localSubs)
    }

    for (const stmt of fn.body.body || []) {
      if (stmt.type === 'FunctionDeclaration' && stmt.id?.name) {
        localSubs = [...localSubs, { paramName: stmt.id.name, item: functionMarker(stmt) }]
        continue
      }

      if (stmt.type === 'VariableDeclaration') {
        for (const d of stmt.declarations || []) {
          if (!d?.id || !d.init) continue

          if (d.id.type === 'Identifier') {
            const selected = resolveSelectedItemSource(
              d.init, parentRegistry, localAdditions, depth + 1, localSubs,
            )
            if (selected) selectedByName.set(d.id.name, selected)

            const value = resolveExprValue(d.init, localSubs)
            if (value !== undefined) localSubs = [...localSubs, { paramName: d.id.name, item: value }]

            const items = resolveItemsAlias(d.init, parentRegistry, localAdditions, depth + 1, localSubs)
            rememberArrayAlias(d.id.name, items)
            continue
          }

          const value = resolveExprValue(d.init, localSubs)
          if (value !== undefined) {
            const additionsForDecl = []
            bindDeclarationValue(d.id, value, additionsForDecl)
            if (additionsForDecl.length) localSubs = [...localSubs, ...additionsForDecl]
          }
        }
        continue
      }

      if (stmt.type === 'ReturnStatement') {
        if (stmt.argument?.type === 'Identifier' && selectedByName.has(stmt.argument.name)) {
          return selectedByName.get(stmt.argument.name)
        }
        return resolveSelectedItemSource(
          stmt.argument, parentRegistry, localAdditions, depth + 1, localSubs,
        )
      }
    }
  } finally {
    _selectedFunctionCallStack.pop()
  }
  return null
}

function resolveSelectedItemSource(node, parentRegistry, additions, depth = 0, subs = null) {
  if (!node || depth > 4) return null
  if (
    node.type === 'TSAsExpression' ||
    node.type === 'TSSatisfiesExpression' ||
    node.type === 'TSNonNullExpression' ||
    node.type === 'TypeCastExpression' ||
    node.type === 'ParenthesizedExpression'
  ) {
    return resolveSelectedItemSource(node.expression, parentRegistry, additions, depth + 1, subs)
  }
  if (
    node.type === 'LogicalExpression' &&
    (node.operator === '||' || node.operator === '??')
  ) {
    return (
      resolveSelectedItemSource(node.left, parentRegistry, additions, depth + 1, subs) ||
      resolveSelectedItemSource(node.right, parentRegistry, additions, depth + 1, subs)
    )
  }
  if (node.type === 'CallExpression' || node.type === 'OptionalCallExpression') {
    const calledFn = functionMarkerValue(resolveExprValue(node.callee, subs || []))
    if (calledFn) {
      const selected = resolveFunctionCallSelectedItemSource(
        calledFn, node.arguments || [], parentRegistry, additions, depth + 1, subs,
      )
      if (selected) return selected
    }
  }
  if (
    (node.type === 'CallExpression' || node.type === 'OptionalCallExpression') &&
    (
      (node.callee?.type === 'Identifier' && node.callee.name === 'useMemo') ||
      (
        (node.callee?.type === 'MemberExpression' || node.callee?.type === 'OptionalMemberExpression') &&
        !node.callee.computed &&
        node.callee.object?.type === 'Identifier' &&
        node.callee.object.name === 'React' &&
        node.callee.property?.type === 'Identifier' &&
        node.callee.property.name === 'useMemo'
      )
    )
  ) {
    const expression = callbackExpression(node.arguments?.[0])
    return expression
      ? resolveSelectedItemSource(expression, parentRegistry, additions, depth + 1, subs)
      : null
  }
  if (
    (node.type === 'CallExpression' || node.type === 'OptionalCallExpression') &&
    node.callee &&
    (node.callee.type === 'MemberExpression' || node.callee.type === 'OptionalMemberExpression') &&
    !node.callee.computed &&
    node.callee.property?.type === 'Identifier' &&
    node.callee.property.name === 'find'
  ) {
    const items = resolveItemsAlias(node.callee.object, parentRegistry, additions, depth + 1, subs)
    return items ? { items, indexName: null } : null
  }
  if (
    (node.type === 'MemberExpression' || node.type === 'OptionalMemberExpression') &&
    node.computed
  ) {
    const items = resolveItemsAlias(node.object, parentRegistry, additions, depth + 1, subs)
    const literalIndex =
      node.property?.type === 'NumericLiteral' ||
      node.property?.type === 'StringLiteral' ||
      (
        node.property?.type === 'TemplateLiteral' &&
        node.property.expressions.length === 0
      )
    const selectedIndex = literalIndex
      ? resolveExprValue(node.property, subs || [])
      : undefined
    if (items && Number.isInteger(selectedIndex)) {
      const selected = items[selectedIndex]
      return selected === undefined ? null : { items: [selected], indexName: null }
    }
    const indexName = node.property?.type === 'Identifier' ? node.property.name : null
    if (items) return { items, indexName }

    const roots = staticValueCandidates(node.object, parentRegistry, subs || [])
    const selectedItems = []
    for (const root of roots) {
      if (!root || typeof root !== 'object') continue
      if (selectedIndex !== undefined && selectedIndex !== null) {
        const selected = root[selectedIndex]
        if (selected !== undefined) selectedItems.push(selected)
        continue
      }
      if (Array.isArray(root)) selectedItems.push(...root)
      else selectedItems.push(...Object.values(root))
    }
    return selectedItems.length
      ? { items: mergeCandidateArrays([selectedItems]), indexName }
      : null
  }
  return null
}

function resolveStateSelectedItemSource(node, parentRegistry, additions, depth = 0, subs = null) {
  if (!node || depth > 4) return null
  if (
    node.type === 'TSAsExpression' ||
    node.type === 'TSSatisfiesExpression' ||
    node.type === 'TSNonNullExpression' ||
    node.type === 'TypeCastExpression' ||
    node.type === 'ParenthesizedExpression'
  ) {
    return resolveStateSelectedItemSource(node.expression, parentRegistry, additions, depth + 1, subs)
  }
  if (
    node.type === 'LogicalExpression' &&
    (node.operator === '||' || node.operator === '??')
  ) {
    return (
      resolveStateSelectedItemSource(node.left, parentRegistry, additions, depth + 1, subs) ||
      resolveStateSelectedItemSource(node.right, parentRegistry, additions, depth + 1, subs)
    )
  }
  if (
    (node.type === 'MemberExpression' || node.type === 'OptionalMemberExpression') &&
    node.computed
  ) {
    const items = resolveItemsAlias(node.object, parentRegistry, additions, depth + 1, subs)
    if (items?.length) {
      const indexName = node.property?.type === 'Identifier' ? node.property.name : null
      return { items, indexName }
    }
  }
  return resolveSelectedItemSource(node, parentRegistry, additions, depth + 1, subs)
}

function resolveArrayStateUpdateItems(node, previousParamName, parentRegistry, additions, subs, depth = 0) {
  if (!node || depth > 6) return null
  if (
    node.type === 'TSAsExpression' ||
    node.type === 'TSSatisfiesExpression' ||
    node.type === 'TSNonNullExpression' ||
    node.type === 'TypeCastExpression' ||
    node.type === 'ParenthesizedExpression'
  ) {
    return resolveArrayStateUpdateItems(node.expression, previousParamName, parentRegistry, additions, subs, depth + 1)
  }

  if (node.type === 'ArrowFunctionExpression' || node.type === 'FunctionExpression') {
    const prevName = node.params?.[0]?.type === 'Identifier'
      ? node.params[0].name
      : previousParamName
    const expression = callbackExpression(node)
    return expression
      ? resolveArrayStateUpdateItems(expression, prevName, parentRegistry, additions, subs, depth + 1)
      : null
  }

  if (node.type === 'ConditionalExpression') {
    return mergeCandidateArrays([
      resolveArrayStateUpdateItems(node.consequent, previousParamName, parentRegistry, additions, subs, depth + 1) || [],
      resolveArrayStateUpdateItems(node.alternate, previousParamName, parentRegistry, additions, subs, depth + 1) || [],
    ])
  }

  if (node.type === 'LogicalExpression' && (node.operator === '||' || node.operator === '??')) {
    return mergeCandidateArrays([
      resolveArrayStateUpdateItems(node.left, previousParamName, parentRegistry, additions, subs, depth + 1) || [],
      resolveArrayStateUpdateItems(node.right, previousParamName, parentRegistry, additions, subs, depth + 1) || [],
    ])
  }

  if (node.type === 'ArrayExpression') {
    const arrays = []
    const direct = []
    for (const el of node.elements || []) {
      if (!el) continue
      if (el.type === 'SpreadElement') {
        if (el.argument?.type === 'Identifier' && el.argument.name === previousParamName) continue
        const spread =
          resolveItemsAlias(el.argument, parentRegistry, additions, 0, subs) ||
          resolveExprValue(el.argument, subs)
        if (Array.isArray(spread)) arrays.push(spread)
        continue
      }
      const value = resolveExprValue(el, subs)
      if (value && typeof value === 'object' && !Array.isArray(value)) direct.push(value)
    }
    return mergeCandidateArrays([...arrays, direct])
  }

  const items =
    resolveItemsAlias(node, parentRegistry, additions, 0, subs) ||
    resolveExprValue(node, subs)
  return Array.isArray(items) ? items : null
}

function collectArrayStateSetterItems(blockNode, setterName, parentRegistry, baseAdditions, baseSubs) {
  if (!blockNode || !setterName) return null
  const found = []

  function append(items) {
    if (Array.isArray(items) && items.length) found.push(items)
  }

  function mergedAdditions(additions, name, items) {
    const next = additions ? new Map(additions) : new Map()
    next.set(name, items)
    return next
  }

  function walk(node, additions, subs, depth = 0) {
    if (!node || typeof node !== 'object' || depth > 16) return

    if (node.type === 'BlockStatement') {
      let localAdditions = additions
      let localSubs = subs
      for (const stmt of node.body || []) {
        if (stmt?.type === 'VariableDeclaration') {
          for (const d of stmt.declarations || []) {
            if (!d?.id || !d.init) continue
            const beforeSubs = localSubs
            if (d.id.type === 'Identifier') {
              const value = resolveExprValue(d.init, beforeSubs)
              if (value !== undefined) {
                localSubs = [...localSubs, { paramName: d.id.name, item: value }]
              }
              const items = resolveItemsAlias(d.init, parentRegistry, localAdditions, 0, beforeSubs)
              if (Array.isArray(items)) {
                localAdditions = mergedAdditions(localAdditions, d.id.name, items)
              }
            }
            walk(d.init, localAdditions, localSubs, depth + 1)
          }
          continue
        }
        walk(stmt, localAdditions, localSubs, depth + 1)
      }
      return
    }

    if (
      (node.type === 'CallExpression' || node.type === 'OptionalCallExpression') &&
      node.callee?.type === 'Identifier' &&
      node.callee.name === setterName
    ) {
      append(resolveArrayStateUpdateItems(node.arguments?.[0], null, parentRegistry, additions, subs))
    }

    for (const key in node) {
      if (NON_TRAVERSAL_KEYS.has(key)) continue
      const value = node[key]
      if (Array.isArray(value)) {
        for (const child of value) walk(child, additions, subs, depth + 1)
      } else if (value && typeof value === 'object') {
        walk(value, additions, subs, depth + 1)
      }
    }
  }

  walk(blockNode, baseAdditions, baseSubs)
  return found.length ? mergeCandidateArrays(found) : null
}

// Walk a BlockStatement's direct statements (NOT nested blocks — those get
// their own scope when the visitor recurses into them).
//   regMap additions — `const list = items.filter(...)` for `.map(list => …)`
//   itemAliases — runtime-selected items (`find(...)` / `items[active]`)
//                 expanded across candidate render contexts
//   valueSubs — `const id = item.id` / `const { images } = world` aliases
// Returns { regMap, itemAliases, valueSubs } (empty collections when none).
function extendRegistryWithBlock(parentRegistry, blockNode, subs) {
  const emptyAliases = new Map()
  const emptySubs = []
  if (!blockNode || blockNode.type !== 'BlockStatement') {
    return { regMap: parentRegistry, itemAliases: emptyAliases, valueSubs: emptySubs }
  }
  const stmts = blockNode.body || []
  let regAdditions = null
  let itemAliasAdditions = null
  const valueSubs = []
  const localArrayNames = new Set()
  const addValueSub = (name, value) => {
    if (!name || value === undefined) return
    valueSubs.push({ paramName: name, item: value })
    if (Array.isArray(value)) {
      localArrayNames.add(name)
      if (!regAdditions) regAdditions = new Map()
      regAdditions.set(name, value)
    }
  }
  const currentSubs = () => valueSubs.length ? [...subs, ...valueSubs] : subs

  const applyArrayPushMutation = (expr, blockedNames = null) => {
    if (
      !expr ||
      (expr.type !== 'CallExpression' && expr.type !== 'OptionalCallExpression') ||
      !expr.callee ||
      (expr.callee.type !== 'MemberExpression' && expr.callee.type !== 'OptionalMemberExpression') ||
      expr.callee.computed ||
      expr.callee.property?.type !== 'Identifier' ||
      expr.callee.property.name !== 'push' ||
      expr.callee.object?.type !== 'Identifier'
    ) return false

    const targetName = expr.callee.object.name
    if (blockedNames?.has(targetName)) return false
    if (!localArrayNames.has(targetName)) return false

    const localSubs = currentSubs()
    const base = resolveExprValue(expr.callee.object, localSubs)
    if (!Array.isArray(base)) return false

    const pushed = []
    for (const arg of expr.arguments || []) {
      if (arg?.type === 'SpreadElement') {
        const spread =
          resolveItemsAlias(arg.argument, parentRegistry, regAdditions, 0, localSubs) ||
          resolveExprValue(arg.argument, localSubs)
        if (!Array.isArray(spread)) return false
        pushed.push(...spread)
        continue
      }
      const value = resolveExprValue(arg, localSubs)
      if (value === undefined) return false
      pushed.push(value)
    }
    if (!pushed.length) return false
    addValueSub(targetName, mergeCandidateArrays([base, pushed]))
    return true
  }

  const collectDeclaredNames = (stmt, out) => {
    if (!stmt) return
    if (stmt.type === 'FunctionDeclaration' && stmt.id?.name) {
      out.add(stmt.id.name)
      return
    }
    if (stmt.type !== 'VariableDeclaration') return
    for (const d of stmt.declarations || []) {
      paramShapeNames(paramShapeOf(d.id), out)
    }
  }

  const applyArrayPushMutationsFromStatement = (stmt, depth = 0, blockedNames = null) => {
    if (!stmt || depth > 4) return
    if (stmt.type === 'ExpressionStatement') {
      applyArrayPushMutation(stmt.expression, blockedNames)
      return
    }
    if (stmt.type === 'BlockStatement') {
      const blockBlockedNames = new Set(blockedNames || [])
      for (const child of stmt.body || []) collectDeclaredNames(child, blockBlockedNames)
      for (const child of stmt.body || []) {
        applyArrayPushMutationsFromStatement(child, depth + 1, blockBlockedNames)
      }
      return
    }
    if (stmt.type === 'IfStatement') {
      const test = resolveExprValue(stmt.test, currentSubs())
      if (test === true) {
        applyArrayPushMutationsFromStatement(stmt.consequent, depth + 1, blockedNames)
      } else if (test === false) {
        applyArrayPushMutationsFromStatement(stmt.alternate, depth + 1, blockedNames)
      } else {
        applyArrayPushMutationsFromStatement(stmt.consequent, depth + 1, blockedNames)
        applyArrayPushMutationsFromStatement(stmt.alternate, depth + 1, blockedNames)
      }
    }
  }

  for (const stmt of stmts) {
    if (!stmt) continue
    if (stmt.type === 'FunctionDeclaration' && stmt.id?.name) {
      addValueSub(stmt.id.name, functionMarker(stmt))
      continue
    }
    if (stmt.type !== 'VariableDeclaration') {
      applyArrayPushMutationsFromStatement(stmt)
      continue
    }
    for (const d of stmt.declarations) {
      if (!d || !d.id || !d.init) continue
      const localSubs = currentSubs()

      if (d.id.type === 'ArrayPattern') {
        if (
          d.init.type === 'CallExpression' &&
          (
            (d.init.callee?.type === 'Identifier' && d.init.callee.name === 'useState') ||
            (
              d.init.callee?.type === 'MemberExpression' &&
              !d.init.callee.computed &&
              d.init.callee.object?.type === 'Identifier' &&
              d.init.callee.object.name === 'React' &&
              d.init.callee.property?.type === 'Identifier' &&
              d.init.callee.property.name === 'useState'
            )
          ) &&
          d.id.elements?.[0]?.type === 'Identifier' &&
          d.id.elements?.[1]?.type === 'Identifier'
        ) {
          if (!itemAliasAdditions) itemAliasAdditions = new Map()
          const stateName = d.id.elements[0].name
          const setterName = d.id.elements[1].name
          const stateSelection = {
            items: [],
            indexName: null,
            setterName,
          }
          itemAliasAdditions.set(d.id.elements[0].name, stateSelection)
          const initialSelection = resolveStateSelectedItemSource(
            d.init.arguments?.[0], parentRegistry, regAdditions, 0, localSubs,
          )
          const initialItems =
            resolveItemsAlias(d.init.arguments?.[0], parentRegistry, regAdditions, 0, localSubs) ||
            resolveExprValue(d.init.arguments?.[0], localSubs)
          const selectedStateItems = mergeCandidateArrays([
            initialSelection?.items || [],
          ])
          if (initialSelection?.indexName) stateSelection.indexName = initialSelection.indexName
          if (selectedStateItems.length) {
            stateSelection.items = selectedStateItems
          } else if (
            initialItems !== undefined &&
            initialItems !== null &&
            !Array.isArray(initialItems)
          ) {
            addValueSub(stateName, initialItems)
          }
          const updatedItems = collectArrayStateSetterItems(
            blockNode, setterName, parentRegistry, regAdditions, localSubs,
          )
          const stateItems = mergeCandidateArrays([
            Array.isArray(initialItems) ? initialItems : [],
            Array.isArray(updatedItems) ? updatedItems : [],
          ])
          if (stateItems.length) addValueSub(stateName, stateItems)
          continue
        }
        const arr =
          resolveItemsAlias(d.init, parentRegistry, regAdditions, 0, localSubs) ||
          resolveExprValue(d.init, localSubs)
        if (!Array.isArray(arr)) continue
        let offset = 0
        for (const el of d.id.elements || []) {
          if (!el) {
            offset++
            continue
          }
          if (el.type === 'RestElement' && el.argument?.type === 'Identifier') {
            addValueSub(el.argument.name, arr.slice(offset))
            break
          }
          if (el.type === 'Identifier') {
            addValueSub(el.name, arr[offset])
          } else if (
            el.type === 'AssignmentPattern' &&
            el.left?.type === 'Identifier'
          ) {
            const fallback = resolveExprValue(el.right, localSubs)
            addValueSub(el.left.name, arr[offset] === undefined ? fallback : arr[offset])
          }
          offset++
        }
        continue
      }

      if (d.id.type === 'ObjectPattern') {
        const obj = resolveExprValue(d.init, localSubs)
        if (!obj || typeof obj !== 'object') continue
        for (const prop of d.id.properties || []) {
          if (prop.type !== 'ObjectProperty' || prop.computed) continue
          if (prop.key?.type !== 'Identifier' && prop.key?.type !== 'StringLiteral') continue
          const propName = prop.key.type === 'Identifier' ? prop.key.name : prop.key.value
          let localName = null
          if (prop.value?.type === 'Identifier') {
            localName = prop.value.name
          } else if (
            prop.value?.type === 'AssignmentPattern' &&
            prop.value.left?.type === 'Identifier'
          ) {
            localName = prop.value.left.name
          }
          if (localName) addValueSub(localName, obj[propName])
        }
        continue
      }

      if (d.id.type !== 'Identifier') continue
      const selected = resolveSelectedItemSource(d.init, parentRegistry, regAdditions, 0, localSubs)
      if (selected) {
        if (!itemAliasAdditions) itemAliasAdditions = new Map()
        itemAliasAdditions.set(d.id.name, selected)
        continue
      }
      const items = resolveItemsAlias(d.init, parentRegistry, regAdditions, 0, localSubs)
      if (items) {
        addValueSub(d.id.name, items)
        if (!regAdditions) regAdditions = new Map()
        regAdditions.set(d.id.name, items)
        continue
      }
      const value = resolveExprValue(d.init, localSubs)
      if (value !== undefined) addValueSub(d.id.name, value)
    }
  }
  let regMap = parentRegistry
  if (regAdditions) {
    regMap = new Map(parentRegistry)
    for (const [k, v] of regAdditions) regMap.set(k, v)
  }
  const itemAliases = itemAliasAdditions || emptyAliases
  return { regMap, itemAliases, valueSubs: valueSubs.length ? valueSubs : emptySubs }
}

// Expand a JSX subtree once per runtime-selected item. For index-selected
// panels, bind the selector index as well so sibling filtering can resolve.
function selectedItemSubs(testName, selection, item, index) {
  const out = [{ paramName: testName, item }]
  if (selection.indexName) out.push({ paramName: selection.indexName, item: index })
  return out
}

function expandItemAliasBranch(testName, selection, branchNode, subs, phase, regMap, itemAliases, visit) {
  for (let index = 0; index < selection.items.length; index++) {
    const item = selection.items[index]
    visit(branchNode, [...subs, ...selectedItemSubs(testName, selection, item, index)], phase, regMap, itemAliases)
  }
}

function hasSubstitution(subs, name) {
  for (let i = subs.length - 1; i >= 0; i--) {
    if (subs[i].paramName === name) return true
  }
  return false
}

function subtreeReferencesIdentifier(node, name) {
  if (!node || typeof node !== 'object') return false
  if (node.type === 'Identifier' && node.name === name) return true
  for (const key in node) {
    if (NON_TRAVERSAL_KEYS.has(key)) continue
    const value = node[key]
    if (Array.isArray(value)) {
      if (value.some(child => subtreeReferencesIdentifier(child, name))) return true
    } else if (value && typeof value === 'object' && subtreeReferencesIdentifier(value, name)) {
      return true
    }
  }
  return false
}

// Keys on AST nodes we should not recurse into.
const NON_TRAVERSAL_KEYS = new Set([
  'loc', 'start', 'end', 'range', 'extra',
  'leadingComments', 'trailingComments', 'innerComments',
  'tokens', 'comments',
])

function statementAlwaysExits(node) {
  if (!node || typeof node !== 'object') return false
  if (node.type === 'ReturnStatement' || node.type === 'ThrowStatement') return true
  if (node.type === 'BlockStatement') {
    return (node.body || []).some(stmt => statementAlwaysExits(stmt))
  }
  if (node.type === 'IfStatement') {
    return Boolean(node.alternate) &&
      statementAlwaysExits(node.consequent) &&
      statementAlwaysExits(node.alternate)
  }
  return false
}

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

// Translate callback/component params into bindable shapes. AI output often
// destructures nested image metadata or uses `Object.entries(record).map(
// ([key, value]) => ...)`, so support object and array patterns recursively.
function paramShapeOf(param) {
  if (!param) return null
  if (param.type === 'AssignmentPattern') {
    const shape = paramShapeOf(param.left)
    if (shape) shape.defaultNode = param.right
    return shape
  }
  if (param.type === 'Identifier') return { kind: 'identifier', name: param.name }
  if (param.type === 'ObjectPattern') {
    const keys = []
    for (const prop of param.properties) {
      if (prop.type === 'RestElement') continue
      if (prop.type !== 'ObjectProperty' || prop.computed) return null
      if (prop.key?.type !== 'Identifier' && prop.key?.type !== 'StringLiteral') return null
      const shape = paramShapeOf(prop.value)
      if (!shape) return null
      keys.push({
        prop: prop.key.type === 'Identifier' ? prop.key.name : prop.key.value,
        shape,
      })
    }
    return { kind: 'object', keys }
  }
  if (param.type === 'ArrayPattern') {
    const elements = []
    for (let index = 0; index < param.elements.length; index++) {
      const element = param.elements[index]
      if (!element) continue
      if (element.type === 'RestElement') return null
      const shape = paramShapeOf(element)
      if (!shape) return null
      elements.push({ index, shape })
    }
    return { kind: 'array', elements }
  }
  return null
}

function bindParamShape(shape, value, out) {
  if (!shape) return
  if (value === undefined && shape.defaultNode) {
    value = literalValue(shape.defaultNode)
  }
  if (shape.kind === 'identifier') {
    out.push({ paramName: shape.name, item: value })
    return
  }
  if (shape.kind === 'object') {
    if (!value || typeof value !== 'object') return
    for (const { prop, shape: child } of shape.keys) {
      bindParamShape(child, value[prop], out)
    }
    return
  }
  if (shape.kind === 'array' && Array.isArray(value)) {
    for (const { index, shape: child } of shape.elements) {
      bindParamShape(child, value[index], out)
    }
  }
}

function componentFromFn(fn, moduleScope = null, sourceFile = null) {
  if (!fn) return null
  const shape = paramShapeOf(fn.params?.[0])
  return {
    paramShape: shape,
    body: fn.body,
    componentRegistry: null,
    arrayRegistry: moduleScope?.arrayRegistry || null,
    moduleSubs: moduleScope?.moduleSubs || [],
    sourceFile: sourceFile || null,
  }
}

function functionRegistrySubs(reg) {
  return Array.from(reg || new Map(), ([paramName, fn]) => ({ paramName, item: functionMarker(fn) }))
}

function buildModuleStaticScope(ast, currentFile = null, onImportResolved = null, localFunctions = null) {
  const arrayRegistry = buildArrayRegistry(ast, currentFile, onImportResolved)
  const staticRegistry = buildStaticValueRegistry(ast, currentFile, onImportResolved)
  for (const [name, value] of staticRegistry) {
    if (Array.isArray(value) && !arrayRegistry.has(name)) arrayRegistry.set(name, value)
  }
  for (const [name, value] of arrayRegistry) {
    if (!staticRegistry.has(name)) staticRegistry.set(name, value)
  }
  const moduleSubs = [
    ...Array.from(staticRegistry, ([paramName, item]) => ({ paramName, item })),
    ...functionRegistrySubs(localFunctions || buildLocalFunctionRegistry(ast, currentFile, onImportResolved)),
  ]
  return { arrayRegistry, moduleSubs }
}

function moduleClosureSubs(ast, currentFile = null, onImportResolved = null, localFunctions = null) {
  return buildModuleStaticScope(ast, currentFile, onImportResolved, localFunctions).moduleSubs
}

function findNamedFunctionExport(ast, exportName, currentFile = null, onImportResolved = null) {
  if (!ast || !exportName) return null
  const local = buildLocalFunctionRegistry(ast, currentFile, onImportResolved)
  const closureSubs = moduleClosureSubs(ast, currentFile, onImportResolved, local)
  const body = ast.program?.body || []

  if (local.has(exportName)) {
    for (const stmt of body) {
      if (stmt.type !== 'ExportNamedDeclaration' || stmt.source) continue
      if (stmt.declaration?.type === 'FunctionDeclaration' && stmt.declaration.id?.name === exportName) {
        return functionMarker(local.get(exportName), closureSubs)
      }
      if (stmt.declaration?.type === 'VariableDeclaration') {
        for (const d of stmt.declaration.declarations || []) {
          if (d.id?.name === exportName) return functionMarker(local.get(exportName), closureSubs)
        }
      }
    }
  }

  for (const stmt of body) {
    if (stmt.type !== 'ExportNamedDeclaration' || stmt.source) continue
    for (const spec of stmt.specifiers || []) {
      if (spec.exported?.name === exportName && spec.local?.name && local.has(spec.local.name)) {
        return functionMarker(local.get(spec.local.name), closureSubs)
      }
    }
  }
  return null
}

function findDefaultFunctionExport(ast, currentFile = null, onImportResolved = null) {
  if (!ast) return null
  const local = buildLocalFunctionRegistry(ast, currentFile, onImportResolved)
  const closureSubs = moduleClosureSubs(ast, currentFile, onImportResolved, local)
  for (const stmt of ast.program?.body || []) {
    if (stmt.type !== 'ExportDefaultDeclaration') continue
    const decl = stmt.declaration
    const fn = extractFnDecl(decl)
    if (fn) return functionMarker(fn, closureSubs)
    if (decl.type === 'Identifier' && local.has(decl.name)) return functionMarker(local.get(decl.name), closureSubs)
  }
  return null
}

function buildLocalFunctionRegistry(ast, currentFile = null, onImportResolved = null) {
  const reg = new Map()
  for (const stmt of ast.program?.body || []) {
    const decl =
      stmt.type === 'ExportNamedDeclaration' && !stmt.source
        ? stmt.declaration
        : stmt
    if (decl?.type === 'FunctionDeclaration' && decl.id?.name) {
      reg.set(decl.id.name, decl)
      continue
    }
    if (decl?.type !== 'VariableDeclaration') continue
    for (const d of decl.declarations || []) {
      if (d.id?.type !== 'Identifier') continue
      const fn = extractFnDecl(d.init)
      if (fn) reg.set(d.id.name, fn)
    }
  }

  for (const stmt of ast.program?.body || []) {
    if (stmt.type !== 'ImportDeclaration') continue
    const resolved = resolveImportPath(currentFile, stmt.source.value)
    if (!resolved) continue
    const importedAst = parseFileCached(resolved)
    if (!importedAst) continue
    if (typeof onImportResolved === 'function') onImportResolved(resolved)

    for (const spec of stmt.specifiers || []) {
      const localName = spec.local?.name
      if (!localName) continue
      let fn = null
      if (spec.type === 'ImportDefaultSpecifier') {
        fn = findDefaultFunctionExport(importedAst, resolved, onImportResolved)
      } else if (spec.type === 'ImportSpecifier') {
        fn = findNamedFunctionExport(importedAst, spec.imported?.name || localName, resolved, onImportResolved)
      }
      if (fn) reg.set(localName, fn)
    }
  }
  return reg
}

function findNamedComponentExport(ast, exportName, currentFile = null, onImportResolved = null) {
  if (!ast || !exportName) return null
  const local = buildLocalComponentRegistry(ast, currentFile, onImportResolved)
  const moduleScope = buildModuleStaticScope(ast, currentFile, onImportResolved)
  const body = ast.program?.body || []

  if (local.has(exportName)) {
    for (const stmt of body) {
      if (stmt.type !== 'ExportNamedDeclaration' || stmt.source) continue
      if (stmt.declaration?.type === 'FunctionDeclaration' && stmt.declaration.id?.name === exportName) {
        return local.get(exportName)
      }
      if (stmt.declaration?.type === 'VariableDeclaration') {
        for (const d of stmt.declaration.declarations || []) {
          if (d.id?.name === exportName) return local.get(exportName)
        }
      }
    }
  }

  for (const stmt of body) {
    if (stmt.type !== 'ExportNamedDeclaration' || stmt.source) continue
    for (const spec of stmt.specifiers || []) {
      if (spec.exported?.name === exportName && spec.local?.name && local.has(spec.local.name)) {
        return local.get(spec.local.name)
      }
    }
  }
  return null
}

function findDefaultComponentExport(ast, currentFile = null, onImportResolved = null) {
  if (!ast) return null
  const local = buildLocalComponentRegistry(ast, currentFile, onImportResolved)
  const moduleScope = buildModuleStaticScope(ast, currentFile, onImportResolved)
  for (const stmt of ast.program?.body || []) {
    if (stmt.type !== 'ExportDefaultDeclaration') continue
    const decl = stmt.declaration
    const fn = extractFnDecl(decl)
    if (fn) {
      if (decl.id?.name && local.has(decl.id.name)) return local.get(decl.id.name)
      const comp = componentFromFn(fn, moduleScope, currentFile)
      if (comp) comp.componentRegistry = local
      return comp
    }
    if (decl.type === 'Identifier' && local.has(decl.name)) return local.get(decl.name)
  }
  return null
}

// Walk the file's top-level statements and collect every local component-like
// binding. Returns Map<name, { paramShape, body }>.
function buildLocalComponentRegistry(ast, currentFile = null, onImportResolved = null) {
  const reg = new Map()
  const localComponents = []
  const moduleScope = buildModuleStaticScope(ast, currentFile, onImportResolved)
  const body = ast.program?.body || []

  function registerFromDecl(name, fn) {
    if (!name || !fn) return
    const comp = componentFromFn(fn, moduleScope, currentFile)
    if (comp) {
      reg.set(name, comp)
      localComponents.push(comp)
    }
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

  for (const stmt of body) {
    if (stmt.type !== 'ImportDeclaration') continue
    const resolved = resolveImportPath(currentFile, stmt.source.value)
    if (!resolved) continue
    let importedCode = ''
    try { importedCode = fs.readFileSync(resolved, 'utf-8') } catch { continue }
    if (!hasStrkMarkers(importedCode) && !mayReachStrkMarkersViaLocalComponent(importedCode)) continue
    const importedAst = parseFileCached(resolved)
    if (!importedAst) continue
    if (typeof onImportResolved === 'function') onImportResolved(resolved)

    for (const spec of stmt.specifiers || []) {
      const localName = spec.local?.name
      if (!localName) continue
      let comp = null
      if (spec.type === 'ImportDefaultSpecifier') {
        comp = findDefaultComponentExport(importedAst, resolved, onImportResolved)
      } else if (spec.type === 'ImportSpecifier') {
        comp = findNamedComponentExport(importedAst, spec.imported?.name || localName, resolved, onImportResolved)
      }
      if (comp) reg.set(localName, comp)
    }
  }

  for (const comp of localComponents) {
    comp.componentRegistry = reg
  }

  return reg
}

// Given a JSX call-site like `<AnimalCard animal={animal} title="Hi"/>`,
// produce the substitution scopes the component body should be visited with.
// Returns null if no usable bindings could be derived (in which case the
// caller should fall back to normal traversal).
function setterReferenceName(value) {
  return value && typeof value === 'object' && !Array.isArray(value)
    ? value.__strkSetterName || null
    : null
}

function setterNameForIdentifier(name, itemAliases) {
  if (!name || !itemAliases) return null
  for (const selection of itemAliases.values()) {
    if (selection?.setterName === name) return name
  }
  return null
}

function buildComponentCallSubs(comp, openingElement, currentSubs, itemAliases = null) {
  const attrs = openingElement?.attributes || []
  const attrValueByName = {}
  const passedSetterNames = new Set()

  for (const a of attrs) {
    if (a.type !== 'JSXAttribute' || a.value?.type !== 'JSXExpressionContainer') continue
    const expr = a.value.expression
    if (expr?.type !== 'Identifier') continue
    const setterName = setterNameForIdentifier(expr.name, itemAliases)
    if (setterName) passedSetterNames.add(setterName)
  }

  function evalAttr(valueNode) {
    if (valueNode == null) return true
    if (valueNode.type === 'StringLiteral') return valueNode.value
    if (valueNode.type === 'JSXExpressionContainer') {
      if (valueNode.expression?.type === 'Identifier') {
        const setterName = setterNameForIdentifier(valueNode.expression.name, itemAliases)
        if (setterName) return { __strkSetterName: setterName }
        const selection = itemAliases?.get(valueNode.expression.name)
        if (selection?.setterName && passedSetterNames.has(selection.setterName)) {
          return undefined
        }
      }
      return resolveExprValue(valueNode.expression, currentSubs)
    }
    return undefined
  }

  for (const a of attrs) {
    if (a.type === 'JSXSpreadAttribute') {
      const spreadObj = resolveExprValue(a.argument, currentSubs)
      if (spreadObj && typeof spreadObj === 'object' && !Array.isArray(spreadObj)) {
        for (const [k, v] of Object.entries(spreadObj)) attrValueByName[k] = v
      }
      continue
    }
    if (a.type !== 'JSXAttribute' || a.name?.type !== 'JSXIdentifier') continue
    const v = evalAttr(a.value)
    if (v !== undefined) attrValueByName[a.name.name] = v
  }

  if (!comp.paramShape) return []
  if (!Object.keys(attrValueByName).length) return null
  const out = []
  bindParamShape(comp.paramShape, attrValueByName, out)
  return out.length ? out : null
}

// How many leading Title-Case / ALL-CAPS words to keep when deriving a
// fallback from a pure-literal `data-strk-img` value (no `[xxx]` placeholders).
// Two is a sweet spot: most landmark proper-noun phrases ("James Webb",
// "Crab Nebula", "Andromeda Galaxy", "Hubble Telescope") survive the cap,
// while longer chains that empirically AND-match zero on the upstream
// image-search index get trimmed (e.g. "James Webb Space Telescope JWST"
// → 0 results, but "James Webb" → many).
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
// Returns: Array<{ imgId, query, ratio, width, kind, sourceFile?, sourceLine? }>
//
// Options:
//   filePath:           absolute path of `code`. Required to resolve cross-file
//                       data imports (otherwise only same-file consts are seen).
//   onImportResolved:   called with the absolute path of every imported data
//                       file we parsed; pass this to `this.addWatchFile` in
//                       vite's transform hook so edits invalidate properly.
// ---------------------------------------------------------------------------
export function extractStrkEntries(code, options = {}) {
  if (!hasStrkMarkers(code) && !mayReachStrkMarkersViaLocalComponent(code)) return []
  const { filePath = null, onImportResolved = null } = options
  const codeHash = filePath ? md5Hex(code) : null
  const cached = codeHash ? _getExtractCacheHit(filePath, codeHash) : null
  if (cached) {
    if (typeof onImportResolved === 'function') {
      const row = _extractCache.get(filePath)
      for (const dep of row?.imports || []) onImportResolved(dep.path)
    }
    return cached
  }

  const imports = []
  const wrappedOptions = {
    ...options,
    onImportResolved: (p) => {
      imports.push(p)
      if (typeof onImportResolved === 'function') onImportResolved(p)
    },
  }
  const ast = parseJsxOnce(code)
  if (!ast) {
    warnParseFailure(filePath)
    return []
  }
  const entries = extractStrkEntriesFromAst(ast, wrappedOptions)
  if (codeHash) _setExtractCache(filePath, codeHash, imports, entries)
  return entries
}

// Variant for callers that already have a parsed AST (e.g. the Vite transform
// hook, which also feeds the same AST to `inlineBuildImageSourcesFromAst`).
// Avoids reparsing the same file twice per build.
export function extractStrkEntriesFromAst(ast, options = {}) {
  const { filePath = null, onImportResolved = null, warnUnresolved = true } = options
  const registry = buildArrayRegistry(ast, filePath, onImportResolved)
  const staticRegistry = buildStaticValueRegistry(ast, filePath, onImportResolved)
  for (const [name, value] of staticRegistry) {
    if (Array.isArray(value) && !registry.has(name)) registry.set(name, value)
  }
  for (const [name, value] of registry) {
    if (!staticRegistry.has(name)) staticRegistry.set(name, value)
  }
  const componentRegistry = buildLocalComponentRegistry(ast, filePath, onImportResolved)
  const functionRegistry = buildLocalFunctionRegistry(ast, filePath, onImportResolved)
  // Let ordinary JSX expressions read registered static values too:
  // `content.items[0].id`, `[items[1], items[2]].map(...)`, and id prefixes
  // assembled from constants are common generated forms.
  const registrySubs = [
    ...Array.from(staticRegistry, ([paramName, item]) => ({ paramName, item })),
    ...Array.from(functionRegistry, ([paramName, fn]) => ({ paramName, item: functionMarker(fn) })),
  ]
  // Guard against recursive component calls during a single expansion chain
  // (e.g. <Foo/> rendering <Foo/> would otherwise visit forever).
  const inlineStack = new Set()
  const componentRegistryStack = [componentRegistry]
  const sourceFileStack = [filePath || null]
  const sourceContextStack = []
  const idTextRecords = new Map()
  const headingTextRecords = []
  const entries = []
  const unresolvedSlotNodes = new Map()
  const resolvedSlotNodes = new Set()

  function markerDeclared(attrs, kind) {
    const prefix = kind === 'bg' ? 'data-strk-bg' : 'data-strk-img'
    return (attrs || []).some(attr =>
      attr.type === 'JSXAttribute' &&
      (attr.name?.name === prefix || attr.name?.name === prefix + '-id')
    )
  }

  function markSlotResolution(opening, kind, resolved) {
    const key = kind + ':' + (opening?.start ?? 'unknown')
    if (resolved) {
      resolvedSlotNodes.add(key)
      return
    }
    if (!markerDeclared(opening?.attributes, kind)) return
    unresolvedSlotNodes.set(key, opening?.loc?.start?.line || null)
  }

  function scopedBindingSnapshot(subs) {
    const bindings = []
    const names = new Set()
    for (let i = subs.length - 1; i >= 0; i--) {
      if (names.has(subs[i].paramName)) continue
      names.add(subs[i].paramName)
      bindings.push(subs[i])
    }
    return bindings
  }

  function normalizeQueryText(text) {
    return String(text || '').replace(/\s+/g, ' ').trim()
  }

  function recordIdText(id, text, subs) {
    const normalized = normalizeQueryText(text)
    if (!normalized) return
    const bindings = scopedBindingSnapshot(subs)
    const records = idTextRecords.get(id) || []
    records.push({ bindings, text: normalized })
    idTextRecords.set(id, records)
  }

  function recordHeadingText(text, subs) {
    const normalized = normalizeQueryText(text)
    if (!normalized) return
    headingTextRecords.push({
      bindings: scopedBindingSnapshot(subs),
      text: normalized,
    })
  }

  function recordMatchesSubs(record, subs) {
    for (const binding of record.bindings) {
      let value
      let found = false
      for (let i = subs.length - 1; i >= 0; i--) {
        if (subs[i].paramName === binding.paramName) {
          value = subs[i].item
          found = true
          break
        }
      }
      if (!found || !isSameStaticValue(value, binding.item)) return false
    }
    return true
  }

  function lookupHeadingText(subs) {
    let best = null
    let bestScore = -1
    for (const record of headingTextRecords) {
      if (!recordMatchesSubs(record, subs)) continue
      if (record.bindings.length > bestScore) {
        best = record.text
        bestScore = record.bindings.length
      }
    }
    if (best) return best
    if (
      headingTextRecords.length &&
      headingTextRecords.every(record => record.text === headingTextRecords[0].text)
    ) {
      return headingTextRecords[0].text
    }
    return ''
  }

  function jsxNameLabel(nameNode) {
    if (!nameNode) return ''
    if (nameNode.type === 'JSXIdentifier') return nameNode.name
    if (nameNode.type === 'JSXMemberExpression') return jsxNameLabel(nameNode.property)
    return ''
  }

  function isSameStaticValue(a, b) {
    if (Object.is(a, b)) return true
    if (Array.isArray(a) || Array.isArray(b)) {
      if (!Array.isArray(a) || !Array.isArray(b) || a.length !== b.length) return false
      return a.every((value, index) => isSameStaticValue(value, b[index]))
    }
    if (a && b && typeof a === 'object' && typeof b === 'object') {
      const aKeys = Object.keys(a)
      const bKeys = Object.keys(b)
      if (aKeys.length !== bKeys.length) return false
      return aKeys.every(key => Object.prototype.hasOwnProperty.call(b, key) && isSameStaticValue(a[key], b[key]))
    }
    return false
  }

  function lookupIdText(id, subs) {
    const records = idTextRecords.get(id) || []
    let best = null
    let bestScore = -1
    for (const record of records) {
      let matches = true
      for (const binding of record.bindings) {
        let value
        let found = false
        for (let i = subs.length - 1; i >= 0; i--) {
          if (subs[i].paramName === binding.paramName) {
            value = subs[i].item
            found = true
            break
          }
        }
        if (!found || !isSameStaticValue(value, binding.item)) {
          matches = false
          break
        }
      }
      if (matches && record.bindings.length > bestScore) {
        best = record.text
        bestScore = record.bindings.length
      }
    }
    if (!best && records.length && records.every(record => record.text === records[0].text)) {
      return records[0].text
    }
    if (!best && !records.length) {
      for (const suffix of ['-name', '-title']) {
        if (id.endsWith(suffix)) {
          const baseText = lookupIdText(id.slice(0, -suffix.length), subs)
          if (baseText) return baseText
        }
      }
    }
    return best || ''
  }

  // Collect the visible text inside a JSXElement under the given subs.
  // Handles JSXText and `{expr}` containers whose expr resolves statically.
  // For void/self-closing elements generated with useful labels (commonly
  // `<img id={...} alt={...}>`), fall back to label-like attributes so `[id]`
  // references still produce a meaningful stock-image query.
  function collectText(jsxElement, subs) {
    const parts = []

    function collectFromChild(c) {
      if (!c) return
      if (c.type === 'JSXText') {
        const t = c.value.trim()
        if (t) parts.push(t)
      } else if (c.type === 'JSXExpressionContainer') {
        const v = resolveExpr(c.expression, subs)
        if (typeof v === 'string') {
          const t = v.trim()
          if (t) parts.push(t)
        }
      } else if (c.type === 'JSXElement' || c.type === 'JSXFragment') {
        for (const child of c.children || []) {
          collectFromChild(child)
        }
      }
    }

    for (const c of jsxElement.children || []) collectFromChild(c)

    if (!parts.length) {
      const attrs = jsxElement.openingElement?.attributes || []
      for (const name of ['alt', 'aria-label', 'title']) {
        const t = resolveJsxAttrString(attrs, name, subs)
        if (typeof t === 'string' && t.trim()) {
          parts.push(t.trim())
          break
        }
      }
    }
    return parts.join(' ')
  }

  function resolveQueryPlaceholder(id, subs) {
    const text = lookupIdText(id, subs)
    if (text) return text
    // Bracket references are supposed to be DOM ids, but AI output sometimes
    // emits plain search terms like `[Double Folding Machine]`. Since HTML ids
    // must not contain whitespace, keep those terms as literals instead of
    // collapsing the whole query to an empty string. ID-like misses stay empty
    // so real reference mistakes remain visible.
    const literal = String(id || '').trim()
    if (/\s/.test(literal)) return literal
    if (/(^|-)title$/i.test(literal)) {
      const headingText = lookupHeadingText(subs)
      if (headingText) return headingText
    }
    return ''
  }

  const resolveQuery = (raw, subs) =>
    raw ? raw.replace(/\[([^\]]+)\]/g, (_, id) => resolveQueryPlaceholder(id, subs)).trim() : ''

  function resolveCandidateQuery(raw, subs, jsxElement) {
    const query = resolveQuery(raw, subs)
    if (query) return query
    return normalizeQueryText(collectText(jsxElement, subs))
  }

  function resolveCandidateFallbackQuery(raw, fullQuery, subs, jsxElement) {
    const fallback = resolveFallbackQuery(raw, fullQuery, subs)
    if (fallback) return fallback
    const localText = normalizeQueryText(collectText(jsxElement, subs))
    return localText && localText !== fullQuery ? localText : null
  }

  // Pick a fallback query for when the full assembled query returns 0 hits.
  //
  // The upstream image search ANDs all the words in the query, so long prose
  // like
  //   "A symbol of freedom and power, soaring high above ... Bald Eagle"
  //   "James Webb Space Telescope JWST infrared deep space orbit"
  // matches zero photos even though "Bald Eagle" or "James Webb" alone
  // would each return many results.
  //
  // Two strategies, in priority order:
  //   1. Templated query (`[id1] [id2] ...`): walk placeholders from the last
  //      backward, return the first non-empty resolved chunk — typically the
  //      most specific noun phrase carried in by an `id` like animal-name.
  //   2. Pure literal query (no `[xxx]` markers): take the leading run of
  //      Title-Case / ALL-CAPS words, capped at 2 words. This catches the
  //      common pattern of "ProperNoun ProperNoun + descriptive modifiers",
  //      e.g. "James Webb Space Telescope JWST infrared..." → "James Webb".
  //      Cap 2 because longer proper-noun chains tend to AND-match zero
  //      upstream (e.g. "James Webb Space Telescope JWST" → 0 results).
  //
  // Returns null if neither strategy produces a fallback distinct from the
  // original query.
  function resolveFallbackQuery(raw, fullQuery, subs) {
    if (!raw) return null
    const ms = [...raw.matchAll(/\[([^\]]+)\]/g)]
    for (let i = ms.length - 1; i >= 0; i--) {
      const t = resolveQueryPlaceholder(ms[i][1], subs).trim()
      if (t && t !== fullQuery) return t
    }
    if (ms.length === 0) return deriveLiteralFallback(fullQuery)
    return null
  }

  function sourceMeta(opening) {
    return {
      scanFile: filePath || null,
      sourceFile: sourceFileStack[sourceFileStack.length - 1] || filePath || null,
      sourceContext: sourceContextStack.map(context => ({ ...context })),
      sourceLine: opening?.loc?.start?.line || null,
      sourceColumn: opening?.loc?.start?.column ?? null,
      sourceIndex: opening?.start ?? null,
      sourceOrder: entries.length,
    }
  }

  function markerAttrReferencesAlias(attrs, idName, rawName, aliasName) {
    const idExpr = jsxAttrExpression(attrs, idName)
    const rawExpr = jsxAttrExpression(attrs, rawName)
    return (
      subtreeReferencesIdentifier(idExpr, aliasName) ||
      subtreeReferencesIdentifier(rawExpr, aliasName)
    )
  }

  // Some generated JSX lifts a runtime-selected item into a local alias and
  // then derives the actual image id from that alias:
  //   const current = items[selected]
  //   const imgId = `featured-${current.imageId}`
  //   <img data-strk-img-id={imgId} data-strk-img={`[${current.descId}]`} />
  //
  // The first pass intentionally keeps selected items in itemAliases. If the
  // normal attr resolver cannot resolve an image slot, retry only for marker
  // attrs that directly reference a selected alias, and recompute this block's
  // locals under that one alias substitution so derived consts become visible.
  function combineAttrCandidatesViaItemAliases(attrs, idName, rawName, subs, regMap, itemAliases, blockContext) {
    if (!itemAliases?.size || !blockContext) return []
    const out = []
    const seen = new Set()

    for (const [aliasName, selection] of itemAliases) {
      if (
        !selection?.items?.length ||
        hasSubstitution(subs, aliasName) ||
        !markerAttrReferencesAlias(attrs, idName, rawName, aliasName)
      ) continue

      for (let index = 0; index < selection.items.length; index++) {
        const baseSubs = [
          ...subs,
          ...selectedItemSubs(aliasName, selection, selection.items[index], index),
        ]
        const candidateScope = extendRegistryWithBlock(
          blockContext.parentRegMap, blockContext.node, baseSubs,
        )
        const candidateSubs = candidateScope.valueSubs.length
          ? [...baseSubs, ...candidateScope.valueSubs]
          : baseSubs
        const rows = combineAttrCandidates(
          attrs, idName, rawName, candidateSubs, candidateScope.regMap || regMap,
        )
        for (const row of rows) {
          const key = row.id + '\0' + row.raw
          if (seen.has(key)) continue
          seen.add(key)
          out.push(row)
        }
      }
    }

    return out
  }

  // Generic walker that:
  //   - extends the array registry on each BlockStatement entry to pick up
  //     function-body locals like `const filtered = items.filter(...)`;
  //   - expands `const current = arr.find(...)` across guarded branches and
  //     return trees for every item in `arr` (tab panels / route details);
  //   - expands `arr.map((p) => body)` once per item (with subs);
  //   - processes JSXElement nodes (phase 1 records contextual id text,
  //     phase 2 emits entries);
  //   - recurses into all other child nodes.
  //
  // `regMap` is the array registry visible in the current lexical scope. It
  // starts as the file-level registry and grows (immutably, copy-on-extend)
  // on each new BlockStatement so siblings don't see each other's locals.
  // `itemAliases` maps a selected-item variable to its candidate collection
  // and optional index binding (see extendRegistryWithBlock).
  function visit(node, subs, phase, regMap, itemAliases, blockContext = null) {
    if (!node || typeof node !== 'object' || typeof node.type !== 'string') return
    if (!itemAliases) itemAliases = new Map()

    if (node.type === 'BlockStatement') {
      const parentRegMap = regMap
      const entrySubs = subs
      const scope = extendRegistryWithBlock(parentRegMap, node, entrySubs)
      const scopedSubs = scope.valueSubs.length ? [...entrySubs, ...scope.valueSubs] : entrySubs
      const scopedItemAliases = scope.itemAliases.size
        ? new Map([...itemAliases, ...scope.itemAliases])
        : itemAliases
      const nextBlockContext = { node, parentRegMap, entrySubs }
      for (const stmt of node.body || []) {
        if (stmt?.type === 'IfStatement') {
          const test = resolveExprValue(stmt.test, scopedSubs)
          if (test !== undefined) {
            const branch = test ? stmt.consequent : stmt.alternate
            if (branch) {
              visit(branch, scopedSubs, phase, scope.regMap, scopedItemAliases, nextBlockContext)
              if (statementAlwaysExits(branch)) return
            }
            continue
          }
        }
        visit(stmt, scopedSubs, phase, scope.regMap, scopedItemAliases, nextBlockContext)
      }
      return
    }

    if (node.type === 'IfStatement') {
      const test = resolveExprValue(node.test, subs)
      if (test !== undefined) {
        const branch = test ? node.consequent : node.alternate
        if (branch) visit(branch, subs, phase, regMap, itemAliases, blockContext)
        return
      }
    }

    if (
      node.type === 'CallExpression' &&
      node.callee?.type === 'Identifier' &&
      node.arguments?.length
    ) {
      const setterAliasName = setterReferenceName(resolveExprValue(node.callee, subs))
      const calledName = setterAliasName || node.callee.name
      for (const selection of itemAliases.values()) {
        if (!selection.setterName || selection.setterName !== calledName) continue
        const value = resolveExprValue(node.arguments[0], subs)
        if (value === undefined || value === null || Array.isArray(value)) continue
        if (!selection.items.some(item => isSameStaticValue(item, value))) {
          selection.items.push(value)
        }
      }
    }

    if (node.type === 'CallExpression' || node.type === 'OptionalCallExpression') {
      const calledFn = functionMarkerNode(resolveExprValue(node.callee, subs))
      if (calledFn && !_staticFunctionCallStack.includes(calledFn)) {
        _staticFunctionCallStack.push(calledFn)
        try {
          const callSubs = bindParamNodes(calledFn.params, node.arguments || [], subs)
          if (calledFn.body) {
            visit(calledFn.body, [...subs, ...callSubs], phase, regMap, itemAliases, blockContext)
          }
        } finally {
          _staticFunctionCallStack.pop()
        }
      }
    }

    if (
      node.type === 'LogicalExpression' &&
      node.operator === '&&' &&
      node.left?.type === 'Identifier' &&
      itemAliases.has(node.left.name)
    ) {
      expandItemAliasBranch(
        node.left.name, itemAliases.get(node.left.name), node.right,
        subs, phase, regMap, itemAliases, visit,
      )
      return
    }

    if (
      node.type === 'LogicalExpression' &&
      node.operator === '&&' &&
      node.left?.type === 'BinaryExpression'
    ) {
      const leftName = node.left.left?.type === 'Identifier' ? node.left.left.name : null
      const rightName = node.left.right?.type === 'Identifier' ? node.left.right.name : null
      const name = leftName && itemAliases.has(leftName)
        ? leftName
        : rightName && itemAliases.has(rightName)
          ? rightName
          : null
      if (name) {
        expandItemAliasBranch(
          name, itemAliases.get(name), node.right,
          subs, phase, regMap, itemAliases, visit,
        )
        return
      }
    }

    if (
      node.type === 'ConditionalExpression' &&
      node.test?.type === 'Identifier' &&
      itemAliases.has(node.test.name)
    ) {
      const items = itemAliases.get(node.test.name)
      expandItemAliasBranch(
        node.test.name, items, node.consequent,
        subs, phase, regMap, itemAliases, visit,
      )
      expandItemAliasBranch(
        node.test.name, items, node.alternate,
        subs, phase, regMap, itemAliases, visit,
      )
      return
    }

    if (
      node.type === 'ConditionalExpression' &&
      node.test?.type === 'UnaryExpression' &&
      node.test.operator === '!' &&
      node.test.argument?.type === 'Identifier' &&
      itemAliases.has(node.test.argument.name)
    ) {
      const name = node.test.argument.name
      visit(node.consequent, subs, phase, regMap, itemAliases, blockContext)
      const selection = itemAliases.get(name)
      if (selection?.items?.length) {
        expandItemAliasBranch(
          name, selection, node.alternate,
          subs, phase, regMap, itemAliases, visit,
        )
      } else {
        visit(node.alternate, subs, phase, regMap, itemAliases, blockContext)
      }
      return
    }

    if (node.type === 'ReturnStatement' && node.argument) {
      for (const [name, selection] of itemAliases) {
        if (
          !selection.items.length ||
          hasSubstitution(subs, name) ||
          !subtreeReferencesIdentifier(node.argument, name)
        ) continue
        for (let index = 0; index < selection.items.length; index++) {
          const item = selection.items[index]
          const selectionSubs = selectedItemSubs(name, selection, item, index)
          const candidateBaseSubs = blockContext
            ? [...blockContext.entrySubs, ...selectionSubs]
            : [...subs, ...selectionSubs]
          if (blockContext) {
            const candidateScope = extendRegistryWithBlock(
              blockContext.parentRegMap, blockContext.node, candidateBaseSubs,
            )
            const candidateSubs = candidateScope.valueSubs.length
              ? [...candidateBaseSubs, ...candidateScope.valueSubs]
              : candidateBaseSubs
            visit(
              node.argument, candidateSubs, phase,
              candidateScope.regMap, candidateScope.itemAliases, blockContext,
            )
          } else {
            visit(node.argument, candidateBaseSubs, phase, regMap, itemAliases, blockContext)
          }
        }
        return
      }
    }

    const mapCtx = matchMapCall(node, regMap, subs, itemAliases)
    if (mapCtx) {
      for (let idx = 0; idx < mapCtx.items.length; idx++) {
        const value = mapCtx.contextual ? mapCtx.items[idx].item : mapCtx.items[idx]
        const contextSubs = mapCtx.contextual ? mapCtx.items[idx].contextSubs : []
        const itemSubs = subsFromMapItem(
          mapCtx.paramShape, value, mapCtx.indexName, idx,
        )
        visit(mapCtx.body, [...subs, ...contextSubs, ...itemSubs], phase, regMap, itemAliases)
      }
      return
    }

    if (node.type === 'JSXElement') {
      const opening = node.openingElement
      const attrs = opening?.attributes || []

      // Local component call site? Inline the body once with call-derived
      // subs. This is what makes `<AnimalCard animal={animal}/>` reach the
      // data-strk-img-* attrs that live inside AnimalCard's own definition.
      const tagName = opening?.name
      const activeComponentRegistry = componentRegistryStack[componentRegistryStack.length - 1] || componentRegistry
      if (tagName?.type === 'JSXIdentifier' && activeComponentRegistry.has(tagName.name)) {
        const comp = activeComponentRegistry.get(tagName.name)
        if (!inlineStack.has(comp.body)) {
          const callSubs = buildComponentCallSubs(comp, opening, subs, itemAliases)
          if (callSubs) {
            inlineStack.add(comp.body)
            componentRegistryStack.push(comp.componentRegistry || activeComponentRegistry)
            sourceContextStack.push({
              sourceFile: sourceFileStack[sourceFileStack.length - 1] || filePath || null,
              sourceLine: opening?.loc?.start?.line || null,
              sourceColumn: opening?.loc?.start?.column ?? null,
              sourceIndex: opening?.start ?? null,
              component: tagName.name,
            })
            sourceFileStack.push(comp.sourceFile || sourceFileStack[sourceFileStack.length - 1] || filePath || null)
            try {
              const compRegMap = comp.arrayRegistry
                ? new Map([...regMap, ...comp.arrayRegistry])
                : regMap
              visit(comp.body, [...subs, ...(comp.moduleSubs || []), ...callSubs], phase, compRegMap, itemAliases)
            } finally {
              sourceFileStack.pop()
              sourceContextStack.pop()
              componentRegistryStack.pop()
              inlineStack.delete(comp.body)
            }
          }
        }
      }

      if (phase === 1) {
        const tagLabel = jsxNameLabel(opening?.name).toLowerCase()
        if (/^h[1-6]$/.test(tagLabel)) {
          recordHeadingText(collectText(node, subs), subs)
        }
        const idVal = resolveJsxAttrString(attrs, 'id', subs)
        if (typeof idVal === 'string' && idVal) {
          const text = collectText(node, subs)
          if (text) recordIdText(idVal, text, subs)
        }
      } else {
        let imgCandidates = combineAttrCandidates(attrs, 'data-strk-img-id', 'data-strk-img', subs, regMap)
        if (!imgCandidates.length) {
          imgCandidates = combineAttrCandidatesViaItemAliases(
            attrs, 'data-strk-img-id', 'data-strk-img', subs, regMap, itemAliases, blockContext,
          )
        }
        if (imgCandidates.length) {
          markSlotResolution(opening, 'img', true)
          for (const candidate of imgCandidates) {
            const query = resolveCandidateQuery(candidate.raw, candidate.subs, node)
            entries.push({
              ...sourceMeta(opening),
              imgId: candidate.id,
              query,
              fallbackQuery: resolveCandidateFallbackQuery(candidate.raw, query, candidate.subs, node),
              ratio: resolveJsxAttrString(attrs, 'data-strk-img-ratio', candidate.subs) || '16x9',
              width: resolveJsxAttrString(attrs, 'data-strk-img-width', candidate.subs) || '800',
              kind:  'img',
            })
          }
        } else {
          markSlotResolution(opening, 'img', false)
        }

        let bgCandidates = combineAttrCandidates(attrs, 'data-strk-bg-id', 'data-strk-bg', subs, regMap)
        if (!bgCandidates.length) {
          bgCandidates = combineAttrCandidatesViaItemAliases(
            attrs, 'data-strk-bg-id', 'data-strk-bg', subs, regMap, itemAliases, blockContext,
          )
        }
        if (bgCandidates.length) {
          markSlotResolution(opening, 'bg', true)
          for (const candidate of bgCandidates) {
            const query = resolveCandidateQuery(candidate.raw, candidate.subs, node)
            entries.push({
              ...sourceMeta(opening),
              imgId: candidate.id,
              query,
              fallbackQuery: resolveCandidateFallbackQuery(candidate.raw, query, candidate.subs, node),
              ratio: resolveJsxAttrString(attrs, 'data-strk-bg-ratio', candidate.subs) || '16x9',
              width: resolveJsxAttrString(attrs, 'data-strk-bg-width', candidate.subs) || '1600',
              kind:  'bg',
            })
          }
        } else {
          markSlotResolution(opening, 'bg', false)
        }
      }
    }

    for (const key in node) {
      if (NON_TRAVERSAL_KEYS.has(key)) continue
      const v = node[key]
      if (Array.isArray(v)) {
        for (const c of v) visit(c, subs, phase, regMap, itemAliases, blockContext)
      } else if (v && typeof v === 'object' && typeof v.type === 'string') {
        visit(v, subs, phase, regMap, itemAliases, blockContext)
      }
    }
  }

  const emptyItemAliases = new Map()
  visit(ast.program, registrySubs, 1, registry, emptyItemAliases)
  visit(ast.program, registrySubs, 2, registry, emptyItemAliases)

  const skippedLines = [...unresolvedSlotNodes]
    .filter(([key]) => !resolvedSlotNodes.has(key))
    .map(([, line]) => line)
    .filter(Boolean)
  if (warnUnresolved && skippedLines.length) {
    const source = filePath || '<inline code>'
    console.warn(
      '[strk-img] Skipped unresolved data-strk-* slot(s) in ' + source +
      ' at line(s): ' + [...new Set(skippedLines)].join(', ') +
      '. Keep ids and query references derived from static data, or extend the plugin evaluator.'
    )
  }

  const seenEntries = new Set()
  const deduped = []
  for (const e of entries) {
    const key = [
      e.kind, e.imgId, e.query, e.ratio, e.width,
      e.scanFile || '', JSON.stringify(e.sourceContext || []),
      e.sourceFile || '', e.sourceLine || '',
      e.sourceColumn ?? '', e.sourceIndex ?? '',
    ].join('\0')
    if (seenEntries.has(key)) continue
    seenEntries.add(key)
    deduped.push(e)
  }
  return deduped
}

// ---------------------------------------------------------------------------
// Image search API (Strikingly AI Builder)
//
// POST https://ai-builder.strikingly.com/images/search
//   headers: { X-Api-Key, Content-Type: application/json }
//   body:    { event_type, data: { query, image_type, limit, ar_range, without_text?, ... } }
//   reply:   { code: 200, list: [{ id, photo_url, photo_aspect_ratio }] }
//
// Background slots (`data-strk-bg-id`) pass `without_text: true` in `data`.
//
// Auth comes from process.env.STRIKINGLY_IMAGES_API_KEY (loaded from .env at
// plugin startup). The endpoint URL is also overridable via
// STRIKINGLY_IMAGES_API_URL for staging / proxy setups.
//
// Returns the photos normalised to the shape the runtime consumes:
//   { id, url, alt, aspectRatio }
// `alt` falls back to the query string because the upstream response does
// not carry alt text. `aspectRatio` is preserved for potential future use
// (the runtime currently relies on the JSX `data-strk-img-ratio` attribute).
// ---------------------------------------------------------------------------
const IMAGES_SEARCH_ENDPOINT_DEFAULT = 'https://ai-builder.strikingly.com/images/search'

/**
 * @param {string} query
 * @param {number} [perPage]
 * @param {{ withoutText?: boolean, arRange?: string }} [fetchOptions]
 *   `withoutText` — background slots (`data-strk-bg-id`) set `without_text: true`.
 *   `arRange` — `"min,max"` aspect window (±20% around parsed `ratio`); default
 *   `"1.0,1.0"` when omitted or unparseable.
 */
async function fetchImages(query, perPage, fetchOptions) {
  perPage = perPage || 10
  fetchOptions = fetchOptions || {}
  const key = process.env.STRIKINGLY_IMAGES_API_KEY
  if (!key || key === 'your_key_here') {
    console.warn('[strk-img] STRIKINGLY_IMAGES_API_KEY missing in .env -- skipping: ' + query)
    return []
  }
  const endpoint = process.env.STRIKINGLY_IMAGES_API_URL || IMAGES_SEARCH_ENDPOINT_DEFAULT

  const payload = buildSearchPayload(query, perPage, fetchOptions)

  let res
  try {
    res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': key,
      },
      body: JSON.stringify(payload),
    })
  } catch (err) {
    console.warn('[strk-img] Network error: ' + err.message)
    return []
  }

  if (!res.ok) {
    const body = await res.text().catch(() => '')
    console.warn(
      '[strk-img] images-search ' + res.status + ' for "' + query + '"' +
      (body ? ' -- ' + body.slice(0, 120) : '')
    )
    return []
  }

  let json
  try {
    json = await res.json()
  } catch (err) {
    console.warn('[strk-img] images-search invalid JSON for "' + query + '": ' + err.message)
    return []
  }

  // The endpoint embeds its own status in the body; anything other than 200
  // is treated as a no-op rather than crashing the build.
  if (json && json.code !== 200) {
    console.warn('[strk-img] images-search code=' + json.code + ' for "' + query + '"')
    return []
  }

  const list = Array.isArray(json && json.list) ? json.list : []
  return list
    .filter(p => p && p.photo_url)
    .map(p => ({
      id:          p.id,
      url:         p.photo_url,
      alt:         query,
      aspectRatio: p.photo_aspect_ratio,
    }))
}

const inFlightImageSearches = new Map()

async function fetchImagesOnce(query, perPage, fetchOptions) {
  const payload = buildSearchPayload(query, perPage || 10, fetchOptions || {})
  const key = md5Hex(JSON.stringify(payload))
  const existing = inFlightImageSearches.get(key)
  if (existing) return existing

  console.log('[strk-img] Searching: "' + query + '"' + (fetchOptions?.withoutText ? ' (bg)' : ''))
  const request = fetchImages(query, perPage, fetchOptions)
    .finally(() => inFlightImageSearches.delete(key))
  inFlightImageSearches.set(key, request)
  return request
}

function buildSearchPayload(query, perPage, fetchOptions) {
  perPage = perPage || 10
  fetchOptions = fetchOptions || {}
  const data = {
    query,
    image_type: 'specify_ar_range',
    limit: perPage,
    ar_range: fetchOptions.arRange || '1.0,1.0',
  }
  if (fetchOptions.withoutText) data.without_text = true
  return {
    event_type: 'images_search_detail',
    data,
  }
}

// ---------------------------------------------------------------------------
// Process entries
//
// Concurrency is capped so first-time builds with many fresh queries don't
// fan out 50+ simultaneous image-search requests against the upstream API.
//
// Sticky picks:
//   Each entry stores a `picked` field (photo id) that is the photo the
//   runtime should display. Once decided, we never change it unless the
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
//
//   Cross-slot dedupe: `dedupePickedAcrossConfig` runs after each
//   processEntries batch (and once at buildStart) so two different imgIds
//   never keep the same `picked` when their result lists offer alternatives.
//   Sticky `decidePick` only checks the current entry's results, so without
//   this pass duplicates can persist on disk.
// ---------------------------------------------------------------------------
const IMAGES_FETCH_CONCURRENCY = 5

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

// Resolve duplicate `picked` ids across different imgId slots. Walk keys in
// sorted order so the outcome is stable; first slot to claim a photo keeps it,
// later slots pick the first unused candidate from their own `results`.
// (Sticky `decidePick` alone cannot fix duplicates already on disk — every
// slot's prevPicked was valid in its own results list.)
function dedupePickedAcrossConfig(data) {
  if (!data || typeof data !== 'object') return false
  const imgIds = Object.keys(data).sort()
  const globalUsed = new Set()
  let dirty = false
  for (const imgId of imgIds) {
    const e = data[imgId]
    if (!e || !Array.isArray(e.results) || e.results.length === 0) continue
    const prev = e.picked != null ? e.picked : null
    const prevInResults = Boolean(prev && e.results.some(r => r.id === prev))
    const nextPick = prevInResults && !globalUsed.has(prev)
      ? prev
      : decidePick(null, e.results, globalUsed)
    if (nextPick !== prev) {
      e.picked = nextPick
      dirty = true
    }
    if (nextPick) globalUsed.add(nextPick)
  }
  return dirty
}

function existingResultKindScore(imgId, kind) {
  const looksBg = /(^|[-_])bg($|[-_])/.test(String(imgId || ''))
  if (kind === 'bg') return looksBg ? 2 : 0
  return looksBg ? -2 : 1
}

function findReusableConfigResults(imgId, query, kind, arRange) {
  const candidates = []
  for (const [otherId, entry] of Object.entries(configData || {})) {
    if (otherId === imgId) continue
    if (!entry || entry.query !== query) continue
    if (!Array.isArray(entry.results) || entry.results.length === 0) continue
    const otherArRange = arRangeFromRatio(entry.ratio)
    candidates.push({
      imgId: otherId,
      results: entry.results,
      score:
        (otherArRange === arRange ? 8 : 0) +
        existingResultKindScore(otherId, kind) +
        (entry.picked ? 1 : 0),
    })
  }
  candidates.sort((a, b) => b.score - a.score || a.imgId.localeCompare(b.imgId))
  return candidates[0] || null
}

function entryKind(entry) {
  return entry?.kind === 'bg' ? 'bg' : 'img'
}

function entryRefKey(entry) {
  return entry?.imgId ? entryKind(entry) + '\0' + entry.imgId : null
}

function entrySourcePath(entry) {
  const file = entry?.sourceFile
  if (!file) return ''
  try {
    return path.relative(viteRoot || process.cwd(), file) || file
  } catch {
    return file
  }
}

function entryScanPath(entry) {
  const file = entry?.scanFile
  if (!file) return ''
  try {
    return path.relative(viteRoot || process.cwd(), file) || file
  } catch {
    return file
  }
}

function relativeSourcePath(file) {
  if (!file) return null
  try {
    return path.relative(viteRoot || process.cwd(), file) || file
  } catch {
    return file
  }
}

function normalizeSourceContext(context) {
  if (!Array.isArray(context)) return []
  return context
    .filter(item => item && typeof item === 'object')
    .map(item => ({
      sourceFile: typeof item.sourceFile === 'string' && item.sourceFile.trim()
        ? item.sourceFile.trim()
        : null,
      sourceLine: typeof item.sourceLine === 'number' ? item.sourceLine : null,
      sourceColumn: typeof item.sourceColumn === 'number' ? item.sourceColumn : null,
      sourceIndex: typeof item.sourceIndex === 'number' ? item.sourceIndex : null,
      component: typeof item.component === 'string' && item.component.trim()
        ? item.component.trim()
        : null,
    }))
}

function entrySourceContext(entry) {
  return normalizeSourceContext(entry?.sourceContext).map(item => ({
    ...item,
    sourceFile: relativeSourcePath(item.sourceFile),
  }))
}

function normalizeOwnerSource(owner) {
  if (!owner || typeof owner !== 'object') return null
  const scanFile = typeof owner.scanFile === 'string'
    ? owner.scanFile.trim()
    : ''
  const sourceContext = normalizeSourceContext(owner.sourceContext)
  const sourceFile = typeof owner.sourceFile === 'string'
    ? owner.sourceFile.trim()
    : typeof owner.file === 'string'
      ? owner.file.trim()
      : ''
  const sourceLine = typeof owner.sourceLine === 'number'
    ? owner.sourceLine
    : typeof owner.line === 'number'
      ? owner.line
      : null
  const sourceColumn = typeof owner.sourceColumn === 'number'
    ? owner.sourceColumn
    : typeof owner.column === 'number'
      ? owner.column
      : null
  const sourceIndex = typeof owner.sourceIndex === 'number'
    ? owner.sourceIndex
    : typeof owner.index === 'number'
      ? owner.index
      : null
  const kind = owner.kind === 'bg' ? 'bg' : 'img'

  if (!sourceFile && sourceLine == null && sourceColumn == null && sourceIndex == null) {
    return null
  }

  return {
    kind,
    scanFile: scanFile || null,
    sourceContext,
    sourceFile: sourceFile || null,
    sourceLine,
    sourceColumn,
    sourceIndex,
  }
}

function ownerSourceFromEntry(entry) {
  return normalizeOwnerSource({
    kind: entryKind(entry),
    scanFile: entryScanPath(entry) || null,
    sourceContext: entrySourceContext(entry),
    sourceFile: entrySourcePath(entry) || null,
    sourceLine: entry?.sourceLine ?? null,
    sourceColumn: entry?.sourceColumn ?? null,
    sourceIndex: entry?.sourceIndex ?? null,
  })
}

function ownerSourceKey(owner) {
  const normalized = normalizeOwnerSource(owner)
  if (!normalized) return ''
  return [
    normalized.kind || 'img',
    normalized.scanFile || '',
    JSON.stringify(normalized.sourceContext || []),
    normalized.sourceFile || '',
    normalized.sourceLine ?? '',
    normalized.sourceColumn ?? '',
    normalized.sourceIndex ?? '',
  ].join('\0')
}

function isSameOwnerSource(a, b) {
  const left = normalizeOwnerSource(a)
  const right = normalizeOwnerSource(b)
  if (!left || !right) return false

  // Owners written before scanFile was tracked identify only the marker in
  // the shared child component. Treat that legacy shape as a match once so
  // processEntry can migrate it to the deterministic caller + marker owner.
  const scanFileMatches =
    !left.scanFile || !right.scanFile || left.scanFile === right.scanFile
  const leftContext = left.sourceContext || []
  const rightContext = right.sourceContext || []
  const sourceContextMatches =
    !leftContext.length ||
    !rightContext.length ||
    isSameJson(leftContext, rightContext)
  return (
    scanFileMatches &&
    sourceContextMatches &&
    left.kind === right.kind &&
    left.sourceFile === right.sourceFile &&
    left.sourceLine === right.sourceLine &&
    left.sourceColumn === right.sourceColumn &&
    left.sourceIndex === right.sourceIndex
  )
}

function entryMatchesOwner(entry, owner) {
  return isSameOwnerSource(ownerSourceFromEntry(entry), owner)
}

function compareNullableNumber(a, b) {
  const ax = typeof a === 'number' ? a : Number.POSITIVE_INFINITY
  const bx = typeof b === 'number' ? b : Number.POSITIVE_INFINITY
  return ax - bx
}

function compareEntrySource(a, b) {
  const as = entryScanPath(a)
  const bs = entryScanPath(b)
  if (as !== bs) return as.localeCompare(bs)
  const ac = JSON.stringify(entrySourceContext(a))
  const bc = JSON.stringify(entrySourceContext(b))
  if (ac !== bc) return ac.localeCompare(bc)
  const ap = entrySourcePath(a)
  const bp = entrySourcePath(b)
  if (ap !== bp) return ap.localeCompare(bp)
  return (
    compareNullableNumber(a.sourceLine, b.sourceLine) ||
    compareNullableNumber(a.sourceColumn, b.sourceColumn) ||
    compareNullableNumber(a.sourceIndex, b.sourceIndex) ||
    compareNullableNumber(a.sourceOrder, b.sourceOrder)
  )
}

function entrySlotKey(entry) {
  return [
    entryKind(entry),
    entry?.imgId || '',
    entry?.query || '',
    entry?.ratio || '',
    entry?.width || '',
    entry?.scanFile || '',
    JSON.stringify(entry?.sourceContext || []),
    entry?.sourceFile || '',
    entry?.sourceLine || '',
    entry?.sourceColumn ?? '',
    entry?.sourceIndex ?? '',
  ].join('\0')
}

function rememberSourceEntries(entries) {
  const byFile = new Map()
  for (const entry of entries || []) {
    const file = entry?.scanFile || entry?.sourceFile
    if (!file) continue
    const rows = byFile.get(file) || []
    rows.push({ ...entry })
    byFile.set(file, rows)
  }
  for (const [file, rows] of byFile) {
    _entriesByScanFile.set(file, rows)
  }
}

function knownEntriesForKeys(keys, fallbackEntries) {
  if (!keys.size || !_entriesByScanFile.size) return fallbackEntries.slice()
  const out = []
  const seen = new Set()
  for (const rows of _entriesByScanFile.values()) {
    for (const entry of rows) {
      if (!keys.has(entryRefKey(entry))) continue
      const slotKey = entrySlotKey(entry)
      if (seen.has(slotKey)) continue
      seen.add(slotKey)
      out.push(entry)
    }
  }
  if (!out.length) return fallbackEntries.slice()
  return out
}

function uniqueStrings(values) {
  const out = []
  const seen = new Set()
  for (const value of values || []) {
    const text = String(value || '').trim()
    if (!text || seen.has(text)) continue
    seen.add(text)
    out.push(text)
  }
  return out
}

function chooseOwnerEntry(entries) {
  if (!entries?.length) return null
  const rows = entries.slice().sort(compareEntrySource)
  return rows[0] || null
}

function chooseWidestSlot(entries, fallbackWidth) {
  let bestRaw = fallbackWidth
  let bestWidth = Number.parseFloat(fallbackWidth)
  if (!Number.isFinite(bestWidth)) bestWidth = -1
  for (const entry of entries || []) {
    const n = Number.parseFloat(entry?.width)
    if (Number.isFinite(n) && n > bestWidth) {
      bestWidth = n
      bestRaw = entry.width
    }
  }
  return bestRaw
}

function prepareEntriesForProcessing(entries) {
  rememberSourceEntries(entries)

  const relevantKeys = new Set()
  for (const entry of entries) {
    const key = entryRefKey(entry)
    if (key) relevantKeys.add(key)
  }

  const groups = new Map()
  for (const entry of knownEntriesForKeys(relevantKeys, entries)) {
    const key = entryRefKey(entry)
    if (!key) continue
    const rows = groups.get(key) || []
    rows.push(entry)
    groups.set(key, rows)
  }

  const prepared = []
  for (const rows of groups.values()) {
    rows.sort(compareEntrySource)
    // Pick one deterministic owner slot for each imgId so other contexts can
    // contribute metadata without taking over the entry's primary query.
    const ownerEntry = chooseOwnerEntry(rows)
    if (!ownerEntry) continue
    const existingOwner = normalizeOwnerSource(configData[ownerEntry.imgId]?.owner)
    const canonical = { ...ownerEntry }
    canonical.refCount = rows.length
    canonical.width = chooseWidestSlot(rows, canonical.width)
    canonical.owner = ownerSourceFromEntry(ownerEntry)
    canonical.ownerQuery = ownerEntry.query || null
    canonical.ownerSeen = existingOwner ? rows.some(entry => entryMatchesOwner(entry, existingOwner)) : false
    canonical.duplicateQueries = uniqueStrings(
      rows
        .filter(entry => !entryMatchesOwner(entry, canonical.owner))
        .map(entry => entry.query)
        .filter(query => query && query !== canonical.query),
    )
    prepared.push(canonical)
  }

  prepared.sort(compareEntrySource)
  return prepared
}

function entryRefCount(entry) {
  return Number.isInteger(entry?.refCount) && entry.refCount > 0 ? entry.refCount : 1
}

function entryDuplicateQueries(entry) {
  return uniqueStrings(entry?.duplicateQueries || [])
}

function withEntryReferenceMetadata(base, entry) {
  const next = { ...base, refCount: entryRefCount(entry) }
  const duplicateQueries = entryDuplicateQueries(entry)
  if (duplicateQueries.length) next.duplicateQueries = duplicateQueries
  return next
}

function syncEntryReferenceMetadata(target, entry) {
  if (!target) return false
  let dirty = false
  const refCount = entryRefCount(entry)
  if (target.refCount !== refCount) {
    target.refCount = refCount
    dirty = true
  }
  const duplicateQueries = entryDuplicateQueries(entry)
  if (duplicateQueries.length) {
    if (!isSameJson(target.duplicateQueries, duplicateQueries)) {
      target.duplicateQueries = duplicateQueries
      dirty = true
    }
  } else if (Object.prototype.hasOwnProperty.call(target, 'duplicateQueries')) {
    delete target.duplicateQueries
    dirty = true
  }
  return dirty
}

function mergeEntryReferenceMetadata(target, entry) {
  if (!target) return false
  let dirty = false

  const prevRefCount = entryRefCount(target)
  const nextRefCount = Math.max(prevRefCount, entryRefCount(entry))
  if (target.refCount !== nextRefCount) {
    target.refCount = nextRefCount
    dirty = true
  }

  const duplicateQueries = uniqueStrings([
    ...entryDuplicateQueries(target),
    ...entryDuplicateQueries(entry),
    entry?.query,
  ]).filter(query => query && query !== target.query)

  if (duplicateQueries.length) {
    if (!isSameJson(target.duplicateQueries, duplicateQueries)) {
      target.duplicateQueries = duplicateQueries
      dirty = true
    }
  } else if (Object.prototype.hasOwnProperty.call(target, 'duplicateQueries')) {
    delete target.duplicateQueries
    dirty = true
  }

  return dirty
}

async function processEntry(entry, now, globalUsed) {
  const { imgId, query, fallbackQuery, ratio, width, kind: entryKind } = entry
  const kind = entryKind === 'bg' ? 'bg' : 'img'
  const arRange = arRangeFromRatio(ratio)
  const fetchOpts = { withoutText: kind === 'bg', arRange }
  const searchPayload = buildSearchPayload(query, 20, fetchOpts)
  if (!query) return
  const ex = configData[imgId]
  const existingOwner = normalizeOwnerSource(ex?.owner)
  const candidateOwner = normalizeOwnerSource(entry?.owner) || ownerSourceFromEntry(entry)
  const needsOwnerContextMigration =
    Boolean(existingOwner) &&
    (
      (!existingOwner.scanFile && Boolean(candidateOwner?.scanFile)) ||
      (!existingOwner.sourceContext?.length && Boolean(candidateOwner?.sourceContext?.length))
    ) &&
    isSameOwnerSource(existingOwner, candidateOwner)
  const canTransferOwner =
    Boolean(existingOwner) &&
    Boolean(candidateOwner) &&
    (!isSameOwnerSource(existingOwner, candidateOwner) || needsOwnerContextMigration) &&
    entry?.ownerSeen
  const activeOwner = canTransferOwner ? candidateOwner : (existingOwner || candidateOwner)
  const entryOwnsSlot = !activeOwner || entryMatchesOwner(entry, activeOwner)

  // A non-owner reference may widen width / increase refCount / add
  // duplicateQueries, but it must not replace the primary query or results.
  if (ex && !entryOwnsSlot) {
    let metadataDirty = false
    const mergedWidth = chooseWidestSlot([ex, entry], ex.width)
    if (mergedWidth !== ex.width) {
      ex.width = mergedWidth
      metadataDirty = true
    }
    if (mergeEntryReferenceMetadata(ex, entry)) metadataDirty = true
    if (metadataDirty) _dirty = true
    return
  }

  // Path A: configData already matches this query. Nothing to fetch; just
  // make sure `picked` is set (backfill for entries written by older
  // versions of this plugin that didn't track it) and reserve it.
  if (ex && ex.query === query && ex.results && ex.results.length > 0) {
    if (ex.ratio !== ratio) {
      ex.ratio = ratio
      _dirty = true
    }
    if (ex.width !== width) {
      ex.width = width
      _dirty = true
    }
    if (
      activeOwner &&
      (!isSameOwnerSource(ex.owner, activeOwner) || needsOwnerContextMigration)
    ) {
      ex.owner = activeOwner
      _dirty = true
    }
    if (ex.ownerQuery !== query) {
      ex.ownerQuery = query
      _dirty = true
    }
    if (!isSameJson(ex.searchPayload, searchPayload)) {
      ex.searchPayload = searchPayload
      _dirty = true
    }
    if (syncEntryReferenceMetadata(ex, entry)) _dirty = true
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

  const h = hashSearchCacheKey(query, kind, arRange)

  // Path B: another slot already has usable results for the same query. This
  // covers projects that have a populated config file but no `.strk-cache.json`,
  // and also repairs slots that were written with `results: []` after a transient
  // API/key/network failure.
  const reusable = findReusableConfigResults(imgId, query, kind, arRange)
  if (reusable) {
    const picked = decidePick(prevPicked, reusable.results, globalUsed)
    if (picked) globalUsed.add(picked)
    const next = withEntryReferenceMetadata({
      query,
      owner: activeOwner,
      ownerQuery: query,
      searchPayload,
      ratio,
      width,
      results: reusable.results,
      picked,
      reusedFrom: reusable.imgId,
    }, entry)
    if (!isSameJson(ex, next)) {
      configData[imgId] = next
      _dirty = true
    }
    const existingCache = cacheData[h]
    const sameCachedResults =
      existingCache &&
      Array.isArray(existingCache.results) &&
      isSameJson(existingCache.results, reusable.results)
    if (!sameCachedResults) {
      cacheData[h] = { results: reusable.results, _ts: existingCache?._ts || now }
      _dirty = true
    }
    return
  }

  // Path C: cache hit for this query — reuse results, don't hit the network.
  const cacheHit = cacheData[h]
  if (cacheHit && !isExpiredCacheEntry(cacheHit, now)) {
    const picked = decidePick(prevPicked, cacheHit.results, globalUsed)
    if (picked) globalUsed.add(picked)
    const next = withEntryReferenceMetadata(
      {
        query,
        owner: activeOwner,
        ownerQuery: query,
        searchPayload,
        ratio,
        width,
        results: cacheHit.results,
        picked,
        cached: true,
      },
      entry,
    )
    if (!isSameJson(ex, next)) {
      configData[imgId] = next
      _dirty = true
    }
    return
  } else if (cacheHit && isExpiredCacheEntry(cacheHit, now)) {
    delete cacheData[h]
    _dirty = true
  }

  // Path D: fetch fresh from the upstream image-search API.
  let results = await fetchImagesOnce(query, 20, fetchOpts)
  let usedFallback = null

  // Fallback: if the full assembled query returns 0 hits (typical when the
  // user concatenates a long description and the upstream AND-matches every word),
  // retry once with the last [xxx] placeholder's content alone — usually the
  // most specific noun phrase (e.g. "Bald Eagle"). Cache the fallback's
  // results under its OWN hash so future entries with the same fallback
  // skip the network entirely.
  if (results.length === 0 && fallbackQuery && fallbackQuery !== query) {
    const fh = hashSearchCacheKey(fallbackQuery, kind, arRange)
    const fbCache = cacheData[fh]
    if (fbCache && !isExpiredCacheEntry(fbCache, now)) {
      results = fbCache.results
      usedFallback = fallbackQuery
    } else {
      console.log('[strk-img]   0 hits — retrying with fallback: "' + fallbackQuery + '"')
      const fbResults = await fetchImagesOnce(fallbackQuery, 20, fetchOpts)
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
    const next = withEntryReferenceMetadata(
      { query, owner: activeOwner, ownerQuery: query, searchPayload, ratio, width, results, picked },
      entry,
    )
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
    const next = withEntryReferenceMetadata(
      {
        query,
        owner: activeOwner,
        ownerQuery: query,
        searchPayload,
        ratio,
        width,
        results: [],
        picked: null,
      },
      entry,
    )
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
  const queue = prepareEntriesForProcessing(entries)
  if (!queue.length) return

  // Pre-seed globalUsed with photos that are currently committed to other
  // slots in the on-disk config. Workers grow this Set as they decide picks.
  const globalUsed = new Set()
  for (const e of Object.values(configData)) {
    if (e?.picked) globalUsed.add(e.picked)
  }

  const workerCount = Math.min(IMAGES_FETCH_CONCURRENCY, queue.length)

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

  if (dedupePickedAcrossConfig(configData)) _dirty = true
}

function collectJsxSourceFiles(dir, out = []) {
  let rows
  try { rows = fs.readdirSync(dir, { withFileTypes: true }) }
  catch { return out }
  for (const row of rows) {
    const p = path.join(dir, row.name)
    if (row.isDirectory()) {
      if (row.name === 'node_modules' || row.name === 'dist') continue
      collectJsxSourceFiles(p, out)
      continue
    }
    if (row.isFile() && /\.(jsx|tsx)$/.test(row.name)) out.push(p)
  }
  return out
}

async function primeBuildConfigFromSource() {
  const srcDir = path.resolve(viteRoot || process.cwd(), 'src')
  const entries = []
  for (const file of collectJsxSourceFiles(srcDir)) {
    let code
    try { code = fs.readFileSync(file, 'utf-8') }
    catch { continue }
    if (!hasStrkMarkers(code) && !mayReachStrkMarkersViaLocalComponent(code)) continue
    entries.push(...extractStrkEntries(code, { filePath: file, warnUnresolved: false }))
  }
  rememberBuildEntriesBySourceFile(entries)
  await processEntries(entries)
  flushToDisk()
}

// ---------------------------------------------------------------------------
// Flush to disk
// ---------------------------------------------------------------------------
function flushToDisk() {
  if (!_dirty) return { wrote: false, configChanged: false }
  pruneCacheData()
  const configText = writeJsonAtomic(configPath, configData)
  const nextConfigHash = md5Hex(configText)
  const configChanged = nextConfigHash !== _lastWrittenConfigHash
  writeJsonAtomic(cachePath, cacheData)
  _lastWrittenConfigHash = nextConfigHash
  _dirty = false
  console.log('[strk-img] Config written')
  return { wrote: true, configChanged }
}

function reloadConfigConsumers(server) {
  if (!server) return
  server.ws.send({
    type: 'full-reload',
    path: '*',
  })
}

function scheduleFlush(server) {
  if (pendingFlush) clearTimeout(pendingFlush)
  pendingFlush = setTimeout(async function() {
    pendingFlush = null
    const result = flushToDisk()
    if (server && result.configChanged) {
      const mod = server.moduleGraph.getModuleById(configPath)
      if (mod) server.moduleGraph.invalidateModule(mod)
      // Keep generated app code simple: most templates statically import the
      // JSON config, so the plugin reloads the page after its atomic write.
      reloadConfigConsumers(server)
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
export function inlineBuildImageSourcesFromAst(code, ast, entries = null, options = {}) {
  const patches = []
  const dynamicSrcPatches = []
  let dynamicBgPatchCount = 0
  const pushPatch = (start, end, text) => {
    if (typeof start !== 'number' || typeof end !== 'number') return
    if (start > end) return
    patches.push({ start, end, text })
  }
  const activeConfigData = options.configData || configData
  const filePath = options.filePath || null
  const onUnresolved = typeof options.onUnresolved === 'function'
    ? options.onUnresolved
    : () => {}
  const getImgUrl = imgId => selectedConfigImageUrl(activeConfigData[imgId])
  const dynamicUrlMap = {}
  const dynamicBgUrlMap = {}
  const imageEntries = (Array.isArray(entries) ? entries : []).filter(
    entry => entry?.kind === 'img' && entry.imgId,
  )
  const backgroundEntries = (Array.isArray(entries) ? entries : []).filter(
    entry => entry?.kind === 'bg' && entry.imgId,
  )
  const helperBase = '__strkImgSrc'
  let helperName = helperBase
  let helperMapName = '__STRK_IMG_SRC_MAP'
  if (new RegExp('\\b' + helperName + '\\b').test(code) || new RegExp('\\b' + helperMapName + '\\b').test(code)) {
    const suffix = md5Hex(code).slice(0, 8)
    helperName = helperBase + '_' + suffix
    helperMapName = '__STRK_IMG_SRC_MAP_' + suffix
  }
  const bgHelperBase = '__strkBgStyle'
  let bgHelperName = bgHelperBase
  let bgHelperMapName = '__STRK_BG_SRC_MAP'
  if (new RegExp('\\b' + bgHelperName + '\\b').test(code) || new RegExp('\\b' + bgHelperMapName + '\\b').test(code)) {
    const suffix = md5Hex(code).slice(0, 8)
    bgHelperName = bgHelperBase + '_' + suffix
    bgHelperMapName = '__STRK_BG_SRC_MAP_' + suffix
  }
  const importInsertPos = (() => {
    let pos = 0
    for (const node of ast.program?.body || []) {
      if (node.type === 'ImportDeclaration' && typeof node.end === 'number') {
        pos = Math.max(pos, node.end)
      }
    }
    return pos
  })()
  const expressionSource = attr => {
    if (attr?.value?.type !== 'JSXExpressionContainer') return null
    const expr = attr.value.expression
    if (!expr || expr.type === 'StringLiteral') return null
    if (typeof expr.start !== 'number' || typeof expr.end !== 'number') return null
    return code.slice(expr.start, expr.end)
  }
  const literalSrcFallback = attr => {
    if (!attr) return null
    if (attr.value?.type === 'StringLiteral') return attr.value.value
    if (attr.value?.expression?.type === 'StringLiteral') return attr.value.expression.value
    return null
  }
  const entriesForOpening = (opening, kind) => {
    const sourceKey = buildSourceFileKey(filePath)
    const candidateEntries = kind === 'bg' ? backgroundEntries : imageEntries
    return candidateEntries.filter(entry => {
      if (entry.sourceIndex !== opening?.start) return false
      if (!sourceKey) return true
      return buildSourceFileKey(entry.sourceFile) === sourceKey
    })
  }
  const reportUnresolved = (opening, details) => {
    onUnresolved({
      filePath,
      line: opening?.loc?.start?.line ?? null,
      column: opening?.loc?.start?.column ?? null,
      ...details,
    })
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
        const url = getImgUrl(imgId)
        const fallback = literalSrcFallback(srcAttr)
        if (srcAttr?.value && fallback != null && url) {
          pushPatch(srcAttr.value.start, srcAttr.value.end, JSON.stringify(url))
        } else if (!url) {
          reportUnresolved(np.node, {
            imgId,
            reason: 'image_url_unresolved',
            message: 'No configured image URL was available for data-strk-img-id "' + imgId + '".',
          })
        }
      } else {
        const idAttr = getAttrNode('data-strk-img-id')
        const idExpr = expressionSource(idAttr)
        const srcAttr = getAttrNode('src')
        const fallback = literalSrcFallback(srcAttr)
        if (idExpr) {
          const candidates = entriesForOpening(np.node, 'img')
          const candidateIds = [...new Set(candidates.map(entry => entry.imgId))]
          if (!candidateIds.length) {
            reportUnresolved(np.node, {
              expression: idExpr,
              reason: 'image_id_expression_unresolved',
              message: 'Could not determine the possible image IDs for expression "' + idExpr + '".',
            })
          }
          for (const candidateId of candidateIds) {
            const url = getImgUrl(candidateId)
            if (url) {
              dynamicUrlMap[candidateId] = url
              continue
            }
            reportUnresolved(np.node, {
              imgId: candidateId,
              expression: idExpr,
              reason: 'image_url_unresolved',
              message: 'No configured image URL was available for dynamic image ID "' + candidateId + '".',
            })
          }
          const resolvedCandidateIds = candidateIds.filter(candidateId => dynamicUrlMap[candidateId])
          if (srcAttr?.value && fallback != null && resolvedCandidateIds.length) {
            const hasUnresolvedCandidates = resolvedCandidateIds.length !== candidateIds.length
            const fallbackArg = !isImagePlaceholderUrl(fallback) || hasUnresolvedCandidates
              ? ', ' + JSON.stringify(fallback)
              : ''
            dynamicSrcPatches.push({
              start: srcAttr.value.start,
              end: srcAttr.value.end,
              text: `{${helperName}(${idExpr}${fallbackArg})}`,
            })
          }
        }
      }

      const bgId = getAttrVal('data-strk-bg-id')
      if (bgId) {
        const bgEntry = activeConfigData[bgId]
        const url = buildSharpUrl(selectedConfigImageUrl(bgEntry), bgEntry?.width, 2)
        if (!url) {
          reportUnresolved(np.node, {
            imgId: bgId,
            reason: 'background_url_unresolved',
            message: 'No configured image URL was available for data-strk-bg-id "' + bgId + '".',
          })
        } else {
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
      } else {
        const idAttr = getAttrNode('data-strk-bg-id')
        const idExpr = expressionSource(idAttr)
        if (idExpr) {
          const candidates = entriesForOpening(np.node, 'bg')
          const candidateIds = [...new Set(candidates.map(entry => entry.imgId))]
          if (!candidateIds.length) {
            reportUnresolved(np.node, {
              expression: idExpr,
              reason: 'background_id_expression_unresolved',
              message: 'Could not determine the possible background image IDs for expression "' + idExpr + '".',
            })
          }

          const resolvedCandidateIds = []
          for (const candidateId of candidateIds) {
            const bgEntry = activeConfigData[candidateId]
            const url = buildSharpUrl(selectedConfigImageUrl(bgEntry), bgEntry?.width, 2)
            if (url) {
              dynamicBgUrlMap[candidateId] = 'url(' + url + ')'
              resolvedCandidateIds.push(candidateId)
              continue
            }
            reportUnresolved(np.node, {
              imgId: candidateId,
              expression: idExpr,
              reason: 'background_url_unresolved',
              message: 'No configured image URL was available for dynamic background image ID "' + candidateId + '".',
            })
          }

          if (resolvedCandidateIds.length) {
            const styleAttr = getAttrNode('style')
            const dynamicStyleExpr = `${bgHelperName}(${idExpr})`
            if (styleAttr?.value?.type === 'JSXExpressionContainer') {
              const raw = code.slice(styleAttr.value.expression.start, styleAttr.value.expression.end)
              pushPatch(
                styleAttr.start,
                styleAttr.end,
                `style={{ ...(${raw}), ...${dynamicStyleExpr} }}`,
              )
            } else if (styleAttr) {
              pushPatch(styleAttr.start, styleAttr.end, `style={${dynamicStyleExpr}}`)
            } else {
              const insertPos = np.node.selfClosing ? np.node.end - 2 : np.node.end - 1
              pushPatch(insertPos, insertPos, ` style={${dynamicStyleExpr}}`)
            }
            dynamicBgPatchCount++
          }
        }
      }
    },
  })

  if (dynamicSrcPatches.length && Object.keys(dynamicUrlMap).length) {
    const helper = [
      '',
      'const ' + helperMapName + ' = ' + JSON.stringify(dynamicUrlMap) + ';',
      'const ' + helperName + ' = (id, fallback) => ' + helperMapName + '[id] || fallback;',
      '',
    ].join('\n')
    pushPatch(importInsertPos, importInsertPos, helper)
    for (const patch of dynamicSrcPatches) {
      pushPatch(patch.start, patch.end, patch.text)
    }
  }

  if (dynamicBgPatchCount && Object.keys(dynamicBgUrlMap).length) {
    const helper = [
      '',
      'const ' + bgHelperMapName + ' = ' + JSON.stringify(dynamicBgUrlMap) + ';',
      'const ' + bgHelperName + ' = id => { const backgroundImage = ' + bgHelperMapName + "[id]; return backgroundImage ? { backgroundImage, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 1 } : {}; };",
      '',
    ].join('\n')
    pushPatch(importInsertPos, importInsertPos, helper)
  }

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

    async buildStart() {
      _entriesByScanFile = new Map()
      _buildEntriesBySourceFile = new Map()
      configPath = path.resolve(viteRoot || process.cwd(), 'src', CONFIG_FILENAME)
      cachePath  = path.resolve(viteRoot || process.cwd(), CACHE_FILENAME)
      configData = readJson(configPath)
      cacheData  = normalizeCacheData(readJson(cachePath))
      _dirty = false
      if (dedupePickedAcrossConfig(configData)) _dirty = true
      if (_dirty) flushToDisk()
      try {
        _lastWrittenConfigHash = md5Hex(fs.readFileSync(configPath, 'utf-8'))
      } catch {
        _lastWrittenConfigHash = null
      }

      const key = process.env.STRIKINGLY_IMAGES_API_KEY
      const keyStatus = (key && key !== 'your_key_here')
        ? ('set (' + key.slice(0, 8) + '...)')
        : 'NOT SET -- add STRIKINGLY_IMAGES_API_KEY to .env'
      console.log('[strk-img] Ready. STRIKINGLY_IMAGES_API_KEY: ' + keyStatus)
      if (_isBuild) await primeBuildConfigFromSource()
    },

    async transform(code, id) {
      if (!/\.(jsx|tsx)$/.test(id))     return null
      if (id.includes(CONFIG_FILENAME)) return null
      if (id.includes(CACHE_FILENAME))  return null
      if (!hasStrkMarkers(code) && !mayReachStrkMarkersViaLocalComponent(code)) return null

      const extractionOptions = {
        filePath: id,
        warnUnresolved: !_isBuild,
        onImportResolved: (p) => {
          try { this.addWatchFile(p) } catch {}
        },
      }
      let ast = null
      let entries
      if (_isBuild) {
        // Parse the file once and share the AST between extraction and the
        // optional build-time inlining pass — saves a full reparse per file.
        ast = parseJsxOnce(code)
        if (!ast) {
          warnParseFailure(id)
          return null
        }
        entries = extractStrkEntriesFromAst(ast, extractionOptions)
      } else {
        entries = extractStrkEntries(code, extractionOptions)
      }
      if (entries.length) {
        await processEntries(entries)
        if (_dirty) scheduleFlush(server)
      }
      if (_isBuild) {
        const buildEntries = mergeBuildEntries(entries, buildEntriesForSourceFile(id))
        const unresolved = []
        const transformed = inlineBuildImageSourcesFromAst(code, ast, buildEntries, {
          filePath: id,
          configData,
          onUnresolved: issue => unresolved.push(issue),
        })
        for (const issue of unresolved) {
          const location = issue.line == null ? id : `${id}:${issue.line}`
          this.warn(`[strk-img] ${issue.message || issue.reason} (${location})`)
        }
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
      if (
        file === cachePath ||
        file === cachePath + '.tmp' ||
        file === configPath + '.tmp'
      ) {
        return []
      }
      if (file !== configPath || !_lastWrittenConfigHash) return
      try {
        const cur = md5Hex(fs.readFileSync(file, 'utf-8'))
        if (cur === _lastWrittenConfigHash) return []
        _lastWrittenConfigHash = cur
        reloadConfigConsumers(server)
        return []
      } catch {}
    },
  }
}
