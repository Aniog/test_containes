import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const generatorsHtmlPath = path.resolve(__dirname, '../public/generators/index.html')

function serveGeneratorsHtml(req, res, next) {
  const url = req.url || ''
  if (url === '/generators' || url === '/generators/') {
    try {
      const html = fs.readFileSync(generatorsHtmlPath, 'utf-8')
      res.setHeader('Content-Type', 'text/html; charset=utf-8')
      res.statusCode = 200
      res.end(html)
      return
    } catch (err) {
      console.error('[vite-generators-static] Failed to serve generators page:', err)
      res.statusCode = 500
      res.end('Internal Server Error')
      return
    }
  }
  next()
}

export default function generatorsStaticPlugin() {
  return {
    name: 'vite-generators-static',
    configureServer(server) {
      server.middlewares.use(serveGeneratorsHtml)
    },
    configurePreviewServer(server) {
      server.middlewares.use(serveGeneratorsHtml)
    },
  }
}
