import { useEffect, useMemo, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import CartDrawer from './components/cart/CartDrawer'
import PreviewRouteBridge from './components/layout/PreviewRouteBridge'
import ScrollToTop from './components/layout/ScrollToTop'
import ToastNotice from './components/ui/ToastNotice'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import ShopPage from './pages/ShopPage'

const App = () => {
  const [cartItems, setCartItems] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [toastMessage, setToastMessage] = useState('')

  useEffect(() => {
    if (!toastMessage) return undefined

    const timeoutId = window.setTimeout(() => {
      setToastMessage('')
    }, 2200)

    return () => window.clearTimeout(timeoutId)
  }, [toastMessage])

  const cartCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems],
  )

  const subtotal = useMemo(
    () => cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
    [cartItems],
  )

  const handleAddToCart = (product, quantity = 1, variant = product?.variants?.[0] || 'Gold Tone') => {
    if (!product) return

    const cartKey = `${product.slug}-${variant}`

    setCartItems((current) => {
      const existingItem = current.find((item) => item.cartKey === cartKey)

      if (existingItem) {
        return current.map((item) =>
          item.cartKey === cartKey
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        ...current,
        {
          cartKey,
          slug: product.slug,
          name: product.name,
          price: product.price,
          quantity,
          variant,
        },
      ]
    })

    setCartOpen(true)
    setToastMessage(`${product.name} added to cart`)
  }

  const handleUpdateQuantity = (cartKey, quantity) => {
    setCartItems((current) =>
      current.map((item) => (item.cartKey === cartKey ? { ...item, quantity } : item)),
    )
  }

  const handleRemoveItem = (cartKey) => {
    setCartItems((current) => current.filter((item) => item.cartKey !== cartKey))
    setToastMessage('Item removed from cart')
  }

  return (
    <BrowserRouter>
      <PreviewRouteBridge />
      <ScrollToTop />
      <Routes>
        <Route
          element={<Layout cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />}
        >
          <Route path="/" element={<HomePage onAddToCart={handleAddToCart} />} />
          <Route path="/shop" element={<ShopPage onAddToCart={handleAddToCart} />} />
          <Route path="/shop/:slug" element={<ProductPage onAddToCart={handleAddToCart} />} />
        </Route>
      </Routes>
      <CartDrawer
        open={cartOpen}
        items={cartItems}
        subtotal={subtotal}
        onClose={() => setCartOpen(false)}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemoveItem}
      />
      <ToastNotice message={toastMessage} />
    </BrowserRouter>
  )
}

export default App
