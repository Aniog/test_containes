import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import './App.css'
import { CartProvider } from '@/context/CartContext.jsx'
import SiteLayout from '@/components/layout/SiteLayout.jsx'
import HomePage from '@/pages/HomePage.jsx'
import ShopPage from '@/pages/ShopPage.jsx'
import ProductPage from '@/pages/ProductPage.jsx'

const RouteEffects = () => {
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
    const frame = window.requestAnimationFrame(() => {
      if (location.hash) {
        const target = document.getElementById(location.hash.replace('#', ''))
        target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }

      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    })

    return () => window.cancelAnimationFrame(frame)
  }, [location.pathname, location.search, location.hash])

  return null
}

function App() {
  return (
    <CartProvider>
      <RouteEffects />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/collections" element={<ShopPage />} />
          <Route path="/product/:slug" element={<ProductPage />} />
          <Route path="/about" element={<Navigate to="/#story" replace />} />
          <Route path="/journal" element={<Navigate to="/#journal" replace />} />
        </Route>
      </Routes>
    </CartProvider>
  )
}

export default App
