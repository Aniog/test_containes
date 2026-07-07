import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CartProvider } from '@/context/CartContext'
import AppLayout from '@/components/layout/AppLayout'
import HomePage from '@/pages/HomePage'
import ShopPage from '@/pages/ShopPage'
import ProductPage from '@/pages/ProductPage'

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/products/:slug" element={<ProductPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </CartProvider>
  )
}

export default App
