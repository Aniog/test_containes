import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '@/components/layout/Layout.jsx'
import Home from '@/pages/Home.jsx'
import ProductDetail from '@/pages/ProductDetail.jsx'
import Shop from '@/pages/Shop.jsx'
import { products } from '@/data/products.js'
import './App.css'

function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product, options = {}) => {
    const tone = options.tone || product.tone[0]
    const quantity = options.quantity || 1
    const key = `${product.id}-${tone}`

    setCartItems((current) => {
      const existing = current.find((item) => item.key === key)
      if (existing) {
        return current.map((item) =>
          item.key === key ? { ...item, quantity: item.quantity + quantity } : item,
        )
      }
      return [...current, { key, product, tone, quantity }]
    })
    setCartOpen(true)
  }

  const removeFromCart = (key) => {
    setCartItems((current) => current.filter((item) => item.key !== key))
  }

  const updateQuantity = (key, quantity) => {
    if (quantity < 1) {
      removeFromCart(key)
      return
    }
    setCartItems((current) => current.map((item) => (item.key === key ? { ...item, quantity } : item)))
  }

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <BrowserRouter>
      <Layout
        cartItems={cartItems}
        cartCount={cartCount}
        cartOpen={cartOpen}
        onCartOpen={() => setCartOpen(true)}
        onCartClose={() => setCartOpen(false)}
        onRemove={removeFromCart}
        onQuantityChange={updateQuantity}
      >
        <Routes>
          <Route path="/" element={<Home products={products} onAdd={addToCart} />} />
          <Route path="/shop" element={<Shop onAdd={addToCart} />} />
          <Route path="/products/:productId" element={<ProductDetail onAdd={addToCart} />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
