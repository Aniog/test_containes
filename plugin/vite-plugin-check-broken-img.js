import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'
import { parse } from '@babel/parser'
import traverseModule from '@babel/traverse'

const traverse = traverseModule.default || traverseModule

const OUTPUT_FILENAME = 'strk-broken-images.json'
const SOURCE_EXTENSIONS = new Set(['.js', '.jsx', '.ts', '.tsx'])
const STYLE_EXTENSIONS = new Set(['.css', '.scss', '.sass', '.less'])
const IMAGE_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg', '.gif', '.webp', '.avif', '.svg'])
const DEFAULT_TIMEOUT_MS = 3000
const DEFAULT_CONCURRENCY = 8
const DEFAULT_RETRY_COUNT = 1
const DEFAULT_CACHE_TTL_MS = 10 * 60 * 1000
const DEFAULT_UNCHECKED_CACHE_TTL_MS = 30 * 1000
const DEFAULT_MAX_IMAGE_CANDIDATES = 100
const DEFAULT_ORIGIN_CONCURRENCY = 2
const DEFAULT_MAX_RETRY_DELAY_MS = 5000
const PROBE_BYTE_LIMIT = 512
const IMAGE_URL_PROPERTY_RE = /(?:^|_|-)(?:images?|imgs?|src|urls?|background|backgroundImage)(?:$|_|-)/i
const DATA_IMAGE_URL_PROPERTY_RE = /(?:^|-)(?:images?|imgs?|photos?|pictures?|thumbnails?|thumbs?|avatars?|logos?|posters?|covers?|gallery|background(?:-image)?|hover-image|og-image)(?:$|-)/i
const DATA_IMAGE_PROPERTY_TOKEN_RE = /\b(?:images?|imgs?|photos?|pictures?|thumbnails?|thumbs?|avatars?|logos?|posters?|covers?|gallery|background|backgroundImage|hoverImage|ogImage)\b|['"`](?:background-image|hover-image|og-image)['"`]/i
const TRANSIENT_HTTP_STATUSES = new Set([408, 409, 425, 429, 500, 502, 503, 504, 520, 522, 524])
const UNKNOWN_IMAGE_VALUE = Symbol('strk-unknown-image-value')

let root = ''
let srcRoot = ''
let outputPath = ''
let scanTimer = null
let activeScan = Promise.resolve()
let latestScanRequest = 0
let lastScanStats = { unchecked: 0, temporary: 0, cacheHits: 0, uniqueChecks: 0 }

const remoteCheckCache = new Map()
const remoteOriginStates = new Map()

function readText(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf-8')
  } catch {
    return ''
  }
}

function writeJsonIfChanged(filePath, data) {
  const text = JSON.stringify(data, null, 2) + '\n'
  const current = readText(filePath)
  if (current === text) return false
  fs.mkdirSync(path.dirname(filePath), { recursive: true })
  const tmp = filePath + '.tmp'
  fs.writeFileSync(tmp, text, 'utf-8')
  fs.renameSync(tmp, filePath)
  return true
}

function walkFiles(dir, files = []) {
  if (!fs.existsSync(dir)) return files
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === 'node_modules' || entry.name === 'dist' || entry.name === '.git') {
      continue
    }
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      walkFiles(fullPath, files)
      continue
    }
    if (fullPath === outputPath) continue
    const ext = path.extname(entry.name)
    if (SOURCE_EXTENSIONS.has(ext) || STYLE_EXTENSIONS.has(ext)) {
      files.push(fullPath)
    }
  }
  return files
}

function toProjectPath(filePath) {
  return path.relative(root, filePath).replaceAll(path.sep, '/')
}

function parseSource(code, filePath) {
  try {
    return parse(code, {
      sourceType: 'module',
      plugins: ['jsx', 'typescript'],
      sourceFilename: filePath,
    })
  } catch (err) {
    console.warn('[strk-check-img] Could not parse ' + toProjectPath(filePath) + ': ' + err.message)
    return null
  }
}

function fileExistsWithExtension(basePath) {
  const candidates = [
    basePath,
    ...Array.from(SOURCE_EXTENSIONS, (ext) => basePath + ext),
    ...Array.from(IMAGE_EXTENSIONS, (ext) => basePath + ext),
    path.join(basePath, 'index.js'),
    path.join(basePath, 'index.jsx'),
    path.join(basePath, 'index.ts'),
    path.join(basePath, 'index.tsx'),
  ]
  for (const candidate of candidates) {
    if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
      return path.resolve(candidate)
    }
  }
  return null
}

function resolveImport(importerPath, specifier) {
  if (!specifier || specifier.startsWith('\0')) return null
  if (specifier.startsWith('@/')) {
    return fileExistsWithExtension(path.join(srcRoot, specifier.slice(2)))
  }
  if (specifier.startsWith('./') || specifier.startsWith('../')) {
    return fileExistsWithExtension(path.resolve(path.dirname(importerPath), specifier))
  }
  return null
}

function isImageFilePath(filePath) {
  return IMAGE_EXTENSIONS.has(path.extname(filePath).toLowerCase())
}

function importUrlForAsset(filePath) {
  if (filePath.startsWith(srcRoot + path.sep)) {
    return '@/' + path.relative(srcRoot, filePath).replaceAll(path.sep, '/')
  }
  const publicRoot = path.join(root, 'public')
  if (filePath.startsWith(publicRoot + path.sep)) {
    return '/' + path.relative(publicRoot, filePath).replaceAll(path.sep, '/')
  }
  return toProjectPath(filePath)
}

function getJsxName(node) {
  if (!node) return ''
  if (node.type === 'JSXIdentifier') return node.name
  if (node.type === 'JSXMemberExpression') {
    return [getJsxName(node.object), getJsxName(node.property)].filter(Boolean).join('.')
  }
  return ''
}

function getObjectKey(prop) {
  if (!prop || prop.type !== 'ObjectProperty') return null
  if (prop.key.type === 'Identifier' && !prop.computed) return prop.key.name
  if (prop.key.type === 'StringLiteral') return prop.key.value
  return null
}

function literalValue(node, scope = {}) {
  if (!node) return undefined
  if (
    node.type === 'TSAsExpression' ||
    node.type === 'TSSatisfiesExpression' ||
    node.type === 'TSNonNullExpression' ||
    node.type === 'TypeCastExpression' ||
    node.type === 'ParenthesizedExpression'
  ) {
    return literalValue(node.expression, scope)
  }
  if (node.type === 'StringLiteral') return node.value
  if (node.type === 'NumericLiteral') return node.value
  if (node.type === 'BooleanLiteral') return node.value
  if (node.type === 'NullLiteral') return null
  if (node.type === 'Identifier') {
    return Object.prototype.hasOwnProperty.call(scope, node.name) ? scope[node.name] : undefined
  }
  if (node.type === 'MemberExpression' || node.type === 'OptionalMemberExpression') {
    const object = literalValue(node.object, scope)
    if (object == null || typeof object !== 'object') return undefined
    let key
    if (node.computed) {
      key = literalValue(node.property, scope)
    } else if (node.property.type === 'Identifier') {
      key = node.property.name
    }
    return key === undefined ? undefined : object[key]
  }
  if (node.type === 'TemplateLiteral') {
    let out = ''
    for (let i = 0; i < node.quasis.length; i++) {
      out += node.quasis[i].value.cooked || ''
      if (i < node.expressions.length) {
        const value = literalValue(node.expressions[i], scope)
        if (value === undefined || typeof value === 'object') return undefined
        out += value == null ? '' : String(value)
      }
    }
    return out
  }
  if (node.type === 'BinaryExpression' && node.operator === '+') {
    const left = literalValue(node.left, scope)
    const right = literalValue(node.right, scope)
    return left === undefined || right === undefined ? undefined : String(left) + String(right)
  }
  if (node.type === 'BinaryExpression') {
    const left = literalValue(node.left, scope)
    const right = literalValue(node.right, scope)
    if (left === undefined || right === undefined) return undefined
    if (node.operator === '===') return left === right
    if (node.operator === '!==') return left !== right
    if (node.operator === '==') return left == right
    if (node.operator === '!=') return left != right
  }
  if (node.type === 'LogicalExpression') {
    const left = literalValue(node.left, scope)
    if (left === undefined) return undefined
    if (node.operator === '&&') return left && literalValue(node.right, scope)
    if (node.operator === '||') return left || literalValue(node.right, scope)
    if (node.operator === '??') return left ?? literalValue(node.right, scope)
  }
  if (node.type === 'UnaryExpression' && node.operator === '!') {
    const value = literalValue(node.argument, scope)
    return value === undefined ? undefined : !value
  }
  if (node.type === 'ArrayExpression') {
    const out = []
    for (const element of node.elements) {
      if (!element) return undefined
      if (element.type === 'SpreadElement') {
        const spread = literalValue(element.argument, scope)
        if (!Array.isArray(spread)) return undefined
        out.push(...spread)
        continue
      }
      const value = literalValue(element, scope)
      if (value === undefined) return undefined
      out.push(value)
    }
    return out
  }
  if (node.type === 'ObjectExpression') {
    const out = {}
    for (const prop of node.properties) {
      if (prop.type === 'SpreadElement') {
        const spread = literalValue(prop.argument, scope)
        if (spread && typeof spread === 'object' && !Array.isArray(spread)) {
          Object.assign(out, spread)
        }
        continue
      }
      const key = getObjectKey(prop)
      if (key == null) continue
      const value = literalValue(prop.value, scope)
      if (value !== undefined) out[key] = value
    }
    return out
  }
  if (node.type === 'CallExpression') return evaluateCallExpression(node, scope)
  return undefined
}

