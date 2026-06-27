import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GeneratorsPage from './components/generators/GeneratorsPage'

function Home() {
  return (
    <main className="app-loading-shell">
      <div className="app-loading-content" role="status" aria-live="polite">
        <h1>Strikingly</h1>
        <p className="app-loading-text">Welcome to Strikingly. Select a page to get started.</p>
      </div>
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/generators" element={<GeneratorsPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
