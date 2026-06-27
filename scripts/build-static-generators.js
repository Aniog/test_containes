/**
 * Prerenders the GeneratorsHub React component to a static HTML file
 * at public/generators/index.html so /generators is fully server-rendered.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server.js'
import { HelmetProvider } from 'react-helmet-async'

// Resolve project paths
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.resolve(__dirname, '..')
const cssPath = path.join(projectRoot, 'dist', 'assets', 'index.css')
const outDir = path.join(projectRoot, 'public', 'generators')
const outPath = path.join(outDir, 'index.html')

async function main() {
  // Import component after Vite build has produced CSS
  const { default: GeneratorsHub } = await import(path.join(projectRoot, 'src', 'pages', 'GeneratorsHub.jsx'))

  const helmetContext = {}
  const appHtml = renderToString(
    React.createElement(
      HelmetProvider,
      { context: helmetContext },
      React.createElement(
        StaticRouter,
        { location: '/generators' },
        React.createElement(GeneratorsHub)
      )
    )
  )

  const { helmet } = helmetContext

  // Read built CSS if available; otherwise inline a fallback note.
  let css = ''
  if (fs.existsSync(cssPath)) {
    css = fs.readFileSync(cssPath, 'utf-8')
  } else {
    console.warn(`Built CSS not found at ${cssPath}; run npm run build first.`)
  }

  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    ${helmet?.title?.toString() || '<title>AI Website Generators - Build Any Site in Seconds | Strikingly</title>'}
    ${helmet?.meta?.toString() || ''}
    ${helmet?.link?.toString() || ''}
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
    <style>${css}</style>
    ${helmet?.script?.toString() || ''}
  </head>
  <body>
    <div id="root">${appHtml}</div>
  </body>
</html>
`

  fs.mkdirSync(outDir, { recursive: true })
  fs.writeFileSync(outPath, html, 'utf-8')
  console.log(`Wrote static page to ${outPath}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
