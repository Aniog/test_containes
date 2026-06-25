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
    {
      name: 'strikingly-generators-static',
      enforce: 'pre',
      transformIndexHtml: {
        order: 'pre',
        handler(html, ctx) {
          const url = ctx.path || ctx.filename || ''
          if (url === '/generators' || url === '/generators/') {
            const generatorsPath = path.resolve(__dirname, 'public/generators/index.html')
            try {
              const content = fs.readFileSync(generatorsPath, 'utf-8')
              return content
            } catch (e) {
              console.error('[GENERATORS] transformIndexHtml read error:', e.message)
            }
          }
          return html
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
    port: 12000
  }
})
