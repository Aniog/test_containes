import { useCallback, useState } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Layout from '@/Layout'
import Home from '@/pages/Home'
import ProductDetail from '@/pages/ProductDetail'
import Shop from '@/pages/Shop'

function StorefrontRoutes() {
  const navigate = useNavigate()
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const handleAdd = useCallback((product, quantity = 1) => {
    setCartItems((items) => {
      const existing = items.find((item) => item.productId === product.id)
      if (existing) {
        return items.map((item) =>
          item.productId === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }
      return [...items, { productId: product.id, quantity }]
    })
    setCartOpen(true)
  }, [])

  const handleUpdateQuantity = useCallback((productId, quantity) => {
    setCartItems((items) => {
      if (quantity <= 0) return items.filter((item) => item.productId !== productId)
      return items.map((item) =>
        item.productId === productId ? { ...item, quantity } : item,
      )
    })
  }, [])

  const handleRemove = useCallback((productId) => {
    setCartItems((items) => items.filter((item) => item.productId !== productId))
  }, [])

  const handleOpenProduct = useCallback(
    (productId) => {
      navigate(`/products/${productId}`)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    [navigate],
  )

  return (
    <Routes>
      <Route
        element={
          <Layout
            cartItems={cartItems}
            cartOpen={cartOpen}
            onCartOpen={() => setCartOpen(true)}
            onCartClose={() => setCartOpen(false)}
            onUpdateQuantity={handleUpdateQuantity}
            onRemove={handleRemove}
          />
        }
      >
        <Route index element={<Home onAdd={handleAdd} onOpenProduct={handleOpenProduct} />} />
        <Route path="shop" element={<Shop onAdd={handleAdd} onOpenProduct={handleOpenProduct} />} />
        <Route path="products/:productId" element={<ProductDetail onAdd={handleAdd} onOpenProduct={handleOpenProduct} />} />
      </Route>
    </Routes>
  )
}

function App() {
  return (
    <BrowserRouter>
      <StorefrontRoutes />
    </BrowserRouter>
  )
}

export default App
