import { useMemo, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartDrawer from '@/components/cart/CartDrawer.jsx'
import Footer from '@/components/layout/Footer.jsx'
import Header from '@/components/layout/Header.jsx'
import Home from '@/pages/Home.jsx'
import ProductDetail from '@/pages/ProductDetail.jsx'
import Shop from '@/pages/Shop.jsx'
import './App.css'

function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const cartCount = useMemo(() => cartItems.reduce((sum, item) => sum + item.quantity, 0), [cartItems])

  const addToCart = (product, quantity = 1, variant = 'Gold') => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product.id && item.variant === variant)
      if (existingItem) {
        return currentItems.map((item) => item.id === product.id && item.variant === variant ? { ...item, quantity: item.quantity + quantity } : item)
      }
      return [...currentItems, { ...product, quantity, variant }]
    })
    setCartOpen(true)
  }

  const removeFromCart = (productId, variant) => {
    setCartItems((currentItems) => currentItems.filter((item) => !(item.id === productId && item.variant === variant)))
  }

  const updateQuantity = (productId, variant, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId, variant)
      return
    }
    setCartItems((currentItems) => currentItems.map((item) => item.id === productId && item.variant === variant ? { ...item, quantity } : item))
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-velmora-ivory text-velmora-espresso">
        <Header cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
        <Routes>
          <Route path="/" element={<Home onAdd={addToCart} />} />
          <Route path="/shop" element={<Shop onAdd={addToCart} />} />
          <Route path="/product/:id" element={<ProductDetail onAdd={addToCart} />} />
        </Routes>
        <Footer />
        <CartDrawer open={cartOpen} items={cartItems} onClose={() => setCartOpen(false)} onRemove={removeFromCart} onQuantity={updateQuantity} />
      </div>
    </BrowserRouter>
  )
}

export default App
