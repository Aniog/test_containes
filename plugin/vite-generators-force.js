import fs from 'fs'
import path from 'path'

export default function generatorsForcePlugin() {
  return {
    name: 'strikingly-generators-force',
    
    configureServer(server) {
      // This callback runs AFTER all configureServer hooks from all plugins
      // At this point, Vite has added all its internal middlewares
      return () => {
        const filePath = path.resolve(process.cwd(), 'public/generators/index.html')
        let cachedContent = null
        
        const serveGen = (req, res, next) => {
          const url = (req.url || '').split('?')[0].split('#')[0]
          if (url === '/generators' || url === '/generators/') {
            try {
              if (!cachedContent) {
                cachedContent = fs.readFileSync(filePath, 'utf-8')
              }
              res.statusCode = 200
              res.setHeader('Content-Type', 'text/html; charset=utf-8')
              res.setHeader('Cache-Control', 'no-cache')
              res.setHeader('X-Generators-Static', '1')
              res.end(cachedContent)
              return
            } catch (e) {}
          }
          next()
        }
        
        // Insert at the VERY BEGINNING of the stack
        // This should run before indexHtmlMiddleware and spaFallback
        server.middlewares.stack.unshift({ route: '', handle: serveGen })
        
        // Also try to intercept at the handle level
        const origHandle = server.middlewares.handle
        server.middlewares.handle = function(req, res, out) {
          const url = (req.url || '').split('?')[0].split('#')[0]
          if (url === '/generators' || url === '/generators/') {
            try {
              if (!cachedContent) {
                cachedContent = fs.readFileSync(filePath, 'utf-8')
              }
              res.statusCode = 200
              res.setHeader('Content-Type', 'text/html; charset=utf-8')
              res.setHeader('Cache-Control', 'no-cache')
              res.setHeader('X-Generators-Static', '1')
              res.end(cachedContent)
              return
            } catch (e) {}
          }
          return origHandle.call(this, req, res, out)
        }
      }
    }
  }
}
