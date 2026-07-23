import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom'
import './App.css'
import { CartDrawer } from '@/components/layout/CartDrawer'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { CartProvider } from '@/context/CartContext'
import Home from '@/pages/Home'
import ProductDetail from '@/pages/ProductDetail'
import Shop from '@/pages/Shop'
import strkImgConfig from '@/strk-img-config.json'

const AppShell = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const containerRef = useRef(null)

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = navigate
    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
    }
  }, [navigate])

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const frameId = window.requestAnimationFrame(() => {
      const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
      console.log('[Velmora] image scan for route', location.pathname + location.search)
      window.__VELMORA_IMG_CLEANUP__ = cleanup
    })

    return () => {
      if (window.__VELMORA_IMG_CLEANUP__) {
        window.__VELMORA_IMG_CLEANUP__()
      }
      window.cancelAnimationFrame(frameId)
    }
  }, [location.pathname, location.search, location.hash])

  return (
    <div ref={containerRef} className="min-h-screen bg-brand-parchment text-brand-ink">
      <SiteHeader />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
        </Routes>
      </main>
      <SiteFooter />
      <CartDrawer />
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
