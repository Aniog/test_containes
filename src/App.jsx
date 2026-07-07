import { useCallback, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Shop from './pages/Shop'
import { getCartItemId } from './lib/cart'

function AppContent() {
  const [cartItems, setCartItems] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  const handleAddToCart = useCallback((product, tone = 'Gold', quantity = 1) => {
    const itemId = getCartItemId(product.id, tone)
    setCartItems((current) => {
      const existing = current.find((item) => item.id === itemId)
      if (existing) {
        return current.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity + quantity } : item,
        )
      }

      return [
        ...current,
        {
          id: itemId,
          product,
          tone,
          quantity,
        },
      ]
    })
    setCartOpen(true)
  }, [])

  const handleRemoveFromCart = useCallback((itemId) => {
    setCartItems((current) => current.filter((item) => item.id !== itemId))
  }, [])

  const handleQuantityChange = useCallback((itemId, quantity) => {
    if (quantity < 1) {
      handleRemoveFromCart(itemId)
      return
    }

    setCartItems((current) =>
      current.map((item) => (item.id === itemId ? { ...item, quantity } : item)),
    )
  }, [handleRemoveFromCart])

  return (
    <Layout
      cartItems={cartItems}
      cartOpen={cartOpen}
      onCartOpen={() => setCartOpen(true)}
      onCartClose={() => setCartOpen(false)}
      onRemoveFromCart={handleRemoveFromCart}
      onQuantityChange={handleQuantityChange}
    >
      <Routes>
        <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
        <Route path="/shop" element={<Shop onAddToCart={handleAddToCart} />} />
        <Route path="/product/:slug" element={<ProductDetail onAddToCart={handleAddToCart} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
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
