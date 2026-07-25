import { useMemo, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import CartDrawer from '@/components/cart/CartDrawer'
import Footer from '@/components/layout/Footer'
import NavBar from '@/components/layout/NavBar'
import HomePage from '@/pages/HomePage'
import ProductDetailPage from '@/pages/ProductDetailPage'
import ShopPage from '@/pages/ShopPage'

function App() {
  const [cartItems, setCartItems] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  const cartCount = useMemo(() => cartItems.reduce((sum, item) => sum + item.quantity, 0), [cartItems])

  const addToCart = (product, options = {}) => {
    const variant = options.variant || 'Gold Tone'
    const quantity = options.quantity || 1

    setCartItems((current) => {
      const existing = current.find((item) => item.id === product.id && item.variant === variant)
      if (existing) {
        return current.map((item) => item.id === product.id && item.variant === variant ? { ...item, quantity: item.quantity + quantity } : item)
      }

      return [...current, { ...product, variant, quantity }]
    })
    setCartOpen(true)
  }

  const removeFromCart = (productId, variant) => {
    setCartItems((current) => current.filter((item) => !(item.id === productId && item.variant === variant)))
  }

  const updateQuantity = (productId, variant, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId, variant)
      return
    }

    setCartItems((current) => current.map((item) => item.id === productId && item.variant === variant ? { ...item, quantity } : item))
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-velmora-ivory font-sans text-velmora-charcoal antialiased">
        <NavBar cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
        <Routes>
          <Route path="/" element={<HomePage onAddToCart={addToCart} />} />
          <Route path="/shop" element={<ShopPage onAddToCart={addToCart} />} />
          <Route path="/product/:productId" element={<ProductDetailPage onAddToCart={addToCart} />} />
          <Route path="*" element={<HomePage onAddToCart={addToCart} />} />
        </Routes>
        <Footer />
        <CartDrawer
          isOpen={cartOpen}
          cartItems={cartItems}
          onClose={() => setCartOpen(false)}
          onRemove={removeFromCart}
          onUpdateQuantity={updateQuantity}
        />
      </div>
    </BrowserRouter>
  )
}

export default App
