import { useEffect, useRef, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import CartDrawer from '@/components/cart/CartDrawer'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { products } from '@/data/products'
import Home from '@/pages/Home'
import ProductDetail from '@/pages/ProductDetail'
import Shop from '@/pages/Shop'
import strkImgConfig from '@/strk-img-config.json'
import './App.css'

const AppRoutes = () => {
  const [cartItems, setCartItems] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const appRef = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = navigate
    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
    }
  }, [navigate])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, appRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [location.pathname, location.search])

  const addToCart = (product, quantity = 1, tone = product.tone[0]) => {
    const cartKey = `${product.id}-${tone}`
    setCartItems((current) => {
      const existing = current.find((item) => item.cartKey === cartKey)
      if (existing) {
        return current.map((item) => item.cartKey === cartKey ? { ...item, quantity: item.quantity + quantity } : item)
      }
      return [...current, { ...product, tone, quantity, cartKey }]
    })
    setCartOpen(true)
  }

  const increase = (cartKey) => {
    setCartItems((current) => current.map((item) => item.cartKey === cartKey ? { ...item, quantity: item.quantity + 1 } : item))
  }

  const decrease = (cartKey) => {
    setCartItems((current) => current.flatMap((item) => {
      if (item.cartKey !== cartKey) return [item]
      if (item.quantity === 1) return []
      return [{ ...item, quantity: item.quantity - 1 }]
    }))
  }

  const remove = (cartKey) => {
    setCartItems((current) => current.filter((item) => item.cartKey !== cartKey))
  }

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div ref={appRef} className="min-h-screen bg-velmora-parchment text-velmora-ink">
      <Header cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
      <Routes>
        <Route path="/" element={<Home products={products} onAddToCart={addToCart} />} />
        <Route path="/shop" element={<Shop onAddToCart={addToCart} />} />
        <Route path="/product/:id" element={<ProductDetail onAddToCart={addToCart} />} />
      </Routes>
      <Footer />
      <CartDrawer
        isOpen={cartOpen}
        items={cartItems}
        onClose={() => setCartOpen(false)}
        onIncrease={increase}
        onDecrease={decrease}
        onRemove={remove}
      />
    </div>
  )
}

const App = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
)

export default App
