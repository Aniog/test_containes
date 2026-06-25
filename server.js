import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import express from 'express'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const isProduction = process.env.NODE_ENV === 'production'
const port = process.env.VITE_PORT || 12000

async function createServer() {
  let vite
  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite')
    vite = await createViteServer({
      server: { 
        middlewareMode: true,
        host: '0.0.0.0',
        allowedHosts: true,
        cors: true,
      },
      appType: 'custom',
    })
  }

  const app = express()

  if (vite) {
    app.use(vite.middlewares)
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist/client')))
  }

  // SSR catch-all handler
  app.use(async (req, res, next) => {
    // Skip Vite internal routes and static assets
    if (req.path.startsWith('/@') || req.path.startsWith('/src/') || req.path.match(/\.\w+$/)) {
      return next();
    }
    console.log('[SSR] Handling request:', req.path)
    try {
      const url = req.originalUrl

      let template, render
      if (!isProduction) {
        template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8')
        template = await vite.transformIndexHtml(url, template)
        const mod = await vite.ssrLoadModule('/src/entry-server.jsx')
        render = mod.render
      } else {
        template = fs.readFileSync(path.resolve(__dirname, 'dist/client/index.html'), 'utf-8')
        const mod = await import('./dist/server/entry-server.js')
        render = mod.render
      }

      const appHtml = render()
      console.log('[SSR] Rendered HTML length:', appHtml.length)
      const html = template.replace('<!--ssr-outlet-->', appHtml)

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e) {
      if (vite) vite.ssrFixStacktrace(e)
      console.error(e.stack)
      res.status(500).end(e.stack)
    }
  })

  app.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${port}`)
  })
}

createServer()
