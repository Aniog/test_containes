import { useEffect, useMemo, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import CartDrawer from '@/components/common/CartDrawer'
import Home from '@/pages/HomeFresh'
import Shop from '@/pages/Shop'
import ProductDetail from '@/pages/ProductDetail'
import './App.css'

function RouteBridge() {
  const navigate = useNavigate()

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = navigate
    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
    }
  }, [navigate])

  return null
}

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const frameId = window.requestAnimationFrame(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
      })
      return () => window.cancelAnimationFrame(frameId)
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname, hash])

  return null
}

function Storefront() {
  const [cartItems, setCartItems] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  const cartCount = useMemo(
    () => cartItems.reduce((count, item) => count + item.quantity, 0),
    [cartItems],
  )

  const handleAddToCart = (product, quantity = 1, tone = 'Gold') => {
    const cartId = `${product.id}-${tone.toLowerCase()}`
    setCartItems((current) => {
      const existingItem = current.find((item) => item.id === cartId)
      if (existingItem) {
        return current.map((item) =>
          item.id === cartId
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        ...current,
        {
          id: cartId,
          productId: product.id,
          name: product.name,
          price: product.price,
          tone,
          quantity,
        },
      ]
    })
    setCartOpen(true)
  }

  const handleRemoveFromCart = (cartId) => {
    setCartItems((current) => current.filter((item) => item.id !== cartId))
  }

  const handleUpdateQuantity = (cartId, quantity) => {
    if (quantity <= 0) {
      handleRemoveFromCart(cartId)
      return
    }
    setCartItems((current) =>
      current.map((item) => (item.id === cartId ? { ...item, quantity } : item)),
    )
  }

  return (
    <div className="min-h-screen bg-velmora-ivory text-velmora-espresso">
      <RouteBridge />
      <ScrollManager />
      <Header cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
      <Routes>
        <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
        <Route path="/shop" element={<Shop onAddToCart={handleAddToCart} />} />
        <Route path="/product/:productId" element={<ProductDetail onAddToCart={handleAddToCart} />} />
      </Routes>
      <Footer />
      <CartDrawer
        isOpen={cartOpen}
        items={cartItems}
        onClose={() => setCartOpen(false)}
        onRemove={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
      />
    </div>
  )
}

export default function AppFresh() {
  return (
    <BrowserRouter>
      <Storefront />
    </BrowserRouter>
  )
}
