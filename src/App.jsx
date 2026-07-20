import { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import './App.css'
import Layout from '@/components/layout/Layout.jsx'
import { CartProvider } from '@/context/CartContext.jsx'
import Home from '@/pages/Home.jsx'
import ProductDetail from '@/pages/ProductDetail.jsx'
import Shop from '@/pages/Shop.jsx'

function PreviewRouteBridge() {
  const navigate = useNavigate()

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = navigate
    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
    }
  }, [navigate])

  return null
}

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname, hash])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <PreviewRouteBridge />
        <ScrollManager />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
