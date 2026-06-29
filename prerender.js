import fs from 'fs'
import { createServer as createViteServer } from 'vite'

async function build() {
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom'
  })
  
  try {
    const { render } = await vite.ssrLoadModule('/src/server-render.jsx')
    const html = render()
    
    let template = fs.readFileSync('index.html', 'utf-8')
    template = template.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
    
    fs.writeFileSync('index.html', template)
    console.log("Prerender successful!")
  } catch (e) {
    console.error(e)
  }
  
  await vite.close()
}
build()