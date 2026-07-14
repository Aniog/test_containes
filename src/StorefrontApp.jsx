import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import './App.css'
import CartDrawer from '@/components/layout/CartDrawer'
import Footer from '@/components/layout/Footer'
import SiteHeader from '@/components/layout/SiteHeader'
import { CartProvider } from '@/context/CartContext'
import HomePage from '@/pages/HomePage'
import ProductPage from '@/pages/ProductPage'
import ShopPage from '@/pages/ShopPage'

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
