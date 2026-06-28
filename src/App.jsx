import { useEffect } from 'react'

function App() {
  useEffect(() => {
    window.location.href = '/generators'
  }, [])

  return (
    <main style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', fontFamily: 'system-ui, sans-serif', color: '#636972' }}>
      <p>Redirecting to <a href="/generators" style={{ color: '#8159BB' }}>Generators</a>&hellip;</p>
    </main>
  )
}

export default App
