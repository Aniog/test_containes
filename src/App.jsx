import { useEffect } from 'react'
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom'
import { CartProvider } from './components/cart/CartContext'
import './App.css'
import Layout from './Layout'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import ShopPage from './pages/ShopPage'

function RouteManager() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, options = {}) => {
      navigate(path, options)
    }

    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
    }
  }, [navigate])

  useEffect(() => {
    if (location.hash) {
      const targetId = decodeURIComponent(location.hash.replace('#', ''))
      window.requestAnimationFrame(() => {
        const target = document.getElementById(targetId)
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      })
      return
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [location.hash, location.pathname, location.search])

  return null
}

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/product/:slug" element={<ProductPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <RouteManager />
        <AppRoutes />
      </CartProvider>
    </BrowserRouter>
  )
}
