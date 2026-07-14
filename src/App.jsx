import { useMemo, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/layout/CartDrawer'
import Home from '@/pages/Home'
import ProductDetail from '@/pages/ProductDetail'
import Shop from '@/pages/Shop'
import './App.css'

function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const cartCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems],
  )

  const addToCart = (product, variant = 'Gold Tone', quantity = 1) => {
    setCartItems((currentItems) => {
      const existing = currentItems.find((item) => item.product.id === product.id && item.variant === variant)
      if (existing) {
        return currentItems.map((item) =>
          item.product.id === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }
      return [...currentItems, { product, variant, quantity }]
    })
    setCartOpen(true)
  }

  const updateQuantity = (productId, variant, quantity) => {
    setCartItems((currentItems) =>
      currentItems
        .map((item) =>
          item.product.id === productId && item.variant === variant
            ? { ...item, quantity }
            : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  const removeItem = (productId, variant) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => !(item.product.id === productId && item.variant === variant)),
    )
  }

  return (
    <BrowserRouter>
      <Header cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
      <Routes>
        <Route path="/" element={<Home onAddToCart={addToCart} />} />
        <Route path="/shop" element={<Shop onAddToCart={addToCart} />} />
        <Route path="/product/:slug" element={<ProductDetail onAddToCart={addToCart} />} />
      </Routes>
      <Footer />
      <CartDrawer
        open={cartOpen}
        items={cartItems}
        onClose={() => setCartOpen(false)}
        onUpdateQuantity={updateQuantity}
        onRemove={removeItem}
      />
    </BrowserRouter>
  )
}

export default App
