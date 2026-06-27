import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GeneratorsHub from './pages/GeneratorsHub'
import './App.css'

function Home() {
  return (
    <main className="app-loading-shell">
      <div className="app-loading-content" role="status" aria-live="polite">
        <h1 className="m-0 mb-5" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(24px, 4vw, 40px)', textTransform: 'uppercase', color: '#4B5056', lineHeight: 1.2 }}>
          Build Your Website with AI
        </h1>
        <p className="app-loading-text" style={{ color: '#636972' }}>
          Strikingly makes it easy to create a beautiful website in seconds.
        </p>
        <a
          href="/generators"
          style={{
            display: 'inline-block',
            marginTop: 20,
            height: 44,
            padding: '12px 24px',
            borderRadius: 4,
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            fontSize: 14,
            textTransform: 'uppercase',
            background: 'linear-gradient(135deg, #7671FF, #CB0C9F)',
            color: '#FFFFFF',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          Browse Generators
        </a>
      </div>
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/generators" element={<GeneratorsHub />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
