import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import CartDrawer from '@/components/cart/CartDrawer'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { StoreProvider } from '@/context/StoreContext'
import EditorialPage from '@/pages/EditorialPage'
import HomePage from '@/pages/HomePage'
import ProductPage from '@/pages/ProductPage'
import ShopPage from '@/pages/ShopPage'

const ScrollToTop = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return null
}

const PreviewBridge = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = navigate
    return () => {
      window.__STRIKINGLY_PREVIEW_NAVIGATE__ = undefined
    }
  }, [navigate])

  return null
}

const AppShell = () => {
  return (
    <StoreProvider>
      <BrowserRouter>
        <PreviewBridge />
        <ScrollToTop />
        <div className="min-h-screen bg-velmora-surface text-velmora-ink">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/shop/:productId" element={<ProductPage />} />
            <Route path="/about" element={<EditorialPage slug="about" />} />
            <Route path="/journal" element={<EditorialPage slug="journal" />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
          <Footer />
          <CartDrawer />
        </div>
      </BrowserRouter>
    </StoreProvider>
  )
}

function App() {
  return <AppShell />
}

export default App
