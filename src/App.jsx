import { useMemo, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import StorefrontLayout from '@/components/storefront/StorefrontLayout'
import HomePage from '@/pages/HomePage'
import ShopPage from '@/pages/ShopPage'
import ProductPage from '@/pages/ProductPage'
import AboutPage from '@/pages/AboutPage'
import JournalPage from '@/pages/JournalPage'

function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const handleAddToCart = (product, quantity = 1, tone = product.tones?.[0] || 'Gold Tone') => {
    setCartItems((current) => {
      const existingItem = current.find(
        (item) => item.slug === product.slug && item.tone === tone,
      )

      if (existingItem) {
        return current.map((item) =>
          item.slug === product.slug && item.tone === tone
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        ...current,
        {
          slug: product.slug,
          name: product.name,
          category: product.category,
          price: product.price,
          quantity,
          tone,
        },
      ]
    })

    setCartOpen(true)
  }

  const handleDecrease = (slug, tone) => {
    setCartItems((current) =>
      current.flatMap((item) => {
        if (item.slug !== slug || item.tone !== tone) return [item]
        if (item.quantity <= 1) return []
        return [{ ...item, quantity: item.quantity - 1 }]
      }),
    )
  }

  const handleIncrease = (slug, tone) => {
    setCartItems((current) =>
      current.map((item) =>
        item.slug === slug && item.tone === tone
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    )
  }

  const handleRemove = (slug, tone) => {
    setCartItems((current) =>
      current.filter((item) => !(item.slug === slug && item.tone === tone)),
    )
  }

  const cartCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems],
  )
  const subtotal = useMemo(
    () => cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
    [cartItems],
  )

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <StorefrontLayout
              cartOpen={cartOpen}
              setCartOpen={setCartOpen}
              cartItems={cartItems}
              cartCount={cartCount}
              subtotal={subtotal}
              onDecrease={handleDecrease}
              onIncrease={handleIncrease}
              onRemove={handleRemove}
            />
          }
        >
          <Route path="/" element={<HomePage onAddToCart={handleAddToCart} />} />
          <Route path="/shop" element={<ShopPage onAddToCart={handleAddToCart} />} />
          <Route path="/product/:slug" element={<ProductPage onAddToCart={handleAddToCart} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/journal" element={<JournalPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
