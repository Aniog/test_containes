import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { CartProvider } from '@/lib/CartContext'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/cart/CartDrawer'
import Home from '@/pages/Home'
import Shop from '@/pages/Shop'
import ProductDetail from '@/pages/ProductDetail'
import './App.css'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <CartDrawer />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
