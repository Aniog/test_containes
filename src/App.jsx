import './App.css'
import { useEffect, useRef } from 'react'
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { Toaster } from 'sonner'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { CartProvider } from '@/context/CartContext'
import Layout from '@/components/layout/Layout.jsx?velmora=20260707'
import HomePage from '@/pages/HomePage.jsx?velmora=20260707'
import ShopPage from '@/pages/ShopPage.jsx?velmora=20260707'
import ProductPage from '@/pages/ProductPage.jsx?velmora=20260707'
import AboutPage from '@/pages/AboutPage.jsx?velmora=20260707'
import JournalPage from '@/pages/JournalPage.jsx?velmora=20260707'

function PreviewNavigator() {
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

function AppShell() {
  const containerRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    let cleanup = () => {}
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current) || (() => {})
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [location.pathname, location.search])

  return (
    <div ref={containerRef} className="min-h-screen bg-velmora-parchment text-velmora-noir">
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/collections" element={<ShopPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/journal" element={<JournalPage />} />
        </Routes>
      </Layout>
      <Toaster richColors position="top-right" />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <PreviewNavigator />
        <AppShell />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
