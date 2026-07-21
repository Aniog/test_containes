import { useMemo, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from '@/components/storefront/Header'
import CartDrawer from '@/components/storefront/CartDrawer'
import Footer from '@/components/storefront/Footer'
import Home from '@/pages/Home'
import ProductDetail from '@/pages/ProductDetail'
import Shop from '@/pages/Shop'

function App() {
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const cartCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems],
  )

  const handleAddToCart = (product, quantity = 1, tone = 'Gold') => {
    setCartItems((current) => {
      const existingItem = current.find(
        (item) => item.product.id === product.id && item.tone === tone,
      )

      if (existingItem) {
        return current.map((item) =>
          item.product.id === product.id && item.tone === tone
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [...current, { product, quantity, tone }]
    })
    setIsCartOpen(true)
  }

  const handleRemoveFromCart = (productId, tone) => {
    setCartItems((current) =>
      current.filter((item) => !(item.product.id === productId && item.tone === tone)),
    )
  }

  const handleUpdateQuantity = (productId, tone, quantity) => {
    if (quantity < 1) {
      handleRemoveFromCart(productId, tone)
      return
    }

    setCartItems((current) =>
      current.map((item) =>
        item.product.id === productId && item.tone === tone
          ? { ...item, quantity }
          : item,
      ),
    )
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-velmora-ivory text-velmora-ink">
        <Header cartCount={cartCount} onOpenCart={() => setIsCartOpen(true)} />
        <Routes>
          <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
          <Route path="/shop" element={<Shop onAddToCart={handleAddToCart} />} />
          <Route
            path="/product/:slug"
            element={<ProductDetail onAddToCart={handleAddToCart} />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
        <CartDrawer
          cartItems={cartItems}
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          onRemove={handleRemoveFromCart}
          onUpdateQuantity={handleUpdateQuantity}
        />
      </div>
    </BrowserRouter>
  )
}

export default App
