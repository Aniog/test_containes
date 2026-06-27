import { useEffect, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import CartDrawer from '@/components/cart/CartDrawer'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import HomePage from '@/components/sections/HomePage'
import { products } from '@/data/products'
import ProductDetailPage from '@/pages/ProductDetailPage'
import ShopPage from '@/pages/ShopPage'
import strkImgConfig from '@/strk-img-config.json'
import './App.css'

function App() {
  const appRef = useRef(null)
  const [page, setPage] = useState('home')
  const [selectedProductId, setSelectedProductId] = useState(products[0].id)
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, appRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [page, selectedProductId, cartOpen, cartItems.length])

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)
  const selectedProduct = products.find((product) => product.id === selectedProductId) || products[0]

  const navigate = (nextPage) => {
    setPage(nextPage)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const viewProduct = (productId) => {
    setSelectedProductId(productId)
    setPage('product')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const addToCart = (product, quantity = 1) => {
    setCartItems((current) => {
      const existing = current.find((item) => item.id === product.id)
      if (existing) {
        return current.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item,
        )
      }
      return [...current, { ...product, quantity }]
    })
    setCartOpen(true)
  }

  const incrementItem = (productId) => {
    setCartItems((current) =>
      current.map((item) => (item.id === productId ? { ...item, quantity: item.quantity + 1 } : item)),
    )
  }

  const decrementItem = (productId) => {
    setCartItems((current) =>
      current
        .map((item) => (item.id === productId ? { ...item, quantity: item.quantity - 1 } : item))
        .filter((item) => item.quantity > 0),
    )
  }

  const removeItem = (productId) => {
    setCartItems((current) => current.filter((item) => item.id !== productId))
  }

  return (
    <div ref={appRef} className="min-h-screen bg-ivory text-noir antialiased">
      <Header currentPage={page} onNavigate={navigate} onCartOpen={() => setCartOpen(true)} cartCount={cartCount} />

      {page === 'home' && <HomePage onAdd={addToCart} onNavigate={navigate} onViewProduct={viewProduct} />}
      {page === 'shop' && <ShopPage onAdd={addToCart} onViewProduct={viewProduct} />}
      {page === 'product' && (
        <ProductDetailPage
          product={selectedProduct}
          onAdd={addToCart}
          onViewProduct={viewProduct}
          onBack={() => navigate('shop')}
        />
      )}

      <Footer />
      <CartDrawer
        isOpen={cartOpen}
        items={cartItems}
        onClose={() => setCartOpen(false)}
        onIncrement={incrementItem}
        onDecrement={decrementItem}
        onRemove={removeItem}
      />
    </div>
  )
}

export default App
