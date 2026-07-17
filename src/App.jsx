import { useEffect, useMemo, useRef, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import './App.css'
import CartDrawer from '@/components/cart/CartDrawer.jsx'
import Footer from '@/components/layout/Footer.jsx'
import Header from '@/components/layout/Header.jsx'
import { products } from '@/data/products.js'
import Home from '@/pages/Home.jsx'
import ProductDetail from '@/pages/ProductDetail.jsx'
import Shop from '@/pages/Shop.jsx'
import strkImgConfig from '@/strk-img-config.json'

const CART_STORAGE_KEY = 'velmora-cart'

function getStoredCart() {
  if (typeof window === 'undefined') return []
  try {
    const stored = window.localStorage.getItem(CART_STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

function VelmoraApp() {
  const appRef = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState(getStoredCart)

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, options = {}) => {
      navigate(path, { replace: Boolean(options.replace) })
    }
    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
    }
  }, [navigate])

  useEffect(() => {
    if (location.hash) {
      window.requestAnimationFrame(() => {
        document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: 'smooth' })
      })
      return
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname, location.hash])

  useEffect(() => {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  useEffect(() => {
    let cleanup = () => {}
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, appRef.current)
    })
    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [location.pathname, location.search, cartOpen, cartItems.length])

  const cartCount = useMemo(() => cartItems.reduce((sum, item) => sum + item.quantity, 0), [cartItems])

  const addToCart = (product, options = {}) => {
    const variant = options.variant || 'Gold'
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
      return [
        ...current,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          category: product.category,
          variant,
          quantity,
        },
      ]
    })
    setCartOpen(true)
  }

  const updateQuantity = (productId, variant, quantity) => {
    setCartItems((current) =>
      current
        .map((item) => (item.id === productId && item.variant === variant ? { ...item, quantity } : item))
        .filter((item) => item.quantity > 0),
    )
  }

  const removeItem = (productId, variant) => {
    setCartItems((current) => current.filter((item) => !(item.id === productId && item.variant === variant)))
  }

  return (
    <div ref={appRef} className="min-h-screen bg-velmora-ivory font-sans text-velmora-ink">
      <Header cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
      <Routes>
        <Route path="/" element={<Home onAddToCart={addToCart} />} />
        <Route path="/shop" element={<Shop onAddToCart={addToCart} />} />
        <Route path="/product/:productId" element={<ProductDetail onAddToCart={addToCart} />} />
        <Route path="*" element={<ProductDetail product={products[0]} onAddToCart={addToCart} />} />
      </Routes>
      <Footer />
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemove={removeItem}
      />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <VelmoraApp />
    </BrowserRouter>
  )
}

export default App
