import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    // The hub page is served as a fully static HTML document at /generators
    // (see plugin/vite-plugin-static-generators.js).
    // Redirect any visitors who land on the root to the canonical hub URL.
    if (window.location.pathname === '/' || window.location.pathname === '') {
      window.location.replace('/generators')
    }
  }, [])

  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily:
          '"Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        background: '#ffffff',
        color: '#4B5056',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <div>
        <h1
          style={{
            fontFamily: '"Josefin Sans", sans-serif',
            fontWeight: 700,
            textTransform: 'uppercase',
            fontSize: '28px',
            color: '#2E2E2F',
            margin: '0 0 12px',
            letterSpacing: '0.02em',
          }}
        >
          Strikingly AI Generators
        </h1>
        <p style={{ margin: '0 0 20px', color: '#636972' }}>
          Redirecting to the AI Generators hub&hellip;
        </p>
        <a
          href="/generators"
          style={{
            display: 'inline-block',
            padding: '0 22px',
            height: '44px',
            lineHeight: '44px',
            borderRadius: '4px',
            background: 'linear-gradient(135deg, #7671FF 0%, #CB0C9F 100%)',
            color: '#ffffff',
            textDecoration: 'none',
            fontFamily: '"Josefin Sans", sans-serif',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            fontSize: '15px',
          }}
        >
          Open /generators
        </a>
      </div>
    </main>
  )
}

export default App
