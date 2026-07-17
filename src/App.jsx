import { useMemo, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartDrawer from '@/components/common/CartDrawer.jsx'
import Footer from '@/components/common/Footer.jsx'
import Header from '@/components/common/Header.jsx'
import Home from '@/pages/Home.jsx'
import ProductDetail from '@/pages/ProductDetail.jsx'
import Shop from '@/pages/Shop.jsx'
import './App.css'

function App() {
  const [cartItems, setCartItems] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  const cartCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems],
  )

  const addToCart = (product, quantity = 1, tone = product.tones?.[0] || 'Gold') => {
    const key = `${product.id}-${tone}`
    setCartItems((current) => {
      const existing = current.find((item) => item.key === key)
      if (existing) {
        return current.map((item) =>
          item.key === key ? { ...item, quantity: item.quantity + quantity } : item,
        )
      }
      return [
        ...current,
        {
          key,
          id: product.id,
          slug: product.slug,
          name: product.name,
          price: product.price,
          tone,
          quantity,
        },
      ]
    })
    setCartOpen(true)
  }

  const updateQuantity = (key, quantity) => {
    setCartItems((current) =>
      quantity <= 0
        ? current.filter((item) => item.key !== key)
        : current.map((item) => (item.key === key ? { ...item, quantity } : item)),
    )
  }

  const removeItem = (key) => {
    setCartItems((current) => current.filter((item) => item.key !== key))
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-velmora-ivory text-velmora-ink">
        <Header cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
        <Routes>
          <Route path="/" element={<Home onAdd={addToCart} />} />
          <Route path="/shop" element={<Shop onAdd={addToCart} />} />
          <Route path="/product/:slug" element={<ProductDetail onAdd={addToCart} />} />
        </Routes>
        <Footer />
        <CartDrawer
          open={cartOpen}
          items={cartItems}
          onClose={() => setCartOpen(false)}
          onUpdateQty={updateQuantity}
          onRemove={removeItem}
        />
      </div>
    </BrowserRouter>
  )
}

export default App
