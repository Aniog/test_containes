import { useMemo, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from '@/components/layout/Header.jsx'
import Footer from '@/components/layout/Footer.jsx'
import CartDrawer from '@/components/layout/CartDrawer.jsx'
import HomePage from '@/pages/HomePage.jsx'
import ProductPage from '@/pages/ProductPage.jsx'
import ShopPage from '@/pages/ShopPage.jsx'

function App() {
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const cartCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems],
  )

  const addToCart = (product, quantity = 1, variant = 'Gold') => {
    setCartItems((current) => {
      const existing = current.find((item) => item.id === product.id && item.variant === variant)

      if (existing) {
        return current.map((item) =>
          item.id === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [...current, { ...product, quantity, variant }]
    })
    setIsCartOpen(true)
  }

  const removeFromCart = (productId, variant) => {
    setCartItems((current) => current.filter((item) => item.id !== productId || item.variant !== variant))
  }

  const updateQuantity = (productId, variant, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId, variant)
      return
    }

    setCartItems((current) =>
      current.map((item) => (item.id === productId && item.variant === variant ? { ...item, quantity } : item)),
    )
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#F7F1E8] font-sans text-[#17110D]">
        <Header cartCount={cartCount} onCartOpen={() => setIsCartOpen(true)} />
        <Routes>
          <Route path="/" element={<HomePage onAddToCart={addToCart} />} />
          <Route path="/shop" element={<ShopPage onAddToCart={addToCart} />} />
          <Route path="/product/:slug" element={<ProductPage onAddToCart={addToCart} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
        <CartDrawer
          isOpen={isCartOpen}
          items={cartItems}
          onClose={() => setIsCartOpen(false)}
          onRemove={removeFromCart}
          onUpdateQuantity={updateQuantity}
        />
      </div>
    </BrowserRouter>
  )
}

export default App
