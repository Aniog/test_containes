import './App.css'
import { useEffect } from 'react'
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
  useSearchParams,
} from 'react-router-dom'
import AppShell, { useCart } from '@/components/layout/AppShell?velmora=20260714b'
import HomePage from '@/pages/HomePage'
import ProductPage from '@/pages/ProductPage'
import ShopPage from '@/pages/ShopPage'

function PreviewRouteBridge() {
  const navigate = useNavigate()

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, options = {}) => {
      navigate(path, options)
    }

    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
    }
  }, [navigate])

  return null
}

function ShopRoute({ onAddToCart }) {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || ''

  return <ShopPage onAddToCart={onAddToCart} initialCategory={initialCategory} />
}

function VelmoraAppRoutes() {
  const cart = useCart()

  return (
    <BrowserRouter>
      <PreviewRouteBridge />
      <Routes>
        <Route
          element={
            <AppShell
              cartItems={cart.cartItems}
              cartCount={cart.cartCount}
              subtotal={cart.subtotal}
              onUpdateQuantity={cart.updateQuantity}
              onRemoveFromCart={cart.removeFromCart}
            />
          }
        >
          <Route index element={<HomePage onAddToCart={cart.addToCart} />} />
          <Route path="shop" element={<ShopRoute onAddToCart={cart.addToCart} />} />
          <Route path="product/:productId" element={<ProductPage onAddToCart={cart.addToCart} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

function VelmoraApp() {
  return <VelmoraAppRoutes />
}

export default VelmoraApp
