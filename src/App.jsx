import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { CartProvider } from '@/context/CartContext'
import Layout from '@/components/layout/Layout'
import Home from '@/pages/Home'
import Shop from '@/pages/Shop'
import ProductDetail from '@/pages/ProductDetail'

function NavigateBridge() {
  const navigate = useNavigate()
  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, opts) => navigate(path, opts)
    return () => { window.__STRIKINGLY_PREVIEW_NAVIGATE__ = undefined }
  }, [navigate])
  return null
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavigateBridge />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
