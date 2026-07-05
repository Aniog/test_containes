import { useEffect, useMemo, useState } from 'react'
import CartDrawer from '@/components/cart/CartDrawer'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { getProductById } from '@/data/products'
import Home from '@/pages/Home'
import ProductDetail from '@/pages/ProductDetail'
import Shop from '@/pages/Shop'
import './App.css'

const getInitialView = () => {
  const params = new URLSearchParams(window.location.search)
  const page = params.get('page')
  if (page === 'shop' || page === 'product') return page
  return 'home'
}

const getInitialProduct = () => {
  const params = new URLSearchParams(window.location.search)
  return params.get('product') ?? 'vivid-aura-jewels'
}

function App() {
  const [view, setView] = useState(getInitialView)
  const [activeProductId, setActiveProductId] = useState(getInitialProduct)
  const [shopCategory, setShopCategory] = useState(null)
  const [cartItems, setCartItems] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams()
    if (view === 'shop') params.set('page', 'shop')
    if (view === 'product') {
      params.set('page', 'product')
      params.set('product', activeProductId)
    }
    const nextUrl = params.toString() ? `?${params.toString()}` : window.location.pathname
    window.history.replaceState({}, '', nextUrl)
  }, [view, activeProductId])

  const cartCount = useMemo(() => cartItems.reduce((sum, item) => sum + item.quantity, 0), [cartItems])

  const navigate = (nextView, anchor, options = {}) => {
    setView(nextView)
    if (options.category) setShopCategory(options.category)
    if (nextView !== 'shop') setShopCategory(null)
    window.requestAnimationFrame(() => {
      if (anchor) {
        document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    })
  }

  const viewProduct = (productId) => {
    setActiveProductId(productId)
    setView('product')
  }

  const addToCart = (product, variant = product.tone[0], quantity = 1) => {
    setCartItems((current) => {
      const existing = current.find((item) => item.product.id === product.id && item.variant === variant)
      if (existing) {
        return current.map((item) => item.product.id === product.id && item.variant === variant ? { ...item, quantity: item.quantity + quantity } : item)
      }
      return [...current, { product, variant, quantity }]
    })
    setCartOpen(true)
  }

  const incrementCartItem = (productId, variant) => {
    setCartItems((current) => current.map((item) => item.product.id === productId && item.variant === variant ? { ...item, quantity: item.quantity + 1 } : item))
  }

  const decrementCartItem = (productId, variant) => {
    setCartItems((current) => current.flatMap((item) => {
      if (item.product.id !== productId || item.variant !== variant) return [item]
      if (item.quantity <= 1) return []
      return [{ ...item, quantity: item.quantity - 1 }]
    }))
  }

  const removeCartItem = (productId, variant) => {
    setCartItems((current) => current.filter((item) => item.product.id !== productId || item.variant !== variant))
  }

  const activeProduct = getProductById(activeProductId)

  return (
    <div className="min-h-screen bg-velmora-ivory font-sans text-velmora-ink">
      <Header currentView={view} onNavigate={navigate} onOpenCart={() => setCartOpen(true)} cartCount={cartCount} />
      {view === 'home' && <Home onAdd={addToCart} onViewProduct={viewProduct} onNavigate={navigate} />}
      {view === 'shop' && <Shop onAdd={addToCart} onViewProduct={viewProduct} initialCategory={shopCategory} />}
      {view === 'product' && <ProductDetail productId={activeProduct.id} onAdd={addToCart} onViewProduct={viewProduct} onNavigate={navigate} />}
      <Footer onNavigate={navigate} />
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} items={cartItems} onIncrement={incrementCartItem} onDecrement={decrementCartItem} onRemove={removeCartItem} />
    </div>
  )
}

export default App
