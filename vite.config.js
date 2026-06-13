import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

import strkImgPlugin from './plugin/vite-plugin-strk-img.js'
import visualEditPlugin from './plugin/vite-plugin-visual-edit.js'

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
      "@strikingly/sdk": path.resolve(__dirname, "./src/lib/strikingly-sdk.js")
    },
  },
  server: {
    host: '0.0.0.0',
    allowedHosts: true,
    cors: true,
    // Add a dummy comment to trigger reload
    hmr: {
      overlay: false
    }
  }
})
