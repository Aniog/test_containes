import { useEffect, useMemo, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/cart/CartDrawer'
import Home from '@/pages/Home'
import Shop from '@/pages/Shop'
import ProductDetail from '@/pages/ProductDetail'
import './App.css'

function ScrollToTop() {
  const { pathname, search, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash)
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname, search, hash])

  return null
}

function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const cartCount = useMemo(() => cartItems.reduce((sum, item) => sum + item.quantity, 0), [cartItems])

  const addToCart = (product) => {
    setCartItems((items) => {
      const existing = items.find((item) => item.id === product.id)
      if (existing) {
        return items.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
      }
      return [...items, { ...product, quantity: 1 }]
    })
    setCartOpen(true)
  }

  const updateQuantity = (productId, quantity) => {
    setCartItems((items) => {
      if (quantity <= 0) return items.filter((item) => item.id !== productId)
      return items.map((item) => item.id === productId ? { ...item, quantity } : item)
    })
  }

  const removeFromCart = (productId) => {
    setCartItems((items) => items.filter((item) => item.id !== productId))
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-velmora-porcelain text-velmora-espresso">
        <ScrollToTop />
        <Header cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
        <Routes>
          <Route path="/" element={<Home onAddToCart={addToCart} />} />
          <Route path="/shop" element={<Shop onAddToCart={addToCart} />} />
          <Route path="/products/:slug" element={<ProductDetail onAddToCart={addToCart} />} />
        </Routes>
        <Footer />
        <CartDrawer open={cartOpen} items={cartItems} onClose={() => setCartOpen(false)} onUpdateQuantity={updateQuantity} onRemove={removeFromCart} />
      </div>
    </BrowserRouter>
  )
}

export default App
