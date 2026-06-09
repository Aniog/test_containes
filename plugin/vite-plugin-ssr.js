import path from 'path'
import fs from 'fs'

export default function ssrPlugin() {
  return {
    name: 'vite-plugin-generators-ssr',
    configureServer(server) {
      // Add middleware BEFORE internal middleware so we intercept / first
      server.middlewares.use(async (req, res, next) => {
        // Only handle page navigation requests for /
        const url = req.url?.split('?')[0]
        if (url !== '/' && url !== '/index.html') {
          return next()
        }

        try {
          // Read the raw index.html
          const indexHtml = fs.readFileSync(
            path.resolve(server.config.root, 'index.html'),
            'utf-8'
          )

          // Load and render the app using Vite's SSR module loader
          const { render } = await server.ssrLoadModule('/src/entry-server.jsx')
          const appHtml = render()

          // Inject server-rendered HTML into root div
          let html = indexHtml.replace(
            '<div id="root"></div>',
            `<div id="root">${appHtml}</div>`
          )

          // Apply Vite transforms (HMR client injection, etc.)
          html = await server.transformIndexHtml(req.url, html)

          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          res.setHeader('Cache-Control', 'no-cache')
          res.end(html)
        } catch (err) {
          console.error('[SSR] Error:', err.message)
          next()
        }
      })
    }
  }
}
