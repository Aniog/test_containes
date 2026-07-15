import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from '@/components/layout/Header'
import CartDrawer from '@/components/layout/CartDrawer'
import Footer from '@/components/layout/Footer'
import ScrollToTop from '@/components/layout/ScrollToTop'
import Home from '@/pages/Home'
import ShopPage from '@/pages/ShopPage'
import ProductPage from '@/pages/ProductPage'

function App() {
  const [cartItems, setCartItems] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  const addToCart = (product, tone = 'Gold', quantity = 1) => {
    const cartKey = `${product.id}-${tone}`
    setCartItems((items) => {
      const existing = items.find((item) => item.cartKey === cartKey)
      if (existing) {
        return items.map((item) => item.cartKey === cartKey ? { ...item, quantity: item.quantity + quantity } : item)
      }
      return [...items, { ...product, cartKey, tone, quantity }]
    })
    setCartOpen(true)
  }

  const updateQuantity = (cartKey, quantity) => {
    setCartItems((items) => items.flatMap((item) => {
      if (item.cartKey !== cartKey) return [item]
      return quantity < 1 ? [] : [{ ...item, quantity }]
    }))
  }

  const removeItem = (cartKey) => {
    setCartItems((items) => items.filter((item) => item.cartKey !== cartKey))
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-velmora-cream font-sans text-velmora-ink antialiased">
        <ScrollToTop />
        <Header cartItems={cartItems} onOpenCart={() => setCartOpen(true)} />
        <Routes>
          <Route path="/" element={<Home onAddToCart={addToCart} />} />
          <Route path="/shop" element={<ShopPage onAddToCart={addToCart} />} />
          <Route path="/products/:slug" element={<ProductPage onAddToCart={addToCart} />} />
        </Routes>
        <Footer />
        <CartDrawer
          isOpen={cartOpen}
          items={cartItems}
          onClose={() => setCartOpen(false)}
          onRemove={removeItem}
          onUpdateQuantity={updateQuantity}
        />
      </div>
    </BrowserRouter>
  )
}

export default App
