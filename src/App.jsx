import './App.css'
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import CartDrawer from '@/components/cart/CartDrawer'
import Footer from '@/components/layout/Footer'
import NavBar from '@/components/layout/NavBar'
import { StorefrontProvider } from '@/context/StorefrontContext'
import About from '@/pages/About'
import Home from '@/pages/Home'
import Journal from '@/pages/Journal'
import ProductDetail from '@/pages/ProductDetail'
import Shop from '@/pages/Shop'

function PreviewRouteBridge() {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, options = {}) => {
      navigate(path, options)
    }

    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
    }
  }, [navigate])

  useEffect(() => {
    console.log('Velmora route changed', location.pathname, location.search)
  }, [location])

  return null
}

function AppShell() {
  return (
    <StorefrontProvider>
      <BrowserRouter>
        <PreviewRouteBridge />
        <div className="min-h-screen bg-velmora-cream text-velmora-ink">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/journal" element={<Journal />} />
          </Routes>
          <Footer />
          <CartDrawer />
        </div>
      </BrowserRouter>
    </StorefrontProvider>
  )
}

export default AppShell
