import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import VelmoraNav from './components/layout/VelmoraNav'
import CartDrawer from './components/layout/CartDrawer'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetail from './pages/ProductDetail'
import './App.css'

function ScrollToTop() {
  const { pathname, search } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname, search])

  return null
}

function Storefront() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  const addToCart = (product, variant = 'Gold tone') => {
    setCartItems((current) => {
      const existing = current.find((item) => item.id === product.id && item.variant === variant)
      if (existing) {
        return current.map((item) => item.id === product.id && item.variant === variant ? { ...item, quantity: item.quantity + 1 } : item)
      }
      return [...current, { ...product, variant, quantity: 1 }]
    })
    setCartOpen(true)
  }

  const updateQuantity = (id, variant, quantity) => {
    if (quantity <= 0) {
      setCartItems((current) => current.filter((item) => !(item.id === id && item.variant === variant)))
      return
    }
    setCartItems((current) => current.map((item) => item.id === id && item.variant === variant ? { ...item, quantity } : item))
  }

  const removeItem = (id, variant) => {
    setCartItems((current) => current.filter((item) => !(item.id === id && item.variant === variant)))
  }

  return (
    <div className="min-h-screen bg-velmora-parchment font-sans text-velmora-espresso">
      <ScrollToTop />
      <VelmoraNav cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
      <Routes>
        <Route path="/" element={<Home onAddToCart={addToCart} />} />
        <Route path="/shop" element={<Shop onAddToCart={addToCart} />} />
        <Route path="/product/:productId" element={<ProductDetail onAddToCart={addToCart} />} />
      </Routes>
      <Footer />
      <CartDrawer open={cartOpen} items={cartItems} onClose={() => setCartOpen(false)} onUpdateQuantity={updateQuantity} onRemove={removeItem} />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Storefront />
    </BrowserRouter>
  )
}
