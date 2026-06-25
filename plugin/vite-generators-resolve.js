import fs from 'fs'
import path from 'path'

export default function generatorsResolvePlugin() {
  const generatorsHtml = path.resolve(process.cwd(), 'public/generators/index.html')
  let cachedContent = null
  
  return {
    name: 'strikingly-generators-resolve',
    enforce: 'pre',
    
    configureServer(server) {
      // Force our middleware to be the very first thing
      const serveGen = (req, res, next) => {
        const url = (req.url || '').split('?')[0]
        if (url === '/generators' || url === '/generators/') {
          try {
            if (!cachedContent) {
              cachedContent = fs.readFileSync(generatorsHtml, 'utf-8')
            }
            res.setHeader('Content-Type', 'text/html; charset=utf-8')
            res.setHeader('Cache-Control', 'no-cache')
            res.end(cachedContent)
            return
          } catch (e) {}
        }
        next()
      }
      
      // Insert at position 0
      server.middlewares.stack.unshift({ route: '', handle: serveGen })
    },
    
    // Also handle during build/serve via transform
    transformIndexHtml: {
      order: 'pre',
      handler(html, ctx) {
        // Not applicable for our use case
        return html
      }
    }
  }
}
