import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'
import { parse } from '@babel/parser'
import traverseModule from '@babel/traverse'

const traverse = traverseModule.default || traverseModule

const OUTPUT_FILENAME = 'strk-broken-images.json'
const PLACEHOLDER_TAG = 'placeholder-img'
const LEGACY_UNRESOLVED_IMAGE_TAG = 'unresolved-img'
const PLACEHOLDER_URL =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
const SVG_DATA_URL_MARKER = 'data:image/svg+xml'
const PLACEHOLDER_REASON = 'placeholder_remaining_after_build'
const INVALID_STRK_IMG_TAG_REASON = 'data_strk_img_on_non_img_tag'
const MISSING_STRK_BG_REASON = 'background_image_missing_after_build'
const SNIPPET_LIMIT = 160
const RUNTIME_TEXT_EXTENSIONS = new Set(['.js', '.mjs', '.cjs', '.css', '.html'])
const EMPTY_SVG_PLACEHOLDER_RE =
  /data:image\/svg\+xml(?:;[^,]*)?,(?:%3c|<)svg\b(?:(?!%3e|>).){0,1000}(?:(?:\/|%2f)(?:%3e|>)|(?:%3e|>)\s*(?:%3c|<)\/svg(?:%3e|>))/is

let root = ''
let outputPath = ''
let enabled = false

function readText(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf-8')
  } catch {
    return ''
  }
}

function readJsonArray(filePath) {
  try {
    const data = JSON.parse(readText(filePath))
    return Array.isArray(data) ? data : []
  } catch {
    return []
  }
}

function writeJsonIfChanged(filePath, data) {
  const text = JSON.stringify(data, null, 2) + '\n'
  if (readText(filePath) === text) return false
  fs.mkdirSync(path.dirname(filePath), { recursive: true })
  const tmp = filePath + '.tmp'
  fs.writeFileSync(tmp, text, 'utf-8')
  fs.renameSync(tmp, filePath)
  return true
}

function stableRecordId(record) {
  return crypto
    .createHash('sha1')
    .update([
      record.tag,
      record.source,
      record.slot,
      record.strkImageId || record.strkImageIdExpression || '',
      record.kind,
    ].join('\0'))
    .digest('hex')
    .slice(0, 12)
}

function parseChunk(code, fileName) {
  try {
    return parse(code, {
      sourceType: 'module',
      sourceFilename: fileName,
    })
  } catch (err) {
    console.warn('[strk-placeholder-img] Could not parse ' + fileName + ': ' + err.message)
    return null
  }
}

function propName(prop) {
  if (!prop || prop.type !== 'ObjectProperty') return ''
  if (prop.key.type === 'Identifier' && !prop.computed) return prop.key.name
  if (prop.key.type === 'StringLiteral') return prop.key.value
  return ''
}

function getObjectProp(obj, name) {
  if (!obj || obj.type !== 'ObjectExpression') return null
  return obj.properties.find((prop) => propName(prop) === name) || null
}

function sourceSnippet(code, node) {
  if (!node || typeof node.start !== 'number' || typeof node.end !== 'number') return ''
  const text = code.slice(node.start, node.end).replace(/\s+/g, ' ').trim()
  if (text.length <= SNIPPET_LIMIT) return text
  return text.slice(0, SNIPPET_LIMIT) + '...'
}

function isPlaceholderUrl(value) {
  return typeof value === 'string' && EMPTY_SVG_PLACEHOLDER_RE.test(value)
}

function staticStringValue(node, constants, depth = 0) {
  if (!node || depth > 4) return null
  if (node.type === 'StringLiteral') return node.value
  if (node.type === 'TemplateLiteral') {
    let out = ''
    for (let i = 0; i < node.quasis.length; i += 1) {
      out += node.quasis[i].value.cooked || node.quasis[i].value.raw || ''
      if (i < node.expressions.length) {
        const value = staticStringValue(node.expressions[i], constants, depth + 1)
        if (value == null) return null
        out += value
      }
    }
    return out
  }
  if (node.type === 'Identifier' && constants.has(node.name)) {
    return constants.get(node.name)
  }
  if (node.type === 'BinaryExpression' && node.operator === '+') {
    const left = staticStringValue(node.left, constants, depth + 1)
    const right = staticStringValue(node.right, constants, depth + 1)
    return left == null || right == null ? null : left + right
  }
  return null
}

function templateContainsPlaceholder(node) {
  return (
    node?.type === 'TemplateLiteral' &&
    node.quasis.some((quasi) => {
      const value = quasi.value.cooked || quasi.value.raw || ''
      return isPlaceholderUrl(value)
    })
  )
}

