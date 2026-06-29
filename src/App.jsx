import { useCallback, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout.jsx'
import HomePage from './pages/HomePage.jsx'
import ProductPage from './pages/ProductPage.jsx'
import ShopPage from './pages/ShopPage.jsx'

function App() {
  const [cartItems, setCartItems] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  const addToCart = useCallback((product, quantity = 1, variant = 'Gold') => {
    setCartItems((current) => {
      const existing = current.find((item) => item.id === product.id && item.variant === variant)

      if (existing) {
        return current.map((item) =>
          item.id === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [...current, { ...product, quantity, variant }]
    })
    setCartOpen(true)
  }, [])

  const removeFromCart = useCallback((productId, variant) => {
    setCartItems((current) => current.filter((item) => !(item.id === productId && item.variant === variant)))
  }, [])

  const updateQuantity = useCallback((productId, variant, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId, variant)
      return
    }

    setCartItems((current) =>
      current.map((item) => (item.id === productId && item.variant === variant ? { ...item, quantity } : item)),
    )
  }, [removeFromCart])

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <Layout
              cartItems={cartItems}
              cartOpen={cartOpen}
              setCartOpen={setCartOpen}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
            />
          }
        >
          <Route index element={<HomePage onAddToCart={addToCart} />} />
          <Route path="shop" element={<ShopPage onAddToCart={addToCart} />} />
          <Route path="product/:productId" element={<ProductPage onAddToCart={addToCart} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