function evaluateCallExpression(node, scope) {
  if (node.callee?.type === 'Identifier') {
    if (node.callee.name === 'Number') {
      const value = literalValue(node.arguments[0], scope)
      const number = Number(value)
      return Number.isFinite(number) ? number : undefined
    }
    if (node.callee.name === 'useState') {
      return [literalValue(node.arguments[0], scope), undefined]
    }
    if (node.callee.name === 'useMemo') {
      const callback = node.arguments[0]
      if (callback?.type === 'ArrowFunctionExpression' || callback?.type === 'FunctionExpression') {
        return evaluateFunctionBody(callback, scope)
      }
    }
  }
  return evaluateArrayCall(node, scope)
}

function evaluateFunctionBody(fn, scope) {
  if (!fn) return undefined
  if (fn.body?.type !== 'BlockStatement') return literalValue(fn.body, scope)
  const localScope = { ...scope }
  for (const statement of fn.body.body || []) {
    if (statement.type === 'VariableDeclaration') {
      for (const declarator of statement.declarations || []) {
        if (!declarator.init) continue
        const value = literalValue(declarator.init, localScope)
        if (value !== undefined) bindPatternToScope(declarator.id, value, localScope)
      }
      continue
    }
    if (statement.type === 'ExpressionStatement' && statement.expression?.type === 'AssignmentExpression') {
      applyAssignment(statement.expression, localScope)
      continue
    }
    if (statement.type === 'ExpressionStatement' && statement.expression?.type === 'CallExpression') {
      literalValue(statement.expression, localScope)
      continue
    }
    if (statement.type === 'SwitchStatement') {
      evaluateSwitch(statement, localScope)
      continue
    }
    if (statement.type === 'ReturnStatement') {
      return literalValue(statement.argument, localScope)
    }
  }
  return undefined
}

function applyAssignment(node, scope) {
  if (node.operator !== '=') return
  const value = literalValue(node.right, scope)
  if (value === undefined) return
  bindPatternToScope(node.left, value, scope)
}

function evaluateSwitch(node, scope) {
  let matched = false
  const discriminant = literalValue(node.discriminant, scope)
  for (const switchCase of node.cases || []) {
    if (!matched) {
      if (!switchCase.test) matched = true
      else matched = literalValue(switchCase.test, scope) === discriminant
    }
    if (!matched) continue
    for (const consequent of switchCase.consequent || []) {
      if (consequent.type === 'ExpressionStatement' && consequent.expression?.type === 'AssignmentExpression') {
        applyAssignment(consequent.expression, scope)
      } else if (consequent.type === 'ExpressionStatement' && consequent.expression?.type === 'CallExpression') {
        literalValue(consequent.expression, scope)
      } else if (consequent.type === 'BreakStatement') {
        return
      }
    }
  }
}

function evaluateArrayCall(node, scope) {
  if (
    node.callee?.type !== 'MemberExpression' &&
    node.callee?.type !== 'OptionalMemberExpression'
  ) {
    return undefined
  }
  const object = literalValue(node.callee.object, scope)
  const method = node.callee.property?.type === 'Identifier' ? node.callee.property.name : ''
  if (!Array.isArray(object)) return undefined
  if (method === 'filter') {
    const callback = node.arguments[0]
    if (!callback || (callback.type !== 'ArrowFunctionExpression' && callback.type !== 'FunctionExpression')) {
      return object
    }
    const param = callback.params[0]
    if (!param || param.type !== 'Identifier') return object
    return object.filter((item) => {
      const passed = literalValue(callback.body, { ...scope, [param.name]: item })
      return passed === undefined ? true : Boolean(passed)
    })
  }
  if (method === 'slice') {
    const start = literalValue(node.arguments[0], scope)
    const end = literalValue(node.arguments[1], scope)
    return object.slice(
      Number.isFinite(Number(start)) ? Number(start) : undefined,
      Number.isFinite(Number(end)) ? Number(end) : undefined,
    )
  }
  if (method === 'find') {
    const callback = node.arguments[0]
    if (!callback || (callback.type !== 'ArrowFunctionExpression' && callback.type !== 'FunctionExpression')) {
      return object[0]
    }
    const param = callback.params[0]
    if (!param || param.type !== 'Identifier') return object[0]
    return object.find((item) => {
      const passed = literalValue(callback.body, { ...scope, [param.name]: item })
      return Boolean(passed)
    })
  }
  if (method === 'sort') {
    return [...object]
  }
  if (method === 'map') {
    const callback = node.arguments[0]
    if (!callback || (callback.type !== 'ArrowFunctionExpression' && callback.type !== 'FunctionExpression')) {
      return object
    }
    const param = callback.params[0]
    const indexParam = callback.params[1]
    if (!param || param.type !== 'Identifier') return object
    return object.map((item, index) => {
      const nextScope = { ...scope, [param.name]: item }
      if (indexParam?.type === 'Identifier') nextScope[indexParam.name] = index
      const value = evaluateFunctionBody(callback, nextScope)
      return value === undefined ? item : value
    })
  }
  return undefined
}

function uniqueCandidateValues(values, limit = maxImageCandidates()) {
  const out = []
  const seen = new Set()
  for (const value of values || []) {
    if (seen.has(value)) continue
    seen.add(value)
    out.push(value)
    if (out.length >= limit) break
  }
  return out
}

function combineCandidateValues(leftValues, rightValues, mapper, limit) {
  const out = []
  for (const left of leftValues) {
    for (const right of rightValues) {
      out.push(mapper(left, right))
      if (out.length >= limit) return uniqueCandidateValues(out, limit)
    }
  }
  return uniqueCandidateValues(out, limit)
}

function finiteCandidateNumber(value) {
  if (value === UNKNOWN_IMAGE_VALUE || value === undefined) return undefined
  const number = Number(value)
  return Number.isFinite(number) ? number : undefined
}

