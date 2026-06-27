import { useState } from 'react'
import Header from '@/components/layout/Header.jsx?velmora=202606270718'
import Footer from '@/components/layout/Footer.jsx?velmora=202606270718'
import CartDrawer from '@/components/layout/VelmoraCartDrawer.jsx?velmora=202606270718'
import HomePage from '@/components/home/VelmoraFinalGallery.jsx?velmora=202606270718'
import ProductDetail from '@/components/product/VelmoraProductDetail.jsx?velmora=202606270718'
import ShopPage from '@/components/shop/VelmoraShopPage.jsx?velmora=202606270718'
import { products } from '@/data/products'
import './App.css'

function App() {
  const [view, setView] = useState({ name: 'home', productId: products[0].id })
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const navigate = (name) => {
    setView((current) => ({ ...current, name }))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const selectProduct = (productId) => {
    setView({ name: 'product', productId })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const addToCart = (product, variant = product.variants[0], quantity = 1) => {
    setCartItems((current) => {
      const existing = current.find((item) => item.id === product.id && item.variant === variant)
      if (existing) {
        return current.map((item) =>
          item.id === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }
      return [...current, { ...product, variant, quantity }]
    })
    setCartOpen(true)
  }

  const increaseItem = (id, variant) => {
    setCartItems((current) =>
      current.map((item) =>
        item.id === id && item.variant === variant ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    )
  }

  const decreaseItem = (id, variant) => {
    setCartItems((current) =>
      current
        .map((item) =>
          item.id === id && item.variant === variant
            ? { ...item, quantity: Math.max(0, item.quantity - 1) }
            : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  const removeItem = (id, variant) => {
    setCartItems((current) => current.filter((item) => !(item.id === id && item.variant === variant)))
  }

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  const selectedProduct = products.find((product) => product.id === view.productId) ?? products[0]

  return (
    <div id="top" className="min-h-screen bg-ivory text-espresso">
      <Header
        currentView={view.name}
        onNavigate={navigate}
        cartCount={cartCount}
        onCartOpen={() => setCartOpen(true)}
      />

      {view.name === 'shop' ? (
        <ShopPage onAddToCart={addToCart} onSelectProduct={selectProduct} />
      ) : view.name === 'product' ? (
        <ProductDetail
          product={selectedProduct}
          onAddToCart={addToCart}
          onSelectProduct={selectProduct}
          onNavigate={navigate}
        />
      ) : (
        <HomePage onAddToCart={addToCart} onSelectProduct={selectProduct} onNavigate={navigate} />
      )}

      <Footer onNavigate={navigate} />
      <CartDrawer
        isOpen={cartOpen}
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