function valueContainsPlaceholder(node, constants) {
  const value = staticStringValue(node, constants)
  if (value != null) return isPlaceholderUrl(value)
  if (templateContainsPlaceholder(node)) return true
  if (!node) return false

  if (
    node.type === 'LogicalExpression' &&
    (node.operator === '||' || node.operator === '??')
  ) {
    return (
      valueContainsPlaceholder(node.left, constants) ||
      valueContainsPlaceholder(node.right, constants)
    )
  }

  if (node.type === 'ConditionalExpression') {
    return (
      valueContainsPlaceholder(node.consequent, constants) ||
      valueContainsPlaceholder(node.alternate, constants)
    )
  }

  if (node.type === 'CallExpression') {
    return (node.arguments || []).some((arg) =>
      valueContainsPlaceholder(arg, constants),
    )
  }

  return false
}

function collectStringConstants(ast) {
  const constants = new Map()
  traverse(ast, {
    VariableDeclarator(pathRef) {
      const node = pathRef.node
      if (node.id?.type !== 'Identifier') return
      const value = staticStringValue(node.init, constants)
      if (value != null) constants.set(node.id.name, value)
    },
  })
  return constants
}

function objectHasBackgroundStyle(node) {
  return Boolean(
    node?.type === 'ObjectExpression' &&
    (getObjectProp(node, 'backgroundImage') || getObjectProp(node, 'background'))
  )
}

function callUsesBackgroundStyleProvider(node, providers) {
  return Boolean(
    node?.type === 'CallExpression' &&
    node.callee?.type === 'Identifier' &&
    providers.has(node.callee.name)
  )
}

// Vite minifies the dynamic background helper name, so identify providers by
// behavior rather than by the original `__strkBgStyle` identifier. The helper
// returns either an object containing `backgroundImage` or an empty object.
function nodeMayReturnBackgroundStyle(node, providers, depth = 0) {
  if (!node || depth > 8) return false
  if (objectHasBackgroundStyle(node)) return true
  if (callUsesBackgroundStyleProvider(node, providers)) return true

  if (
    node.type === 'ArrowFunctionExpression' ||
    node.type === 'FunctionExpression' ||
    node.type === 'FunctionDeclaration'
  ) {
    return nodeMayReturnBackgroundStyle(node.body, providers, depth + 1)
  }
  if (node.type === 'ReturnStatement') {
    return nodeMayReturnBackgroundStyle(node.argument, providers, depth + 1)
  }
  if (node.type === 'BlockStatement') {
    return (node.body || []).some(stmt =>
      nodeMayReturnBackgroundStyle(stmt, providers, depth + 1)
    )
  }
  if (node.type === 'IfStatement') {
    return (
      nodeMayReturnBackgroundStyle(node.consequent, providers, depth + 1) ||
      nodeMayReturnBackgroundStyle(node.alternate, providers, depth + 1)
    )
  }
  if (node.type === 'ConditionalExpression' || node.type === 'LogicalExpression') {
    return (
      nodeMayReturnBackgroundStyle(node.consequent || node.left, providers, depth + 1) ||
      nodeMayReturnBackgroundStyle(node.alternate || node.right, providers, depth + 1)
    )
  }
  if (node.type === 'SequenceExpression') {
    return (node.expressions || []).some(expr =>
      nodeMayReturnBackgroundStyle(expr, providers, depth + 1)
    )
  }
  return false
}

function collectBackgroundStyleProviders(ast) {
  const functions = new Map()
  traverse(ast, {
    VariableDeclarator(pathRef) {
      const node = pathRef.node
      if (node.id?.type !== 'Identifier') return
      if (
        node.init?.type !== 'ArrowFunctionExpression' &&
        node.init?.type !== 'FunctionExpression'
      ) return
      functions.set(node.id.name, node.init)
    },
    FunctionDeclaration(pathRef) {
      const node = pathRef.node
      if (node.id?.name) functions.set(node.id.name, node)
    },
  })

  const providers = new Set()
  let changed = true
  while (changed) {
    changed = false
    for (const [name, fn] of functions) {
      if (providers.has(name)) continue
      if (!nodeMayReturnBackgroundStyle(fn, providers)) continue
      providers.add(name)
      changed = true
    }
  }
  return providers
}

function styleValueProvidesBackground(node, providers, depth = 0) {
  if (!node || depth > 6) return false
  if (objectHasBackgroundStyle(node)) return true
  if (callUsesBackgroundStyleProvider(node, providers)) return true

  if (node.type === 'ObjectExpression') {
    return (node.properties || []).some(prop =>
      prop.type === 'SpreadElement' &&
      styleValueProvidesBackground(prop.argument, providers, depth + 1)
    )
  }
  if (node.type === 'ConditionalExpression') {
    return (
      styleValueProvidesBackground(node.consequent, providers, depth + 1) &&
      styleValueProvidesBackground(node.alternate, providers, depth + 1)
    )
  }
  if (
    node.type === 'LogicalExpression' &&
    (node.operator === '||' || node.operator === '??')
  ) {
    return (
      styleValueProvidesBackground(node.left, providers, depth + 1) &&
      styleValueProvidesBackground(node.right, providers, depth + 1)
    )
  }
  return false
}