// Keep the existing literal evaluator unchanged. This bounded evaluator is used
// only for image src/srcSet expressions that depend on runtime choices.
function imageCandidateValues(node, scope = {}, limit = maxImageCandidates(), depth = 0) {
  if (!node || depth > 24 || limit <= 0) return [UNKNOWN_IMAGE_VALUE]
  if (
    node.type === 'TSAsExpression' ||
    node.type === 'TSSatisfiesExpression' ||
    node.type === 'TSNonNullExpression' ||
    node.type === 'TypeCastExpression' ||
    node.type === 'ParenthesizedExpression'
  ) {
    return imageCandidateValues(node.expression, scope, limit, depth + 1)
  }
  if (node.type === 'StringLiteral') return [node.value]
  if (node.type === 'NumericLiteral') return [node.value]
  if (node.type === 'BooleanLiteral') return [node.value]
  if (node.type === 'NullLiteral') return [null]
  if (node.type === 'Identifier') {
    return [
      Object.prototype.hasOwnProperty.call(scope, node.name)
        ? scope[node.name]
        : UNKNOWN_IMAGE_VALUE,
    ]
  }
  if (node.type === 'MemberExpression' || node.type === 'OptionalMemberExpression') {
    const objects = imageCandidateValues(node.object, scope, limit, depth + 1)
    const keys = node.computed
      ? imageCandidateValues(node.property, scope, limit, depth + 1)
      : [node.property.type === 'Identifier' ? node.property.name : UNKNOWN_IMAGE_VALUE]
    const out = []
    for (const object of objects) {
      for (const key of keys) {
        if (object === UNKNOWN_IMAGE_VALUE || object == null) {
          out.push(UNKNOWN_IMAGE_VALUE)
        } else if (key === UNKNOWN_IMAGE_VALUE) {
          if (Array.isArray(object)) out.push(...object)
          else if (typeof object === 'object') out.push(...Object.values(object))
          else out.push(UNKNOWN_IMAGE_VALUE)
        } else if (typeof object === 'object' || typeof object === 'string') {
          out.push(object[key] === undefined ? UNKNOWN_IMAGE_VALUE : object[key])
        } else {
          out.push(UNKNOWN_IMAGE_VALUE)
        }
        if (out.length >= limit) return uniqueCandidateValues(out, limit)
      }
    }
    return uniqueCandidateValues(out, limit)
  }
  if (node.type === 'TemplateLiteral') {
    let values = [node.quasis[0]?.value.cooked || '']
    for (let index = 0; index < node.expressions.length; index++) {
      const expressionValues = imageCandidateValues(
        node.expressions[index],
        scope,
        limit,
        depth + 1,
      )
      values = combineCandidateValues(
        values,
        expressionValues,
        (prefix, value) => {
          if (prefix === UNKNOWN_IMAGE_VALUE || value === UNKNOWN_IMAGE_VALUE || typeof value === 'object') {
            return UNKNOWN_IMAGE_VALUE
          }
          return String(prefix) + (value == null ? '' : String(value))
            + (node.quasis[index + 1]?.value.cooked || '')
        },
        limit,
      )
    }
    return values
  }
  if (node.type === 'BinaryExpression') {
    const leftValues = imageCandidateValues(node.left, scope, limit, depth + 1)
    const rightValues = imageCandidateValues(node.right, scope, limit, depth + 1)
    return combineCandidateValues(
      leftValues,
      rightValues,
      (left, right) => {
        if (left === UNKNOWN_IMAGE_VALUE || right === UNKNOWN_IMAGE_VALUE) {
          return UNKNOWN_IMAGE_VALUE
        }
        if (node.operator === '+') return String(left) + String(right)
        if (node.operator === '===') return left === right
        if (node.operator === '!==') return left !== right
        if (node.operator === '==') return left == right
        if (node.operator === '!=') return left != right
        return UNKNOWN_IMAGE_VALUE
      },
      limit,
    )
  }
  if (node.type === 'LogicalExpression') {
    const leftValues = imageCandidateValues(node.left, scope, limit, depth + 1)
    const out = []
    for (const left of leftValues) {
      if (left === UNKNOWN_IMAGE_VALUE) {
        out.push(UNKNOWN_IMAGE_VALUE)
        out.push(...imageCandidateValues(node.right, scope, limit, depth + 1))
      } else if (
        (node.operator === '&&' && left) ||
        (node.operator === '||' && !left) ||
        (node.operator === '??' && left == null)
      ) {
        out.push(...imageCandidateValues(node.right, scope, limit, depth + 1))
      } else {
        out.push(left)
      }
      if (out.length >= limit) break
    }
    return uniqueCandidateValues(out, limit)
  }
  if (node.type === 'ConditionalExpression') {
    const tests = imageCandidateValues(node.test, scope, limit, depth + 1)
    const out = []
    if (tests.some((value) => value === true || value === UNKNOWN_IMAGE_VALUE)) {
      out.push(...imageCandidateValues(node.consequent, scope, limit, depth + 1))
    }
    if (tests.some((value) => value === false || value === UNKNOWN_IMAGE_VALUE)) {
      out.push(...imageCandidateValues(node.alternate, scope, limit, depth + 1))
    }
    return uniqueCandidateValues(out, limit)
  }
  if (node.type === 'UnaryExpression' && node.operator === '!') {
    return imageCandidateValues(node.argument, scope, limit, depth + 1).map((value) => (
      value === UNKNOWN_IMAGE_VALUE ? UNKNOWN_IMAGE_VALUE : !value
    ))
  }
  if (node.type === 'ArrayExpression') {
    let arrays = [[]]
    for (const element of node.elements) {
      if (!element) return [UNKNOWN_IMAGE_VALUE]
      if (element.type === 'SpreadElement') {
        const spreadValues = imageCandidateValues(element.argument, scope, limit, depth + 1)
        arrays = combineCandidateValues(
          arrays,
          spreadValues,
          (array, spread) => (
            Array.isArray(array) && Array.isArray(spread)
              ? [...array, ...spread]
              : UNKNOWN_IMAGE_VALUE
          ),
          limit,
        )
      } else {
        const elementValues = imageCandidateValues(element, scope, limit, depth + 1)
        arrays = combineCandidateValues(
          arrays,
          elementValues,
          (array, value) => (
            Array.isArray(array) ? [...array, value] : UNKNOWN_IMAGE_VALUE
          ),
          limit,
        )
      }
    }
    return arrays
  }
  if (node.type === 'ObjectExpression') {
    let objects = [{}]
    for (const prop of node.properties) {
      if (prop.type === 'SpreadElement') {
        const spreadValues = imageCandidateValues(prop.argument, scope, limit, depth + 1)
        objects = combineCandidateValues(
          objects,
          spreadValues,
          (object, spread) => (
            object && spread && typeof spread === 'object' && !Array.isArray(spread)
              ? { ...object, ...spread }
              : UNKNOWN_IMAGE_VALUE
          ),
          limit,
        )
        continue
      }
      const key = getObjectKey(prop)
      if (key == null) continue
      const propValues = imageCandidateValues(prop.value, scope, limit, depth + 1)
      objects = combineCandidateValues(
        objects,
        propValues,
        (object, value) => (
          object && typeof object === 'object'
            ? { ...object, [key]: value }
            : UNKNOWN_IMAGE_VALUE
        ),
        limit,
      )
    }
    return objects
  }
  if (node.type === 'CallExpression') {
    return imageCallCandidateValues(node, scope, limit, depth + 1)
  }
  return [UNKNOWN_IMAGE_VALUE]
}

function imageCallCandidateValues(node, scope, limit, depth) {
  if (node.callee?.type === 'Identifier') {
    const name = node.callee.name
    if (name === 'encodeURIComponent' || name === 'encodeURI') {
      const encoder = name === 'encodeURIComponent' ? encodeURIComponent : encodeURI
      return imageCandidateValues(node.arguments[0], scope, limit, depth + 1).map((value) => (
        value === UNKNOWN_IMAGE_VALUE || typeof value === 'object'
          ? UNKNOWN_IMAGE_VALUE
          : encoder(value == null ? '' : String(value))
      ))
    }
    if (name === 'Number') {
      return imageCandidateValues(node.arguments[0], scope, limit, depth + 1).map((value) => {
        if (value === UNKNOWN_IMAGE_VALUE) return UNKNOWN_IMAGE_VALUE
        const number = Number(value)
        return Number.isFinite(number) ? number : UNKNOWN_IMAGE_VALUE
      })
    }
    if (name === 'useMemo') {
      const callback = node.arguments[0]
      if (callback?.type === 'ArrowFunctionExpression' || callback?.type === 'FunctionExpression') {
        return imageFunctionCandidateValues(callback, scope, limit, depth + 1)
      }
    }
    if (name === 'useState') {
      return imageCandidateValues(node.arguments[0], scope, limit, depth + 1)
    }
    return [UNKNOWN_IMAGE_VALUE]
  }
  return imageArrayCallCandidateValues(node, scope, limit, depth + 1)
}

function imageFunctionCandidateValues(fn, scope, limit, depth) {
  if (!fn) return [UNKNOWN_IMAGE_VALUE]
  if (fn.body?.type !== 'BlockStatement') {
    return imageCandidateValues(fn.body, scope, limit, depth + 1)
  }

  let scopes = [{ ...scope }]
  for (const statement of fn.body.body || []) {
    if (statement.type === 'VariableDeclaration') {
      for (const declarator of statement.declarations || []) {
        scopes = expandImageCandidateScopes(scopes, declarator, limit, depth + 1)
      }
      continue
    }
    if (statement.type === 'ReturnStatement') {
      const out = []
      for (const currentScope of scopes) {
        out.push(...imageCandidateValues(statement.argument, currentScope, limit, depth + 1))
        if (out.length >= limit) break
      }
      return uniqueCandidateValues(out, limit)
    }
  }
  return [UNKNOWN_IMAGE_VALUE]
}

function imageArrayCallCandidateValues(node, scope, limit, depth) {
  if (
    node.callee?.type !== 'MemberExpression' &&
    node.callee?.type !== 'OptionalMemberExpression'
  ) {
    return [UNKNOWN_IMAGE_VALUE]
  }
  const method = node.callee.property?.type === 'Identifier' ? node.callee.property.name : ''
  const objects = imageCandidateValues(node.callee.object, scope, limit, depth + 1)
  const out = []

  for (const object of objects) {
    if (!Array.isArray(object)) {
      out.push(UNKNOWN_IMAGE_VALUE)
      continue
    }
    if (method === 'slice') {
      const start = node.arguments.length > 0
        ? imageCandidateValues(node.arguments[0], scope, limit, depth + 1)[0]
        : undefined
      const end = node.arguments.length > 1
        ? imageCandidateValues(node.arguments[1], scope, limit, depth + 1)[0]
        : undefined
      out.push(object.slice(
        finiteCandidateNumber(start),
        finiteCandidateNumber(end),
      ))
      continue
    }
    if (method === 'sort') {
      out.push([...object])
      continue
    }

    const callback = node.arguments[0]
    const param = callback?.params?.[0]
    const indexParam = callback?.params?.[1]
    if (
      !callback ||
      (callback.type !== 'ArrowFunctionExpression' && callback.type !== 'FunctionExpression') ||
      !param ||
      param.type !== 'Identifier'
    ) {
      out.push(method === 'find' ? object[0] : object)
      continue
    }

    if (method === 'find') {
      for (let index = 0; index < object.length; index++) {
        const nextScope = { ...scope, [param.name]: object[index] }
        if (indexParam?.type === 'Identifier') nextScope[indexParam.name] = index
        const passed = imageFunctionCandidateValues(callback, nextScope, limit, depth + 1)
        const canMatch = passed.some((value) => value === true || value === UNKNOWN_IMAGE_VALUE)
        const mustMatch = passed.length > 0 && passed.every((value) => value === true)
        if (canMatch) out.push(object[index])
        if (mustMatch) break
        if (out.length >= limit) break
      }
      continue
    }
    if (method === 'filter') {
      const filtered = object.filter((item, index) => {
        const nextScope = { ...scope, [param.name]: item }
        if (indexParam?.type === 'Identifier') nextScope[indexParam.name] = index
        return imageFunctionCandidateValues(callback, nextScope, limit, depth + 1)
          .some((value) => value === true || value === UNKNOWN_IMAGE_VALUE)
      })
      out.push(filtered)
      continue
    }
    if (method === 'map') {
      const mapped = []
      for (let index = 0; index < object.length; index++) {
        const nextScope = { ...scope, [param.name]: object[index] }
        if (indexParam?.type === 'Identifier') nextScope[indexParam.name] = index
        const values = imageFunctionCandidateValues(callback, nextScope, limit, depth + 1)
        mapped.push(values[0] === undefined ? object[index] : values[0])
      }
      out.push(mapped)
      continue
    }
    out.push(UNKNOWN_IMAGE_VALUE)
  }
  return uniqueCandidateValues(out, limit)
}

