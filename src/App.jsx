import { useEffect, useMemo, useRef, useState } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from './strk-img-config.json'
import './App.css'
import HomePage from '@/components/home/HomePage.jsx'
import Navbar from '@/components/layout/Navbar.jsx'
import Footer from '@/components/layout/Footer.jsx'
import CartDrawer from '@/components/cart/CartDrawer.jsx'
import ShopPage from '@/components/shop/ShopPage.jsx'
import ProductDetailPage from '@/components/product/ProductDetailPage.jsx'

function App() {
  const appRef = useRef(null)
  const location = useLocation()
  const [cartItems, setCartItems] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  const cartCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems],
  )

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, appRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [cartItems, cartOpen, location.pathname, location.search])

  const addToCart = (product, quantity = 1, variant = 'Gold') => {
    const key = `${product.id}-${variant}`
    setCartItems((current) => {
      const existing = current.find((item) => item.key === key)
      if (existing) {
        return current.map((item) =>
          item.key === key ? { ...item, quantity: item.quantity + quantity } : item,
        )
      }
      return [...current, { key, product, quantity, variant }]
    })
    setCartOpen(true)
  }

  const updateQuantity = (key, quantity) => {
    setCartItems((current) =>
      quantity <= 0
        ? current.filter((item) => item.key !== key)
        : current.map((item) => (item.key === key ? { ...item, quantity } : item)),
    )
  }

  const removeFromCart = (key) => {
    setCartItems((current) => current.filter((item) => item.key !== key))
  }

  return (
    <div ref={appRef} className="relative min-h-screen bg-velmora-ivory font-sans text-velmora-ink">
      <Navbar cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
      <Routes>
        <Route path="/" element={<HomePage onAddToCart={addToCart} />} />
        <Route path="/shop" element={<ShopPage onAddToCart={addToCart} />} />
        <Route path="/products/:productId" element={<ProductDetailPage onAddToCart={addToCart} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
      <CartDrawer
        isOpen={cartOpen}
        items={cartItems}
        onClose={() => setCartOpen(false)}
        onRemove={removeFromCart}
        onUpdateQuantity={updateQuantity}
      />
    </div>
  )
}

export default App
