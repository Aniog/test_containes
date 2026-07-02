import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from '@/context/CartContext'
import Layout from '@/components/layout/Layout'
import ShopPage from '@/pages/ShopPage'
import ProductPage from '@/pages/ProductPage'

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<h1 style={{color: 'red', fontSize: '48px'}}>Velmora Home</h1>} />
            <Route path="shop" element={<ShopPage />} />
            <Route path="product/:id" element={<ProductPage />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}
