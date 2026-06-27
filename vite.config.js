import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import fs from 'fs'
import strkImgPlugin from './plugin/vite-plugin-strk-img.js'
import visualEditPlugin from './plugin/vite-plugin-visual-edit.js'

export default defineConfig({
  plugins: [
    // Our plugin runs BEFORE React transform so it sees raw JSX
    strkImgPlugin(),
    visualEditPlugin(),
    tailwindcss(),
    react(),
    // Custom middleware to serve the generators page
    {
      name: 'serve-generators',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const url = new URL(req.url, `http://${req.headers.host}`);
          const pathname = url.pathname;
          // Serve /generators or /generators/ from the static file
          if (pathname === '/generators' || pathname === '/generators/') {
            const filePath = path.resolve(__dirname, 'public/generators/index.html');
            if (fs.existsSync(filePath)) {
              res.setHeader('Content-Type', 'text/html');
              res.setHeader('Cache-Control', 'no-cache');
              res.end(fs.readFileSync(filePath, 'utf-8'));
              return;
            }
          }
          next();
        });
      },
    },
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
