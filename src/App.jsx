import { useEffect, useRef, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import CartDrawer from './components/cart/CartDrawer.jsx'
import Home from './pages/VelmoraHome.jsx?hero-gold-v2'
import Shop from './pages/Shop.jsx?velmora-shop-v1'
import ProductDetail from './pages/ProductDetail.jsx?velmora-product-v1'
import strkImgConfig from './strk-img-config.json?hero-gold-v2'
import './App.css'

function pickTaggedImage(entry) {
  if (!entry?.results?.length) return null
  return entry.results.find((result) => String(result.id) === String(entry.picked)) || entry.results[0]
}

function hydrateTaggedImages(container, config) {
  if (!container) return

  container.querySelectorAll('img[data-strk-img-id]').forEach((image) => {
    const entry = config[image.getAttribute('data-strk-img-id')]
    const picked = pickTaggedImage(entry)
    if (picked?.url && image.getAttribute('src') !== picked.url) {
      image.setAttribute('src', picked.url)
      if (picked.alt && !image.getAttribute('alt')) image.setAttribute('alt', picked.alt)
    }
  })
}

function Storefront() {
  const appRef = useRef(null)
  const location = useLocation()
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, appRef.current)
      hydrateTaggedImages(appRef.current, strkImgConfig)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [location.pathname, location.search, cartOpen, cartItems.length])

  const addToCart = (product, quantity = 1, variant = 'Gold') => {
    setCartItems((items) => {
      const existing = items.find((item) => item.product.id === product.id && item.variant === variant)
      if (existing) {
        return items.map((item) =>
          item.product.id === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }
      return [...items, { product, quantity, variant }]
    })
    setCartOpen(true)
  }

  const updateQuantity = (productId, variant, quantity) => {
    setCartItems((items) =>
      items
        .map((item) =>
          item.product.id === productId && item.variant === variant
            ? { ...item, quantity }
            : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  const removeFromCart = (productId, variant) => {
    setCartItems((items) => items.filter((item) => item.product.id !== productId || item.variant !== variant))
  }

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div ref={appRef} className="min-h-screen bg-velmora-cream text-velmora-ink">
      <Header cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
      <Routes>
        <Route path="/" element={<Home onAddToCart={addToCart} />} />
        <Route path="/shop" element={<Shop onAddToCart={addToCart} />} />
        <Route path="/product/:slug" element={<ProductDetail onAddToCart={addToCart} />} />
      </Routes>
      <Footer />
      <CartDrawer
        isOpen={cartOpen}
        items={cartItems}
        onClose={() => setCartOpen(false)}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
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
