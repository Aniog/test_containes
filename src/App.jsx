import { useCallback, useEffect, useMemo, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import CartDrawer from '@/components/cart/CartDrawer'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import Home from '@/pages/Home'
import ProductDetail from '@/pages/ProductDetail'
import Shop from '@/pages/Shop'

function ScrollToTop() {
  const { pathname, search, hash } = useLocation()

  useEffect(() => {
    if (hash) return
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname, search, hash])

  return null
}

function App() {
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = useCallback((product, quantity = 1, variant = 'Gold') => {
    setCartItems((current) => {
      const cartId = `${product.id}-${variant}`
      const existing = current.find((item) => item.id === cartId)

      if (existing) {
        return current.map((item) =>
          item.id === cartId ? { ...item, quantity: item.quantity + quantity } : item,
        )
      }

      return [
        ...current,
        {
          id: cartId,
          productId: product.id,
          name: product.name,
          price: product.price,
          variant,
          quantity,
        },
      ]
    })
    setIsCartOpen(true)
  }, [])

  const removeFromCart = useCallback((cartId) => {
    setCartItems((current) => current.filter((item) => item.id !== cartId))
  }, [])

  const updateQuantity = useCallback((cartId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(cartId)
      return
    }
    setCartItems((current) => current.map((item) => (item.id === cartId ? { ...item, quantity } : item)))
  }, [removeFromCart])

  const cartCount = useMemo(
    () => cartItems.reduce((count, item) => count + item.quantity, 0),
    [cartItems],
  )

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-velmora-ivory text-velmora-espresso">
        <Header cartCount={cartCount} onOpenCart={() => setIsCartOpen(true)} />
        <Routes>
          <Route path="/" element={<Home onAddToCart={addToCart} />} />
          <Route path="/shop" element={<Shop onAddToCart={addToCart} />} />
          <Route path="/product/:id" element={<ProductDetail onAddToCart={addToCart} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
        <CartDrawer
          isOpen={isCartOpen}
          items={cartItems}
          onClose={() => setIsCartOpen(false)}
          onRemove={removeFromCart}
          onUpdateQuantity={updateQuantity}
        />
      </div>
    </BrowserRouter>
  )
}

export default App