function bindImageCandidatePattern(pattern, value, scope) {
  if (!pattern) return
  if (pattern.type === 'Identifier') {
    scope[pattern.name] = value
    return
  }
  if (pattern.type === 'AssignmentPattern') {
    bindImageCandidatePattern(pattern.left, value, scope)
    return
  }
  if (pattern.type === 'ObjectPattern') {
    for (const prop of pattern.properties || []) {
      if (prop.type !== 'ObjectProperty') continue
      let key
      if (prop.key.type === 'Identifier') key = prop.key.name
      else if (prop.key.type === 'StringLiteral') key = prop.key.value
      if (key == null) continue
      const nextValue =
        value === UNKNOWN_IMAGE_VALUE || value == null || typeof value !== 'object'
          ? UNKNOWN_IMAGE_VALUE
          : value[key] ?? UNKNOWN_IMAGE_VALUE
      bindImageCandidatePattern(prop.value, nextValue, scope)
    }
    return
  }
  if (pattern.type === 'ArrayPattern') {
    pattern.elements.forEach((element, index) => {
      const nextValue =
        Array.isArray(value) && index < value.length
          ? value[index]
          : UNKNOWN_IMAGE_VALUE
      bindImageCandidatePattern(element, nextValue, scope)
    })
  }
}

function expandImageCandidateScopes(scopes, declarator, limit, depth = 0) {
  if (!declarator?.init) return scopes
  const out = []
  const isUseState =
    declarator.init.type === 'CallExpression' &&
    declarator.init.callee?.type === 'Identifier' &&
    declarator.init.callee.name === 'useState'

  for (const scope of scopes) {
    let values
    if (isUseState) {
      // The normal literal path already checks the initial state. Treating the
      // candidate state as unknown explores runtime branches without multiplying
      // unrelated state combinations.
      values = [[UNKNOWN_IMAGE_VALUE, UNKNOWN_IMAGE_VALUE]]
    } else {
      values = imageCandidateValues(declarator.init, scope, limit, depth + 1)
    }
    for (const value of values.length ? values : [UNKNOWN_IMAGE_VALUE]) {
      const nextScope = { ...scope }
      bindImageCandidatePattern(declarator.id, value, nextScope)
      out.push(nextScope)
      if (out.length >= limit) return out
    }
  }
  return out.length ? out : scopes
}

function imageCandidateScopesForPath(pathRef, baseScope) {
  const limit = maxImageCandidates()
  let scopes = [{ ...baseScope }]
  const functions = []
  let current = pathRef
  while (current) {
    if (
      current.node?.type === 'FunctionDeclaration' ||
      current.node?.type === 'FunctionExpression' ||
      current.node?.type === 'ArrowFunctionExpression'
    ) {
      functions.unshift(current)
    }
    current = current.parentPath
  }

  for (const fn of functions) {
    if (!fn.node?.body || fn.node.body.type !== 'BlockStatement') continue
    for (const statement of fn.node.body.body || []) {
      if (statement.start != null && pathRef.node.start != null && statement.start >= pathRef.node.start) {
        break
      }
      if (statement.type !== 'VariableDeclaration') continue
      for (const declarator of statement.declarations || []) {
        scopes = expandImageCandidateScopes(scopes, declarator, limit)
      }
    }
  }
  return scopes
}

function collectLiteralUrls(value, pathParts = []) {
  const out = []
  if (typeof value === 'string') {
    const key = pathParts[pathParts.length - 1] || ''
    if (looksLikeImageUrl(value) || (isImageUrlPropertyName(key) && looksLikeImageUrlInImageContext(value))) {
      out.push({ url: value, label: pathParts.join('.') })
    }
    return out
  }
  if (Array.isArray(value)) {
    value.forEach((item, index) => out.push(...collectLiteralUrls(item, [...pathParts, String(index)])))
    return out
  }
  if (value && typeof value === 'object') {
    for (const [key, item] of Object.entries(value)) {
      out.push(...collectLiteralUrls(item, [...pathParts, key]))
    }
  }
  return out
}

function isImageUrlPropertyName(key) {
  const value = String(key || '')
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .toLowerCase()
  return IMAGE_URL_PROPERTY_RE.test(value)
}

function isDataImageUrlPropertyName(key) {
  const value = String(key || '')
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/_/g, '-')
    .toLowerCase()
  return DATA_IMAGE_URL_PROPERTY_RE.test(value)
}

function isLiteralDataFile(filePath) {
  if (filePath.includes(path.sep + 'data' + path.sep)) return true
  const ext = path.extname(filePath).toLowerCase()
  if (!SOURCE_EXTENSIONS.has(ext)) return false
  return path.basename(filePath, ext).toLowerCase() === 'data'
}

function mightContainLiteralImageData(info) {
  return isLiteralDataFile(info.filePath) || DATA_IMAGE_PROPERTY_TOKEN_RE.test(info.code)
}

