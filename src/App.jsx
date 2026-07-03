import { useEffect } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import Home from '@/pages/Home'
import Shop from '@/pages/Shop'
import ProductDetail from '@/pages/ProductDetail'
import About from '@/pages/About'
import Journal from '@/pages/Journal'
import NotFound from '@/pages/NotFound'
import { CartProvider } from '@/context/CartContext'

// Bridges the preview iframe's postMessage router to React Router
function PreviewRouteBridge() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (typeof window === 'undefined') return
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, options = {}) => {
      navigate(path, { replace: options.replace })
    }
    return () => {
      try {
        delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
      } catch {
        window.__STRIKINGLY_PREVIEW_NAVIGATE__ = undefined
      }
    }
  }, [navigate])

  // Also: scroll the iframe preview to top on initial mount.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <PreviewRouteBridge />
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:slug" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}
