import { useCallback, useEffect, useMemo, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CartDrawer from '@/components/CartDrawer'
import Home from '@/pages/Home'
import Shop from '@/pages/Shop'
import ProductDetail from '@/pages/ProductDetail'
import './App.css'

function StorefrontShell() {
  const [cartItems, setCartItems] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const location = useLocation()


  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1))
      if (element) window.requestAnimationFrame(() => element.scrollIntoView({ behavior: 'smooth', block: 'start' }))
      return
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname, location.hash])

  const addToCart = useCallback((product, options = {}) => {
    const tone = options.tone || 'Gold'
    const quantity = options.quantity || 1
    const key = `${product.id}-${tone}`
    setCartItems((current) => {
      const existing = current.find((item) => item.key === key)
      if (existing) return current.map((item) => item.key === key ? { ...item, quantity: item.quantity + quantity } : item)
      return [...current, { key, productId: product.id, tone, quantity }]
    })
    setCartOpen(true)
  }, [])

  const incrementItem = useCallback((key) => setCartItems((current) => current.map((item) => item.key === key ? { ...item, quantity: item.quantity + 1 } : item)), [])
  const decrementItem = useCallback((key) => setCartItems((current) => current.flatMap((item) => item.key !== key ? [item] : item.quantity <= 1 ? [] : [{ ...item, quantity: item.quantity - 1 }])), [])
  const removeItem = useCallback((key) => setCartItems((current) => current.filter((item) => item.key !== key)), [])
  const cartCount = useMemo(() => cartItems.reduce((sum, item) => sum + item.quantity, 0), [cartItems])

  return (
    <div className="min-h-screen bg-[var(--color-ivory)] text-[var(--color-espresso)]">
      <Header cartCount={cartCount} onOpenCart={() => setCartOpen(true)} />
      <Routes>
        <Route path="/" element={<Home onAddToCart={addToCart} />} />
        <Route path="/shop" element={<Shop onAddToCart={addToCart} />} />
        <Route path="/product/:slug" element={<ProductDetail onAddToCart={addToCart} />} />
        <Route path="*" element={<Home onAddToCart={addToCart} />} />
      </Routes>
      <Footer />
      <CartDrawer isOpen={cartOpen} cartItems={cartItems} onClose={() => setCartOpen(false)} onIncrement={incrementItem} onDecrement={decrementItem} onRemove={removeItem} />
    </div>
  )
}

function App() {
  return <BrowserRouter><StorefrontShell /></BrowserRouter>
}

export default App
