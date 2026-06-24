import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import strkImgPlugin from './plugin/vite-plugin-strk-img.js'
import visualEditPlugin from './plugin/vite-plugin-visual-edit.js'
import { execSync } from 'child_process'

try {
  console.log('Running npm install to repair packages...')
  execSync('npm install', { stdio: 'inherit' })
  console.log('Done npm install')
} catch (e) {
  console.error('Failed', e)
}

export default defineConfig({
  plugins: [
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
    host: '0.0.0.0',
    port: 12000,
    allowedHosts: true,
    cors: true,
    hmr: {
      overlay: false
    }
  },
  optimizeDeps: {
    force: true,
    include: ['zustand']
  }
})
