import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { CartProvider } from '@/context/CartContext.jsx'
import Layout from '@/Layout.jsx'
import HomePage from '@/pages/HomePage.jsx'
import ShopPage from '@/pages/ShopPage.jsx'
import ProductPage from '@/pages/ProductPage.jsx'
import NotFoundPage from '@/pages/NotFoundPage.jsx'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:productId" element={<ProductPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
