import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import Specimens from './pages/Specimens'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

function NavigationBridge() {
  const navigate = useNavigate()
  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, opts) => navigate(path, opts)
    return () => { delete window.__STRIKINGLY_PREVIEW_NAVIGATE__ }
  }, [navigate])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <NavigationBridge />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/specimens" element={<Specimens />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
