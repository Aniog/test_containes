import { useEffect, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Layout from '@/Layout.jsx?velmora=20260724'
import HomePage from '@/components/home/HomePage.jsx?velmora=20260724'
import { products } from '@/data/products'
import { getStrkImageUrl } from '@/lib/strkImages'
import strkImgConfig from '@/strk-img-config.json'
import NotFoundPage from '@/pages/NotFoundPage.jsx?velmora=20260724'
import ProductDetailPage from '@/pages/ProductDetailPage.jsx?velmora=20260724'
import ShopPage from '@/pages/ShopPage.jsx?velmora=20260724'
import './App.css'

function ImageRuntimeBridge() {
  const bridgeRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    let cleanup = () => {}
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, bridgeRef.current)
    })
    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [location.pathname, location.search])

  return <div ref={bridgeRef} className="hidden" aria-hidden="true" />
}

function App() {
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = (product, options = {}) => {
    const tone = options.tone ?? product.toneOptions[0]
    const quantity = options.quantity ?? 1
    const imageSrc = options.imageSrc || getStrkImageUrl(product.imageIds.primary)

    setCartItems((current) => {
      const existingItem = current.find((item) => item.id === product.id && item.tone === tone)

      if (existingItem) {
        return current.map((item) =>
          item.id === product.id && item.tone === tone
            ? { ...item, quantity: item.quantity + quantity, imageSrc: item.imageSrc || imageSrc }
            : item
        )
      }

      return [
        ...current,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          tone,
          quantity,
          imageIds: product.imageIds,
          tagline: product.tagline,
          imageSrc,
        },
      ]
    })

    setIsCartOpen(true)
  }

  const removeFromCart = (productId, tone) => {
    setCartItems((current) => current.filter((item) => !(item.id === productId && item.tone === tone)))
  }

  const updateQuantity = (productId, tone, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId, tone)
      return
    }

    setCartItems((current) =>
      current.map((item) => (item.id === productId && item.tone === tone ? { ...item, quantity } : item))
    )
  }

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <BrowserRouter>
      <ImageRuntimeBridge />
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              cartItems={cartItems}
              cartCount={cartCount}
              isCartOpen={isCartOpen}
              onCartOpen={() => setIsCartOpen(true)}
              onCartClose={() => setIsCartOpen(false)}
              onRemoveFromCart={removeFromCart}
              onUpdateQuantity={updateQuantity}
            />
          }
        >
          <Route index element={<HomePage onAddToCart={addToCart} />} />
          <Route path="shop" element={<ShopPage products={products} onAddToCart={addToCart} />} />
          <Route path="product/:productId" element={<ProductDetailPage onAddToCart={addToCart} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
