import { useEffect, useMemo, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import './App.css'
import Navbar from '@/components/storefront/Navbar'
import Footer from '@/components/storefront/Footer'
import CartDrawer from '@/components/storefront/CartDrawer'
import Home from '@/pages/Home'
import ProductDetail from '@/pages/ProductDetail'
import Shop from '@/pages/Shop'
import { buildCartItemKey, getCartCount } from '@/lib/storefront'

const StorefrontShell = () => {
  const [cartItems, setCartItems] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname, location.search, location.hash])

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, options = {}) => {
      navigate(path, options)
    }

    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
    }
  }, [navigate])

  useEffect(() => {
    setCartOpen(false)
  }, [location.pathname, location.search])

  const addToCart = (product, variant, quantity) => {
    setCartItems((current) => {
      const key = buildCartItemKey(product.id, variant)
      const existing = current.find((item) => item.key === key)

      if (existing) {
        return current.map((item) =>
          item.key === key ? { ...item, quantity: item.quantity + quantity } : item,
        )
      }

      return [
        ...current,
        {
          key,
          productId: product.id,
          name: product.name,
          price: product.price,
          variant,
          quantity,
        },
      ]
    })

    setCartOpen(true)
  }

  const updateCartQuantity = (key, quantity) => {
    setCartItems((current) =>
      current.map((item) => (item.key === key ? { ...item, quantity } : item)),
    )
  }

  const removeFromCart = (key) => {
    setCartItems((current) => current.filter((item) => item.key !== key))
  }

  const cartCount = useMemo(() => getCartCount(cartItems), [cartItems])
  const solidHeader = scrolled || location.pathname !== '/'

  return (
    <div className="min-h-screen bg-parchment text-obsidian">
      <Navbar solid={solidHeader} cartCount={cartCount} onOpenCart={() => setCartOpen(true)} />
      <Routes>
        <Route path="/" element={<Home onAddToCart={addToCart} />} />
        <Route path="/shop" element={<Shop onAddToCart={addToCart} />} />
        <Route path="/product/:slug" element={<ProductDetail onAddToCart={addToCart} />} />
        <Route path="*" element={<Home onAddToCart={addToCart} />} />
      </Routes>
      <Footer />
      <CartDrawer
        open={cartOpen}
        items={cartItems}
        onClose={() => setCartOpen(false)}
        onUpdateQuantity={updateCartQuantity}
        onRemove={removeFromCart}
      />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <StorefrontShell />
    </BrowserRouter>
  )
}

export default App
