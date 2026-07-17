import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import AppShell from '@/components/layout/AppShell'
import ScrollToTop from '@/components/common/ScrollToTop'
import HomePage from '@/pages/HomePage'
import ShopPage from '@/pages/ShopPage'
import ProductPage from '@/pages/ProductPage'
import AboutPage from '@/pages/AboutPage'
import JournalPage from '@/pages/JournalPage'
import { CartProvider } from '@/context/CartContext'
import './App.css'

const PreviewNavigationBridge = () => {
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

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <PreviewNavigationBridge />
        <ScrollToTop />
        <Routes>
          <Route element={<AppShell />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:slug" element={<ProductPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/journal" element={<JournalPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
