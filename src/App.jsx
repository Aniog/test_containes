import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Layout from './Layout'
import './App.css'
import ImageConfigRegistry from '@/components/shared/ImageConfigRegistry'
import HomePage from '@/pages/HomePage'
import NotFoundPage from '@/pages/NotFoundPage'
import ProductPage from '@/pages/ProductPage'
import ShopPage from '@/pages/ShopPage'

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

function AppRoutes() {
  return (
    <>
      <PreviewRouteBridge />
      <Routes>
        <Route element={<Layout />} path="/">
          <Route element={<HomePage />} index />
          <Route element={<ShopPage />} path="shop" />
          <Route element={<ProductPage />} path="product/:productId" />
          <Route element={<NotFoundPage />} path="*" />
        </Route>
      </Routes>
    </>
  )
}

function App() {
  return (
    <>
      <ImageConfigRegistry />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
