import './App.css'
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { CartProvider } from '@/context/CartContext'
import AppLayout from '@/components/store/AppLayout'
import HomePage from '@/pages/HomePage'
import ShopPage from '@/pages/ShopPage'
import ProductPage from '@/pages/ProductPage'
import AboutPage from '@/pages/AboutPage'
import JournalPage from '@/pages/JournalPage'
import { useScrollTop } from '@/hooks/useScrollTop'

function PreviewBridge() {
  const navigate = useNavigate()

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, options = {}) => {
      navigate(path, options)
    }

    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
    }
  }, [navigate])

  return null
}

function RouteEffects() {
  const location = useLocation()

  useScrollTop()

  useEffect(() => {
    document.title =
      location.pathname === '/'
        ? 'Velmora Fine Jewelry'
        : `Velmora Fine Jewelry | ${location.pathname.replace('/', '').replace('-', ' ')}`
  }, [location.pathname])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <PreviewBridge />
        <RouteEffects />
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/collections" element={<ShopPage />} />
            <Route path="/product/:productId" element={<ProductPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/journal" element={<JournalPage />} />
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
