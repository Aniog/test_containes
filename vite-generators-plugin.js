import fs from 'fs'
import path from 'path'

export default function generatorsStaticPlugin() {
  return {
    name: 'strikingly-generators-static',
    configureServer(server) {
      // This runs early. We need to add middleware that intercepts BEFORE
      // Vite's indexHtmlMiddleware. The trick is to use a very early hook.
      
      // Add a raw http handler on the underlying server
      const httpServer = server.httpServer
      if (httpServer) {
        httpServer.on('request', (req, res) => {
          if (res.headersSent) return
          const url = (req.url || '').split('?')[0].split('#')[0]
          if (url === '/generators' || url === '/generators/') {
            const filePath = path.resolve(process.cwd(), 'public/generators/index.html')
            try {
              const content = fs.readFileSync(filePath, 'utf-8')
              res.statusCode = 200
              res.setHeader('Content-Type', 'text/html; charset=utf-8')
              res.setHeader('Cache-Control', 'no-cache')
              res.end(content)
            } catch (e) {
              // let it fall through
            }
          }
        })
      }
      
      // Also try middleware approach as backup
      server.middlewares.use((req, res, next) => {
        const url = (req.url || '').split('?')[0].split('#')[0]
        if (url === '/generators' || url === '/generators/') {
          const filePath = path.resolve(process.cwd(), 'public/generators/index.html')
          try {
            const content = fs.readFileSync(filePath, 'utf-8')
            res.setHeader('Content-Type', 'text/html; charset=utf-8')
            res.setHeader('Cache-Control', 'no-cache')
            res.end(content)
            return
          } catch (e) {}
        }
        next()
      })
    }
  }
}
