/**
 * Prerender script: Uses Vite SSR to render the App component to static HTML
 * and inject it into the dist/index.html file.
 *
 * Usage: node scripts/prerender.mjs
 */
import { readFileSync, writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')
const DIST = resolve(ROOT, 'dist')
const HTML_FILE = resolve(DIST, 'index.html')

async function main() {
  // 1. Build the SSR bundle
  const { execSync } = await import('child_process')
  
  console.log('Building SSR bundle...')
  execSync('npx vite build --ssr src/entry-server.jsx --outDir dist-ssr', {
    cwd: ROOT,
    stdio: 'inherit',
  })

  // 2. Import the SSR bundle
  console.log('Importing SSR bundle...')
  const { render } = await import(resolve(DIST + '-ssr', 'entry-server.js'))

  // 3. Render the app to HTML
  console.log('Rendering app to HTML...')
  const { html: appHtml } = render()

  // 4. Read the client HTML
  let clientHtml = readFileSync(HTML_FILE, 'utf-8')

  // 5. Inject the rendered HTML into the root div
  clientHtml = clientHtml.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  )

  // 6. Write the final HTML
  writeFileSync(HTML_FILE, clientHtml, 'utf-8')
  console.log('Prerendered HTML written to dist/index.html')

  // 7. Verify
  const finalHtml = readFileSync(HTML_FILE, 'utf-8')
  const generatorLinks = (finalHtml.match(/href="\/generators\//g) || []).length
  console.log(`   Found ${generatorLinks} generator links in the prerendered HTML`)

  // 8. Clean up SSR build
  const { rmSync } = await import('fs')
  rmSync(resolve(DIST + '-ssr'), { recursive: true, force: true })
  console.log('   Cleaned up SSR build artifacts')
}

main().catch((err) => {
  console.error('Prerender failed:', err)
  process.exit(1)
})
