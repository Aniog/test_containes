import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'
import strkImgPlugin from './plugin/vite-plugin-strk-img.js'
import visualEditPlugin from './plugin/vite-plugin-visual-edit.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [
    strkImgPlugin(),
    visualEditPlugin(),
    react(),
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
    port: 12000,
    configureServer(server) {
      const generatorsHtmlPath = path.resolve(__dirname, 'public/generators/index.html')
      let cachedContent = null

      // Read the static generators HTML immediately
      try {
        cachedContent = fs.readFileSync(generatorsHtmlPath, 'utf-8')
      } catch (e) {
        console.error('[GENERATORS] Failed to read static HTML:', e.message)
      }

      // Attach a raw request listener on the underlying HTTP server
      // that runs BEFORE Vite's connect app (SPA fallback, indexHtmlMiddleware).
      // We capture existing listeners, remove them, and re-add our handler first.
      const attachRawHandler = () => {
        const httpServer = server.httpServer
        if (!httpServer) {
          setImmediate(attachRawHandler)
          return
        }

        // If the server is not yet listening, wait for it
        if (!httpServer.listening) {
          httpServer.once('listening', attachRawHandler)
          return
        }

        // Capture Vite's current request listeners (the connect app etc.)
        const existing = httpServer.listeners('request').slice()

        // Remove all existing listeners so we control the order
        httpServer.removeAllListeners('request')

        // Our handler runs first
        httpServer.on('request', (req, res) => {
          const url = (req.url || '').split('?')[0].split('#')[0]

          if ((url === '/generators' || url === '/generators/') && cachedContent) {
            res.statusCode = 200
            res.setHeader('Content-Type', 'text/html; charset=utf-8')
            res.setHeader('Cache-Control', 'no-cache')
            res.setHeader('X-Generators-Static', '1')
            res.end(cachedContent)
            return
          }

          // Delegate to Vite's normal handling for everything else
          for (const fn of existing) {
            fn(req, res)
          }
        })
      }

      attachRawHandler()
    }
  }
})
