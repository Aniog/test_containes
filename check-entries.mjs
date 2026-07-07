import { extractStrkEntriesFromAst } from '/workspace/my-app/plugin/vite-plugin-strk-img.js'
import fs from 'fs'
import { parse } from '@babel/parser'

function parseFile(f) {
  const code = fs.readFileSync(f, 'utf-8')
  return { code, ast: parse(code, { sourceType: 'module', plugins: ['jsx', 'typescript'], errorRecovery: true }) }
}

// Test Bestsellers - does it extract ProductCard's images via inlining?
const f = '/workspace/my-app/src/components/home/Bestsellers.jsx'
const { code, ast } = parseFile(f)
const entries = extractStrkEntriesFromAst(ast, { filePath: f, warnUnresolved: false })
console.log('Bestsellers entries:', entries.length)
for (const e of entries.slice(0, 4)) {
  console.log('  imgId:', e.imgId, '| kind:', e.kind, '| query:', (e.query || '').slice(0, 40))
}

// Test ProductCard alone
const f2 = '/workspace/my-app/src/components/product/ProductCard.jsx'
const { code: code2, ast: ast2 } = parseFile(f2)
const entries2 = extractStrkEntriesFromAst(ast2, { filePath: f2, warnUnresolved: false })
console.log('\nProductCard entries:', entries2.length)
for (const e of entries2) {
  console.log('  imgId:', e.imgId, '| kind:', e.kind)
}

// Test Shop
const f3 = '/workspace/my-app/src/pages/Shop.jsx'
const { code: code3, ast: ast3 } = parseFile(f3)
const entries3 = extractStrkEntriesFromAst(ast3, { filePath: f3, warnUnresolved: false })
console.log('\nShop entries:', entries3.length)
for (const e of entries3.slice(0, 4)) {
  console.log('  imgId:', e.imgId, '| kind:', e.kind)
}
