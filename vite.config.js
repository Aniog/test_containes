import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'
import strkImgPlugin from './plugin/vite-plugin-strk-img.js'

export default defineConfig({
  plugins: [
    // Our plugin runs BEFORE React transform so it sees raw JSX
    strkImgPlugin(),
    react(),
    {
      name: 'generators-static',
      configureServer(server) {
        const filePath = path.resolve(__dirname, 'public/generators/index.html')
        server.middlewares.use('/generators/', (req, res, next) => {
          const urlPath = req.url.split('?')[0].split('#')[0]
          if (urlPath === '/' || urlPath === '' || urlPath === '/index.html') {
            res.setHeader('Content-Type', 'text/html; charset=utf-8')
            res.writeHead(200)
            const content = fs.readFileSync(filePath, 'utf-8')
            res.end(content)
          } else {
            next()
          }
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
  },
  publicDir: 'public'
})
