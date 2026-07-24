import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AppShell from '@/components/layout/AppShell.jsx?layout=v13'
import HomePage from '@/pages/HomePage?home=v7'
import ProductPage from '@/pages/ProductPage?pdp=v5'
import ShopPage from '@/pages/ShopPage?shop=v5'
import { CartProvider } from '@/context/CartContext'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route element={<AppShell />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:productId" element={<ProductPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
