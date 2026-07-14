import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './velmora-theme-v4.css'
import App from './velmora2/StorefrontAppV4.jsx'

if (import.meta.env.DEV) {
  import('./visual-edit/index.js')
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
