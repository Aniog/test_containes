import { useEffect, useMemo, useRef, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/layout/CartDrawer'
import Home from '@/pages/Home'
import Shop from '@/pages/Shop'
import ProductDetail from '@/pages/ProductDetail'
import strkImgConfig from '@/strk-img-config.json'
import './App.css'

function Storefront() {
  const location = useLocation()
  const containerRef = useRef(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    const updateScrolled = () => setIsScrolled(window.scrollY > 24)
    updateScrolled()
    window.addEventListener('scroll', updateScrolled, { passive: true })
    return () => window.removeEventListener('scroll', updateScrolled)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  useEffect(() => {
    let cleanupImages
    const frameId = window.requestAnimationFrame(() => {
      cleanupImages = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanupImages === 'function') cleanupImages()
    }
  }, [location.pathname, location.search, cartOpen, cartItems.length])

  const cartCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems],
  )

  const addToCart = (product, quantity = 1) => {
    setCartItems((current) => {
      const existing = current.find((item) => item.id === product.id)
      if (existing) {
        return current.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item,
        )
      }

      return [...current, { ...product, quantity }]
    })
    setCartOpen(true)
  }

  const decreaseItem = (productId) => {
    setCartItems((current) =>
      current
        .map((item) => (item.id === productId ? { ...item, quantity: item.quantity - 1 } : item))
        .filter((item) => item.quantity > 0),
    )
  }

  const removeItem = (productId) => {
    setCartItems((current) => current.filter((item) => item.id !== productId))
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-velmora-cream font-sans text-velmora-cocoa">
      <Header
        isScrolled={isScrolled || location.pathname !== '/'}
        cartCount={cartCount}
        onOpenCart={() => setCartOpen(true)}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />
      <Routes>
        <Route path="/" element={<Home onAddToCart={addToCart} />} />
        <Route path="/shop" element={<Shop onAddToCart={addToCart} />} />
        <Route path="/product/:productId" element={<ProductDetail onAddToCart={addToCart} />} />
      </Routes>
      <Footer />
      <CartDrawer
        isOpen={cartOpen}
        items={cartItems}
        onClose={() => setCartOpen(false)}
        onIncrease={(product) => addToCart(product, 1)}
        onDecrease={decreaseItem}
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
