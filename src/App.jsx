import { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import './App.css'
import { CartProvider } from '@/context/CartContext'
import Layout from '@/components/layout/Layout'
import HomePage from '@/pages/HomePage'
import ShopPage from '@/pages/ShopPage'
import ProductPage from '@/pages/ProductPage'

function RouteBridge() {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = navigate
    return () => {
      if (window.__STRIKINGLY_PREVIEW_NAVIGATE__ === navigate) {
        delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
      }
    }
  }, [navigate])

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash)
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname, location.search, location.hash])

  return null
}

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <RouteBridge />
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="shop" element={<ShopPage />} />
            <Route path="product/:productId" element={<ProductPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}
