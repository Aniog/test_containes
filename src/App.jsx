import { useEffect, useMemo, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import Header from '@/components/layout/Header'
import CartDrawer from '@/components/layout/CartDrawer'
import Footer from '@/components/layout/Footer'
import HomePage from '@/components/home/HomePage'
import ProductDetailPage from '@/components/product/ProductDetailPage'
import ShopPage from '@/components/shop/ShopPage'
import { products } from '@/data/products'
import strkImgConfig from '@/strk-img-config.json'
import './App.css'

function App() {
  const appRef = useRef(null)
  const [selectedProduct, setSelectedProduct] = useState(products[0])
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, appRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [selectedProduct, cartItems, isCartOpen])

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

  const cartSummary = useMemo(() => ({ cartCount, subtotal }), [cartCount, subtotal])

  const handleAddToCart = (product, quantity = 1, variant = 'Gold') => {
    setCartItems((current) => {
      const existingItem = current.find((item) => item.id === product.id && item.variant === variant)
      if (existingItem) {
        return current.map((item) => item.id === product.id && item.variant === variant ? { ...item, quantity: item.quantity + quantity } : item)
      }

      return [
        ...current,
        {
          ...product,
          quantity,
          variant,
        },
      ]
    })
    setIsCartOpen(true)
  }

  const handleRemoveFromCart = (productId, variant) => {
    setCartItems((current) => current.filter((item) => !(item.id === productId && item.variant === variant)))
  }

  const handleUpdateQuantity = (productId, variant, quantity) => {
    if (quantity < 1) {
      handleRemoveFromCart(productId, variant)
      return
    }

    setCartItems((current) => current.map((item) => item.id === productId && item.variant === variant ? { ...item, quantity } : item))
  }

  const handleProductSelect = (product) => {
    setSelectedProduct(product)
    window.location.assign('#product-detail')
  }

  return (
    <div ref={appRef} className="min-h-screen bg-velmora-ivory text-velmora-espresso">
      <Header cartCount={cartSummary.cartCount} onCartOpen={() => setIsCartOpen(true)} />
      <main>
        <HomePage onAddToCart={handleAddToCart} onProductSelect={handleProductSelect} />
        <ProductDetailPage product={selectedProduct} onAddToCart={handleAddToCart} onProductSelect={handleProductSelect} />
        <ShopPage onAddToCart={handleAddToCart} onProductSelect={handleProductSelect} />
      </main>
      <Footer />
      <CartDrawer
        isOpen={isCartOpen}
        items={cartItems}
        subtotal={cartSummary.subtotal}
        onClose={() => setIsCartOpen(false)}
        onRemove={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
      />
    </div>
  )
}

export default App
