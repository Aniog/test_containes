import { useMemo, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import CartDrawer from '@/components/common/CartDrawer'
import Home from '@/pages/Home'
import Shop from '@/pages/Shop'
import ProductDetail from '@/pages/ProductDetail'
import './App.css'

function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const cartCount = useMemo(() => cartItems.reduce((sum, item) => sum + item.quantity, 0), [cartItems])

  const addToCart = (product, quantity = 1, selectedTone = product.tone?.[0] || 'Gold') => {
    setCartItems((items) => {
      const existing = items.find((item) => item.id === product.id && item.selectedTone === selectedTone)
      if (existing) {
        return items.map((item) => item.id === product.id && item.selectedTone === selectedTone ? { ...item, quantity: item.quantity + quantity } : item)
      }
      return [...items, { ...product, quantity, selectedTone }]
    })
    setCartOpen(true)
  }

  const removeFromCart = (productId, selectedTone) => {
    setCartItems((items) => items.filter((item) => !(item.id === productId && item.selectedTone === selectedTone)))
  }

  const updateQuantity = (productId, selectedTone, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId, selectedTone)
      return
    }
    setCartItems((items) => items.map((item) => item.id === productId && item.selectedTone === selectedTone ? { ...item, quantity } : item))
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-velmora-pearl text-velmora-ink">
        <Header cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
        <Routes>
          <Route path="/" element={<Home onAddToCart={addToCart} />} />
          <Route path="/shop" element={<Shop onAddToCart={addToCart} />} />
          <Route path="/products/:productId" element={<ProductDetail onAddToCart={addToCart} />} />
        </Routes>
        <Footer />
        <CartDrawer isOpen={cartOpen} items={cartItems} onClose={() => setCartOpen(false)} onRemove={removeFromCart} onUpdateQuantity={updateQuantity} />
      </div>
    </BrowserRouter>
  )
}

export default App
