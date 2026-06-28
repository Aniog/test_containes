import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import strkImgPlugin from './plugin/vite-plugin-strk-img.js'
import visualEditPlugin from './plugin/vite-plugin-visual-edit.js'

export default defineConfig({
  plugins: [
    // Our plugin runs BEFORE React transform so it sees raw JSX
    strkImgPlugin(),
    visualEditPlugin(),
    tailwindcss(),
    react(),
    {
      name: 'generators-html-rewrite',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const url = req.url || ''
          if (url === '/generators' || url.startsWith('/generators?') || url === '/generators/') {
            req.url = '/generators/index.html'
          }
          next()
        })
      },
      configurePreview(server) {
        server.middlewares.use((req, res, next) => {
          const url = req.url || ''
          if (url === '/generators' || url.startsWith('/generators?') || url === '/generators/') {
            req.url = '/generators/index.html'
          }
          next()
        })
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
      interval: 100, // Check for changes every 100ms
    },
  }
})
