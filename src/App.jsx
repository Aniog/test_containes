import { useEffect, useMemo, useRef, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import CartDrawer from '@/components/velmora/CartDrawer'
import Layout from '@/Layout'
import Home from '@/pages/Home'
import ProductDetail from '@/pages/ProductDetail'
import Shop from '@/pages/Shop'
import './App.css'

function App() {
  const appRef = useRef(null)
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, appRef.current)
  }, [cartItems, cartOpen])

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

  const incrementItem = (id, tone) => {
    setCartItems((items) => items.map((item) => item.id === id && item.tone === tone ? { ...item, quantity: item.quantity + 1 } : item))
  }

  const decrementItem = (id, tone) => {
    setCartItems((items) => items
      .map((item) => item.id === id && item.tone === tone ? { ...item, quantity: Math.max(0, item.quantity - 1) } : item)
      .filter((item) => item.quantity > 0))
  }

  const removeItem = (id, tone) => {
    setCartItems((items) => items.filter((item) => !(item.id === id && item.tone === tone)))
  }

  const cartTotal = useMemo(() => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0), [cartItems])
  const cartCount = useMemo(() => cartItems.reduce((sum, item) => sum + item.quantity, 0), [cartItems])

  return (
    <div ref={appRef}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />}>
            <Route path="/" element={<Home onAdd={addToCart} />} />
            <Route path="/shop" element={<Shop onAdd={addToCart} />} />
            <Route path="/products/:productId" element={<ProductDetail onAdd={addToCart} />} />
          </Route>
        </Routes>
        <CartDrawer
          isOpen={cartOpen}
          items={cartItems}
          total={cartTotal}
          onClose={() => setCartOpen(false)}
          onIncrement={incrementItem}
          onDecrement={decrementItem}
          onRemove={removeItem}
        />
      </BrowserRouter>
    </div>
  )
}

export default App
