import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

if (import.meta.env.DEV && import.meta.env.VITE_ENABLE_VISUAL_EDIT === '1') {
  import('./visual-edit/index.js')
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
