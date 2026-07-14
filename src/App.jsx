import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import AppLayout from '@/components/layout/AppLayout'
import { StoreProvider } from '@/context/StoreContext'
import HomePage from '@/pages/HomePage'
import ProductPage from '@/pages/ProductPage'
import ShopPage from '@/pages/ShopPage'
import './App.css'

function PreviewRouteBridge() {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = navigate

    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
    }
  }, [navigate])

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '')
      window.requestAnimationFrame(() => {
        document.getElementById(targetId)?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      })
      return
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname, location.hash])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <StoreProvider>
        <PreviewRouteBridge />
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:productId" element={<ProductPage />} />
          </Route>
        </Routes>
      </StoreProvider>
    </BrowserRouter>
  )
}

export default App
