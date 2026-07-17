import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/layout/CartDrawer'
import Home from '@/pages/Home'
import Shop from '@/pages/Shop'
import ProductDetail from '@/pages/ProductDetail'
import { getCartCount, upsertCartItem } from '@/lib/cart'
import './App.css'

function App() {
  const [cartItems, setCartItems] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, options = {}) => {
      if (options.replace) {
        window.history.replaceState({}, '', path)
      } else {
        window.history.pushState({}, '', path)
      }
      window.dispatchEvent(new PopStateEvent('popstate', { state: {} }))
    }
  }, [])

  const handleAddToCart = (product, tone = 'Gold', quantity = 1) => {
    setCartItems((items) => upsertCartItem(items, product, tone, quantity))
    setCartOpen(true)
  }

  const handleQuantityChange = (key, quantity) => {
    if (quantity < 1) {
      setCartItems((items) => items.filter((item) => item.key !== key))
      return
    }

    setCartItems((items) =>
      items.map((item) => (item.key === key ? { ...item, quantity } : item)),
    )
  }

  const handleRemove = (key) => {
    setCartItems((items) => items.filter((item) => item.key !== key))
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-velmora-porcelain font-sans text-velmora-espresso antialiased">
        <Header cartCount={getCartCount(cartItems)} onCartOpen={() => setCartOpen(true)} />
        <Routes>
          <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
          <Route path="/shop" element={<Shop onAddToCart={handleAddToCart} />} />
          <Route path="/products/:slug" element={<ProductDetail onAddToCart={handleAddToCart} />} />
        </Routes>
        <Footer />
        <CartDrawer
          open={cartOpen}
          items={cartItems}
          onClose={() => setCartOpen(false)}
          onQuantityChange={handleQuantityChange}
          onRemove={handleRemove}
        />
      </div>
    </BrowserRouter>
  )
}

export default App
