import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    window.location.replace('/generators')
  }, [])

  return (
    <main style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      fontFamily: '"Open Sans", sans-serif',
      color: '#636972',
      fontSize: '14px',
      background: '#FFFFFF'
    }}>
      <p>Redirecting to AI Generators…</p>
    </main>
  )
}

export default App
