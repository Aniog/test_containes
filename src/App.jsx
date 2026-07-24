import { useEffect, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { Route, Routes, useLocation } from 'react-router-dom'
import CartDrawer from '@/components/storefront/CartDrawer'
import Footer from '@/components/storefront/Footer'
import NavBar from '@/components/storefront/NavBar'
import { products } from '@/data/products'
import HomePage from '@/pages/HomePage'
import ProductPage from '@/pages/ProductPage'
import ShopPage from '@/pages/ShopPage'
import strkImgConfig from '@/strk-img-config.json'
import './App.css'

function App() {
  const location = useLocation()
  const appRef = useRef(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24 || location.pathname !== '/')
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, appRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [location.pathname, location.search, cartOpen])

  const addToCart = (product, quantity = 1, tone = product.tones?.[0] || 'Gold') => {
    setCartItems((current) => {
      const existingItem = current.find((item) => item.id === product.id && item.tone === tone)
      if (existingItem) {
        return current.map((item) =>
          item.id === product.id && item.tone === tone
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }
      return [...current, { ...product, quantity, tone }]
    })
    setCartOpen(true)
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

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <div ref={appRef} className="min-h-screen bg-velmora-cream text-velmora-ink">
      <NavBar
        isScrolled={isScrolled}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        cartCount={cartCount}
        onOpenCart={() => setCartOpen(true)}
      />
      <Routes>
        <Route path="/" element={<HomePage onAddToCart={addToCart} />} />
        <Route path="/shop" element={<ShopPage onAddToCart={addToCart} />} />
        <Route path="/product/:productId" element={<ProductPage onAddToCart={addToCart} />} />
        <Route path="*" element={<ShopPage onAddToCart={addToCart} products={products} />} />
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
