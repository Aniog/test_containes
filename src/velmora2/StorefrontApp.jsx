import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import CartDrawer from './components/layout/CartDrawer.jsx'
import Footer from './components/layout/Footer.jsx'
import SiteHeader from './components/layout/SiteHeader.jsx'
import { CartProvider } from './context/CartContext.jsx'
import HomePage from './pages/HomePage.jsx'
import ProductPage from './pages/ProductPage.jsx'
import ShopPage from './pages/ShopPage.jsx'

const PreviewBridge = () => {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = navigate
  }, [navigate])

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '')
      const frame = window.requestAnimationFrame(() => {
        document.getElementById(targetId)?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      })

      return () => window.cancelAnimationFrame(frame)
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
    return undefined
  }, [location.hash, location.pathname])

  useEffect(() => {
    if (location.pathname.includes('/product/')) {
      document.title = 'Velmora Product'
      return
    }

    if (location.pathname === '/shop') {
      document.title = 'Velmora Shop'
      return
    }

    document.title = 'Velmora Fine Jewelry'
  }, [location.pathname])

  return null
}

const StorefrontShell = () => {
  return (
    <>
      <PreviewBridge />
      <SiteHeader />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product/:slug" element={<ProductPage />} />
        </Routes>
      </main>
      <Footer />
      <CartDrawer />
    </>
  )
}

const StorefrontApp = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <StorefrontShell />
      </CartProvider>
    </BrowserRouter>
  )
}

export default StorefrontApp
