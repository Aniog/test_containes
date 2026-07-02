import { ImageHelper } from '@strikingly/sdk'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import CartDrawer from '@/components/storefront/CartDrawer'
import Footer from '@/components/storefront/Footer'
import Header from '@/components/storefront/Header'
import { products } from '@/data/products'
import Home from '@/pages/Home.jsx?velmoraHome=20260702'
import ProductDetail from '@/pages/ProductDetail'
import Shop from '@/pages/Shop'
import strkImgConfig from '@/strk-img-config.json'

function App() {
  const appRef = useRef(null)
  const location = useLocation()
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const cartCount = useMemo(() => cartItems.reduce((sum, item) => sum + item.quantity, 0), [cartItems])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, appRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [location.pathname, location.search, isCartOpen])

  const addToCart = useCallback((product, quantity = 1) => {
    setCartItems((current) => {
      const existing = current.find((item) => item.id === product.id)
      if (existing) return current.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item))
      return [...current, { ...product, quantity }]
    })
    setIsCartOpen(true)
  }, [])

  const updateQuantity = useCallback((productId, quantity) => {
    setCartItems((current) => {
      if (quantity <= 0) return current.filter((item) => item.id !== productId)
      return current.map((item) => (item.id === productId ? { ...item, quantity } : item))
    })
  }, [])

  const removeFromCart = useCallback((productId) => {
    setCartItems((current) => current.filter((item) => item.id !== productId))
  }, [])

  return (
    <div ref={appRef} className="min-h-screen bg-velmora-pearl font-sans text-velmora-espresso antialiased">
      <Header cartCount={cartCount} onCartOpen={() => setIsCartOpen(true)} />
      <Routes>
        <Route path="/" element={<Home products={products} onAddToCart={addToCart} />} />
        <Route path="/shop" element={<Shop onAddToCart={addToCart} />} />
        <Route path="/product/:productId" element={<ProductDetail onAddToCart={addToCart} />} />
      </Routes>
      <Footer />
      <CartDrawer isOpen={isCartOpen} cartItems={cartItems} onClose={() => setIsCartOpen(false)} onUpdateQuantity={updateQuantity} onRemove={removeFromCart} />
    </div>
  )
}

export default App
