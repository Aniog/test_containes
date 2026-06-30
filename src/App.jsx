import { useCallback, useMemo, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Header from '@/components/layout/Header.jsx'
import Footer from '@/components/layout/Footer.jsx'
import CartDrawer from '@/components/layout/CartDrawer.jsx'
import Home from '@/pages/Home.jsx'
import Shop from '@/pages/Shop.jsx'
import ProductDetail from '@/pages/ProductDetail.jsx'
import './App.css?t=velmora'

function App() {
  const [cartItems, setCartItems] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  const cartCount = useMemo(() => cartItems.reduce((sum, item) => sum + item.quantity, 0), [cartItems])

  const addToCart = useCallback((product, quantity = 1, variant = 'Gold Tone') => {
    const key = `${product.id}-${variant}`
    setCartItems((current) => {
      const existing = current.find((item) => item.key === key)
      if (existing) {
        return current.map((item) => item.key === key ? { ...item, quantity: item.quantity + quantity } : item)
      }
      return [...current, { ...product, key, variant, quantity }]
    })
    setCartOpen(true)
  }, [])

  const incrementItem = useCallback((key) => {
    setCartItems((current) => current.map((item) => item.key === key ? { ...item, quantity: item.quantity + 1 } : item))
  }, [])

  const decrementItem = useCallback((key) => {
    setCartItems((current) => current.flatMap((item) => {
      if (item.key !== key) return [item]
      if (item.quantity <= 1) return []
      return [{ ...item, quantity: item.quantity - 1 }]
    }))
  }, [])

  const removeItem = useCallback((key) => {
    setCartItems((current) => current.filter((item) => item.key !== key))
  }, [])

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-velmora-ivory font-sans text-velmora-espresso antialiased">
        <Header cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
        <Routes>
          <Route path="/" element={<Home onAdd={addToCart} />} />
          <Route path="/shop" element={<Shop onAdd={addToCart} />} />
          <Route path="/products/:productId" element={<ProductDetail onAdd={addToCart} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
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
