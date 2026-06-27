import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'

function Home() {
  return (
    <main className="app-loading-shell">
      <div className="app-loading-content">
        <h1 className="app-loading-text">Strikingly AI</h1>
        <p>Build any kind of site with AI, in an instant.</p>
        <a href="/s/ai_site_builder" className="btn btn-gradient btn-lg" style={{ marginTop: 20 }}>
          Start Building
        </a>
      </div>
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
