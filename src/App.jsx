import React, { useMemo, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "@/components/common/NavBar"
import CartDrawer from "@/components/common/CartDrawer"
import Footer from "@/components/common/Footer"
import Home from "@/pages/Home"
import ProductDetail from "@/pages/ProductDetail"
import Shop from "@/pages/Shop"
import './App.css'

function App() {
  const [cartItems, setCartItems] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  const cartCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems],
  )

  const addToCart = (product, quantity = 1) => {
    setCartItems((items) => {
      const currentItem = items.find((item) => item.id === product.id)
      if (currentItem) {
        return items.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item,
        )
      }
      return [...items, { ...product, quantity }]
    })
    setCartOpen(true)
  }

  const incrementItem = (id) => {
    setCartItems((items) => items.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)))
  }

  const decrementItem = (id) => {
    setCartItems((items) =>
      items
        .map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item))
        .filter((item) => item.quantity > 0),
    )
  }

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  return (
    <BrowserRouter>
      <div className="velmora-app font-sans">
        <NavBar cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
        <Routes>
          <Route path="/" element={<Home onAddToCart={addToCart} />} />
          <Route path="/shop" element={<Shop onAddToCart={addToCart} />} />
          <Route path="/product/:productId" element={<ProductDetail onAddToCart={addToCart} />} />
        </Routes>
        <Footer />
        <CartDrawer
          open={cartOpen}
          items={cartItems}
          onClose={() => setCartOpen(false)}
          onIncrement={incrementItem}
          onDecrement={decrementItem}
          onRemove={removeItem}
        />
      </div>
    </BrowserRouter>
  )
}

export default App
