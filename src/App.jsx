import { useEffect, useMemo, useState } from 'react'
import './App.css'
import { getProductBySlug, products } from '@/data/products'
import CartDrawer from '@/components/store/CartDrawer'
import Footer from '@/components/store/Footer'
import Header from '@/components/store/Header'
import ImageLoader from '@/components/store/ImageLoader'
import CollectionPage from '@/pages/CollectionPage'
import HomePage from '@/pages/HomePage'
import ProductPage from '@/pages/ProductPage'

function App() {
  const [currentPage, setCurrentPage] = useState({ name: 'home' })
  const [cartOpen, setCartOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const cartCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems],
  )

  const scrollToSection = (sectionId) => {
    window.requestAnimationFrame(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    })
  }

  const openHome = (sectionId = 'home') => {
    setCurrentPage({ name: 'home' })
    setMobileOpen(false)
    if (sectionId === 'home') {
      window.requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'smooth' }))
      return
    }
    scrollToSection(sectionId)
  }

  const openCollection = () => {
    setCurrentPage({ name: 'collection' })
    setMobileOpen(false)
    window.requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'smooth' }))
  }

  const handleNav = (target) => {
    if (target === 'collection-page') {
      openCollection()
      return
    }
    if (target === 'collections' || target === 'about' || target === 'journal') {
      openHome(target)
      return
    }
    openHome()
  }

  const openProduct = (slug) => {
    setCurrentPage({ name: 'product', slug })
    setMobileOpen(false)
    window.requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'smooth' }))
  }

  const addToCart = (product, quantity = 1, selectedTone = product.tones?.[0] || 'Gold') => {
    setCartItems((currentItems) => {
      const itemId = `${product.id}-${selectedTone}`
      const existingItem = currentItems.find((item) => item.id === itemId)

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity + quantity } : item,
        )
      }

      return [
        ...currentItems,
        {
          id: itemId,
          productId: product.id,
          name: product.name,
          price: product.price,
          selectedTone,
          quantity,
        },
      ]
    })
    setCartOpen(true)
  }

  const removeFromCart = (itemId) => {
    setCartItems((currentItems) => currentItems.filter((item) => item.id !== itemId))
  }

  const updateQuantity = (itemId, quantity) => {
    if (quantity < 1) {
      removeFromCart(itemId)
      return
    }

    setCartItems((currentItems) =>
      currentItems.map((item) => (item.id === itemId ? { ...item, quantity } : item)),
    )
  }

  const selectedProduct = getProductBySlug(currentPage.slug || products[0].slug)

  return (
    <ImageLoader>
      <div className="min-h-screen bg-velmora-ivory font-sans text-velmora-espresso">
        <Header
          isScrolled={isScrolled || currentPage.name !== 'home'}
          mobileOpen={mobileOpen}
          onMobileToggle={() => setMobileOpen((open) => !open)}
          onCartOpen={() => setCartOpen(true)}
          onNavigate={handleNav}
          cartCount={cartCount}
        />

        {currentPage.name === 'home' && (
          <HomePage onAddToCart={addToCart} onOpenProduct={openProduct} onOpenCollection={openCollection} />
        )}
        {currentPage.name === 'collection' && (
          <CollectionPage onAddToCart={addToCart} onOpenProduct={openProduct} />
        )}
        {currentPage.name === 'product' && (
          <ProductPage
            product={selectedProduct}
            onAddToCart={addToCart}
            onOpenProduct={openProduct}
            onOpenCollection={openCollection}
          />
        )}

        <Footer onNavigate={handleNav} />
        <CartDrawer
          open={cartOpen}
          items={cartItems}
          onClose={() => setCartOpen(false)}
          onRemove={removeFromCart}
          onQuantity={updateQuantity}
        />

        <button
          type="button"
          onClick={openHome}
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-velmora-champagne focus:px-4 focus:py-3 focus:text-velmora-espresso"
        >
          Return home
        </button>
      </div>
    </ImageLoader>
  )
}

export default App
