import { useEffect, useMemo, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import './App.css'
import Footer from './components/layout/Footer'
import CartDrawer from './components/storefront/CartDrawer'
import Header from './components/storefront/Header'
import { products } from './data/products'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Shop from './pages/Shop'
import strkImgConfig from './strk-img-config.json'

function App() {
  const containerRef = useRef(null)
  const [page, setPage] = useState('home')
  const [selectedProductId, setSelectedProductId] = useState(products[0].id)
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const selectedProduct = useMemo(
    () => products.find((product) => product.id === selectedProductId) || products[0],
    [selectedProductId]
  )
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [page, selectedProductId])

  const navigate = (target) => {
    if (target === 'home' || target === 'shop') {
      setPage(target)
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    setPage('home')
    window.requestAnimationFrame(() => {
      const element = document.getElementById(target)
      if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  const viewProduct = (product) => {
    setSelectedProductId(product.id)
    setPage('product')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const addToCart = (product, quantity = 1, tone = 'Gold tone') => {
    const cartKey = `${product.id}-${tone.toLowerCase().replace(/\s+/g, '-')}`

    setCartItems((current) => {
      const existing = current.find((item) => item.cartKey === cartKey)
      if (existing) {
        return current.map((item) =>
          item.cartKey === cartKey ? { ...item, quantity: item.quantity + quantity } : item
        )
      }
      return [...current, { ...product, cartKey, quantity, tone }]
    })
    setCartOpen(true)
  }

  const removeFromCart = (cartKey) => {
    setCartItems((current) => current.filter((item) => item.cartKey !== cartKey))
  }

  const updateQuantity = (cartKey, quantity) => {
    setCartItems((current) =>
      current
        .map((item) => (item.cartKey === cartKey ? { ...item, quantity } : item))
        .filter((item) => item.quantity > 0)
    )
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-velmora-ivory text-velmora-espresso">
      <Header page={page} onNavigate={navigate} cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
      {page === 'home' && <Home onAddToCart={addToCart} onViewProduct={viewProduct} onNavigate={navigate} />}
      {page === 'shop' && <Shop onAddToCart={addToCart} onViewProduct={viewProduct} />}
      {page === 'product' && (
        <ProductDetail product={selectedProduct} onAddToCart={addToCart} onViewProduct={viewProduct} />
      )}
      <Footer />
      <CartDrawer
        isOpen={cartOpen}
        items={cartItems}
        onClose={() => setCartOpen(false)}
        onRemove={removeFromCart}
        onUpdateQuantity={updateQuantity}
      />
    </div>
  )
}

export default App
