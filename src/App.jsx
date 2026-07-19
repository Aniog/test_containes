import { useMemo, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import Shop from './pages/Shop.jsx'
import './App.css'

function App() {
  const [cartItems, setCartItems] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  const cartCount = useMemo(
    () => cartItems.reduce((count, item) => count + item.quantity, 0),
    [cartItems],
  )

  const addToCart = (product, variant = 'Gold', quantity = 1) => {
    setCartItems((items) => {
      const existing = items.find((item) => item.id === product.id && item.variant === variant)
      if (existing) {
        return items.map((item) =>
          item.id === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        ...items,
        {
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

  const updateQuantity = (id, variant, quantity) => {
    setCartItems((items) =>
      items
        .map((item) => (item.id === id && item.variant === variant ? { ...item, quantity } : item))
        .filter((item) => item.quantity > 0),
    )
  }

  const removeFromCart = (id, variant) => {
    setCartItems((items) => items.filter((item) => item.id !== id || item.variant !== variant))
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <Layout
              cartItems={cartItems}
              cartCount={cartCount}
              cartOpen={cartOpen}
              setCartOpen={setCartOpen}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
            />
          }
        >
          <Route path="/" element={<Home onAdd={addToCart} />} />
          <Route path="/shop" element={<Shop onAdd={addToCart} />} />
          <Route path="/product/:id" element={<ProductDetail onAdd={addToCart} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
