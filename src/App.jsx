import { useEffect, useMemo, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/layout/CartDrawer'
import HomePage from '@/pages/HomePage.jsx?v=velmora-202607230925'
import ShopPage from '@/pages/ShopPage.jsx?v=velmora-202607230925'
import ProductPage from '@/pages/ProductPage.jsx?v=velmora-202607230925'
import './App.css?v=velmora-202607230925'

function App() {
  return (
    <BrowserRouter>
      <VelmoraStore />
    </BrowserRouter>
  )
}

function VelmoraStore() {
  const [cartItems, setCartItems] = useState(() => {
    const saved = window.localStorage.getItem('velmora-cart')
    return saved ? JSON.parse(saved) : []
  })
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    window.localStorage.setItem('velmora-cart', JSON.stringify(cartItems))
  }, [cartItems])

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

  const addToCart = (product, options = {}) => {
    const tone = options.tone || product.toneOptions?.[0] || 'Gold'
    const quantity = options.quantity || 1

    setCartItems((current) => {
      const existing = current.find((item) => item.id === product.id && item.tone === tone)
      if (existing) {
        return current.map((item) =>
          item.id === product.id && item.tone === tone
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        ...current,
        {
          id: product.id,
          slug: product.slug,
          name: product.name,
          category: product.category,
          price: product.price,
          tone,
          quantity,
        },
      ]
    })
    setIsCartOpen(true)
  }

  const removeFromCart = (productId, tone) => {
    setCartItems((current) => current.filter((item) => !(item.id === productId && item.tone === tone)))
  }

  const updateQuantity = (productId, tone, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId, tone)
      return
    }

    setCartItems((current) =>
      current.map((item) => (item.id === productId && item.tone === tone ? { ...item, quantity } : item)),
    )
  }

  return (
    <div className="min-h-screen bg-velmora-ivory text-velmora-espresso">
      <ScrollManager />
      <Header cartCount={cartCount} onCartOpen={() => setIsCartOpen(true)} />
      <Routes>
        <Route path="/" element={<HomePage onAddToCart={addToCart} />} />
        <Route path="/shop" element={<ShopPage onAddToCart={addToCart} />} />
        <Route path="/products/:slug" element={<ProductPage onAddToCart={addToCart} />} />
        <Route path="*" element={<HomePage onAddToCart={addToCart} />} />
      </Routes>
      <Footer />
      <CartDrawer
        isOpen={isCartOpen}
        items={cartItems}
        subtotal={subtotal}
        onClose={() => setIsCartOpen(false)}
        onRemove={removeFromCart}
        onUpdateQuantity={updateQuantity}
      />
    </div>
  )
}

function ScrollManager() {
  const location = useLocation()
  const routeKey = useMemo(() => `${location.pathname}${location.hash}`, [location.pathname, location.hash])

  useEffect(() => {
    if (location.hash) {
      window.requestAnimationFrame(() => {
        document.querySelector(location.hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
      return
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [routeKey, location.hash])

  return null
}

export default App
