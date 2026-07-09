import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { CartProvider } from '@/context/CartContext'
import PreviewRouteBridge from '@/components/layout/PreviewRouteBridge'
import SiteLayout from '@/components/layout/SiteLayout'
import HomePage from '@/pages/HomePage'
import ShopPage from '@/pages/ShopPage'
import ProductPage from '@/pages/ProductPage'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <PreviewRouteBridge />
        <Routes>
          <Route element={<SiteLayout />}>
            <Route index element={<HomePage />} />
            <Route path="shop" element={<ShopPage />} />
            <Route path="product/:slug" element={<ProductPage />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
