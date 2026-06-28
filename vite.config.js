import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import fs from 'fs'
import strkImgPlugin from './plugin/vite-plugin-strk-img.js'
import visualEditPlugin from './plugin/vite-plugin-visual-edit.js'

function ssrPlugin() {
  return {
    name: 'ssr-html',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.method !== 'GET' || req.url !== '/') {
          return next()
        }

        try {
          const template = fs.readFileSync(
            path.resolve(__dirname, 'index.html'),
            'utf-8'
          )

          const { render } = await server.ssrLoadModule('/src/entry-server.jsx')
          const appHtml = render()

          const html = template
            .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

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

export default defineConfig({
  plugins: [
    strkImgPlugin(),
    visualEditPlugin(),
    tailwindcss(),
    react(),
    ssrPlugin(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 8080,
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
