import { useEffect, useMemo, useState } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import CartDrawer from './components/common/CartDrawer.jsx'
import Footer from './components/common/Footer.jsx'
import Header from './components/common/Header.jsx'
import HomePage from './pages/HomePage.jsx'
import ProductDetailPage from './pages/ProductDetailPage.jsx'
import ShopPage from './pages/ShopPage.jsx'

function App() {
  const location = useLocation()
  const [cartItems, setCartItems] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    if (location.hash) {
      const target = document.querySelector(location.hash)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
      return
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname, location.search, location.hash])

  const cartCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems],
  )

  const subtotal = useMemo(
    () => cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
    [cartItems],
  )

  const addToCart = (product, quantity = 1, tone = 'Gold') => {
    const cartKey = `${product.id}-${tone.toLowerCase()}`
    setCartItems((current) => {
      const existing = current.find((item) => item.cartKey === cartKey)
      if (existing) {
        return current.map((item) =>
          item.cartKey === cartKey ? { ...item, quantity: item.quantity + quantity } : item,
        )
      }
      return [...current, { ...product, cartKey, tone, quantity }]
    })
    setCartOpen(true)
  }

  const increaseQuantity = (cartKey) => {
    setCartItems((current) =>
      current.map((item) => (item.cartKey === cartKey ? { ...item, quantity: item.quantity + 1 } : item)),
    )
  }

  const decreaseQuantity = (cartKey) => {
    setCartItems((current) =>
      current
        .map((item) => (item.cartKey === cartKey ? { ...item, quantity: item.quantity - 1 } : item))
        .filter((item) => item.quantity > 0),
    )
  }

  const removeItem = (cartKey) => {
    setCartItems((current) => current.filter((item) => item.cartKey !== cartKey))
  }

  return (
    <div className="min-h-screen bg-velmora-ivory font-sans text-velmora-espresso antialiased">
      <Header
        isScrolled={isScrolled}
        cartCount={cartCount}
        isMenuOpen={menuOpen}
        setIsMenuOpen={setMenuOpen}
        onCartOpen={() => setCartOpen(true)}
      />
      <Routes>
        <Route path="/" element={<HomePage onAddToCart={addToCart} />} />
        <Route path="/shop" element={<ShopPage onAddToCart={addToCart} />} />
        <Route path="/product/:productId" element={<ProductDetailPage onAddToCart={addToCart} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
      <CartDrawer
        isOpen={cartOpen}
        items={cartItems}
        subtotal={subtotal}
        onClose={() => setCartOpen(false)}
        onIncrease={increaseQuantity}
        onDecrease={decreaseQuantity}
        onRemove={removeItem}
      />
    </div>
  )
}

export default App
