import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import strkImgPlugin from './plugin/vite-plugin-strk-img.js'
import visualEditPlugin from './plugin/vite-plugin-visual-edit.js'
import checkBrokenImgPlugin from './plugin/vite-plugin-check-broken-img.js'
import checkPlaceholderImgPlugin from './plugin/vite-plugin-check-placeholder-img.js'

// Fix: Vite sets Content-Length from the original file size BEFORE transform
// plugins (like visualEditPlugin) expand the code. This causes proxied
// environments (like the tunnel proxy) to truncate responses, since the
// proxy sends only Content-Length bytes of the (larger) transformed body.
// Intercept res.end() to recalculate Content-Length from the actual body.
function fixContentLengthPlugin() {
  return {
    name: 'fix-transform-content-length',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (!req.url || !req.url.includes('/src/')) {
          return next()
        }
        const origEnd = res.end
        res.end = function (...args) {
          // Calculate actual body length from the data passed to end()
          const body = args[0]
          if (body && res.getHeader('Content-Length')) {
            const actualLength = Buffer.isBuffer(body)
              ? body.length
              : Buffer.byteLength(body, args[1] || 'utf-8')
            res.setHeader('Content-Length', actualLength)
          }
          return origEnd.apply(this, args)
        }
        next()
      })
    },
  }
}

export default defineConfig({
  plugins: [
    // Our plugin runs BEFORE React transform so it sees raw JSX
    strkImgPlugin(),
    checkBrokenImgPlugin(),
    checkPlaceholderImgPlugin(),
    visualEditPlugin(),
    react(),
    fixContentLengthPlugin(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 12000,
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
  },
})
