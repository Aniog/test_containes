import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { CartProvider } from '@/context/CartContext.jsx'
import Layout from '@/components/layout/Layout.jsx'
import PreviewBridge from '@/components/layout/PreviewBridge.jsx'
import HomePage from '@/pages/HomePage.jsx'
import ShopPage from '@/pages/ShopPage.jsx'
import ProductPage from '@/pages/ProductPage.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <PreviewBridge />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:slug" element={<ProductPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
