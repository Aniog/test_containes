import fs from 'fs'
import path from 'path'

export default function generatorsRoutePlugin() {
  return {
    name: 'vite-plugin-generators-route',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url?.split('?')[0]

        if (url !== '/generators' && url !== '/generators/') {
          next()
          return
        }

        const filePath = path.resolve(process.cwd(), 'generators/index.html')

        try {
          const html = fs.readFileSync(filePath, 'utf8')
          res.statusCode = 200
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          res.end(html)
        } catch (error) {
          next(error)
        }
      })
    },
  }
}
