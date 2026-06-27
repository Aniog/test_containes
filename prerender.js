import { createServer } from 'vite';
import fs from 'fs';
import path from 'path';

async function generateStaticHtml() {
  console.log('Starting Vite server for SSR generation...');
  const server = await createServer({
    server: { middlewareMode: true },
    appType: 'custom'
  });

  try {
    const App = await server.ssrLoadModule('/src/App.jsx');
    // We need to require renderToStaticMarkup from React
    const { renderToStaticMarkup } = await import('react-dom/server');
    const { createElement } = await import('react');

    const htmlContent = renderToStaticMarkup(createElement(App.default));

    const distHtmlPath = path.resolve(process.cwd(), 'dist', 'index.html');
    if (fs.existsSync(distHtmlPath)) {
      const originalDistHtml = fs.readFileSync(distHtmlPath, 'utf-8');
      
      let newHtml = originalDistHtml.replace(
        '<div id="root"></div>', 
        `<div id="root">${htmlContent}</div>`
      );
      
      // Inject tags to head
      const headTags = `
  <title>AI Website Generators - Build Any Site in Seconds | Strikingly</title>
  <meta name="description" content="Browse Strikingly's AI-powered website generators. Choose one for your industry, goal, or site type and create a website in seconds, no code required.">
  <link rel="canonical" href="https://www.strikingly.com/generators">
  <meta property="og:title" content="AI Website Generators - Build Any Site in Seconds | Strikingly">
  <meta property="og:description" content="Browse Strikingly's AI-powered website generators. Choose one for your industry, goal, or site type and create a website in seconds.">
  <meta property="og:url" content="https://www.strikingly.com/generators">
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
  </script>`;
      newHtml = newHtml.replace(/<title>.*?<\/title>/, headTags);

      fs.writeFileSync(distHtmlPath, newHtml);
      console.log('Successfully injected SSR content into dist/index.html');
    } else {
      console.error('dist/index.html not found! Run vite build first.');
    }
  } catch (err) {
    console.error('Error rendering HTML', err);
  } finally {
    await server.close();
  }
}

generateStaticHtml();
