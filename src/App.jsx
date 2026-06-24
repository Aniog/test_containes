import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import Layout from '@/components/Layout'
import Home from '@/pages/Home'
import Specimens from '@/pages/Specimens'
import Gallery from '@/pages/Gallery'
import Contact from '@/pages/Contact'

function ScrollAndBridge() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname])
  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, options) => navigate(path, options)
    return () => { delete window.__STRIKINGLY_PREVIEW_NAVIGATE__ }
  }, [navigate])
  return null
}

function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24 text-center">
      <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-graphite">Erratum</p>
      <h1 className="mt-4 font-serif text-6xl text-ink">404</h1>
      <p className="mt-3 text-charcoal">The plate you sought is not in the present volume.</p>
      <a href="/" className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink text-parchment px-5 py-2.5 text-sm">
        Return to the index
      </a>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollAndBridge />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/specimens" element={<Specimens />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
