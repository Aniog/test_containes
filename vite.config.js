import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { renderToStaticMarkup } from 'react-dom/server'
import { createElement } from 'react'

export default defineConfig({
  plugins: [
    tailwindcss(),
    {
      name: 'react-ssg-plugin',
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          if (req.url === '/' || req.url === '/index.html') {
            try {
              const App = await server.ssrLoadModule('/src/App.jsx');
              const htmlContent = renderToStaticMarkup(createElement(App.default));
              const template = await server.transformIndexHtml(req.url, `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AI Website Generators - Build Any Site in Seconds | Strikingly</title>
  <meta name="description" content="Browse Strikingly's AI-powered website generators. Choose one for your industry, goal, or site type and create a website in seconds, no code required.">
  <link rel="canonical" href="https://www.strikingly.com/generators">
  <meta property="og:title" content="AI Website Generators - Build Any Site in Seconds | Strikingly">
  <meta property="og:description" content="Browse Strikingly's AI-powered website generators. Choose one for your industry, goal, or site type and create a website in seconds.">
  <meta property="og:url" content="https://www.strikingly.com/generators">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/src/index.css">
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Strikingly",
        "item": "https://www.strikingly.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "AI Generators",
        "item": "https://www.strikingly.com/generators"
      }
    ]
  }
  </script>
</head>
<body>
  ${htmlContent}
  <script type="module" src="/src/main.js"></script>
</body>
</html>`);
              res.setHeader('Content-Type', 'text/html');
              res.end(template);
            } catch (e) {
              server.ssrFixStacktrace(e);
              console.error(e);
              next(e);
            }
          } else {
            next();
          }
        });
      }
    }
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 12000,
    host: true,
    allowedHosts: true,
    cors: true,
  }
})
