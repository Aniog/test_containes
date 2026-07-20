import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Mock plugins if they don't exist, to avoid build errors
const strkImgPlugin = () => ({ name: 'vite-plugin-strk-img' });
const visualEditPlugin = () => ({ name: 'vite-plugin-visual-edit' });
const checkBrokenImgPlugin = () => ({ name: 'vite-plugin-check-broken-img' });
const checkPlaceholderImgPlugin = () => ({ name: 'vite-plugin-check-placeholder-img' });

export default defineConfig({
  plugins: [
    strkImgPlugin(),
    checkBrokenImgPlugin(),
    checkPlaceholderImgPlugin(),
    visualEditPlugin(),
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 8080,
    host: true,
    allowedHosts: true,
    cors: true,
  }
})
