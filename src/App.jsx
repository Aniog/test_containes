import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import { CartProvider } from '@/context/CartContext'
import Layout from '@/components/layout/Layout'
import HomePage from '@/pages/HomePage'
import ShopPage from '@/pages/ShopPage'
import ProductPage from '@/pages/ProductPage'
import CollectionsPage from '@/pages/CollectionsPage'
import AboutPage from '@/pages/AboutPage'
import JournalPage from '@/pages/JournalPage'
import NotFoundPage from '@/pages/NotFoundPage'

function PreviewRouteBridge() {
  const navigate = useNavigate()

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (to, options = {}) => {
      navigate(to, options)
    }

    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
    }
  }, [navigate])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <PreviewRouteBridge />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/collections" element={<CollectionsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/journal" element={<JournalPage />} />
            <Route path="/product/:slug" element={<ProductPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
