import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import express from 'express'
import { createServer as createViteServer } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

async function createServer() {
  const app = express()

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  })

  app.use(vite.middlewares)

  app.use(async (req, res, next) => {
    const url = req.originalUrl

    try {
      let template = fs.readFileSync(
        path.resolve(__dirname, 'index.html'),
        'utf-8',
      )

      template = await vite.transformIndexHtml(url, template)

      const { render } = await vite.ssrLoadModule('/src/entry-server.jsx')

      const appHtml = render(url)

      const { renderToStaticMarkup } = await import('react-dom/server')
      const html = renderToStaticMarkup(appHtml)

      const finalHtml = template.replace('<!--ssr-outlet-->', html)

      res.status(200).set({ 'Content-Type': 'text/html' }).end(finalHtml)
    } catch (e) {
      vite.ssrFixStacktrace(e)
      next(e)
    }
  })

  const port = parseInt(process.env.VITE_PORT || '8080', 10)
  app.listen(port, '0.0.0.0', () => {
    console.log(`SSR server running at http://localhost:${port}`)
  })
}

createServer()
