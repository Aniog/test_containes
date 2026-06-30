import { useMemo, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/layout/Footer.jsx'
import Header from './components/layout/Header.jsx'
import CartDrawer from './components/layout/CartDrawer.jsx'
import HomePage from './components/home/HomePage.jsx'
import ProductDetailPage from './components/products/ProductDetailPage.jsx'
import ShopPage from './components/products/ShopPage.jsx'

function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product, quantity = 1, variant = 'Gold Tone') => {
    const key = `${product.id}-${variant}`
    setCartItems((current) => {
      const existing = current.find((item) => item.key === key)
      if (existing) {
        return current.map((item) => item.key === key ? { ...item, quantity: item.quantity + quantity } : item)
      }
      return [
        ...current,
        {
          key,
          id: product.id,
          name: product.name,
          price: product.price,
          variant,
          quantity,
        },
      ]
    })
    setCartOpen(true)
  }

  const removeFromCart = (key) => {
    setCartItems((current) => current.filter((item) => item.key !== key))
  }

  const updateQuantity = (key, quantity) => {
    if (quantity < 1) {
      removeFromCart(key)
      return
    }
    setCartItems((current) => current.map((item) => item.key === key ? { ...item, quantity } : item))
  }

  const cartCount = useMemo(() => cartItems.reduce((total, item) => total + item.quantity, 0), [cartItems])
  const subtotal = useMemo(() => cartItems.reduce((total, item) => total + item.price * item.quantity, 0), [cartItems])

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-velmora-ivory font-sans text-velmora-espresso">
        <Header cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
        <Routes>
          <Route path="/" element={<HomePage onAddToCart={addToCart} />} />
          <Route path="/shop" element={<ShopPage onAddToCart={addToCart} />} />
          <Route path="/products/:productId" element={<ProductDetailPage onAddToCart={addToCart} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
        <CartDrawer
          open={cartOpen}
          items={cartItems}
          subtotal={subtotal}
          onClose={() => setCartOpen(false)}
          onRemove={removeFromCart}
          onQuantityChange={updateQuantity}
        />
      </div>
    </BrowserRouter>
  )
}

export default App