function normalizeUrlCandidate(raw) {
  if (typeof raw !== 'string') return ''
  const trimmed = raw.trim()
  if (!trimmed) return ''
  const cssMatch = trimmed.match(/^url\((.*)\)$/i)
  const value = cssMatch ? cssMatch[1].trim().replace(/^['"]|['"]$/g, '') : trimmed
  return value.trim()
}

function looksLikeImageUrl(raw) {
  const value = normalizeUrlCandidate(raw)
  if (!value) return false
  if (/^(data|blob):/i.test(value)) return false
  if (/^https?:\/\//i.test(value)) return true
  if (/^(\/|\.{1,2}\/|@\/)/.test(value)) {
    return /\.(?:png|jpe?g|gif|webp|avif|svg)(?:[?#].*)?$/i.test(value)
  }
  return /\.(?:png|jpe?g|gif|webp|avif|svg)(?:[?#].*)?$/i.test(value)
}

function looksLikeImageUrlInImageContext(raw) {
  const value = normalizeUrlCandidate(raw)
  if (looksLikeImageUrl(value)) return true
  if (!value || /^(data|blob):/i.test(value)) return false
  if (/^[a-z][a-z0-9+.-]*:/i.test(value)) return false
  return /^(\/(?!\/)|\.{1,2}\/|@\/)/.test(value)
}

function looksLikeExplicitImageAssetUrl(raw) {
  const value = normalizeUrlCandidate(raw)
  if (!value || /^(data|blob):/i.test(value)) return false
  return /\.(?:png|jpe?g|gif|webp|avif|svg)(?:[?#].*)?$/i.test(value)
}

function extractUrlsFromCssText(code) {
  const out = []
  const re = /url\(\s*(['"]?)(.*?)\1\s*\)/gi
  let match
  while ((match = re.exec(code))) {
    const prefix = code.slice(Math.max(0, match.index - 16), match.index)
    if (/@import\s+$/i.test(prefix)) continue
    const url = normalizeUrlCandidate(match[2])
    if (looksLikeImageUrl(url)) out.push(url)
  }
  return out
}

function staticImportsFromAst(ast, filePath) {
  const imports = new Map()
  traverse(ast, {
    ImportDeclaration(pathRef) {
      const source = pathRef.node.source.value
      const resolved = resolveImport(filePath, source)
      if (!resolved) return
      for (const specifier of pathRef.node.specifiers) {
        if (specifier.type === 'ImportDefaultSpecifier') {
          imports.set(specifier.local.name, { filePath: resolved, imported: 'default' })
        } else if (specifier.type === 'ImportSpecifier') {
          const imported =
            specifier.imported.type === 'Identifier'
              ? specifier.imported.name
              : specifier.imported.value
          imports.set(specifier.local.name, { filePath: resolved, imported })
        } else if (specifier.type === 'ImportNamespaceSpecifier') {
          imports.set(specifier.local.name, { filePath: resolved, imported: '*' })
        }
      }
    },
  })
  return imports
}

function extractExportedLiterals(ast) {
  const exports = new Map()
  traverse(ast, {
    ExportNamedDeclaration(pathRef) {
      const declaration = pathRef.node.declaration
      if (!declaration || declaration.type !== 'VariableDeclaration') return
      for (const declarator of declaration.declarations) {
        if (declarator.id.type !== 'Identifier') continue
        const value = literalValue(declarator.init)
        if (value !== undefined) exports.set(declarator.id.name, value)
      }
    },
    VariableDeclarator(pathRef) {
      if (pathRef.parentPath?.parent?.type === 'ExportNamedDeclaration') return
      if (pathRef.node.id.type !== 'Identifier') return
      const value = literalValue(pathRef.node.init)
      if (value !== undefined) exports.set(pathRef.node.id.name, value)
    },
  })
  return exports
}

function buildModuleInfo(files) {
  const modules = new Map()
  for (const filePath of files.filter((file) => SOURCE_EXTENSIONS.has(path.extname(file)))) {
    const code = readText(filePath)
    const ast = parseSource(code, filePath)
    if (!ast) continue
    modules.set(filePath, {
      filePath,
      code,
      ast,
      imports: staticImportsFromAst(ast, filePath),
      exports: extractExportedLiterals(ast),
      localScope: {},
      componentImports: new Map(),
      usedComponents: new Set(),
      componentName: componentNameFromFile(filePath),
    })
  }
  for (const info of modules.values()) {
    for (const [name, record] of info.imports) {
      if (record.imported !== '*' && modules.has(record.filePath)) {
        const value = modules.get(record.filePath).exports.get(record.imported)
        if (value !== undefined) info.localScope[name] = value
      } else if (record.imported === 'default' && isImageFilePath(record.filePath)) {
        info.localScope[name] = importUrlForAsset(record.filePath)
      }
      if (record.imported === 'default' && modules.has(record.filePath)) {
        info.componentImports.set(name, record.filePath)
      }
    }
    for (const [name, value] of info.exports) {
      info.localScope[name] = value
    }
    collectTopLevelLocalLiterals(info)
  }
  for (const info of modules.values()) {
    traverse(info.ast, {
      JSXOpeningElement(pathRef) {
        const name = getJsxName(pathRef.node.name)
        if (/^[A-Z]/.test(name)) info.usedComponents.add(name.split('.')[0])
      },
    })
  }
  return modules
}

function collectTopLevelLocalLiterals(info) {
  for (const statement of info.ast.program.body || []) {
    if (statement.type !== 'VariableDeclaration') continue
    for (const declarator of statement.declarations || []) {
      if (!declarator.init) continue
      const value = literalValue(declarator.init, info.localScope)
      if (value !== undefined) bindPatternToScope(declarator.id, value, info.localScope)
    }
  }
}

function bindPatternToScope(pattern, value, scope) {
  if (!pattern) return
  if (pattern.type === 'Identifier') {
    scope[pattern.name] = value
    return
  }
  if (pattern.type === 'ObjectPattern' && value && typeof value === 'object') {
    for (const prop of pattern.properties || []) {
      if (prop.type !== 'ObjectProperty') continue
      let key
      if (prop.key.type === 'Identifier') key = prop.key.name
      else if (prop.key.type === 'StringLiteral') key = prop.key.value
      if (key == null) continue
      bindPatternToScope(prop.value, value[key], scope)
    }
    return
  }
  if (pattern.type === 'ArrayPattern' && Array.isArray(value)) {
    pattern.elements.forEach((element, index) => bindPatternToScope(element, value[index], scope))
  }
}

function componentNameFromFile(filePath) {
  return path.basename(filePath).replace(/\.[^.]+$/, '')
}

function routeNameFromPath(routePath) {
  if (routePath === '/') return 'Home'
  return routePath
    .split('/')
    .filter(Boolean)
    .map((part) => (part.startsWith(':') ? part.slice(1) : part))
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ') || routePath
}

function extractRoutes(modules) {
  const appFile = fileExistsWithExtension(path.join(srcRoot, 'App'))
  const routes = new Map()
  for (const filePath of modules.keys()) {
    if (filePath.includes(path.sep + 'pages' + path.sep)) {
      const name = componentNameFromFile(filePath)
      routes.set(filePath, [{ page: name, route: null }])
    }
  }
  const app = appFile ? modules.get(appFile) : null
  if (!app) return routes

  traverse(app.ast, {
    JSXOpeningElement(pathRef) {
      const node = pathRef.node
      if (getJsxName(node.name) !== 'Route') return
      const attrs = attrsToMap(node.attributes)
      const routePath = literalValueFromJsxAttr(attrs.get('path'), app.localScope)
      const elementAttr = attrs.get('element')
      if (!routePath || !elementAttr?.value || elementAttr.value.type !== 'JSXExpressionContainer') return
      const componentNames = []
      traverse(elementAttr.value.expression, {
        JSXOpeningElement(innerPath) {
          const name = getJsxName(innerPath.node.name)
          if (/^[A-Z]/.test(name)) componentNames.push(name.split('.')[0])
        },
      }, pathRef.scope, null, pathRef)
      for (const componentName of componentNames) {
        const record = app.imports.get(componentName)
        if (!record || !record.filePath.includes(path.sep + 'pages' + path.sep)) continue
        routes.set(record.filePath, [{
          page: componentName,
          route: routePath,
        }])
      }
    },
  })
  return routes
}

function pageUsageForModules(modules, routes) {
  const usage = new Map()
  const queue = []
  for (const [filePath, pages] of routes) {
    usage.set(filePath, pages)
    queue.push(filePath)
  }
  while (queue.length) {
    const filePath = queue.shift()
    const info = modules.get(filePath)
    if (!info) continue
    const pages = usage.get(filePath) || []
    for (const componentName of info.usedComponents) {
      const child = info.componentImports.get(componentName)
      if (!child || !modules.has(child)) continue
      const existing = usage.get(child) || []
      const merged = mergePages(existing, pages)
      if (merged.length !== existing.length) {
        usage.set(child, merged)
        queue.push(child)
      }
    }
  }
  return usage
}

function mergePages(a, b) {
  const seen = new Set()
  const out = []
  for (const item of [...a, ...b]) {
    const key = `${item.page}\0${item.route || ''}`
    if (seen.has(key)) continue
    seen.add(key)
    out.push(item)
  }
  return out
}

function attrsToMap(attrs) {
  const map = new Map()
  for (const attr of attrs || []) {
    if (attr.type !== 'JSXAttribute' || attr.name.type !== 'JSXIdentifier') continue
    map.set(attr.name.name, attr)
  }
  return map
}

function literalValueFromJsxAttr(attr, scope) {
  if (!attr) return undefined
  if (!attr.value) return true
  if (attr.value.type === 'StringLiteral') return attr.value.value
  if (attr.value.type === 'JSXExpressionContainer') return literalValue(attr.value.expression, scope)
  return undefined
}

function nearestSectionName(pathRef, fallbackName) {
  let current = pathRef
  while (current) {
    if (current.node?.type === 'JSXElement') {
      const opening = current.node.openingElement
      if (getJsxName(opening.name) === 'section') {
        return labelForSection(current.node) || fallbackName
      }
    }
    current = current.parentPath
  }
  return fallbackName
}

function labelForSection(sectionNode) {
  const attrs = attrsToMap(sectionNode.openingElement.attributes)
  for (const name of ['data-section', 'id', 'aria-label']) {
    const attr = attrs.get(name)
    const value = literalValueFromJsxAttr(attr, {})
    if (typeof value === 'string' && value.trim()) return value.trim()
  }
  const heading = firstHeadingText(sectionNode)
  return heading || null
}

function firstHeadingText(node) {
  if (!node || !node.children) return null
  for (const child of node.children) {
    if (child.type !== 'JSXElement') continue
    const name = getJsxName(child.openingElement.name)
    if (/^h[1-6]$/.test(name)) {
      const text = jsxTextContent(child).trim().replace(/\s+/g, ' ')
      if (text) return text
    }
    const nested = firstHeadingText(child)
    if (nested) return nested
  }
  return null
}

function jsxTextContent(node) {
  let out = ''
  for (const child of node.children || []) {
    if (child.type === 'JSXText') out += child.value
    if (child.type === 'JSXExpressionContainer') {
      const value = literalValue(child.expression, {})
      if (value != null && typeof value !== 'object') out += String(value)
    }
    if (child.type === 'JSXElement') out += jsxTextContent(child)
  }
  return out
}

function functionNameForPath(pathRef, fallback) {
  const fn = pathRef.getFunctionParent()
  if (!fn) return fallback
  const node = fn.node
  if (node.id?.name) return node.id.name
  if (fn.parentPath?.node?.type === 'VariableDeclarator' && fn.parentPath.node.id.type === 'Identifier') {
    return fn.parentPath.node.id.name
  }
  return fallback
}

function sourceAt(filePath, node) {
  const loc = node?.loc?.start
  return loc ? `${toProjectPath(filePath)}:${loc.line}` : toProjectPath(filePath)
}

function gatherUrlsFromExpression(expression, scope) {
  const value = literalValue(expression, scope)
  if (typeof value === 'string') return looksLikeImageUrl(value) ? [normalizeUrlCandidate(value)] : []
  const literalUrls = collectLiteralUrls(value).map((item) => normalizeUrlCandidate(item.url))
  return Array.from(new Set(literalUrls.filter(Boolean)))
}

function gatherImageCandidateUrlsFromExpression(expression, scope, limit = maxImageCandidates()) {
  const urls = []
  for (const value of imageCandidateValues(expression, scope, limit)) {
    if (typeof value === 'string') {
      const url = normalizeUrlCandidate(value)
      if (looksLikeImageUrl(url)) urls.push(url)
    } else if (value !== UNKNOWN_IMAGE_VALUE) {
      urls.push(
        ...collectLiteralUrls(value)
          .map((item) => normalizeUrlCandidate(item.url))
          .filter(Boolean),
      )
    }
    if (urls.length >= limit) break
  }
  return Array.from(new Set(urls)).slice(0, limit)
}

function mapCallbacksForPath(pathRef, baseScope) {
  const callbacks = []
  let current = pathRef
  while (current) {
    if (
      current.node?.type === 'CallExpression' &&
      (current.node.callee?.type === 'MemberExpression' ||
        current.node.callee?.type === 'OptionalMemberExpression')
    ) {
      const method = current.node.callee.property?.type === 'Identifier'
        ? current.node.callee.property.name
        : ''
      const callback = current.node.arguments[0]
      if (
        method === 'map' &&
        callback &&
        (callback.type === 'ArrowFunctionExpression' || callback.type === 'FunctionExpression')
      ) {
        callbacks.unshift({ callPath: current, callback })
      }
    }
    current = current.parentPath
  }

  let scopes = [baseScope]
  for (const { callPath, callback } of callbacks) {
    const nextScopes = []
    for (const scope of scopes) {
      const arrayValue = literalValue(callPath.node.callee.object, scope)
      if (!Array.isArray(arrayValue)) {
        nextScopes.push(scope)
        continue
      }
      arrayValue.forEach((entry, index) => {
        const next = { ...scope }
        if (callback.params[0]?.type === 'Identifier') next[callback.params[0].name] = entry
        if (callback.params[1]?.type === 'Identifier') next[callback.params[1].name] = index
        nextScopes.push(next)
      })
    }
    scopes = nextScopes
  }
  return scopes
}

function gatherImageUrlsForPath(pathRef, expression, nodeScope, baseScope) {
  const limit = maxImageCandidates()
  const urls = new Set()
  const collectFromScope = (scope, includeCandidates) => {
    for (const scoped of mapCallbacksForPath(pathRef, scope)) {
      for (const url of gatherUrlsFromExpression(expression, scoped)) {
        urls.add(url)
        if (urls.size >= limit) return true
      }
      if (includeCandidates) {
        for (const url of gatherImageCandidateUrlsFromExpression(expression, scoped, limit)) {
          urls.add(url)
          if (urls.size >= limit) return true
        }
      }
    }
    return false
  }

  if (collectFromScope(nodeScope, false)) return Array.from(urls)
  for (const candidateScope of imageCandidateScopesForPath(pathRef, baseScope)) {
    if (collectFromScope(candidateScope, true)) break
  }
  return Array.from(urls)
}

function scopeForPath(pathRef, baseScope) {
  const scope = { ...baseScope }
  const functions = []
  let current = pathRef
  while (current) {
    if (
      current.node?.type === 'FunctionDeclaration' ||
      current.node?.type === 'FunctionExpression' ||
      current.node?.type === 'ArrowFunctionExpression'
    ) {
      functions.unshift(current)
    }
    current = current.parentPath
  }
  for (const fn of functions) {
    if (!fn.node?.body || fn.node.body.type !== 'BlockStatement') continue
    for (const statement of fn.node.body.body || []) {
      if (statement.start != null && pathRef.node.start != null && statement.start >= pathRef.node.start) {
        break
      }
      if (statement.type !== 'VariableDeclaration') continue
      for (const declarator of statement.declarations || []) {
        if (!declarator.init) continue
        const value = literalValue(declarator.init, scope)
        if (value !== undefined) bindPatternToScope(declarator.id, value, scope)
      }
    }
  }
  return scope
}

function collectImageUses(modules, usageByModule) {
  const uses = []
  for (const info of modules.values()) {
    const moduleUses = []
    const pages = usageByModule.get(info.filePath) || [{
      page: info.filePath.includes(path.sep + 'pages' + path.sep)
        ? componentNameFromFile(info.filePath)
        : 'Unknown',
      route: null,
    }]
    const componentFallback = info.componentName
    try {
      traverse(info.ast, {
        JSXOpeningElement(pathRef) {
          const node = pathRef.node
          const tag = getJsxName(node.name)
          const attrs = attrsToMap(node.attributes)
          const isImg = tag === 'img' || tag === 'source'
          const styleAttr = attrs.get('style')
          const classNameAttr = attrs.get('className')
          const attrNames = isImg ? ['src', 'srcSet'] : []

          const fnName = functionNameForPath(pathRef, componentFallback)
          const section = nearestSectionName(pathRef.parentPath, fnName)
          const base = {
            section,
            sourceFile: info.filePath,
            source: sourceAt(info.filePath, node),
          }
          const nodeScope = scopeForPath(pathRef, info.localScope)

          if (isImg) {
            for (const attrName of attrNames) {
              const attr = attrs.get(attrName)
              if (!attr) continue
              if (attr.value?.type === 'StringLiteral') {
                for (const url of splitSrcSet(attr.value.value)) {
                  addUses(moduleUses, pages, { ...base, url, kind: 'image' })
                }
                continue
              }
              if (attr.value?.type === 'JSXExpressionContainer') {
                const urls = gatherImageUrlsForPath(
                  pathRef,
                  attr.value.expression,
                  nodeScope,
                  info.localScope,
                )
                for (const url of urls) {
                  addUses(moduleUses, pages, { ...base, url, kind: 'image' })
                }
              }
            }
          }

          if (styleAttr?.value?.type === 'JSXExpressionContainer') {
            for (const scoped of mapCallbacksForPath(pathRef, nodeScope)) {
              const value = literalValue(styleAttr.value.expression, scoped)
              const bg = value?.backgroundImage || value?.background
              for (const url of extractUrlsFromStyleValue(bg)) {
                addUses(moduleUses, pages, { ...base, url, kind: 'background' })
              }
            }
          }

          for (const className of classNameValuesFromAttr(classNameAttr, pathRef, nodeScope)) {
            for (const url of extractUrlsFromCssText(className)) {
              addUses(moduleUses, pages, { ...base, url, kind: 'background' })
            }
          }
        },
      })
    } catch (err) {
      console.warn(
        '[strk-check-img] Could not analyze dynamic image sources in '
          + toProjectPath(info.filePath) + ': ' + err.message,
      )
    }
    uses.push(...moduleUses)
  }
  return dedupeUses(uses)
}

function collectUsesSafely(label, collector) {
  try {
    return collector()
  } catch (err) {
    console.warn('[strk-check-img] Could not collect ' + label + ': ' + err.message)
    return []
  }
}

function classNameValuesFromAttr(attr, pathRef, nodeScope) {
  if (!attr) return []
  if (attr.value?.type === 'StringLiteral') return [attr.value.value]
  if (attr.value?.type !== 'JSXExpressionContainer') return []

  const values = []
  for (const scoped of mapCallbacksForPath(pathRef, nodeScope)) {
    const value = literalValue(attr.value.expression, scoped)
    if (typeof value === 'string') values.push(value)
  }
  return values
}

function splitSrcSet(value) {
  return String(value)
    .split(',')
    .map((part) => normalizeUrlCandidate(part.trim().split(/\s+/)[0]))
    .filter(looksLikeImageUrlInImageContext)
}

function extractUrlsFromStyleValue(value) {
  if (typeof value !== 'string') return []
  return extractUrlsFromCssText(value)
}

function addUses(uses, pages, image) {
  const url = normalizeUrlCandidate(image.url)
  if (!looksLikeImageUrlInImageContext(url)) return
  for (const page of pages) {
    uses.push({
      url,
      page: page.page || routeNameFromPath(page.route || ''),
      route: page.route || null,
      section: image.section,
      kind: image.kind,
      sourceFile: image.sourceFile,
      source: image.source,
    })
  }
}

function dedupeUses(uses) {
  const out = []
  const seen = new Set()
  for (const use of uses) {
    const key = `${use.source}\0${use.url}\0${use.kind || ''}`
    if (seen.has(key)) continue
    seen.add(key)
    out.push(use)
  }
  return out
}

function collectCssUses(files) {
  const uses = []
  for (const filePath of files.filter((file) => STYLE_EXTENSIONS.has(path.extname(file)))) {
    const code = readText(filePath)
    for (const url of extractUrlsFromCssText(code)) {
      uses.push({
        url,
        page: 'Global',
        route: null,
        section: path.basename(filePath),
        kind: 'background',
        sourceFile: filePath,
        source: toProjectPath(filePath),
      })
    }
  }
  return uses
}

function collectLiteralDataUses(modules, usageByModule) {
  const uses = []
  for (const info of modules.values()) {
    if (!mightContainLiteralImageData(info)) continue

    const pages = usageByModule.get(info.filePath) || [{
      page: 'Data',
      route: null,
    }]

    traverse(info.ast, {
      StringLiteral(pathRef) {
        const labelParts = dataPathParts(pathRef)
        const label = labelParts.join('.')
        const hasImageProperty = labelParts.some((part) => isDataImageUrlPropertyName(part))
        if (!hasImageProperty && !looksLikeExplicitImageAssetUrl(pathRef.node.value)) return

        const url = normalizeUrlCandidate(pathRef.node.value)
        const isImageContextUrl = hasImageProperty && looksLikeImageUrlInImageContext(url)
        if (!url || (!isImageContextUrl && !looksLikeExplicitImageAssetUrl(url))) return
        uses.push({
          url,
          page: pages[0]?.page || 'Data',
          route: pages[0]?.route || null,
          section: label || componentNameFromFile(info.filePath),
          kind: 'image',
          sourceFile: info.filePath,
          source: sourceAt(info.filePath, pathRef.node),
        })
      },
    })
  }
  return dedupeUses(uses)
}

function dataPathParts(pathRef) {
  const parts = []
  let current = pathRef
  while (current) {
    const node = current.node
    const parent = current.parentPath?.node
    if (parent?.type === 'ObjectProperty' && parent.value === node) {
      const key = getObjectKey(parent)
      if (key != null) parts.unshift(key)
    } else if (parent?.type === 'ArrayExpression') {
      const index = parent.elements.indexOf(node)
      if (index >= 0) parts.unshift(String(index))
    } else if (parent?.type === 'VariableDeclarator' && parent.init === node && parent.id.type === 'Identifier') {
      parts.unshift(parent.id.name)
      break
    }
    current = current.parentPath
  }
  return parts
}

function stableRecordId(record) {
  return crypto
    .createHash('sha1')
    .update(`${record.source}\0${record.url}\0${record.kind || ''}`)
    .digest('hex')
    .slice(0, 12)
}

async function mapWithConcurrency(items, concurrency, mapper) {
  const results = new Array(items.length)
  let index = 0
  const workers = Array.from({ length: Math.min(concurrency, items.length) }, async () => {
    while (index < items.length) {
      const current = index++
      results[current] = await mapper(items[current], current)
    }
  })
  await Promise.all(workers)
  return results
}

function timeoutMs() {
  const parsed = Number(process.env.STRK_CHECK_IMG_TIMEOUT_MS)
  return Number.isFinite(parsed) && parsed > 0 ? parsed : DEFAULT_TIMEOUT_MS
}

function concurrency() {
  const parsed = Number(process.env.STRK_CHECK_IMG_CONCURRENCY)
  return Number.isFinite(parsed) && parsed > 0 ? Math.max(1, Math.floor(parsed)) : DEFAULT_CONCURRENCY
}

function retryCount() {
  const parsed = Number(process.env.STRK_CHECK_IMG_RETRIES)
  return Number.isFinite(parsed) && parsed >= 0 ? Math.floor(parsed) : DEFAULT_RETRY_COUNT
}

function cacheTtlMs() {
  const parsed = Number(process.env.STRK_CHECK_IMG_CACHE_TTL_MS)
  return Number.isFinite(parsed) && parsed > 0 ? parsed : DEFAULT_CACHE_TTL_MS
}

function uncheckedCacheTtlMs() {
  const parsed = Number(process.env.STRK_CHECK_IMG_UNCHECKED_CACHE_TTL_MS)
  return Number.isFinite(parsed) && parsed > 0 ? parsed : DEFAULT_UNCHECKED_CACHE_TTL_MS
}

function maxImageCandidates() {
  const parsed = Number(process.env.STRK_CHECK_IMG_MAX_CANDIDATES)
  return Number.isFinite(parsed) && parsed > 0
    ? Math.max(1, Math.floor(parsed))
    : DEFAULT_MAX_IMAGE_CANDIDATES
}

function originConcurrency() {
  const parsed = Number(process.env.STRK_CHECK_IMG_ORIGIN_CONCURRENCY)
  return Number.isFinite(parsed) && parsed > 0
    ? Math.max(1, Math.floor(parsed))
    : DEFAULT_ORIGIN_CONCURRENCY
}

function maxRetryDelayMs() {
  const parsed = Number(process.env.STRK_CHECK_IMG_MAX_RETRY_DELAY_MS)
  return Number.isFinite(parsed) && parsed >= 0
    ? parsed
    : DEFAULT_MAX_RETRY_DELAY_MS
}

function retryDelayMs(attempt, result = null) {
  if (Number.isFinite(result?.retryAfterMs)) {
    return Math.min(maxRetryDelayMs(), Math.max(0, result.retryAfterMs))
  }
  return Math.min(maxRetryDelayMs(), 250 * (2 ** Math.max(0, attempt - 1)))
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function remoteOrigin(url) {
  try {
    return new URL(url).origin
  } catch {
    return url
  }
}

function acquireOriginSlot(url) {
  const key = remoteOrigin(url)
  let state = remoteOriginStates.get(key)
  if (!state) {
    state = { active: 0, queue: [] }
    remoteOriginStates.set(key, state)
  }

  const release = () => {
    const next = state.queue.shift()
    if (next) {
      next(release)
      return
    }
    state.active = Math.max(0, state.active - 1)
    if (state.active === 0) remoteOriginStates.delete(key)
  }

  if (state.active < originConcurrency()) {
    state.active += 1
    return Promise.resolve(release)
  }
  return new Promise((resolve) => state.queue.push(resolve))
}

async function withOriginConcurrency(url, task) {
  const release = await acquireOriginSlot(url)
  try {
    return await task()
  } finally {
    release()
  }
}

async function fetchWithTimeout(url, options) {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), timeoutMs())
  try {
    return await fetch(url, {
      redirect: 'follow',
      ...options,
      signal: controller.signal,
    })
  } finally {
    clearTimeout(timer)
  }
}

function isLikelyImageBytes(buffer) {
  if (!buffer || buffer.length === 0) return false
  const b = new Uint8Array(buffer)
  if (b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff) return true
  if (b[0] === 0x89 && b[1] === 0x50 && b[2] === 0x4e && b[3] === 0x47) return true
  if (b[0] === 0x47 && b[1] === 0x49 && b[2] === 0x46) return true
  if (b[0] === 0x52 && b[1] === 0x49 && b[2] === 0x46 && b[3] === 0x46) return true
  if (b[4] === 0x66 && b[5] === 0x74 && b[6] === 0x79 && b[7] === 0x70) return true
  const text = Buffer.from(b.slice(0, 128)).toString('utf8').trimStart().toLowerCase()
  return text.startsWith('<svg')
}

function imageCheckFailure(status, reason, extra = {}) {
  return {
    ok: false,
    status: status || null,
    reason,
    ...extra,
  }
}

function imageCheckUnchecked(status, reason, extra = {}) {
  return {
    ok: true,
    status: status || null,
    unchecked: true,
    reason,
    ...extra,
  }
}

function isTransientFailure(result) {
  if (!result || result.ok) return false
  if (result.reason === 'timeout' || result.reason === 'network_error') return true
  return result.reason === 'http_status' && TRANSIENT_HTTP_STATUSES.has(result.status)
}

function trustedImageResponse(response, bytes) {
  if (!response.ok && response.status !== 206) return null
  const contentType = response.headers.get('content-type') || ''
  if (/^image\//i.test(contentType)) return { ok: true, status: response.status }
  if (bytes && isLikelyImageBytes(bytes)) return { ok: true, status: response.status }
  return null
}

async function readResponsePrefix(response, limit = PROBE_BYTE_LIMIT) {
  if (!response.body?.getReader) return response.arrayBuffer()

  const reader = response.body.getReader()
  const chunks = []
  let total = 0
  try {
    while (total < limit) {
      const { done, value } = await reader.read()
      if (done || !value) break
      const remaining = limit - total
      const chunk = value.byteLength > remaining ? value.slice(0, remaining) : value
      chunks.push(chunk)
      total += chunk.byteLength
      if (value.byteLength >= remaining) break
    }
  } finally {
    await reader.cancel().catch(() => {})
  }

  const out = new Uint8Array(total)
  let offset = 0
  for (const chunk of chunks) {
    out.set(chunk, offset)
    offset += chunk.byteLength
  }
  return out.buffer
}

function retryAfterMs(response) {
  const raw = response.headers.get('retry-after')
  if (!raw) return null
  const seconds = Number(raw)
  if (Number.isFinite(seconds)) return Math.max(0, seconds * 1000)
  const retryAt = Date.parse(raw)
  return Number.isFinite(retryAt) ? Math.max(0, retryAt - Date.now()) : null
}

async function checkHttpImageOnce(url) {
  try {
    const getResponse = await fetchWithTimeout(url, {
      method: 'GET',
      headers: {
        Accept: 'image/*,*/*;q=0.8',
        Range: 'bytes=0-511',
      },
    })
    if (!getResponse.ok && getResponse.status !== 206) {
      await getResponse.body?.cancel().catch(() => {})
      return imageCheckFailure(getResponse.status, 'http_status', {
        retryAfterMs: retryAfterMs(getResponse),
      })
    }
    const contentType = getResponse.headers.get('content-type') || ''
    const bytes = await readResponsePrefix(getResponse)
    const trusted = trustedImageResponse(getResponse, bytes)
    if (trusted) return trusted
    return imageCheckFailure(getResponse.status, 'not_image_response', { contentType })
  } catch (err) {
    return imageCheckFailure(null, err.name === 'AbortError' ? 'timeout' : 'network_error')
  }
}

async function checkHttpImage(url) {
  let result = null
  const attempts = retryCount() + 1
  for (let attempt = 0; attempt < attempts; attempt++) {
    result = await withOriginConcurrency(url, () => checkHttpImageOnce(url))
    if (!isTransientFailure(result)) return result
    if (attempt < attempts - 1) await wait(retryDelayMs(attempt + 1, result))
  }

  if (isTransientFailure(result)) {
    if (result.reason === 'http_status') {
      return imageCheckFailure(result.status, 'temporarily_unavailable', {
        temporary: true,
      })
    }
    return imageCheckUnchecked(result.status, result.reason)
  }
  return result
}

function resolveLocalAssetPath(url, sourceFile = '') {
  const cleaned = normalizeUrlCandidate(url).replace(/[?#].*$/, '')
  if (cleaned.startsWith('@/')) return path.join(srcRoot, cleaned.slice(2))
  if (cleaned.startsWith('/')) return path.join(root, 'public', cleaned.slice(1))
  if (cleaned.startsWith('./') || cleaned.startsWith('../')) {
    return path.resolve(sourceFile ? path.dirname(sourceFile) : root, cleaned)
  }
  return path.join(srcRoot, cleaned)
}

async function checkImage(url, sourceFile = '') {
  const normalized = normalizeUrlCandidate(url)
  if (/^https?:\/\//i.test(normalized)) return checkHttpImage(normalized)
  if (/^(data|blob):/i.test(normalized)) return { ok: true, status: null }
  const localPath = resolveLocalAssetPath(normalized, sourceFile)
  if (fs.existsSync(localPath) && fs.statSync(localPath).isFile()) return { ok: true, status: null }
  return imageCheckFailure(null, 'local_file_missing')
}

function checkCacheKey(url, sourceFile = '') {
  const normalized = normalizeUrlCandidate(url)
  return /^https?:\/\//i.test(normalized) ? normalized : `${normalized}\0${sourceFile || ''}`
}

function shouldCacheImageCheck(url) {
  return /^https?:\/\//i.test(normalizeUrlCandidate(url))
}

function imageCheckCacheTtlMs(result) {
  return result?.unchecked || result?.temporary
    ? uncheckedCacheTtlMs()
    : cacheTtlMs()
}

function pruneRemoteCheckCache(now = Date.now()) {
  for (const [key, entry] of remoteCheckCache) {
    const ttl = imageCheckCacheTtlMs(entry.result)
    if (now - entry.checkedAt > ttl) remoteCheckCache.delete(key)
  }
}

function getCachedImageCheck(url, sourceFile = '') {
  if (!shouldCacheImageCheck(url)) return checkImage(url, sourceFile)

  const key = checkCacheKey(url, sourceFile)
  const cached = remoteCheckCache.get(key)
  const now = Date.now()
  if (cached) {
    const ttl = imageCheckCacheTtlMs(cached.result)
    if (now - cached.checkedAt <= ttl) {
      lastScanStats.cacheHits += 1
      return cached.promise || Promise.resolve(cached.result)
    }
    remoteCheckCache.delete(key)
  }

  lastScanStats.uniqueChecks += 1
  const promise = checkImage(url, sourceFile).then((result) => {
    remoteCheckCache.set(key, { result, checkedAt: Date.now() })
    return result
  }).catch((err) => {
    remoteCheckCache.delete(key)
    throw err
  })
  remoteCheckCache.set(key, { promise, checkedAt: now })
  return promise
}

async function scanBrokenImages() {
  lastScanStats = { unchecked: 0, temporary: 0, cacheHits: 0, uniqueChecks: 0 }
  pruneRemoteCheckCache()
  const files = walkFiles(srcRoot)
  const modules = buildModuleInfo(files)
  const routes = extractRoutes(modules)
  const usageByModule = pageUsageForModules(modules, routes)
  const dynamicUses = collectUsesSafely(
    'dynamic image sources',
    () => collectImageUses(modules, usageByModule),
  )
  const literalUses = collectUsesSafely(
    'literal image data',
    () => collectLiteralDataUses(modules, usageByModule),
  )
  const cssUses = collectUsesSafely('CSS image sources', () => collectCssUses(files))
  const uses = dedupeUses([...dynamicUses, ...literalUses, ...cssUses])

  const broken = await mapWithConcurrency(uses, concurrency(), async (use) => {
    const url = normalizeUrlCandidate(use.url)
    const result = await getCachedImageCheck(url, use.sourceFile)
    if (result.unchecked) {
      lastScanStats.unchecked += 1
      return null
    }
    if (result.ok) return null
    if (result.temporary) lastScanStats.temporary += 1
    return {
      id: stableRecordId(use),
      tag: result.temporary ? 'temporarily-unavailable-img' : 'broken-img',
      url,
      page: use.page,
      route: use.route,
      section: use.section,
      kind: use.kind,
      source: use.source,
      reason: result.reason,
      status: result.status,
      ...(result.contentType ? { contentType: result.contentType } : {}),
      ...(result.temporary
        ? { message: 'Remote image remained unavailable after retrying.' }
        : {}),
    }
  })

  return broken.filter(Boolean).sort((a, b) => {
    return (
      String(a.source).localeCompare(String(b.source)) ||
      String(a.url).localeCompare(String(b.url)) ||
      String(a.kind).localeCompare(String(b.kind))
    )
  })
}

function runScan(reason) {
  const requestId = ++latestScanRequest
  activeScan = activeScan
    .catch(() => {})
    .then(async () => {
      if (requestId !== latestScanRequest) return
      const broken = await scanBrokenImages()
      if (requestId !== latestScanRequest) return
      writeJsonIfChanged(outputPath, broken)
      const label = broken.length === 1 ? '1 broken image' : `${broken.length} broken images`
      const stats = []
      if (lastScanStats.unchecked) stats.push(`${lastScanStats.unchecked} unchecked`)
      if (lastScanStats.temporary) stats.push(`${lastScanStats.temporary} temporarily unavailable`)
      if (lastScanStats.cacheHits) stats.push(`${lastScanStats.cacheHits} cache hits`)
      if (lastScanStats.uniqueChecks) stats.push(`${lastScanStats.uniqueChecks} checked`)
      const suffix = stats.length ? ` (${stats.join(', ')})` : ''
      console.log(`[strk-check-img] ${reason}: ${label}${suffix}`)
    })
    .catch((err) => {
      console.warn('[strk-check-img] scan failed: ' + err.message)
    })
  return activeScan
}

function scheduleScan(reason) {
  clearTimeout(scanTimer)
  scanTimer = setTimeout(() => {
    runScan(reason)
  }, 250)
}

export default function checkBrokenImgPlugin() {
  return {
    name: 'vite-plugin-check-broken-img',
    configResolved(config) {
      root = config.root
      srcRoot = path.join(root, 'src')
      outputPath = path.join(root, 'tmp', OUTPUT_FILENAME)
    },
    buildStart() {
      if (process.env.STRK_CHECK_IMG_DISABLED === '1') {
        writeJsonIfChanged(outputPath, [])
        return
      }
      return runScan('buildStart')
    },
    configureServer(server) {
      if (process.env.STRK_CHECK_IMG_DISABLED === '1') {
        writeJsonIfChanged(outputPath, [])
        return
      }
      server.httpServer?.once('listening', () => {
        runScan('dev server ready')
      })
    },
    handleHotUpdate(ctx) {
      if (process.env.STRK_CHECK_IMG_DISABLED === '1') return
      if (!ctx.file.startsWith(srcRoot) || ctx.file === outputPath) return
      const ext = path.extname(ctx.file)
      if (!SOURCE_EXTENSIONS.has(ext) && !STYLE_EXTENSIONS.has(ext)) return
      scheduleScan('source changed')
    },
    closeBundle() {
      clearTimeout(scanTimer)
    },
  }
}
