import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import CartDrawer from '@/components/storefront/CartDrawer'
import Footer from '@/components/storefront/Footer'
import ImageRegistry from '@/components/storefront/ImageRegistry'
import NavBar from '@/components/storefront/NavBar'
import HomePage from '@/pages/HomePage'
import ProductPage from '@/pages/ProductPage'
import ShopPage from '@/pages/ShopPage'
import strkImgConfig from '@/strk-img-config.json'
import './App.css'

function Storefront() {
  const appRef = useRef(null)
  const location = useLocation()
  const [cartItems, setCartItems] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, appRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [location.pathname, cartOpen])

  const addToCart = useCallback((product, quantity = 1) => {
    setCartItems((current) => {
      const existing = current.find((item) => item.id === product.id)
      if (existing) {
        return current.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item)
      }
      return [...current, { ...product, quantity }]
    })
    setCartOpen(true)
  }, [])

  const removeFromCart = useCallback((productId) => setCartItems((current) => current.filter((item) => item.id !== productId)), [])
  const increaseQuantity = useCallback((productId) => setCartItems((current) => current.map((item) => item.id === productId ? { ...item, quantity: item.quantity + 1 } : item)), [])
  const decreaseQuantity = useCallback((productId) => setCartItems((current) => current.map((item) => item.id === productId ? { ...item, quantity: Math.max(0, item.quantity - 1) } : item).filter((item) => item.quantity > 0)), [])
  const cartCount = useMemo(() => cartItems.reduce((total, item) => total + item.quantity, 0), [cartItems])
  const subtotal = useMemo(() => cartItems.reduce((total, item) => total + item.price * item.quantity, 0), [cartItems])

  return (
    <div ref={appRef} className="min-h-screen bg-ivory text-espresso">
      <ImageRegistry />
      <NavBar cartCount={cartCount} isScrolled={isScrolled || location.pathname !== '/'} mobileOpen={mobileOpen} onCartOpen={() => setCartOpen(true)} setMobileOpen={setMobileOpen} />
      <Routes>
        <Route path="/" element={<HomePage onAddToCart={addToCart} />} />
        <Route path="/shop" element={<ShopPage onAddToCart={addToCart} />} />
        <Route path="/product/:productId" element={<ProductPage onAddToCart={addToCart} />} />
      </Routes>
      <Footer />
      <CartDrawer cartItems={cartItems} isOpen={cartOpen} onClose={() => setCartOpen(false)} onDecrease={decreaseQuantity} onIncrease={increaseQuantity} onRemove={removeFromCart} subtotal={subtotal} />
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
