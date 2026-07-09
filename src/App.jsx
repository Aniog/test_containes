import { useCallback, useEffect, useRef, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import './App.css'
import CartDrawer from './components/layout/CartDrawer.jsx'
import Footer from './components/layout/Footer.jsx'
import NavBar from './components/layout/NavBar.jsx'
import EditorialPage from './pages/EditorialPage.jsx'
import Home from './pages/Home.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import Shop from './pages/Shop.jsx'
import strkImgConfig from './strk-img-config.json'

function AppContent() {
  const appRef = useRef(null)
  const location = useLocation()
  const [cartItems, setCartItems] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, options = {}) => {
      if (options.replace) {
        window.history.replaceState({}, '', path)
      } else {
        window.history.pushState({}, '', path)
      }
      window.dispatchEvent(new PopStateEvent('popstate', { state: {} }))
    }
  }, [])

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 32 || location.pathname !== '/')
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [location.pathname])

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, appRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [location.pathname, location.search, cartOpen])

  const addToCart = useCallback((product, quantity = 1, tone = product.tones?.[0] ?? 'Gold') => {
    setCartItems((current) => {
      const existing = current.find((item) => item.id === product.id && item.tone === tone)
      if (existing) {
        return current.map((item) =>
          item.id === product.id && item.tone === tone
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }
      return [...current, { ...product, tone, quantity }]
    })
    setCartOpen(true)
  }, [])

  const removeFromCart = useCallback((productId, tone) => {
    setCartItems((current) => current.filter((item) => !(item.id === productId && item.tone === tone)))
  }, [])

  const changeQuantity = useCallback((productId, tone, nextQuantity) => {
    if (nextQuantity < 1) {
      removeFromCart(productId, tone)
      return
    }
    setCartItems((current) =>
      current.map((item) =>
        item.id === productId && item.tone === tone ? { ...item, quantity: nextQuantity } : item,
      ),
    )
  }, [removeFromCart])

  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0)

  return (
    <div ref={appRef} className="min-h-screen bg-stone-50 font-sans text-stone-950">
      <NavBar
        cartCount={cartCount}
        onCartOpen={() => setCartOpen(true)}
        isScrolled={isScrolled}
        menuOpen={menuOpen}
        onMenuToggle={() => setMenuOpen((open) => !open)}
      />
      <Routes>
        <Route path="/" element={<Home onAddToCart={addToCart} />} />
        <Route path="/shop" element={<Shop onAddToCart={addToCart} />} />
        <Route path="/product/:productId" element={<ProductDetail onAddToCart={addToCart} />} />
        <Route
          path="/about"
          element={
            <EditorialPage title="Our Story" eyebrow="About Velmora">
              We design demi-fine jewelry with a direct-to-consumer spirit: elevated materials, accessible pricing, and a quieter kind of luxury that lives beautifully in daily routines.
            </EditorialPage>
          }
        />
        <Route
          path="/journal"
          element={
            <EditorialPage title="The Journal" eyebrow="Styling notes">
              A curated space for gifting guides, jewelry care rituals, and editorial ways to layer warm gold pieces with ease.
            </EditorialPage>
          }
        />
        <Route path="*" element={<ProductDetail onAddToCart={addToCart} />} />
      </Routes>
      <Footer />
      <CartDrawer
        isOpen={cartOpen}
        items={cartItems}
        onClose={() => setCartOpen(false)}
        onRemove={removeFromCart}
        onQuantityChange={changeQuantity}
      />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
