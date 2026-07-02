import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import './App.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/cart/CartDrawer'
import Home from '@/pages/Home'
import Shop from '@/pages/Shop'
import ProductDetail from '@/pages/ProductDetail'
import { products } from '@/data/products'
import strkImgConfig from '@/strk-img-config.json'

function App() {
  const [cartItems, setCartItems] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const appRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, appRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [location.pathname, location.search])

  const addToCart = useCallback((product, options = {}) => {
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
      return [...current, { ...product, variant, quantity }]
    })
    setCartOpen(true)
  }, [])

  const removeFromCart = useCallback((productId, variant) => {
    setCartItems((current) => current.filter((item) => item.id !== productId || item.variant !== variant))
  }, [])

  const changeQuantity = useCallback((productId, variant, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId, variant)
      return
    }
    setCartItems((current) => current.map((item) => (item.id === productId && item.variant === variant ? { ...item, quantity } : item)))
  }, [removeFromCart])

  const cartCount = useMemo(() => cartItems.reduce((sum, item) => sum + item.quantity, 0), [cartItems])

  return (
    <div ref={appRef} className="min-h-screen bg-velmora-ivory text-velmora-ink">
      <Header cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
      <Routes>
        <Route path="/" element={<Home onAddToCart={addToCart} />} />
        <Route path="/shop" element={<Shop onAddToCart={addToCart} />} />
        <Route path="/product/:slug" element={<ProductDetail onAddToCart={addToCart} />} />
        <Route path="*" element={<Navigate to={`/product/${products[0].slug}`} replace />} />
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
  )
}

export default App
