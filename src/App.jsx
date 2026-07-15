import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Toaster } from 'sonner'
import Layout from './Layout'
import { StoreProvider } from '@/context/StoreContext'
import Home from '@/pages/Home'
import Shop from '@/pages/Shop'
import ProductDetail from '@/pages/ProductDetail'
import About from '@/pages/About'
import Journal from '@/pages/Journal'
import './App.css'

const pageTitles = {
  '/': 'Velmora Fine Jewelry',
  '/shop': 'Shop | Velmora Fine Jewelry',
  '/about': 'About | Velmora Fine Jewelry',
  '/journal': 'Journal | Velmora Fine Jewelry',
}

function PreviewBridge() {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, options = {}) => {
      navigate(path, options)
    }

    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
    }
  }, [navigate])

  useEffect(() => {
    document.title = pageTitles[location.pathname] || 'Velmora Fine Jewelry'
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return null
}

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <PreviewBridge />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:slug" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/journal" element={<Journal />} />
          </Route>
        </Routes>
        <Toaster
          position="top-center"
          richColors
          toastOptions={{
            className: 'border border-velmora-sand bg-velmora-ivory text-velmora-ink',
          }}
        />
      </BrowserRouter>
    </StoreProvider>
  )
}

export default App
