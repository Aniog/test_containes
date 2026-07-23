import { useMemo, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import Shop from './pages/Shop.jsx'
import './App.css'

function App() {
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const cartCount = useMemo(() => cartItems.reduce((sum, item) => sum + item.quantity, 0), [cartItems])

  const addToCart = (product, variant = 'Gold', quantity = 1) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product.id && item.variant === variant)
      if (existingItem) {
        return currentItems.map((item) => item.id === product.id && item.variant === variant ? { ...item, quantity: item.quantity + quantity } : item)
      }
      return [...currentItems, { ...product, variant, quantity }]
    })
    setIsCartOpen(true)
  }

  const updateQuantity = (productId, variant, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId, variant)
      return
    }
    setCartItems((currentItems) => currentItems.map((item) => item.id === productId && item.variant === variant ? { ...item, quantity } : item))
  }

  const removeFromCart = (productId, variant) => {
    setCartItems((currentItems) => currentItems.filter((item) => !(item.id === productId && item.variant === variant)))
  }

  return (
    <BrowserRouter>
      <Layout
        cartCount={cartCount}
        cartItems={cartItems}
        isCartOpen={isCartOpen}
        onOpenCart={() => setIsCartOpen(true)}
        onCloseCart={() => setIsCartOpen(false)}
        onUpdateQuantity={updateQuantity}
        onRemoveFromCart={removeFromCart}
      >
        <Routes>
          <Route path="/" element={<Home onAddToCart={addToCart} />} />
          <Route path="/shop" element={<Shop onAddToCart={addToCart} />} />
          <Route path="/product/:slug" element={<ProductDetail onAddToCart={addToCart} />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
