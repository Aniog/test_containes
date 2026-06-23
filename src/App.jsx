import React from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Header from '@/components/layout/Header.jsx'
import Footer from '@/components/layout/Footer.jsx'
import CartDrawer from '@/components/layout/CartDrawer.jsx'
import Home from '@/pages/Home.jsx'
import ProductDetail from '@/pages/ProductDetail.jsx'
import Shop from '@/pages/Shop.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return null
}

function Storefront() {
  const [cartOpen, setCartOpen] = React.useState(false)
  const [cartItems, setCartItems] = React.useState([])

  const addToCart = React.useCallback((product, quantity = 1) => {
    setCartItems((current) => {
      const existing = current.find((item) => item.id === product.id)
      if (existing) {
        return current.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item)
      }
      return [...current, { ...product, quantity }]
    })
    setCartOpen(true)
  }, [])

  const increment = (id) => {
    setCartItems((current) => current.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
  }

  const decrement = (id) => {
    setCartItems((current) => current.flatMap((item) => {
      if (item.id !== id) return [item]
      if (item.quantity <= 1) return []
      return [{ ...item, quantity: item.quantity - 1 }]
    }))
  }

  const remove = (id) => {
    setCartItems((current) => current.filter((item) => item.id !== id))
  }

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="min-h-screen bg-porcelain text-ink">
      <ScrollToTop />
      <Header cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
      <Routes>
        <Route path="/" element={<Home onAddToCart={addToCart} />} />
        <Route path="/shop" element={<Shop onAddToCart={addToCart} />} />
        <Route path="/product/:slug" element={<ProductDetail onAddToCart={addToCart} />} />
      </Routes>
      <Footer />
      <CartDrawer isOpen={cartOpen} items={cartItems} onClose={() => setCartOpen(false)} onIncrement={increment} onDecrement={decrement} onRemove={remove} />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Storefront />
    </BrowserRouter>
  )
}

export default App
