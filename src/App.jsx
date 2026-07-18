import React, { useMemo, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from '@/components/storefront/NavBar.jsx'
import CartDrawer from '@/components/storefront/CartDrawer.jsx'
import Footer from '@/components/storefront/Footer.jsx'
import HomePage from '@/pages/HomePage.jsx?fresh=no-strk-placeholders'
import ProductPage from '@/pages/ProductPage.jsx?fresh=velmora-final-artwork'
import ShopPage from '@/pages/ShopPage.jsx'
import './App.css'

function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product, quantity = 1, variant = 'Gold') => {
    setCartItems((currentItems) => {
      const existing = currentItems.find((item) => item.id === product.id && item.variant === variant)
      if (existing) {
        return currentItems.map((item) =>
          item.id === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }
      return [...currentItems, { ...product, quantity, variant }]
    })
    setCartOpen(true)
  }

  const removeFromCart = (productId, variant) => {
    setCartItems((currentItems) => currentItems.filter((item) => !(item.id === productId && item.variant === variant)))
  }

  const updateQuantity = (productId, variant, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId, variant)
      return
    }
    setCartItems((currentItems) =>
      currentItems.map((item) => (item.id === productId && item.variant === variant ? { ...item, quantity } : item)),
    )
  }

  const cartCount = useMemo(() => cartItems.reduce((sum, item) => sum + item.quantity, 0), [cartItems])
  const subtotal = useMemo(() => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0), [cartItems])

  return (
    <div className="min-h-screen bg-velmora-ivory font-sans text-velmora-espresso">
      <NavBar cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
      <Routes>
        <Route path="/" element={<HomePage onAddToCart={addToCart} />} />
        <Route path="/shop" element={<ShopPage onAddToCart={addToCart} />} />
        <Route path="/product/:productId" element={<ProductPage onAddToCart={addToCart} />} />
      </Routes>
      <Footer />
      <CartDrawer
        open={cartOpen}
        items={cartItems}
        subtotal={subtotal}
        onClose={() => setCartOpen(false)}
        onRemove={removeFromCart}
        onUpdateQuantity={updateQuantity}
      />
    </div>
  )
}

export default App
