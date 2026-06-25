import fs from 'fs'
import path from 'path'

export default function generatorsServePlugin() {
  const generatorsPath = path.resolve(process.cwd(), 'public/generators')
  let cachedContent = null

  return {
    name: 'strikingly-generators-serve',
    enforce: 'pre',
    
    configureServer(server) {
      // This is our last resort - hook into the transform pipeline
      // But we need to intercept before HTML transform
      
      // Actually, let's try a different approach: use Vite's internal
      // by adding a custom index.html transform that checks the URL
      
      // Best approach: use the 'handleHotUpdate' or hook into the dev server differently
      
      // Let's try: patch the server's transformIndexHtml or similar
    },
    
    // This hook can transform the index HTML
    transformIndexHtml: {
      order: 'pre',
      handler(html, ctx) {
        // ctx.path will be the requested path
        const p = ctx.path || ctx.filename || ''
        if (p === '/generators' || p === '/generators/') {
          // Return our static HTML instead
          if (!cachedContent) {
            cachedContent = fs.readFileSync(generatorsPath, 'utf-8')
          }
          return cachedContent
        }
        return html
      }
    }
  }
}
