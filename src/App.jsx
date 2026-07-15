import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Layout from './Layout.jsx'
import { CartProvider } from '@/context/CartContext.jsx'
import Home from '@/pages/Home.jsx'
import Shop from '@/pages/Shop.jsx'
import ProductDetail from '@/pages/ProductDetail.jsx'
import About from '@/pages/About.jsx'
import Journal from '@/pages/Journal.jsx'
import NotFound from '@/pages/NotFound.jsx'

function PreviewBridge() {
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

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <PreviewBridge />
        <Routes>
          <Route element={<Layout />}>
            <Route element={<Home />} path="/" />
            <Route element={<Shop />} path="/shop" />
            <Route element={<ProductDetail />} path="/product/:productId" />
            <Route element={<About />} path="/about" />
            <Route element={<Journal />} path="/journal" />
            <Route element={<NotFound />} path="*" />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}
