import { extractStrkEntries, extractStrkEntriesFromAst, inlineBuildImageSourcesFromAst } from '/workspace/my-app/plugin/vite-plugin-strk-img.js'
import { parse } from '@babel/parser'
import _traverse from '@babel/traverse'
import fs from 'fs'
import path from 'path'

const traverse = _traverse.default || _traverse

function parseJsxOnce(code) {
  try { return parse(code, { sourceType: 'module', plugins: ['jsx', 'typescript'], errorRecovery: true }) }
  catch { return null }
}

function collectJsxSourceFiles(dir, out = []) {
  const rows = fs.readdirSync(dir, { withFileTypes: true })
  for (const row of rows) {
    const p = path.join(dir, row.name)
    if (row.isDirectory()) {
      if (row.name === 'node_modules' || row.name === 'dist') continue
      collectJsxSourceFiles(p, out); continue
    }
    if (row.isFile() && /\.(jsx|tsx)$/.test(row.name)) out.push(p)
  }
  return out
}

const allEntries = []
for (const f of collectJsxSourceFiles('/workspace/my-app/src')) {
  const c = fs.readFileSync(f, 'utf-8')
  if (!c.includes('data-strk-img') && !c.includes('data-strk-bg')) continue
  allEntries.push(...extractStrkEntries(c, { filePath: f, warnUnresolved: false }))
}

const bySourceFile = new Map()
for (const entry of allEntries) {
  const key = path.resolve(entry?.sourceFile || '')
  if (!key) continue
  const rows = bySourceFile.get(key) || []
  rows.push({ ...entry })
  bySourceFile.set(key, rows)
}
function buildEntriesForSourceFile(filePath) {
  return (bySourceFile.get(path.resolve(filePath)) || []).map(e => ({ ...e }))
}

const config = JSON.parse(fs.readFileSync('/workspace/my-app/src/strk-img-config.json', 'utf-8'))

const file = process.argv[2]
const code = fs.readFileSync(file, 'utf-8')
const ast = parseJsxOnce(code)
const entries = extractStrkEntriesFromAst(ast, { filePath: file, warnUnresolved: false })

const seen = new Set()
const merged = []
const mergeOne = (group) => {
  for (const entry of group || []) {
    const key = [entry?.kind||'', entry?.imgId||'', entry?.sourceFile||'', entry?.sourceIndex??'', JSON.stringify(entry?.sourceContext||[])].join('\0')
    if (seen.has(key)) continue
    seen.add(key); merged.push(entry)
  }
}
mergeOne(entries)
mergeOne(buildEntriesForSourceFile(file))

console.log('Merged entries:', merged.length)
console.log('Entry sourceIndex values:', [...new Set(merged.map(e => e.sourceIndex))])

// Now traverse the AST and find all JSXOpeningElements with data-strk-img-id
traverse(ast, {
  JSXOpeningElement(np) {
    const attrs = np.node.attributes || []
    const idAttr = attrs.find(a => a.type === 'JSXAttribute' && a.name?.name === 'data-strk-img-id')
    if (!idAttr) return
    const idExpr = idAttr.value?.type === 'JSXExpressionContainer'
      ? code.slice(idAttr.value.expression.start, idAttr.value.expression.end)
      : (idAttr.value?.value || '(literal)')
    const openingStart = np.node.start
    // Check entriesForOpening
    const matches = merged.filter(e => e.kind === 'img' && e.sourceIndex === openingStart)
    console.log(`Opening @${openingStart} (line ${np.node.loc?.start?.line}): idExpr="${idExpr}" -> ${matches.length} matching entries: ${matches.map(m=>m.imgId).join(',')}`)
  }
})
