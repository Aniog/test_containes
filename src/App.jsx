import './App.css'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    // Redirect to the generators page
    window.location.href = '/index.html'
  }, [])

  return (
    <main className="app-loading-shell">
      <div className="app-loading-content" role="status" aria-live="polite">
        <p className="app-loading-text">
          Loading Generators Hub...
        </p>
      </div>
    </main>
  )
}

export default App
