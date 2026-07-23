import { useEffect, useMemo, useRef } from 'react'
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import './App.css'
import NavBar from '@/components/layout/NavBar'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/layout/CartDrawer'
import AppErrorBoundary from '@/components/common/AppErrorBoundary'
import { CartProvider, useCart } from '@/context/CartContext'
import Home from '@/pages/Home'
import Shop from '@/pages/Shop'
import ProductDetail from '@/pages/ProductDetail'
import About from '@/pages/About'
import Journal from '@/pages/Journal'
import strkImgConfig from '@/strk-img-config.json'

const AppFrame = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const containerRef = useRef(null)
  const { cartItems, isCartOpen, itemCount } = useCart()
  const imageRefreshKey = useMemo(
    () => JSON.stringify(cartItems.map((item) => [item.cartKey, item.quantity, item.image?.id || ''])),
    [cartItems],
  )

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, options = {}) => {
      navigate(path, options)
    }

    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
    }
  }, [navigate])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
    }
  }, [location.pathname, location.search, location.hash, isCartOpen, itemCount, imageRefreshKey])

  return (
    <div ref={containerRef} className="min-h-screen bg-stone-50 text-stone-900">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:handle" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/journal" element={<Journal />} />
        </Routes>
      </main>
      <Footer />
      <CartDrawer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <AppErrorBoundary>
          <AppFrame />
        </AppErrorBoundary>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
