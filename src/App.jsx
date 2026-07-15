import './App.css'
import { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'
import CartDrawer from '@/components/shared/CartDrawer'
import { CartProvider } from '@/context/CartContext'
import HomePage from '@/pages/HomePage'
import ProductPage from '@/pages/ProductPage'
import ShopPage from '@/pages/ShopPage'

const PreviewBridge = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = navigate

    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
    }
  }, [navigate])

  return null
}

const AppShell = () => {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-50">
      <PreviewBridge />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
      <CartDrawer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <AppShell />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
