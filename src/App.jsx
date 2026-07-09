import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from '@/components/layout/Layout'
import RouteEffects from '@/components/app/RouteEffects'
import { CartProvider } from '@/context/CartContext'
import HomePage from '@/pages/HomePage'
import ShopPage from '@/pages/ShopPage'
import ProductPage from '@/pages/ProductPage'
import NotFoundPage from '@/pages/NotFoundPage'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <RouteEffects />
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="shop" element={<ShopPage />} />
            <Route path="product/:slug" element={<ProductPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
