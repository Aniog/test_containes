import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'
import strkImgPlugin from './plugin/vite-plugin-strk-img.js'
import visualEditPlugin from './plugin/vite-plugin-visual-edit.js'

// Simple plugin to serve /generators from a static HTML file
function generatorsPagePlugin() {
  return {
    name: 'generators-page',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/generators' || req.url === '/generators/') {
          const filePath = path.resolve(__dirname, 'public/generators.html')
          if (fs.existsSync(filePath)) {
            res.setHeader('Content-Type', 'text/html')
            res.end(fs.readFileSync(filePath, 'utf-8'))
            return
          }
        }
        next()
      })
    }
  }
}

export default defineConfig({
  plugins: [
    generatorsPagePlugin(),
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
    }
  }
})
