import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import strkImgPlugin from './plugin/vite-plugin-strk-img.js'
import visualEditPlugin from './plugin/vite-plugin-visual-edit.js'
import ssrPlugin from './plugin/vite-plugin-ssr.js'

export default defineConfig({
  plugins: [
    // Our plugin runs BEFORE React transform so it sees raw JSX
    strkImgPlugin(),
    visualEditPlugin(),
    ssrPlugin(),
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
    // Disable HMR so vite-plugin-react's fast-refresh preamble is not
    // required. The SSR middleware short-circuits the response, which
    // would otherwise prevent the plugin from injecting the preamble
    // script and cause a "can't detect preamble" runtime error.
    hmr: false,
    watch: {
      usePolling: true,
      interval: 100, // Check for changes every 100ms
    },
  }
})
