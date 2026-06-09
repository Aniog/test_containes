import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import strkImgPlugin from './plugin/vite-plugin-strk-img.js'
import visualEditPlugin from './plugin/vite-plugin-visual-edit.js'
import ssrPlugin from './plugin/vite-plugin-ssr.js'

export default defineConfig({
  plugins: [
    ssrPlugin(),
    // Our plugin runs BEFORE React transform so it sees raw JSX
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
    port: 12000,
    host: '0.0.0.0',
    allowedHosts: true,
    cors: true,
    hmr: {
      overlay: false
    }
  }
})
