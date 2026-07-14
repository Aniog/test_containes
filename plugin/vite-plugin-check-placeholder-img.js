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
const PLACEHOLDER_MARKER = 'data:image/svg+xml,%3Csvg'
const PLACEHOLDER_REASON = 'placeholder_remaining_after_build'
const INVALID_STRK_IMG_TAG_REASON = 'data_strk_img_on_non_img_tag'
const SNIPPET_LIMIT = 160
const RUNTIME_TEXT_EXTENSIONS = new Set(['.js', '.mjs', '.cjs', '.css', '.html'])
const PLACEHOLDER_NORMALIZED_URL = normalizePlaceholderUrl(PLACEHOLDER_URL)

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

function normalizePlaceholderUrl(value) {
  if (typeof value !== 'string') return ''
  return value.replace(/%3E%3C\/svg%3E/gi, '/%3E').toLowerCase()
}

function isPlaceholderUrl(value) {
  if (
    typeof value !== 'string' ||
    !value.toLowerCase().includes(PLACEHOLDER_MARKER.toLowerCase())
  ) {
    return false
  }
  return normalizePlaceholderUrl(value).includes(PLACEHOLDER_NORMALIZED_URL)
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

export function scanPlaceholderImagesFromChunk(code, fileName) {
  if (!code.includes(PLACEHOLDER_MARKER) && !code.includes('data-strk-img')) {
    return []
  }
  const ast = parseChunk(code, fileName)
  if (!ast) return []
  const constants = collectStringConstants(ast)
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