function reactTagName(node, constants) {
  const value = staticStringValue(node, constants)
  return value || ''
}

function locationForNode(fileName, node) {
  const line = node?.loc?.start?.line
  const column = node?.loc?.start?.column
  if (line == null) return 'dist/' + fileName
  return 'dist/' + fileName + ':' + line + ':' + (column + 1)
}

function slotInfo(props, slot, code, constants) {
  const prop = getObjectProp(props, slot)
  if (!prop) return {}

  const value = staticStringValue(prop.value, constants)
  if (value) {
    return { strkImageId: value }
  }

  const expression = sourceSnippet(code, prop.value)
  return expression ? { strkImageIdExpression: expression } : {}
}

function pushRecord(records, record) {
  const withId = {
    ...record,
    id: stableRecordId(record),
  }
  records.push(withId)
}

function inspectImageProps({ records, props, tagName, fileName, code, constants }) {
  if (tagName !== 'img' && tagName !== 'source') return

  for (const attrName of ['src', 'srcSet']) {
    const prop = getObjectProp(props, attrName)
    if (!prop || !valueContainsPlaceholder(prop.value, constants)) continue
    pushRecord(records, {
      tag: PLACEHOLDER_TAG,
      url: PLACEHOLDER_URL,
      page: 'Build output',
      route: null,
      section: tagName,
      kind: 'image',
      slot: 'data-strk-img',
      source: locationForNode(fileName, prop.value),
      reason: PLACEHOLDER_REASON,
      ...slotInfo(props, 'data-strk-img-id', code, constants),
    })
  }
}

function inspectStrkImageTagContract({
  records,
  props,
  tagName,
  fileName,
  code,
  constants,
}) {
  const strkImgIdProp = getObjectProp(props, 'data-strk-img-id')
  const strkImgProp = getObjectProp(props, 'data-strk-img')
  if (!strkImgIdProp && !strkImgProp) return
  if (tagName === 'img') return

  const sourceProp = strkImgIdProp || strkImgProp
  pushRecord(records, {
    tag: PLACEHOLDER_TAG,
    url: `invalid <${tagName}> Strikingly image placeholder tag`,
    page: 'Build output',
    route: null,
    section: tagName,
    kind: 'invalid-tag',
    slot: 'data-strk-img',
    source: locationForNode(fileName, sourceProp),
    reason: INVALID_STRK_IMG_TAG_REASON,
    message: (
      `data-strk-img-id and data-strk-img must be attached to an <img> tag, `
      + `but they were found on <${tagName}>. Move the data-strk-img-id, `
      + `data-strk-img, data-strk-img-ratio, data-strk-img-width, src, and alt `
      + `attributes onto an <img /> placeholder.`
    ),
    ...slotInfo(props, 'data-strk-img-id', code, constants),
  })
}

function inspectBackgroundProps({ records, props, tagName, fileName, code, constants }) {
  const styleProp = getObjectProp(props, 'style')
  if (!styleProp || styleProp.value?.type !== 'ObjectExpression') return

  for (const attrName of ['backgroundImage', 'background']) {
    const prop = getObjectProp(styleProp.value, attrName)
    if (!prop || !valueContainsPlaceholder(prop.value, constants)) continue
    pushRecord(records, {
      tag: PLACEHOLDER_TAG,
      url: PLACEHOLDER_URL,
      page: 'Build output',
      route: null,
      section: tagName || 'style',
      kind: 'background',
      slot: 'data-strk-bg',
      source: locationForNode(fileName, prop.value),
      reason: PLACEHOLDER_REASON,
      ...slotInfo(props, 'data-strk-bg-id', code, constants),
    })
  }
}

function inspectStrkBackgroundContract({
  records,
  props,
  tagName,
  fileName,
  code,
  constants,
  backgroundStyleProviders,
}) {
  const bgIdProp = getObjectProp(props, 'data-strk-bg-id')
  if (!bgIdProp) return

  const styleProp = getObjectProp(props, 'style')
  if (
    styleProp &&
    styleValueProvidesBackground(styleProp.value, backgroundStyleProviders)
  ) return

  pushRecord(records, {
    tag: PLACEHOLDER_TAG,
    url: 'missing background-image for data-strk-bg-id',
    page: 'Build output',
    route: null,
    section: tagName || 'style',
    kind: 'background',
    slot: 'data-strk-bg',
    source: locationForNode(fileName, bgIdProp.value),
    reason: MISSING_STRK_BG_REASON,
    message: (
      'data-strk-bg-id remained in the build output without a backgroundImage '
      + 'or background style supplied directly or by a recognized style helper.'
    ),
    ...slotInfo(props, 'data-strk-bg-id', code, constants),
  })
}

