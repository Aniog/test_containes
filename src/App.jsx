import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from '@/Layout.jsx'
import ScrollToTop from '@/components/common/ScrollToTop'
import { CartProvider } from '@/context/CartContext'
import Home from '@/pages/Home'
import ProductDetail from '@/pages/ProductDetail'
import Shop from '@/pages/Shop'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/products/:slug" element={<ProductDetail />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
