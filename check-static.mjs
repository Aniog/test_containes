import { extractStrkEntriesFromAst } from '/workspace/my-app/plugin/vite-plugin-strk-img.js'
import fs from 'fs'
import { parse } from '@babel/parser'

function readJson(p) {
  try { return JSON.parse(fs.readFileSync(p, 'utf-8')) } catch { return null }
}
function parseFile(f) {
  const code = fs.readFileSync(f, 'utf-8')
  return { code, ast: parse(code, { sourceType: 'module', plugins: ['jsx', 'typescript'], errorRecovery: true }) }
}

const configData = readJson('/workspace/my-app/src/strk-img-config.json')

function selectedConfigImageUrl(entry) {
  const results = entry?.results
  if (!Array.isArray(results) || results.length === 0) return null
  if (entry?.picked) {
    const picked = results.find(r => String(r.id) === String(entry.picked))
    if (picked?.url) return picked.url
  }
  return results[0]?.url || null
}

// Test BrandStory
const f = '/workspace/my-app/src/components/home/BrandStory.jsx'
const { code, ast } = parseFile(f)
const entries = extractStrkEntriesFromAst(ast, { filePath: f, warnUnresolved: false })
console.log('BrandStory entries:', entries.length)
for (const e of entries) {
  console.log('  imgId:', e.imgId, '| kind:', e.kind)
  const url = selectedConfigImageUrl(configData[e.imgId])
  console.log('  url:', url ? url.slice(0, 60) : 'NULL')
}

// Now simulate the static patching logic
const getImgUrl = imgId => selectedConfigImageUrl(configData[imgId])

// Manually traverse the AST to find the img element
function traverse(node, visitor) {
  if (!node || typeof node !== 'object') return
  if (Array.isArray(node)) {
    for (const n of node) traverse(n, visitor)
    return
  }
  visitor(node)
  for (const key of Object.keys(node)) {
    if (key === 'loc' || key === 'range' || key === 'start' || key === 'end') continue
    traverse(node[key], visitor)
  }
}

let found = false
traverse(ast, (node) => {
  if (node.type !== 'JSXOpeningElement') return
  const attrs = node.attributes || []
  const getAttrNode = name => attrs.find(a => a.type === 'JSXAttribute' && a.name?.name === name)
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
    console.log('STATIC PATH: imgId=', imgId, 'url=', url ? url.slice(0,50) : 'NULL')
    console.log('  srcAttr.value.type=', srcAttr?.value?.type)
    console.log('  condition met:', srcAttr?.value?.type === 'StringLiteral' && !!url)
    found = true
  }
})
console.log('Found static img element:', found)
