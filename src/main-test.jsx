import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Simple test to verify React is working
const TestApp = () => {
  return (
    <div className="min-h-screen bg-velmora-cream flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-serif text-6xl text-velmora-charcoal mb-4">VELMORA</h1>
        <p className="font-sans text-velmora-charcoal/70 tracking-wider uppercase text-sm">Fine Jewelry</p>
        <div className="mt-8">
          <p className="text-green-600">✓ React is working!</p>
          <p className="text-sm text-gray-600 mt-2">Now let's build the full storefront...</p>
        </div>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TestApp />
  </React.StrictMode>
)
