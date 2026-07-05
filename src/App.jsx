import { useEffect, useMemo, useRef, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import CartDrawer from './components/CartDrawer.jsx'
import HomePage from './pages/HomePage.jsx'
import ShopPage from './pages/ShopPage.jsx'
import ProductDetailPage from './pages/ProductDetailPage.jsx'
import strkImgConfig from './strk-img-config.json'
import './App.css'

function AppShell() {
  const [cartItems, setCartItems] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const pageRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [location.pathname, location.search])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  const cartCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems],
  )

  const addToCart = (product, options = {}) => {
    const tone = options.tone || 'Gold'
    const quantity = options.quantity || 1
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
  }

  const removeFromCart = (productId, tone) => {
    setCartItems((current) => current.filter((item) => !(item.id === productId && item.tone === tone)))
  }

  const updateQuantity = (productId, tone, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId, tone)
      return
    }
    setCartItems((current) =>
      current.map((item) => (item.id === productId && item.tone === tone ? { ...item, quantity } : item)),
    )
  }

  return (
    <div ref={pageRef} className="min-h-screen bg-velmora-ivory text-velmora-obsidian">
      <Header cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
      <Routes>
        <Route path="/" element={<HomePage onAddToCart={addToCart} />} />
        <Route path="/shop" element={<ShopPage onAddToCart={addToCart} />} />
        <Route path="/product/:productId" element={<ProductDetailPage onAddToCart={addToCart} />} />
      </Routes>
      <Footer />
      <CartDrawer
        open={cartOpen}
        items={cartItems}
        onClose={() => setCartOpen(false)}
        onRemove={removeFromCart}
        onQuantityChange={updateQuantity}
      />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  )
}
