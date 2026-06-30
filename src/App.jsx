import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    if (window.location.pathname === '/') {
      window.location.replace('/generators')
    }
  }, [])

  return (
    <main className="app-redirect-shell">
      <div className="app-redirect-card" role="status" aria-live="polite">
        <p className="app-redirect-eyebrow">STRIKINGLY AI</p>
        <h1 className="app-redirect-title">Opening AI Generators</h1>
        <p className="app-redirect-copy">
          If you are not redirected automatically, continue to the generators
          hub.
        </p>
        <a className="app-redirect-link" href="/generators">
          Go to AI Generators
        </a>
      </div>
    </main>
  )
}

export default App
