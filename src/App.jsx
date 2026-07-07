import { useCallback, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from '@/Layout'
import HomePage from '@/components/home/HomePage'
import ProductDetailPage from '@/pages/ProductDetailPage'
import ShopPage from '@/pages/ShopPage'

function App() {
  const [cartItems, setCartItems] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  const addToCart = useCallback((product, quantity = 1, tone = product.toneOptions[0]) => {
    setCartItems((current) => {
      const existing = current.find((item) => item.id === product.id && item.tone === tone)

      if (existing) {
        return current.map((item) =>
          item.id === product.id && item.tone === tone
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [...current, { ...product, quantity, tone }]
    })
    setCartOpen(true)
  }, [])

  const updateQuantity = useCallback((productId, tone, quantity) => {
    setCartItems((current) =>
      current
        .map((item) => (item.id === productId && item.tone === tone ? { ...item, quantity } : item))
        .filter((item) => item.quantity > 0),
    )
  }, [])

  const removeFromCart = useCallback((productId, tone) => {
    setCartItems((current) => current.filter((item) => !(item.id === productId && item.tone === tone)))
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <Layout
              cartItems={cartItems}
              cartOpen={cartOpen}
              setCartOpen={setCartOpen}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
            />
          }
        >
          <Route index element={<HomePage onAddToCart={addToCart} />} />
          <Route path="shop" element={<ShopPage onAddToCart={addToCart} />} />
          <Route path="product/:slug" element={<ProductDetailPage onAddToCart={addToCart} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
