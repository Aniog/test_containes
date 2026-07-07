import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { CartProvider } from './storefront/cart.jsx'
import { SiteLayout } from './storefront/layout.jsx'
import { HomePage, ProductPage, ShopPage } from './storefront/pages.jsx'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route index element={<HomePage />} />
            <Route path="shop" element={<ShopPage />} />
            <Route path="product/:slug" element={<ProductPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
