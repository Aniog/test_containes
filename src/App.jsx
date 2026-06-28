import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from '@/components/Layout'
import NotFoundPage from '@/components/NotFoundPage'
import ScrollManager from '@/components/ScrollManager'
import { CartProvider } from '@/context/CartContext'
import HomePage from '@/pages/HomePage'
import ProductPage from '@/pages/ProductPage'
import ShopPage from '@/pages/ShopPage'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <ScrollManager />
        <Routes>
          <Route element={<Layout />} path="/">
            <Route index element={<HomePage />} />
            <Route element={<ShopPage />} path="shop" />
            <Route element={<ProductPage />} path="product/:slug" />
            <Route element={<Navigate replace to="/shop" />} path="collections" />
            <Route element={<NotFoundPage />} path="*" />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
