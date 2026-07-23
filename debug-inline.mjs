import { extractStrkEntries, extractStrkEntriesFromAst, inlineBuildImageSourcesFromAst } from '/workspace/my-app/plugin/vite-plugin-strk-img.js'
import { parse } from '@babel/parser'
import fs from 'fs'
import path from 'path'

function parseJsxOnce(code) {
  try {
    return parse(code, { sourceType: 'module', plugins: ['jsx', 'typescript'], errorRecovery: true })
  } catch { return null }
}

function collectJsxSourceFiles(dir, out = []) {
  const rows = fs.readdirSync(dir, { withFileTypes: true })
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

// Mimic primeBuildConfigFromSource: extract from all files
const allEntries = []
for (const f of collectJsxSourceFiles('/workspace/my-app/src')) {
  const c = fs.readFileSync(f, 'utf-8')
  if (!c.includes('data-strk-img') && !c.includes('data-strk-bg')) continue
  allEntries.push(...extractStrkEntries(c, { filePath: f, warnUnresolved: false }))
}
console.log('Total entries from all files:', allEntries.length)

// Build _buildEntriesBySourceFile map (mimic rememberBuildEntriesBySourceFile)
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
console.log('Config keys:', Object.keys(config).length)

const file = process.argv[2]
const code = fs.readFileSync(file, 'utf-8')
const ast = parseJsxOnce(code)
const entries = extractStrkEntriesFromAst(ast, { filePath: file, warnUnresolved: false })

// mergeBuildEntries
const seen = new Set()
const merged = []
const mergeOne = (group) => {
  for (const entry of group || []) {
    const key = [entry?.kind||'', entry?.imgId||'', entry?.sourceFile||'', entry?.sourceIndex??'', JSON.stringify(entry?.sourceContext||[])].join('\0')
    if (seen.has(key)) continue
    seen.add(key)
    merged.push(entry)
  }
}
mergeOne(entries)
mergeOne(buildEntriesForSourceFile(file))
console.log('Merged entries for', file, ':', merged.length)

const unresolved = []
const transformed = inlineBuildImageSourcesFromAst(code, ast, merged, {
  filePath: file,
  configData: config,
  onUnresolved: issue => unresolved.push(issue),
})
console.log('=== UNRESOLVED ===')
for (const u of unresolved) {
  console.log(JSON.stringify({ line: u.line, reason: u.reason, expression: u.expression, imgId: u.imgId, message: u.message }))
}
console.log('Transformed differs:', transformed !== code)
