import { ImageHelper } from '@strikingly/sdk'
import { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import StorefrontLayout from '@/components/layout/StorefrontLayout.jsx'
import { CartProvider } from '@/context/CartContext.jsx'
import AboutPage from '@/pages/AboutPage.jsx'
import HomePage from '@/pages/HomePage.jsx'
import JournalPage from '@/pages/JournalPage.jsx'
import ProductPage from '@/pages/ProductPage.jsx'
import ShopPage from '@/pages/ShopPage.jsx'
import strkImgConfig from '@/strk-img-config.json'
import './App.css'

function AppContent() {
  const location = useLocation()
  const containerRef = useRef(null)

  useEffect(() => {
    let cleanup = () => {}
    const frame = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frame)
      cleanup()
    }
  }, [location.pathname])

  return (
    <div ref={containerRef}>
      <StorefrontLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/journal" element={<JournalPage />} />
        </Routes>
      </StorefrontLayout>
    </div>
  )
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  )
}
