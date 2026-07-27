import { parse } from '@babel/parser'
import traverseModule from '@babel/traverse'
const traverse = traverseModule.default || traverseModule
import generateModule from '@babel/generator'
const generate = generateModule.default || generateModule
import * as t from '@babel/types'
import fs from 'fs'

const code = fs.readFileSync('src/pages/Home.jsx', 'utf8')

try {
  const ast = parse(code, {
    sourceType: 'module',
    plugins: ['jsx', 'typescript'],
    sourceFilename: 'src/pages/Home.jsx',
  })
  
  console.log('Parse successful')
  
  let changed = false
  traverse(ast, {
    JSXOpeningElement(nodePath) {
      const { node } = nodePath
      if (!node.loc) return
      
      const line = node.loc.start.line
      const column = node.loc.start.column + 1
      console.log('Found JSX element at line', line, 'column', column)
      
      changed = true
    },
  })
  
  console.log('Traversal complete, changed:', changed)
  
  if (changed) {
    const result = generate(ast, { retainLines: true }, code)
    console.log('Generated code length:', result.code.length)
    console.log('First 500 chars:', result.code.substring(0, 500))
  }
} catch (e) {
  console.error('Error:', e.message)
  console.error(e.stack)
}
