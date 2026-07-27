import { useMemo, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer?velmora-footer-fix'
import CartDrawer from '@/components/cart/CartDrawer'
import HomePage from '@/pages/HomePage'
import ShopPage from '@/pages/ShopPage'
import ProductPage from '@/pages/ProductPage'

function App() {
  const [cartItems, setCartItems] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  const cartCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems],
  )

  const handleAddToCart = (product, tone = product.tones[0], quantity = 1) => {
    console.log('[Velmora] add to cart', { product: product.id, tone, quantity })
    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.id === product.id && item.tone === tone,
      )

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id && item.tone === tone
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        ...currentItems,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          tone,
          quantity,
        },
      ]
    })
    setCartOpen(true)
  }

  const handleUpdateQuantity = (productId, tone, quantity) => {
    console.log('[Velmora] update quantity', { productId, tone, quantity })
    setCartItems((currentItems) =>
      currentItems.flatMap((item) => {
        if (item.id !== productId || item.tone !== tone) {
          return [item]
        }

        if (quantity <= 0) {
          return []
        }

        return [{ ...item, quantity }]
      }),
    )
  }

  const handleRemoveItem = (productId, tone) => {
    console.log('[Velmora] remove item', { productId, tone })
    setCartItems((currentItems) =>
      currentItems.filter((item) => !(item.id === productId && item.tone === tone)),
    )
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
        <Navbar cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
        <CartDrawer
          isOpen={cartOpen}
          items={cartItems}
          onClose={() => setCartOpen(false)}
          onUpdateQuantity={handleUpdateQuantity}
          onRemove={handleRemoveItem}
        />
        <Routes>
          <Route path="/" element={<HomePage onAddToCart={handleAddToCart} />} />
          <Route path="/shop" element={<ShopPage onAddToCart={handleAddToCart} />} />
          <Route path="/product/:productId" element={<ProductPage onAddToCart={handleAddToCart} />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
