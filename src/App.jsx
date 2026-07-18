import { useCallback, useEffect, useMemo, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import { products } from '@/data/products'
import Home from '@/pages/Home'
import ProductDetail from '@/pages/ProductDetail'
import Shop from '@/pages/Shop'
import './App.css'

function App() {
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const cartCount = useMemo(
    () => cartItems.reduce((count, item) => count + item.quantity, 0),
    [cartItems],
  )

  const addToCart = useCallback((product, variant = product.tone[0], quantity = 1) => {
    setCartItems((items) => {
      const existingItem = items.find((item) => item.id === product.id && item.variant === variant)

      if (existingItem) {
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
    setIsCartOpen(true)
  }, [])

  const removeFromCart = useCallback((id, variant) => {
    setCartItems((items) => items.filter((item) => item.id !== id || item.variant !== variant))
  }, [])

  const updateQuantity = useCallback((id, variant, quantity) => {
    setCartItems((items) =>
      items
        .map((item) => (item.id === id && item.variant === variant ? { ...item, quantity } : item))
        .filter((item) => item.quantity > 0),
    )
  }, [])

  return (
    <BrowserRouter>
      <StorefrontRoutes
        cartItems={cartItems}
        cartCount={cartCount}
        isCartOpen={isCartOpen}
        onCartOpen={() => setIsCartOpen(true)}
        onCartClose={() => setIsCartOpen(false)}
        onRemove={removeFromCart}
        onUpdateQuantity={updateQuantity}
        onAddToCart={addToCart}
      />
    </BrowserRouter>
  )
}

const StorefrontRoutes = ({
  cartItems,
  cartCount,
  isCartOpen,
  onCartOpen,
  onCartClose,
  onRemove,
  onUpdateQuantity,
  onAddToCart,
}) => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname, location.search])

  return (
    <Layout
      key={location.pathname}
      cartItems={cartItems}
      cartCount={cartCount}
      isCartOpen={isCartOpen}
      onCartOpen={onCartOpen}
      onCartClose={onCartClose}
      onRemove={onRemove}
      onUpdateQuantity={onUpdateQuantity}
    >
      <Routes>
        <Route path="/" element={<Home onAddToCart={onAddToCart} />} />
        <Route path="/shop" element={<Shop onAddToCart={onAddToCart} />} />
        <Route path="/product/:slug" element={<ProductDetail onAddToCart={onAddToCart} />} />
        <Route path="*" element={<ProductDetail product={products[0]} onAddToCart={onAddToCart} />} />
      </Routes>
    </Layout>
  )
}

export default App
