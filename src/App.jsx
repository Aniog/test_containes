import { useMemo, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './Layout.jsx'
import { products } from './data/storefront.js'
import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import About from './pages/About.jsx'
import Journal from './pages/Journal.jsx'
import './App.css'

const getCartKey = (productId, variant) => `${productId}-${variant}`

function App() {
  const [cartItems, setCartItems] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  const addToCart = (product, quantity = 1, variant = product.variants?.[0] ?? 'Gold Tone') => {
    const safeQuantity = Math.max(1, quantity)
    const itemKey = getCartKey(product.id, variant)

    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.key === itemKey)

      if (existingItem) {
        return currentItems.map((item) =>
          item.key === itemKey
            ? { ...item, quantity: item.quantity + safeQuantity }
            : item,
        )
      }

      return [
        ...currentItems,
        {
          key: itemKey,
          productId: product.id,
          slug: product.slug,
          name: product.displayName,
          price: product.price,
          variant,
          quantity: safeQuantity,
        },
      ]
    })

    setCartOpen(true)
  }

  const updateCartQuantity = (itemKey, nextQuantity) => {
    if (nextQuantity <= 0) {
      setCartItems((currentItems) =>
        currentItems.filter((item) => item.key !== itemKey),
      )
      return
    }

    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.key === itemKey ? { ...item, quantity: nextQuantity } : item,
      ),
    )
  }

  const removeFromCart = (itemKey) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.key !== itemKey),
    )
  }

  const cartCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems],
  )

  const cartTotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems],
  )

  return (
    <Router>
      <Layout
        cartCount={cartCount}
        cartItems={cartItems}
        cartOpen={cartOpen}
        cartTotal={cartTotal}
        onCloseCart={() => setCartOpen(false)}
        onOpenCart={() => setCartOpen(true)}
        onRemoveItem={removeFromCart}
        onUpdateQuantity={updateCartQuantity}
      >
        <Routes>
          <Route
            path="/"
            element={<Home products={products} onAddToCart={addToCart} />}
          />
          <Route
            path="/shop"
            element={<Shop products={products} onAddToCart={addToCart} />}
          />
          <Route
            path="/collections"
            element={<Shop products={products} onAddToCart={addToCart} />}
          />
          <Route
            path="/product/:slug"
            element={<ProductDetail products={products} onAddToCart={addToCart} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/journal" element={<Journal />} />
          <Route
            path="*"
            element={<Home products={products} onAddToCart={addToCart} />}
          />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
