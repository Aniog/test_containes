import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import fs from 'fs'
import strkImgPlugin from './plugin/vite-plugin-strk-img.js'
import visualEditPlugin from './plugin/vite-plugin-visual-edit.js'

const SSR_ROUTES = ['/generators']

export default defineConfig({
  plugins: [
    strkImgPlugin(),
    visualEditPlugin(),
    tailwindcss(),
    react(),
    {
      name: 'ssr-middleware',
      configureServer(server) {
        return () => {
          server.middlewares.use(async (req, res, next) => {
            const url = req.originalUrl || req.url
            const pathname = url.split('?')[0].split('#')[0]

            if (!SSR_ROUTES.includes(pathname)) {
              return next()
            }

            try {
              const template = fs.readFileSync(
                path.resolve(__dirname, 'index.html'),
                'utf-8'
              )
              const { render } = await server.ssrLoadModule('/src/entry-server.jsx')
              const appHtml = render(url)
              const html = template.replace(
                '<div id="root"></div>',
                `<div id="root">${appHtml}</div>`
              )
              res.setHeader('Content-Type', 'text/html')
              res.end(html)
            } catch (e) {
              server.ssrFixStacktrace(e)
              next(e)
            }
          })
        }
      }
    }
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: '0.0.0.0',
    allowedHosts: true,
    cors: true,
    hmr: {
      overlay: false
    },
    watch: {
      usePolling: true,
      interval: 100,
    },
  }
})
