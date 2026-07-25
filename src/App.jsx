import { useEffect, useMemo, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import CartDrawer from './components/cart/CartDrawer.jsx'
import Footer from './components/layout/Footer.jsx'
import Header from './components/layout/Header.jsx'
import HomePage from './pages/HomePage.jsx'
import ProductDetailPage from './pages/ProductDetailPage.jsx'
import ShopPage from './pages/ShopPage.jsx'
import './App.css'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' }))
      return
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname, hash])

  return null
}

function Storefront() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const cartCount = useMemo(() => cartItems.reduce((total, item) => total + item.quantity, 0), [cartItems])
  const subtotal = useMemo(() => cartItems.reduce((total, item) => total + item.price * item.quantity, 0), [cartItems])

  const addToCart = (product, options = {}) => {
    const variant = options.variant || 'Gold'
    const quantity = options.quantity || 1
    const cartKey = `${product.id}-${variant}`

    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.cartKey === cartKey)
      if (existingItem) {
        return currentItems.map((item) =>
          item.cartKey === cartKey ? { ...item, quantity: item.quantity + quantity } : item,
        )
      }
      return [...currentItems, { ...product, variant, quantity, cartKey }]
    })
    setCartOpen(true)
  }

  const incrementItem = (cartKey) => {
    setCartItems((currentItems) => currentItems.map((item) => (item.cartKey === cartKey ? { ...item, quantity: item.quantity + 1 } : item)))
  }

  const decrementItem = (cartKey) => {
    setCartItems((currentItems) =>
      currentItems
        .map((item) => (item.cartKey === cartKey ? { ...item, quantity: Math.max(0, item.quantity - 1) } : item))
        .filter((item) => item.quantity > 0),
    )
  }

  const removeItem = (cartKey) => {
    setCartItems((currentItems) => currentItems.filter((item) => item.cartKey !== cartKey))
  }

  return (
    <div className="min-h-screen bg-velmora-ivory text-velmora-espresso">
      <Header cartCount={cartCount} onOpenCart={() => setCartOpen(true)} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage onAddToCart={addToCart} />} />
        <Route path="/shop" element={<ShopPage onAddToCart={addToCart} />} />
        <Route path="/product/:id" element={<ProductDetailPage onAddToCart={addToCart} />} />
      </Routes>
      <Footer />
      <CartDrawer
        isOpen={cartOpen}
        items={cartItems}
        subtotal={subtotal}
        onClose={() => setCartOpen(false)}
        onIncrement={incrementItem}
        onDecrement={decrementItem}
        onRemove={removeItem}
      />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Storefront />
    </BrowserRouter>
  )
}

export default App
