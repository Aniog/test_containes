import { useCallback, useEffect, useRef, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import Header from './components/storefront/Header.jsx'
import CartDrawer from './components/storefront/CartDrawer.jsx'
import Footer from './components/storefront/Footer.jsx'
import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import strkImgConfig from './strk-img-config.json'
import './App.css'

function RouteBridge() {
  const navigate = useNavigate()

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = navigate
    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
    }
  }, [navigate])

  return null
}

function StorefrontShell() {
  const containerRef = useRef(null)
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [location.pathname, location.search, cartOpen, cartItems.length])

  const addToCart = useCallback((product, variant = 'Gold', quantity = 1) => {
    console.log('Adding Velmora item to cart', { productId: product.id, variant, quantity })
    setCartItems((currentItems) => {
      const existing = currentItems.find((item) => item.id === product.id && item.variant === variant)
      if (existing) {
        return currentItems.map((item) =>
          item.id === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }
      return [...currentItems, { ...product, variant, quantity }]
    })
    setCartOpen(true)
  }, [])

  const updateQuantity = useCallback((productId, variant, quantity) => {
    console.log('Updating cart quantity', { productId, variant, quantity })
    setCartItems((currentItems) =>
      currentItems
        .map((item) => (item.id === productId && item.variant === variant ? { ...item, quantity } : item))
        .filter((item) => item.quantity > 0),
    )
  }, [])

  const removeItem = useCallback((productId, variant) => {
    console.log('Removing item from cart', { productId, variant })
    setCartItems((currentItems) => currentItems.filter((item) => !(item.id === productId && item.variant === variant)))
  }, [])

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div ref={containerRef} className="min-h-screen bg-porcelain text-espresso">
      <Header
        isScrolled={isScrolled}
        cartCount={cartCount}
        onCartOpen={() => setCartOpen(true)}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />
      <Routes>
        <Route path="/" element={<Home onAddToCart={addToCart} />} />
        <Route path="/shop" element={<Shop onAddToCart={addToCart} />} />
        <Route path="/product/:productId" element={<ProductDetail onAddToCart={addToCart} />} />
      </Routes>
      <Footer />
      <CartDrawer
        isOpen={cartOpen}
        items={cartItems}
        onClose={() => setCartOpen(false)}
        onUpdateQuantity={updateQuantity}
        onRemove={removeItem}
      />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <RouteBridge />
      <StorefrontShell />
    </BrowserRouter>
  )
}

export default App
