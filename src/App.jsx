import { useEffect, useMemo, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import CartDrawer from '@/components/commerce/CartDrawer'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header.jsx?v=velmora-nav-final-20260630'
import { products } from '@/data/products'
import HomePage from '@/pages/HomePage.jsx?v=velmora-hero-final-20260630'
import ProductPage from '@/pages/ProductPage.jsx?v=velmora-detail-final-20260630'
import ShopPage from '@/pages/ShopPage.jsx?v=velmora-shop-final-20260630'
import strkImgConfig from '@/strk-img-config.json'
import './App.css?v=velmora-contrast-20260630'

function App() {
  const appRef = useRef(null)
  const [route, setRoute] = useState({ page: 'home', productId: null })
  const [cartOpen, setCartOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const selectedProduct = useMemo(
    () => products.find((product) => product.id === route.productId) || products[0],
    [route.productId],
  )

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    let cleanupImages = () => {}
    const frameId = window.requestAnimationFrame(() => {
      cleanupImages = ImageHelper.loadImages(strkImgConfig, appRef.current)
    })
    return () => {
      window.cancelAnimationFrame(frameId)
      cleanupImages()
    }
  }, [route, cartOpen, cartItems.length])

  const navigate = (target) => {
    setMobileOpen(false)
    if (target === 'shop') {
      setRoute({ page: 'shop', productId: null })
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    if (typeof target === 'string' && target.startsWith('#')) {
      setRoute({ page: 'home', productId: null })
      window.requestAnimationFrame(() => {
        document.querySelector(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
      return
    }

    setRoute({ page: 'home', productId: null })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const viewProduct = (productId) => {
    setRoute({ page: 'product', productId })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const addToCart = (product, quantity = 1, variant = 'Gold') => {
    setCartItems((currentItems) => {
      const existing = currentItems.find((item) => item.id === product.id && item.variant === variant)
      if (existing) {
        return currentItems.map((item) =>
          item.id === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }
      return [...currentItems, { ...product, quantity, variant }]
    })
    setCartOpen(true)
  }

  const incrementItem = (productId, variant) => {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === productId && item.variant === variant ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    )
  }

  const decrementItem = (productId, variant) => {
    setCartItems((currentItems) =>
      currentItems
        .map((item) =>
          item.id === productId && item.variant === variant ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  const removeItem = (productId, variant) => {
    setCartItems((currentItems) => currentItems.filter((item) => !(item.id === productId && item.variant === variant)))
  }

  return (
    <div ref={appRef} className="min-h-screen bg-velmora-ivory font-sans text-velmora-espresso">
      <Header
        isScrolled={isScrolled || route.page !== 'home'}
        cartCount={cartCount}
        onCartOpen={() => setCartOpen(true)}
        onNavigate={navigate}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      {route.page === 'shop' ? (
        <ShopPage onAddToCart={addToCart} onViewProduct={viewProduct} />
      ) : route.page === 'product' ? (
        <ProductPage
          product={selectedProduct}
          onAddToCart={addToCart}
          onViewProduct={viewProduct}
          onNavigate={navigate}
        />
      ) : (
        <HomePage onAddToCart={addToCart} onViewProduct={viewProduct} onNavigate={navigate} />
      )}

      <Footer onNavigate={navigate} />

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
