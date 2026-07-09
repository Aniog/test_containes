import { useEffect, useRef } from 'react'
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import './App.css'
import { CartProvider } from '@/components/cart/CartContext'
import CartDrawer from '@/components/cart/CartDrawer'
import NavBar from '@/components/layout/NavBar'
import Footer from '@/components/layout/Footer'
import Home from '@/pages/Home'
import Shop from '@/pages/Shop'
import ProductDetail from '@/pages/ProductDetail'
import PlaceholderPage from '@/pages/PlaceholderPage'

function ScrollAndImageManager({ children }) {
  const location = useLocation()
  const navigate = useNavigate()
  const containerRef = useRef(null)

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = navigate
    return () => {
      window.__STRIKINGLY_PREVIEW_NAVIGATE__ = undefined
    }
  }, [navigate])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') cleanup()
    }
  }, [location.pathname, location.search])

  return <div ref={containerRef}>{children}</div>
}

function AppShell() {
  return (
    <CartProvider>
      <ScrollAndImageManager>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
          <Route path="/collections" element={<PlaceholderPage title="Collections" eyebrow="Curated edits" body="Explore refined stacks for gifting, everyday gold, polished evenings, and meaningful milestones." />} />
          <Route path="/about" element={<PlaceholderPage title="Our Story" eyebrow="Velmora atelier" body="Velmora creates premium demi-fine jewelry with warm finishes, thoughtful details, and an accessible approach to modern luxury." />} />
          <Route path="/journal" element={<PlaceholderPage title="Journal" eyebrow="Styling notes" body="Coming soon: care rituals, gifting guides, and editorial notes on building a jewelry wardrobe that lasts." />} />
        </Routes>
        <Footer />
        <CartDrawer />
      </ScrollAndImageManager>
    </CartProvider>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  )
}
