import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import Home from '@/pages/Home.jsx'
import Shop from '@/pages/Shop.jsx'
import Product from '@/pages/Product.jsx'
import { CartProvider } from '@/context/CartContext.jsx'
import { CartDrawer, SiteFooter, SiteHeader } from '@/components/layout/Shell.jsx'

const PreviewRouteBridge = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = navigate
    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
    }
  }, [navigate])

  return null
}

const AppShell = () => (
  <div className="min-h-screen bg-porcelain text-ink">
    <SiteHeader />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:slug" element={<Product />} />
      </Routes>
    </main>
    <SiteFooter />
    <CartDrawer />
  </div>
)

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <PreviewRouteBridge />
        <AppShell />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
