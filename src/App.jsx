import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useMemo, useState } from 'react'
import Header from '@/components/layout/Header.jsx'
import Footer from '@/components/layout/Footer.jsx'
import CartDrawer from '@/components/layout/CartDrawer.jsx'
import Home from '@/pages/Home.jsx'
import Shop from '@/pages/Shop.jsx'
import ProductDetail from '@/pages/ProductDetail.jsx'
import './App.css'

function App() {
  const [cartItems, setCartItems] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  const cartCount = useMemo(
    () => cartItems.reduce((count, item) => count + item.quantity, 0),
    [cartItems],
  )

  const addToCart = (product, options = {}) => {
    const variant = options.variant || 'Gold Tone'
    const quantity = options.quantity || 1
    const lineId = `${product.id}-${variant}`

    setCartItems((items) => {
      const existing = items.find((item) => item.lineId === lineId)
      if (existing) {
        return items.map((item) => (
          item.lineId === lineId ? { ...item, quantity: item.quantity + quantity } : item
        ))
      }

      return [...items, { ...product, lineId, variant, quantity }]
    })
    setCartOpen(true)
  }

  const removeFromCart = (lineId) => {
    setCartItems((items) => items.filter((item) => item.lineId !== lineId))
  }

  const updateQuantity = (lineId, quantity) => {
    if (quantity < 1) {
      removeFromCart(lineId)
      return
    }

    setCartItems((items) => items.map((item) => (
      item.lineId === lineId ? { ...item, quantity } : item
    )))
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-velmora-ivory text-velmora-espresso">
        <Header cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
        <Routes>
          <Route path="/" element={<Home onAddToCart={addToCart} />} />
          <Route path="/shop" element={<Shop onAddToCart={addToCart} />} />
          <Route path="/products/:productId" element={<ProductDetail onAddToCart={addToCart} />} />
        </Routes>
        <Footer />
        <CartDrawer
          isOpen={cartOpen}
          items={cartItems}
          onClose={() => setCartOpen(false)}
          onRemove={removeFromCart}
          onUpdateQuantity={updateQuantity}
        />
      </div>
    </BrowserRouter>
  )
}

export default App
