import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from '@/components/layout/Layout.jsx'
import { CartProvider } from '@/context/CartContext.jsx'
import { ToastProvider } from '@/context/ToastContext.jsx'
import HomePage from '@/pages/HomePage.jsx'
import ProductPage from '@/pages/ProductPage.jsx'
import ShopPage from '@/pages/ShopPage.jsx'

function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <CartProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/product/:productId" element={<ProductPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Layout>
        </CartProvider>
      </ToastProvider>
    </BrowserRouter>
  )
}

export default App
