import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import './App.css'
import CartDrawer from './components/CartDrawer'
import Footer from './components/Footer'
import Nav from './components/Nav'
import HomePage from './pages/HomePage'
import ProductDetailPage from './pages/ProductDetailPage'
import ShopPage from './pages/ShopPage'
import { getProductById } from './data/products'
import strkImgConfig from './strk-img-config.json'

function App() {
  const [page, setPage] = useState('home')
  const [selectedProductId, setSelectedProductId] = useState(null)
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const appRef = useRef(null)

  const selectedProduct = selectedProductId ? getProductById(selectedProductId) : null

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, appRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [page, selectedProductId])

  const navigate = useCallback((nextPage, anchor) => {
    setPage(nextPage)
    setSelectedProductId(null)
    window.requestAnimationFrame(() => {
      if (anchor) {
        document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' })
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    })
  }, [])

  const openProduct = useCallback((productId) => {
    setSelectedProductId(productId)
    setPage('product')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const addToCart = useCallback((product, variant = product.tone[0]) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product.id && item.variant === variant)
      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      }

      return [
        ...currentItems,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          variant,
          quantity: 1,
        },
      ]
    })
    setIsCartOpen(true)
  }, [])

  const increaseItem = useCallback((id, variant) => {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id && item.variant === variant ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    )
  }, [])

  const decreaseItem = useCallback((id, variant) => {
    setCartItems((currentItems) =>
      currentItems
        .map((item) =>
          item.id === id && item.variant === variant ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }, [])

  const removeItem = useCallback((id, variant) => {
    setCartItems((currentItems) => currentItems.filter((item) => !(item.id === id && item.variant === variant)))
  }, [])

  const cartCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems],
  )

  const subtotal = useMemo(
    () => cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
    [cartItems],
  )

  const renderPage = () => {
    if (page === 'shop') {
      return <ShopPage onAddToCart={addToCart} onOpenProduct={openProduct} />
    }

    if (page === 'product' && selectedProduct) {
      return (
        <ProductDetailPage
          product={selectedProduct}
          onBack={() => navigate('shop')}
          onAddToCart={addToCart}
          onOpenProduct={openProduct}
        />
      )
    }

    return <HomePage onNavigate={navigate} onAddToCart={addToCart} onOpenProduct={openProduct} />
  }

  return (
    <div id="top" ref={appRef} className="min-h-screen bg-velmora-ivory font-sans text-velmora-ink">
      <Nav
        currentPage={page}
        onNavigate={navigate}
        onCartOpen={() => setIsCartOpen(true)}
        cartCount={cartCount}
        isScrolled={isScrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      {renderPage()}
      <Footer onNavigate={navigate} />
      <CartDrawer
        isOpen={isCartOpen}
        items={cartItems}
        subtotal={subtotal}
        onClose={() => setIsCartOpen(false)}
        onIncrease={increaseItem}
        onDecrease={decreaseItem}
        onRemove={removeItem}
      />
    </div>
  )
}

export default App
