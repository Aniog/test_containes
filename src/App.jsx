import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    const target = '/generators'
    window.location.replace(target)
  }, [])

  return (
    <main className="app-loading-shell">
      <div className="app-loading-content" role="status" aria-live="polite">
        <p className="app-loading-text">Loading...</p>
      </div>
    </main>
  )
}

export default App