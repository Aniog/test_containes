import './App.css'
import { useMemo, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartDrawer from './components/storefront/CartDrawer'
import Footer from './components/storefront/Footer'
import Header from './components/storefront/Header'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Shop from './pages/Shop'

function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const cartCount = useMemo(() => cartItems.reduce((sum, item) => sum + item.quantity, 0), [cartItems])

  const addToCart = (product, quantity = 1, tone = 'Gold') => {
    setCartItems((items) => {
      const existing = items.find((item) => item.id === product.id && item.tone === tone)
      if (existing) {
        return items.map((item) => item.id === product.id && item.tone === tone ? { ...item, quantity: item.quantity + quantity } : item)
      }
      return [...items, { ...product, quantity, tone }]
    })
    setCartOpen(true)
  }

  const increment = (id, tone) => {
    setCartItems((items) => items.map((item) => (
      item.id === id && item.tone === tone ? { ...item, quantity: item.quantity + 1 } : item
    )))
  }

  const decrement = (id, tone) => {
    setCartItems((items) => items.flatMap((item) => {
      if (item.id !== id || item.tone !== tone) return [item]
      if (item.quantity <= 1) return []
      return [{ ...item, quantity: item.quantity - 1 }]
    }))
  }

  const remove = (id, tone) => {
    setCartItems((items) => items.filter((item) => item.id !== id || item.tone !== tone))
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-velmora-ivory font-sans text-velmora-cocoa">
        <Header cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
        <Routes>
          <Route path="/" element={<Home onAdd={addToCart} />} />
          <Route path="/shop" element={<Shop onAdd={addToCart} />} />
          <Route path="/product/:id" element={<ProductDetail onAdd={addToCart} />} />
        </Routes>
        <Footer />
        <CartDrawer
          open={cartOpen}
          cartItems={cartItems}
          onClose={() => setCartOpen(false)}
          onIncrement={increment}
          onDecrement={decrement}
          onRemove={remove}
        />
      </div>
    </BrowserRouter>
  )
}

export default App
