import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import CartDrawer from './components/store/CartDrawer'
import HomePage from './pages/HomePage'
import ProductDetailPage from './pages/ProductDetailPage'
import ShopPage from './pages/ShopPage'

const ScrollToHash = () => {
  const location = useLocation()

  useEffect(() => {
    window.requestAnimationFrame(() => {
      if (location.hash) {
        document.querySelector(location.hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }

      window.scrollTo({ top: 0, behavior: 'smooth' })
    })
  }, [location.pathname, location.hash])

  return null
}

const Storefront = () => {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  const addToCart = (product, options = {}) => {
    const tone = options.tone || 'Gold'
    const quantity = options.quantity || 1

    setCartItems((current) => {
      const existing = current.find((item) => item.id === product.id && item.tone === tone)
      if (existing) {
        return current.map((item) =>
          item.id === product.id && item.tone === tone
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        ...current,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          tone,
          quantity,
        },
      ]
    })
    setCartOpen(true)
  }

  const removeFromCart = (productId, tone) => {
    setCartItems((current) => current.filter((item) => item.id !== productId || item.tone !== tone))
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

  return (
    <div className="min-h-screen bg-velmora-ivory font-sans text-velmora-ink">
      <ScrollToHash />
      <Header cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
      <Routes>
        <Route path="/" element={<HomePage onAddToCart={addToCart} />} />
        <Route path="/shop" element={<ShopPage onAddToCart={addToCart} />} />
        <Route path="/product/:productId" element={<ProductDetailPage onAddToCart={addToCart} />} />
      </Routes>
      <Footer />
      <CartDrawer
        open={cartOpen}
        items={cartItems}
        onClose={() => setCartOpen(false)}
        onRemove={removeFromCart}
        onQuantityChange={updateQuantity}
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
