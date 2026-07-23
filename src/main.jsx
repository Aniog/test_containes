import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const rootElement = document.getElementById('root')
let reactRoot = null

const renderMessage = ({ eyebrow, title, message, details = '' }) => {
  if (!rootElement) {
    return
  }

  rootElement.innerHTML = `
    <div style="min-height:100vh;display:flex;align-items:center;justify-content:center;padding:24px;background:rgb(250 250 249);color:rgb(28 25 23);font-family:Inter,system-ui,sans-serif;">
      <div style="width:100%;max-width:960px;border:1px solid rgba(214,211,209,.9);border-radius:32px;background:rgba(245,245,244,.96);padding:32px;box-shadow:0 18px 45px rgba(28,25,23,.08);">
        <p style="margin:0;color:rgb(180 83 9);font-size:12px;letter-spacing:.35em;text-transform:uppercase;">${eyebrow}</p>
        <h1 style="margin:16px 0 0;font-family:'Cormorant Garamond',Georgia,serif;font-size:48px;line-height:1.1;">${title}</h1>
        <p style="margin:16px 0 0;max-width:720px;font-size:16px;line-height:1.8;color:rgb(68 64 60);">${message}</p>
        ${details ? `<pre style="margin-top:16px;overflow:auto;border-radius:24px;border:1px solid rgba(214,211,209,.9);background:rgb(28 25 23);padding:20px;color:rgb(231 229 228);font-size:12px;line-height:1.8;white-space:pre-wrap;word-break:break-word;">${details}</pre>` : ''}
      </div>
    </div>
  `
}

const renderBootstrapError = (error) => {
  console.error('Velmora bootstrap error', error)

  const message = error instanceof Error ? error.message : String(error || 'Unknown bootstrap error')
  const details = error instanceof Error ? error.stack || error.message : message

  renderMessage({
    eyebrow: 'Preview issue',
    title: 'The storefront failed to boot.',
    message: 'I am surfacing the exact runtime error here so I can repair the live preview safely.',
    details,
  })
}

window.addEventListener('error', (event) => {
  renderBootstrapError(event.error || new Error(event.message || 'Unknown window error'))
})

window.addEventListener('unhandledrejection', (event) => {
  const reason = event.reason instanceof Error
    ? event.reason
    : new Error(typeof event.reason === 'string' ? event.reason : 'Unhandled promise rejection')

  renderBootstrapError(reason)
})

renderMessage({
  eyebrow: 'Preview status',
  title: 'Booting Velmora…',
  message: 'Loading the storefront and checking the remaining live-preview runtime issue.',
})

const startApp = async () => {
  try {
    await import('./index.css')

    if (import.meta.env.DEV) {
      import('./visual-edit/index.js').catch((error) => {
        console.error('Visual edit bridge failed to load', error)
      })
    }

    const { default: App } = await import('./App.jsx')

    if (!rootElement) {
      throw new Error('Unable to find the root mount element.')
    }

    rootElement.innerHTML = ''
    reactRoot ??= createRoot(rootElement)

    reactRoot.render(
      <StrictMode>
        <App />
      </StrictMode>,
    )
  } catch (error) {
    renderBootstrapError(error)
  }
}

startApp()
