import { useEffect, useMemo, useRef, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from './strk-img-config.json'
import './App.css'
import NavBar from './components/layout/NavBar.jsx'
import Footer from './components/layout/Footer.jsx'
import CartDrawer from './components/cart/CartDrawer.jsx'
import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import ProductDetail from './pages/ProductDetail.jsx'

function AppShell() {
  const containerRef = useRef(null)
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  useEffect(() => {
    let cleanupImages = () => {}
    const frameId = window.requestAnimationFrame(() => {
      const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
      cleanupImages = typeof cleanup === 'function' ? cleanup : () => {}
    })
    return () => {
      window.cancelAnimationFrame(frameId)
      cleanupImages()
    }
  }, [location.pathname, location.search])

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  const cartTotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems],
  )

  const addToCart = (product, quantity = 1, tone = 'Gold') => {
    const lineId = `${product.id}-${tone}`
    setCartItems((current) => {
      const existing = current.find((item) => item.id === lineId)
      if (existing) {
        return current.map((item) =>
          item.id === lineId ? { ...item, quantity: item.quantity + quantity } : item,
        )
      }
      return [
        ...current,
        {
          ...product,
          id: lineId,
          productId: product.id,
          tone,
          quantity,
        },
      ]
    })
    setCartOpen(true)
  }

  const incrementItem = (lineId) => {
    setCartItems((current) =>
      current.map((item) => (item.id === lineId ? { ...item, quantity: item.quantity + 1 } : item)),
    )
  }

  const decrementItem = (lineId) => {
    setCartItems((current) =>
      current
        .map((item) => (item.id === lineId ? { ...item, quantity: item.quantity - 1 } : item))
        .filter((item) => item.quantity > 0),
    )
  }

  const removeItem = (lineId) => {
    setCartItems((current) => current.filter((item) => item.id !== lineId))
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-velmora-parchment text-velmora-ink">
      <NavBar cartCount={cartCount} onCartOpen={() => setCartOpen(true)} isScrolled={isScrolled || location.pathname !== '/'} />
      <Routes>
        <Route path="/" element={<Home onAddToCart={addToCart} />} />
        <Route path="/shop" element={<Shop onAddToCart={addToCart} />} />
        <Route path="/product/:productId" element={<ProductDetail onAddToCart={addToCart} />} />
      </Routes>
      <Footer />
      <CartDrawer
        isOpen={cartOpen}
        items={cartItems}
        total={cartTotal}
        onClose={() => setCartOpen(false)}
        onIncrement={incrementItem}
        onDecrement={decrementItem}
        onRemove={removeItem}
      />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  )
}

export default App
