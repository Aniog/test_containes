import { useEffect, useRef } from 'react'
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import './App.css'
import { CartProvider } from './context/CartContext'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import ShopPage from './pages/ShopPage'
import StorefrontLayout from './components/storefront/StorefrontLayout'
import strkImgConfig from './strk-img-config.json'

function PreviewNavigationBridge() {
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

function RouteEffects() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const frameId = window.requestAnimationFrame(() => {
        const target = document.getElementById(location.hash.slice(1))
        const navbar = document.querySelector('[data-velmora-navbar="true"]')
        const navbarHeight = navbar instanceof HTMLElement ? navbar.offsetHeight : 0

        if (!target) {
          return
        }

        const top = target.getBoundingClientRect().top + window.scrollY - navbarHeight - 20
        window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' })
      })

      return () => window.cancelAnimationFrame(frameId)
    }

    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [location.pathname, location.hash])

  return null
}

function AppShell() {
  const containerRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    if (!containerRef.current) {
      return undefined
    }

    let cleanup = () => {}
    let cancelled = false

    const frameId = window.requestAnimationFrame(() => {
      if (cancelled || !containerRef.current) {
        return
      }

      try {
        cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
      } catch (error) {
        console.error('Velmora image loading failed', error)
      }
    })

    return () => {
      cancelled = true
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [location.pathname, location.search, location.hash])

  return (
    <div ref={containerRef} className="min-h-screen bg-ivory text-umber">
      <PreviewNavigationBridge />
      <RouteEffects />
      <StorefrontLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product/:slug" element={<ProductPage />} />
        </Routes>
      </StorefrontLayout>
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
