import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
import './App.css'
import { products } from './data/products.js'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import CartDrawer from './components/layout/CartDrawer.jsx'
import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import ProductDetail from './pages/ProductDetail.jsx'

function ScrollToTop() {
  const { pathname, search } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname, search])

  return null
}

function Storefront() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const cartCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems],
  )

  const addToCart = (product, quantity = 1, tone = product.tones[0]) => {
    setCartItems((currentItems) => {
      const existing = currentItems.find((item) => item.id === product.id && item.tone === tone)
      if (existing) {
        return currentItems.map((item) =>
          item.id === product.id && item.tone === tone
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        ...currentItems,
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

  const incrementItem = (id, tone) => {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id && item.tone === tone ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    )
  }

  const decrementItem = (id, tone) => {
    setCartItems((currentItems) =>
      currentItems
        .map((item) =>
          item.id === id && item.tone === tone ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  const removeItem = (id, tone) => {
    setCartItems((currentItems) => currentItems.filter((item) => !(item.id === id && item.tone === tone)))
  }

  return (
    <div className="min-h-screen bg-velmora-cream font-sans text-velmora-ink">
      <ScrollToTop />
      <Navbar cartCount={cartCount} onCartClick={() => setCartOpen(true)} />
      <Routes>
        <Route path="/" element={<Home products={products} onAdd={addToCart} />} />
        <Route path="/shop" element={<Shop products={products} onAdd={addToCart} />} />
        <Route path="/product/:id" element={<ProductDetail products={products} onAdd={addToCart} />} />
        <Route path="*" element={<Home products={products} onAdd={addToCart} />} />
      </Routes>
      <Footer />
      <CartDrawer
        isOpen={cartOpen}
        items={cartItems}
        onClose={() => setCartOpen(false)}
        onIncrement={incrementItem}
        onDecrement={decrementItem}
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
