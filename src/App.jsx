import { useEffect } from 'react'
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom'
import './App.css'
import Layout from '@/Layout'
import { CartProvider } from '@/context/CartContext'
import About from '@/pages/About'
import Home from '@/pages/Home'
import Journal from '@/pages/Journal'
import ProductDetail from '@/pages/ProductDetail'
import Shop from '@/pages/Shop'

const formatPageTitle = (pathname) => {
  if (pathname === '/') return 'Velmora Fine Jewelry'

  const label = pathname
    .split('/')
    .filter(Boolean)
    .join(' · ')
    .replace(/-/g, ' ')

  return `Velmora Fine Jewelry | ${label}`
}

const PreviewRouteBridge = () => {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, options = {}) => {
      navigate(path, options)
    }

    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
    }
  }, [navigate])

  useEffect(() => {
    document.title = formatPageTitle(location.pathname)
  }, [location.pathname])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <PreviewRouteBridge />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:slug" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
