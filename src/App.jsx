import { useMemo, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import CartDrawer from '@/components/layout/CartDrawer'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import HomePage from '@/pages/HomePage'
import ProductPage from '@/pages/ProductPage'
import ShopPage from '@/pages/ShopPage'

function App() {
  const [cartItems, setCartItems] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  const cartCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems],
  )

  const addToCart = (product, quantity = 1, tone = 'Gold') => {
    setCartItems((current) => {
      const existing = current.find((item) => item.id === product.id && item.tone === tone)
      if (existing) {
        return current.map((item) =>
          item.id === product.id && item.tone === tone
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [...current, { ...product, quantity, tone }]
    })
    setCartOpen(true)
  }

  const removeFromCart = (productId, tone) => {
    setCartItems((current) => current.filter((item) => item.id !== productId || item.tone !== tone))
  }

  const changeQuantity = (productId, tone, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId, tone)
      return
    }

    setCartItems((current) =>
      current.map((item) =>
        item.id === productId && item.tone === tone ? { ...item, quantity } : item,
      ),
    )
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-velmora-ivory text-velmora-espresso">
        <Header cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
        <Routes>
          <Route path="/" element={<HomePage onAddToCart={addToCart} />} />
          <Route path="/shop" element={<ShopPage onAddToCart={addToCart} />} />
          <Route path="/product/:slug" element={<ProductPage onAddToCart={addToCart} />} />
        </Routes>
        <Footer />
        <CartDrawer
          open={cartOpen}
          items={cartItems}
          onClose={() => setCartOpen(false)}
          onRemove={removeFromCart}
          onQuantityChange={changeQuantity}
        />
      </div>
    </BrowserRouter>
  )
}

export default App
