import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { CartProvider } from '@/cart/CartContext'
import CartDrawer from '@/cart/CartDrawer'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Home from '@/pages/Home'
import Shop from '@/pages/Shop'
import ProductDetail from '@/pages/ProductDetail'

function NavigateBridge() {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, options) => {
      navigate(path, options)
    }
  }, [navigate])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavigateBridge />
        <Navbar />
        <CartDrawer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
