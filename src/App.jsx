import { useCallback, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartDrawer from '@/components/cart/CartDrawer'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import Home from '@/pages/Home'
import ProductDetail from '@/pages/ProductDetail'
import Shop from '@/pages/Shop'
import StaticPage from '@/pages/StaticPage'
import './App.css'

function App() {
  const [cartItems, setCartItems] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  const addToCart = useCallback((product, quantity = 1, tone = 'Gold') => {
    setCartItems((items) => {
      const key = `${product.id}-${tone}`
      const existing = items.find((item) => `${item.id}-${item.tone}` === key)
      if (existing) {
        return items.map((item) => `${item.id}-${item.tone}` === key ? { ...item, quantity: item.quantity + quantity } : item)
      }
      return [...items, { ...product, quantity, tone }]
    })
    setCartOpen(true)
  }, [])

  const incrementItem = (target) => {
    setCartItems((items) => items.map((item) => item.id === target.id && item.tone === target.tone ? { ...item, quantity: item.quantity + 1 } : item))
  }

  const decrementItem = (target) => {
    setCartItems((items) => items.flatMap((item) => {
      if (item.id !== target.id || item.tone !== target.tone) return [item]
      return item.quantity > 1 ? [{ ...item, quantity: item.quantity - 1 }] : []
    }))
  }

  const removeItem = (target) => {
    setCartItems((items) => items.filter((item) => item.id !== target.id || item.tone !== target.tone))
  }

  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0)

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-velmora-ivory text-velmora-ink">
        <Header cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
        <Routes>
          <Route path="/" element={<Home onAddToCart={addToCart} />} />
          <Route path="/shop" element={<Shop onAddToCart={addToCart} />} />
          <Route path="/products/:slug" element={<ProductDetail onAddToCart={addToCart} />} />
          <Route path="/about" element={<StaticPage type="about" />} />
          <Route path="/journal" element={<StaticPage type="journal" />} />
        </Routes>
        <Footer />
        <CartDrawer
          isOpen={cartOpen}
          items={cartItems}
          onClose={() => setCartOpen(false)}
          onIncrement={incrementItem}
          onDecrement={decrementItem}
          onRemove={removeItem}
        />
      </div>
    </BrowserRouter>
  )
}

export default App
