import { useMemo, useState } from 'react'
import './App.css'
import CartDrawer from './components/layout/CartDrawer.jsx'
import Footer from './components/layout/Footer.jsx'
import Header from './components/layout/Header.jsx'
import { products } from './data/products.js'
import HomePage from './pages/HomePage.jsx'
import ProductDetailPage from './pages/ProductDetailPage.jsx'
import ShopPage from './pages/ShopPage.jsx'

function App() {
  const [view, setView] = useState('home')
  const [selectedProductId, setSelectedProductId] = useState(products[0].id)
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const selectedProduct = useMemo(
    () => products.find((product) => product.id === selectedProductId) || products[0],
    [selectedProductId],
  )

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  const navigate = (nextView) => {
    setView(nextView)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const openProduct = (productId) => {
    setSelectedProductId(productId)
    setView('product')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const addToCart = (product, options = {}) => {
    const tone = options.tone || product.tones?.[0] || 'Gold'
    const quantity = options.quantity || 1
    setCartItems((current) => {
      const existing = current.find((item) => item.id === product.id && item.tone === tone)
      if (existing) {
        return current.map((item) =>
          item.id === product.id && item.tone === tone
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }
      return [...current, { ...product, tone, quantity }]
    })
    setCartOpen(true)
  }

  const increaseItem = (productId, tone) => {
    setCartItems((current) =>
      current.map((item) =>
        item.id === productId && item.tone === tone ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    )
  }

  const decreaseItem = (productId, tone) => {
    setCartItems((current) =>
      current
        .map((item) =>
          item.id === productId && item.tone === tone
            ? { ...item, quantity: Math.max(0, item.quantity - 1) }
            : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  const removeItem = (productId, tone) => {
    setCartItems((current) => current.filter((item) => !(item.id === productId && item.tone === tone)))
  }

  return (
    <div className="min-h-screen bg-velmora-ivory font-sans text-velmora-espresso">
      <Header cartCount={cartCount} onOpenCart={() => setCartOpen(true)} onNavigate={navigate} />

      {view === 'home' && <HomePage onAddToCart={addToCart} onOpenProduct={openProduct} onNavigate={navigate} />}
      {view === 'shop' && <ShopPage onAddToCart={addToCart} onOpenProduct={openProduct} />}
      {view === 'product' && (
        <ProductDetailPage
          product={selectedProduct}
          onAddToCart={addToCart}
          onOpenProduct={openProduct}
          onNavigate={navigate}
        />
      )}

      <Footer onNavigate={navigate} />
      <CartDrawer
        open={cartOpen}
        items={cartItems}
        onClose={() => setCartOpen(false)}
        onIncrease={increaseItem}
        onDecrease={decreaseItem}
        onRemove={removeItem}
      />
    </div>
  )
}

export default App
