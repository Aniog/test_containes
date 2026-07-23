import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Layout from '@/Layout'
import { CartProvider } from '@/context/CartContext'
import About from '@/pages/About'
import Home from '@/pages/Home'
import Journal from '@/pages/Journal'
import ProductDetail from '@/pages/ProductDetail'
import Shop from '@/pages/Shop'
import './App.css'

const PreviewNavigationBridge = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = navigate
  }, [navigate])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <PreviewNavigationBridge />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:slug" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/journal" element={<Journal />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
