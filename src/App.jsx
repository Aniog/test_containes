import { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import { StorefrontLayout } from '@/components/storefront/StorefrontLayout.jsx'
import { CartProvider } from '@/context/CartContext.jsx'
import { useScrollTop } from '@/hooks/useScrollTop.js'
import { HomePage } from '@/pages/HomePage.jsx'
import { ProductPage } from '@/pages/ProductPage.jsx'
import { ShopPage } from '@/pages/ShopPage.jsx'

function AppRouter() {
  const navigate = useNavigate()

  useScrollTop()

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, options = {}) => {
      navigate(path, options)
    }

    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
    }
  }, [navigate])

  return (
    <Routes>
      <Route element={<StorefrontLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/product/:slug" element={<ProductPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
