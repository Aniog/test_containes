import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import fs from 'fs'
import strkImgPlugin from './plugin/vite-plugin-strk-img.js'
import visualEditPlugin from './plugin/vite-plugin-visual-edit.js'

// Plugin to serve the static /generators hub page BEFORE Vite's SPA fallback
function generatorsStaticPlugin() {
  return {
    name: 'generators-static',
    configureServer(server) {
      // Insert at the beginning so it runs before history fallback
      server.middlewares.use((req, res, next) => {
        const url = req.url || ''
        if (url === '/generators' || url === '/generators/' || url === '/generators?') {
          const filePath = path.resolve(__dirname, 'public/generators.html')
          try {
            const content = fs.readFileSync(filePath, 'utf-8')
            res.setHeader('Content-Type', 'text/html; charset=utf-8')
            res.setHeader('Cache-Control', 'no-cache')
            res.end(content)
            return
          } catch (e) {
            // fall through
          }
        }
        next()
      })
    }
  }
}

export default defineConfig({
  plugins: [
    // Our plugin runs BEFORE React transform so it sees raw JSX
    strkImgPlugin(),
    visualEditPlugin(),
    generatorsStaticPlugin(),
    tailwindcss(),
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
    watch: {
      usePolling: true,
      interval: 100, // Check for changes every 100ms
    },
  }
})
