import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from './strk-img-config.json'
import './App.css'
import Header from './components/common/Header.jsx'
import CartDrawer from './components/common/CartDrawer.jsx'
import Footer from './components/common/Footer.jsx'
import HeroSection from './components/home/HeroSection.jsx'
import TrustBar from './components/home/TrustBar.jsx'
import Bestsellers from './components/home/Bestsellers.jsx'
import UgcReels from './components/home/UgcReels.jsx'
import CategoryTiles from './components/home/CategoryTiles.jsx'
import StorySection from './components/home/StorySection.jsx'
import Testimonials from './components/home/Testimonials.jsx'
import Newsletter from './components/home/Newsletter.jsx'
import ProductDetail from './components/product/ProductDetail.jsx'
import ShopSection from './components/shop/ShopSection.jsx'
import { categories, products, reviews, ugcReels } from './data/products.js'

function App() {
  const appRef = useRef(null)
  const [cartItems, setCartItems] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(products[0])

  useEffect(() => {
    let cleanupImages
    const frameId = window.requestAnimationFrame(() => {
      cleanupImages = ImageHelper.loadImages(strkImgConfig, appRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanupImages?.()
    }
  }, [selectedProduct])

  const cartCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems],
  )

  const handleAddToCart = useCallback((product, quantity = 1) => {
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
  }, [])

  const handleSelectProduct = useCallback((product) => {
    setSelectedProduct(product)
    window.requestAnimationFrame(() => {
      document.getElementById('product')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }, [])

  const incrementItem = (id) => {
    setCartItems((current) => current.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
  }

  const decrementItem = (id) => {
    setCartItems((current) => current
      .map((item) => item.id === id ? { ...item, quantity: Math.max(0, item.quantity - 1) } : item)
      .filter((item) => item.quantity > 0))
  }

  const removeItem = (id) => {
    setCartItems((current) => current.filter((item) => item.id !== id))
  }

  return (
    <div ref={appRef} className="min-h-screen bg-velmora-ivory font-sans text-velmora-ink">
      <Header cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
      <main>
        <HeroSection />
        <TrustBar />
        <Bestsellers products={products} onAdd={handleAddToCart} onSelect={handleSelectProduct} />
        <UgcReels reels={ugcReels} />
        <CategoryTiles categories={categories} />
        <StorySection />
        <Testimonials reviews={reviews} />
        <Newsletter />
        <ProductDetail product={selectedProduct} products={products} onAdd={handleAddToCart} onSelect={handleSelectProduct} />
        <ShopSection products={products} onAdd={handleAddToCart} onSelect={handleSelectProduct} />
      </main>
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
