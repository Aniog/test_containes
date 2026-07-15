import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import './App.css'
import Layout from '@/components/layout/Layout'
import Home from '@/pages/Home'
import Shop from '@/pages/Shop'
import ProductDetail from '@/pages/ProductDetail'

function RouteBridge() {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = navigate
  }, [navigate])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return null
}

function Storefront() {
  const [cartItems, setCartItems] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  const addToCart = (product, quantity = 1, variant = 'Gold') => {
    setCartItems((items) => {
      const existing = items.find((item) => item.id === product.id && item.variant === variant)
      if (existing) {
        return items.map((item) => item.id === product.id && item.variant === variant ? { ...item, quantity: item.quantity + quantity } : item)
      }
      return [...items, { ...product, quantity, variant }]
    })
    setCartOpen(true)
  }

  const removeFromCart = (id, variant) => {
    setCartItems((items) => items.filter((item) => !(item.id === id && item.variant === variant)))
  }

  const updateQuantity = (id, variant, quantity) => {
    if (quantity < 1) {
      removeFromCart(id, variant)
      return
    }
    setCartItems((items) => items.map((item) => item.id === id && item.variant === variant ? { ...item, quantity } : item))
  }

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <Layout
      cartItems={cartItems}
      cartCount={cartCount}
      cartOpen={cartOpen}
      onCartOpen={() => setCartOpen(true)}
      onCartClose={() => setCartOpen(false)}
      onRemove={removeFromCart}
      onUpdateQuantity={updateQuantity}
    >
      <RouteBridge />
      <Routes>
        <Route path="/" element={<Home onAddToCart={addToCart} />} />
        <Route path="/shop" element={<Shop onAddToCart={addToCart} />} />
        <Route path="/product/:id" element={<ProductDetail onAddToCart={addToCart} />} />
      </Routes>
    </Layout>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Storefront />
    </BrowserRouter>
  )
}
