import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'
import strkImgPlugin from './plugin/vite-plugin-strk-img.js'
import visualEditPlugin from './plugin/vite-plugin-visual-edit.js'

export default defineConfig({
  plugins: [
    // Our plugin runs BEFORE React transform so it sees raw JSX
    strkImgPlugin(),
    visualEditPlugin(),
    react(),
    {
      name: 'generators-static-html',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/generators' || req.url === '/generators/') {
            const html = fs.readFileSync(path.resolve(__dirname, 'public/generators/index.html'), 'utf-8')
            res.setHeader('Content-Type', 'text/html')
            res.end(html)
            return
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
    }
  }
})
