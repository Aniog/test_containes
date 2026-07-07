import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from '@/context/CartContext'
import Layout from '@/components/layout/Layout'
import HomePage from '@/pages/HomePage'
import ShopPage from '@/pages/ShopPage'
import ProductDetailPage from '@/pages/ProductDetailPage'
import AboutPage from '@/pages/AboutPage'
import ScrollToTop from '@/components/ScrollToTop'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
