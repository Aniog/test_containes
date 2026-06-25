import { useEffect } from 'react'

function App() {
  useEffect(() => {
    window.location.replace('/generators/index.html')
  }, [])

  return (
    <main style={{ display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center' }}>
      <p>Redirecting to AI Generators...</p>
    </main>
  )
}

export default App
