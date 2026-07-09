import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import './App.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/layout/CartDrawer'
import HomePage from '@/pages/HomePage'
import ProductPage from '@/pages/ProductPage'
import ShopPage from '@/pages/ShopPage'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      window.requestAnimationFrame(() => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' }))
      return
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname, hash])

  return null
}

function PreviewRouteBridge() {
  const navigate = useNavigate()

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, options) => navigate(path, options)
    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
    }
  }, [navigate])

  return null
}

function Storefront() {
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = (product, options = {}) => {
    const variant = options.variant || 'Gold Tone'
    const quantity = options.quantity || 1

    setCartItems((current) => {
      const existing = current.find((item) => item.id === product.id && item.variant === variant)
      if (existing) {
        return current.map((item) =>
          item.id === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }
      return [...current, { ...product, variant, quantity }]
    })
    setIsCartOpen(true)
  }

  const removeFromCart = (productId, variant) => {
    setCartItems((current) => current.filter((item) => !(item.id === productId && item.variant === variant)))
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
    <div className="min-h-screen bg-velmora-ivory text-velmora-ink">
      <ScrollToTop />
      <PreviewRouteBridge />
      <Header cartItems={cartItems} onCartOpen={() => setIsCartOpen(true)} />
      <Routes>
        <Route path="/" element={<HomePage onAddToCart={addToCart} />} />
        <Route path="/shop" element={<ShopPage onAddToCart={addToCart} />} />
        <Route path="/products/:productId" element={<ProductPage onAddToCart={addToCart} />} />
        <Route path="*" element={<HomePage onAddToCart={addToCart} />} />
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
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Storefront />
    </BrowserRouter>
  )
}
