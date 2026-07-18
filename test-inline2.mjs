import fs from 'node:fs'
import {
  extractStrkEntries,
  inlineBuildImageSourcesFromAst,
} from '/workspace/my-app/plugin/vite-plugin-strk-img.js'
import { parse } from '@babel/parser'

const cfg = JSON.parse(fs.readFileSync('./src/strk-img-config.json','utf-8'))

const pdpCode = fs.readFileSync('./src/pages/ProductDetail.jsx','utf-8')
const pdpEntries = extractStrkEntries(pdpCode, { filePath: '/workspace/my-app/src/pages/ProductDetail.jsx' })
const galleryEntries = pdpEntries.filter(e => e.sourceFile && e.sourceFile.endsWith('ProductGallery.jsx'))
console.log('Gallery entries:', galleryEntries.length)
console.log('unique imgIds:', new Set(galleryEntries.map(e=>e.imgId)).size)

const gCode = fs.readFileSync('./src/components/product/ProductGallery.jsx','utf-8')
const ast = parse(gCode, { sourceType: 'module', plugins: ['jsx'] })

// Find all img JSXElement openings and their start positions
function findImgOpenings(node, out) {
  if (!node || typeof node !== 'object') return
  if (node.type === 'JSXOpeningElement' && node.name?.type === 'JSXIdentifier' && node.name.name === 'img') {
    out.push({ start: node.start, line: node.loc?.start?.line })
  }
  for (const k of Object.keys(node)) {
    const v = node[k]
    if (Array.isArray(v)) v.forEach(c => findImgOpenings(c, out))
    else if (v && typeof v === 'object') findImgOpenings(v, out)
  }
}
const openings = []
findImgOpenings(ast, openings)
console.log('img openings in ProductGallery.jsx:', openings.length)
openings.forEach(o => console.log('  start=', o.start, 'line=', o.line))

console.log('gallery entry sourceIndex values:', [...new Set(galleryEntries.map(e=>e.sourceIndex))])
console.log('gallery entry sourceFile values:', [...new Set(galleryEntries.map(e=>e.sourceFile))])
console.log('buildSourceFileKey(filePath)=', '/workspace/my-app/src/components/product/ProductGallery.jsx')
console.log('buildSourceFileKey(entry.sourceFile) sample=', galleryEntries[0]?.sourceFile)

const unresolved = []
const transformed = inlineBuildImageSourcesFromAst(gCode, ast, galleryEntries, {
  filePath: '/workspace/my-app/src/components/product/ProductGallery.jsx',
  configData: cfg,
  onUnresolved: (issue) => unresolved.push(issue),
})
console.log('--- transformed changed?', transformed !== gCode)
console.log('--- unresolved:', unresolved.length)
unresolved.forEach(i => console.log('  ', JSON.stringify(i)))

// Test: does literalSrcFallback resolve Identifier const PLACEHOLDER?
// Reproduce: src={PLACEHOLDER} where PLACEHOLDER is a const string.
const testCode = `const PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
export default () => <img src={PLACEHOLDER} data-strk-img-id={\`x-thumb\`} data-strk-img="[t]" data-strk-img-ratio="4x5" data-strk-img-width="160" />`
const testAst = parse(testCode, { sourceType: 'module', plugins: ['jsx'] })
const u2 = []
const t2 = inlineBuildImageSourcesFromAst(testCode, testAst, galleryEntries.slice(0,2), {
  filePath: '/workspace/my-app/src/components/product/ProductGallery.jsx',
  configData: cfg,
  onUnresolved: (i)=>u2.push(i),
})
console.log('=== Identifier-const src test ===')
console.log('changed?', t2 !== testCode, 'unresolved:', u2.length)
console.log('output:', t2.slice(0, 400))
const imgMatches = transformed.match(/data-strk-img-id[^}]{0,150}src:[^,}]*/g) || []
console.log('img tags found:', imgMatches.length)
imgMatches.slice(0,6).forEach(m => console.log('  ', m.slice(0, 160)))