export function scanPlaceholderImagesFromChunk(code, fileName) {
  if (
    !code.toLowerCase().includes(SVG_DATA_URL_MARKER) &&
    !code.includes('data-strk-img') &&
    !code.includes('data-strk-bg')
  ) {
    return []
  }
  const ast = parseChunk(code, fileName)
  if (!ast) return []
  const constants = collectStringConstants(ast)
  const backgroundStyleProviders = collectBackgroundStyleProviders(ast)
  const records = []

  traverse(ast, {
    CallExpression(pathRef) {
      const args = pathRef.node.arguments || []
      if (args.length < 2 || args[1]?.type !== 'ObjectExpression') return
      const tagName = reactTagName(args[0], constants)
      if (!tagName) return
      const props = args[1]
      inspectStrkImageTagContract({
        records,
        props,
        tagName,
        fileName,
        code,
        constants,
      })
      inspectImageProps({ records, props, tagName, fileName, code, constants })
      inspectStrkBackgroundContract({
        records,
        props,
        tagName,
        fileName,
        code,
        constants,
        backgroundStyleProviders,
      })
      inspectBackgroundProps({ records, props, tagName, fileName, code, constants })
    },
  })

  return dedupeRecords(records)
}

export function scanPlaceholderImagesFromBundle(bundle) {
  const records = []
  for (const [fileName, output] of Object.entries(bundle || {})) {
    const extension = path.extname(fileName).toLowerCase()
    if (!RUNTIME_TEXT_EXTENSIONS.has(extension)) continue

    const code = output?.type === 'chunk'
      ? output.code || ''
      : typeof output?.source === 'string'
        ? output.source
        : output?.source instanceof Uint8Array
          ? Buffer.from(output.source).toString('utf-8')
          : ''
    if (!code) continue

    const semanticRecords = output?.type === 'chunk' && ['.js', '.mjs', '.cjs'].includes(extension)
      ? scanPlaceholderImagesFromChunk(code, fileName)
      : []
    records.push(...semanticRecords)

    const hasSemanticPlaceholder = semanticRecords.some(
      record => record.reason === PLACEHOLDER_REASON,
    )
    if (isPlaceholderUrl(code) && !hasSemanticPlaceholder) {
      pushRecord(records, {
        tag: PLACEHOLDER_TAG,
        url: PLACEHOLDER_URL,
        page: 'Build output',
        route: null,
        section: 'bundle',
        kind: 'bundle-text',
        slot: 'bundle-output',
        source: 'dist/' + fileName,
        reason: PLACEHOLDER_REASON,
        message: 'Placeholder image URL remains in a runtime build asset.',
      })
    }
  }
  return dedupeRecords(records).sort((a, b) => {
    return (
      String(a.source).localeCompare(String(b.source)) ||
      String(a.slot).localeCompare(String(b.slot)) ||
      String(a.strkImageId || a.strkImageIdExpression || '').localeCompare(
        String(b.strkImageId || b.strkImageIdExpression || ''),
      )
    )
  })
}

function dedupeRecords(records) {
  const out = []
  const seen = new Set()
  for (const record of records) {
    const key = [
      record.source,
      record.slot,
      record.kind,
      record.strkImageId || '',
      record.strkImageIdExpression || '',
    ].join('\0')
    if (seen.has(key)) continue
    seen.add(key)
    out.push(record)
  }
  return out
}

export function mergePlaceholderReport(existing, placeholderRecords) {
  const preserved = (Array.isArray(existing) ? existing : []).filter(
    (item) =>
      item?.tag !== PLACEHOLDER_TAG &&
      item?.tag !== LEGACY_UNRESOLVED_IMAGE_TAG,
  )
  return [...preserved, ...dedupeRecords(placeholderRecords || [])]
}

export default function checkPlaceholderImgPlugin() {
  return {
    name: 'vite-plugin-check-placeholder-img',
    configResolved(config) {
      root = config.root
      outputPath = path.join(root, 'tmp', OUTPUT_FILENAME)
      enabled = config.command === 'build'
    },
    writeBundle(_options, bundle) {
      if (!enabled) return
      const placeholders = scanPlaceholderImagesFromBundle(bundle)
      const nextReport = mergePlaceholderReport(readJsonArray(outputPath), placeholders)
      writeJsonIfChanged(outputPath, nextReport)
      const label =
        placeholders.length === 1
          ? '1 placeholder image'
          : `${placeholders.length} placeholder images`
      const log = placeholders.length ? console.warn : console.log
      log('[strk-placeholder-img] build output: ' + label)
    },
  }
}
