import fs from 'fs'
import path from 'path'

/**
 * Plugin to serve the static /generators page at clean URLs.
 * Must run BEFORE Vite's indexHtmlMiddleware and spaFallback.
 */
export default function generatorsStaticPlugin() {
  return {
    name: 'strikingly-generators-static',
    enforce: 'pre',
    
    configureServer(server) {
      // This is the most reliable way: hook into the raw Node http server
      // BEFORE connect processes anything.
      // We do this by replacing the request listener on the httpServer.
      
      const filePath = path.resolve(process.cwd(), 'public/generators/index.html')
      
      const serveStatic = (req, res) => {
        const url = (req.url || '').split('?')[0].split('#')[0]
        if (url === '/generators' || url === '/generators/') {
          try {
            const content = fs.readFileSync(filePath, 'utf-8')
            res.statusCode = 200
            res.setHeader('Content-Type', 'text/html; charset=utf-8')
            res.setHeader('Cache-Control', 'no-cache')
            res.setHeader('X-Generators-Static', '1')
            res.end(content)
            return true // handled
          } catch (e) {
            return false
          }
        }
        return false
      }
      
      // Wait for httpServer to be available
      const attachToServer = () => {
        const httpServer = server.httpServer
        if (!httpServer) {
          // Try again on next tick
          setTimeout(attachToServer, 0)
          return
        }
        
        // Store the original listener
        const listeners = httpServer.listeners('request')
        const originalListener = listeners.length > 0 ? listeners[0] : null
        
        // Remove all existing listeners
        httpServer.removeAllListeners('request')
        
        // Add our listener FIRST
        httpServer.on('request', (req, res) => {
          if (serveStatic(req, res)) {
            return // We handled it, don't call original
          }
          // Not our URL, call original Vite handler
          if (originalListener) {
            originalListener(req, res)
          }
        })
      }
      
      // Attach immediately if possible, or wait
      attachToServer()
      
      // Also add as middleware as a fallback
      server.middlewares.use((req, res, next) => {
        const url = (req.url || '').split('?')[0].split('#')[0]
        if (url === '/generators' || url === '/generators/') {
          try {
            const content = fs.readFileSync(filePath, 'utf-8')
            res.statusCode = 200
            res.setHeader('Content-Type', 'text/html; charset=utf-8')
            res.setHeader('Cache-Control', 'no-cache')
            res.setHeader('X-Generators-Static', '1')
            res.end(content)
            return
          } catch (e) {}
        }
        next()
      })
    }
  }
}
