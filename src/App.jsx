import { useEffect, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import './App.css'
import Navbar from './components/storefront/Navbar.jsx'
import Footer from './components/storefront/Footer.jsx'
import CartDrawer from './components/storefront/CartDrawer.jsx'
import HomePage from './components/storefront/HomePage.jsx'
import ShopPage from './components/storefront/ShopPage.jsx'
import ProductDetailPage from './components/storefront/ProductDetailPage.jsx'
import { products } from './data/products.js'
import strkImgConfig from './strk-img-config.json'

function App() {
  const pageRef = useRef(null)
  const [page, setPage] = useState('home')
  const [activeAnchor, setActiveAnchor] = useState(null)
  const [selectedProduct, setSelectedProduct] = useState(products[0])
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [navSolid, setNavSolid] = useState(false)

  useEffect(() => {
    const onScroll = () => setNavSolid(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [page, selectedProduct?.id, activeAnchor])

  useEffect(() => {
    if (!activeAnchor) return
    const frameId = window.requestAnimationFrame(() => {
      document.getElementById(activeAnchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveAnchor(null)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [activeAnchor, page])

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  const navigate = (nextPage, anchor) => {
    setPage(nextPage)
    if (anchor) setActiveAnchor(anchor)
    else window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const openProduct = (product) => {
    setSelectedProduct(product)
    setPage('product')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const addToCart = (product, quantity = 1, tone = 'Gold') => {
    setCartItems((items) => {
      const existing = items.find((item) => item.id === product.id && item.tone === tone)
      if (existing) {
        return items.map((item) => item.id === product.id && item.tone === tone ? { ...item, quantity: item.quantity + quantity } : item)
      }
      return [...items, { ...product, tone, quantity }]
    })
    setIsCartOpen(true)
  }

  const incrementItem = (target) => {
    setCartItems((items) => items.map((item) => item.id === target.id && item.tone === target.tone ? { ...item, quantity: item.quantity + 1 } : item))
  }

  const decrementItem = (target) => {
    setCartItems((items) => items.map((item) => item.id === target.id && item.tone === target.tone ? { ...item, quantity: item.quantity - 1 } : item).filter((item) => item.quantity > 0))
  }

  const removeItem = (target) => {
    setCartItems((items) => items.filter((item) => !(item.id === target.id && item.tone === target.tone)))
  }

  return (
    <div ref={pageRef} className="min-h-screen bg-velmora-ivory font-sans text-velmora-ink antialiased">
      <Navbar solid={navSolid || page !== 'home'} currentPage={page} onNavigate={navigate} cartCount={cartCount} onCartOpen={() => setIsCartOpen(true)} />
      {page === 'home' && <HomePage onNavigate={navigate} onOpenProduct={openProduct} onAddToCart={addToCart} />}
      {page === 'shop' && <ShopPage onOpenProduct={openProduct} onAddToCart={addToCart} />}
      {page === 'product' && <ProductDetailPage product={selectedProduct} onAddToCart={addToCart} onOpenProduct={openProduct} onBackToShop={() => navigate('shop')} />}
      <Footer onNavigate={navigate} />
      <CartDrawer isOpen={isCartOpen} items={cartItems} onClose={() => setIsCartOpen(false)} onIncrement={incrementItem} onDecrement={decrementItem} onRemove={removeItem} />
    </div>
  )
}

export default App
