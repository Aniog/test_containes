// Serves /generators (and /generators/) as a fully static HTML page,
// bypassing Vite's SPA fallback. This makes view-source contain the entire
// page on the first byte, which is required by the /generators brief.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default function staticGeneratorsPlugin() {
  return {
    name: 'static-generators-page',
    configureServer(server) {
      const filePath = path.resolve(__dirname, '..', 'public', 'generators', 'index.html')
      server.middlewares.use((req, res, next) => {
        if (!req.url) return next()
        const url = req.url.split('?')[0]
        if (url === '/generators' || url === '/generators/') {
          try {
            const html = fs.readFileSync(filePath, 'utf8')
            res.statusCode = 200
            res.setHeader('Content-Type', 'text/html; charset=utf-8')
            res.setHeader('Cache-Control', 'no-cache')
            res.end(html)
            return
          } catch (err) {
            res.statusCode = 500
            res.end('Failed to read generators page: ' + err.message)
            return
          }
        }
        return next()
      })
    },
  }
}
