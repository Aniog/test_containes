import { createRequire } from 'module'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')

export default function ssrPlugin() {
  return {
    name: 'vite-plugin-ssr-html',
    configureServer(server) {
      return () => {
        server.middlewares.use(async (req, res, next) => {
          if (req.method !== 'GET' || req.url !== '/') {
            return next()
          }

          try {
            // Read the index.html template
            const templatePath = path.resolve(rootDir, 'index.html')
            let template = fs.readFileSync(templatePath, 'utf-8')

            // Use Vite's SSR module loading to import the server entry
            const { render } = await server.ssrLoadModule('/src/entry-server.jsx')
            const appHtml = render()

            // Inject the rendered HTML into the template
            template = template.replace(
              '<div id="root"></div>',
              `<div id="root">${appHtml}</div>`
            )

            // Apply Vite HTML transforms (injects HMR client, etc.)
            const html = await server.transformIndexHtml(req.url, template)

            res.setHeader('Content-Type', 'text/html')
            res.end(html)
          } catch (err) {
            server.ssrFixStacktrace(err)
            console.error('SSR Error:', err)
            return next(err)
          }
        })
      }
    },
  }
}
