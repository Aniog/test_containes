import { useEffect, useMemo, useRef, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import Header from '@/components/storefront/Header'
import Footer from '@/components/storefront/Footer'
import CartDrawer from '@/components/storefront/CartDrawer'
import Home from '@/pages/Home'
import Shop from '@/pages/Shop'
import ProductDetail from '@/pages/ProductDetail'
import strkImgConfig from '@/strk-img-config.json'
import './App.css'

function AppContent() {
  const containerRef = useRef(null)
  const location = useLocation()
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') cleanup()
    }
  }, [location.pathname, location.search, isCartOpen, cartItems])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  const cartCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems],
  )

  const addToCart = (product, options = {}) => {
    const variant = options.variant || 'Gold Tone'
    const quantity = options.quantity || 1
    setCartItems((current) => {
      const existing = current.find((item) => item.id === product.id && item.variant === variant)
      if (existing) {
        return current.map((item) =>
          item.id === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }
      return [...current, { ...product, variant, quantity }]
    })
    setIsCartOpen(true)
  }

  const removeFromCart = (productId, variant) => {
    setCartItems((current) => current.filter((item) => item.id !== productId || item.variant !== variant))
  }

  const updateQuantity = (productId, variant, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId, variant)
      return
    }
    setCartItems((current) =>
      current.map((item) =>
        item.id === productId && item.variant === variant ? { ...item, quantity } : item,
      ),
    )
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-velmora-ivory text-velmora-espresso">
      <Header cartCount={cartCount} onCartOpen={() => setIsCartOpen(true)} />
      <Routes>
        <Route path="/" element={<Home onAddToCart={addToCart} />} />
        <Route path="/shop" element={<Shop onAddToCart={addToCart} />} />
        <Route path="/products/:productId" element={<ProductDetail onAddToCart={addToCart} />} />
      </Routes>
      <Footer />
      <CartDrawer
        isOpen={isCartOpen}
        items={cartItems}
        onClose={() => setIsCartOpen(false)}
        onRemove={removeFromCart}
        onUpdateQuantity={updateQuantity}
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
