import { useCallback, useMemo, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import CartDrawer from '@/components/cart/CartDrawer'
import Footer from '@/components/layout/Footer'
import NavBar from '@/components/layout/NavBar'
import { products } from '@/data/products'
import HomePage from '@/pages/HomePage'
import ProductPage from '@/pages/ProductPage'
import ShopPage from '@/pages/ShopPage'

function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const cartCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems],
  )

  const addToCart = useCallback((product, options = {}) => {
    const tone = options.tone || 'Gold'
    const quantity = options.quantity || 1
    const key = `${product.id}-${tone}`

    setCartItems((current) => {
      const existing = current.find((item) => item.key === key)
      if (existing) {
        return current.map((item) =>
          item.key === key ? { ...item, quantity: item.quantity + quantity } : item,
        )
      }
      return [...current, { key, product, tone, quantity }]
    })
    setCartOpen(true)
  }, [])

  const removeFromCart = useCallback((key) => {
    setCartItems((current) => current.filter((item) => item.key !== key))
  }, [])

  const updateQuantity = useCallback((key, quantity) => {
    if (quantity < 1) {
      removeFromCart(key)
      return
    }
    setCartItems((current) => current.map((item) => (item.key === key ? { ...item, quantity } : item)))
  }, [removeFromCart])

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-velmora-porcelain text-velmora-ink">
        <NavBar cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
        <Routes>
          <Route path="/" element={<HomePage onAddToCart={addToCart} />} />
          <Route path="/shop" element={<ShopPage onAddToCart={addToCart} />} />
          <Route path="/products/:slug" element={<ProductPage onAddToCart={addToCart} />} />
          <Route path="*" element={<ProductPage product={products[0]} onAddToCart={addToCart} />} />
        </Routes>
        <Footer />
        <CartDrawer
          isOpen={cartOpen}
          items={cartItems}
          onClose={() => setCartOpen(false)}
          onRemove={removeFromCart}
          onQuantityChange={updateQuantity}
        />
      </div>
    </BrowserRouter>
  )
}

export default App
