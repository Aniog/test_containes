import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx?velmora=202606270718'
import './velmora.css'

if (import.meta.env.DEV && new URLSearchParams(window.location.search).has('visual-edit')) {
  import('./visual-edit/index.js')
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
