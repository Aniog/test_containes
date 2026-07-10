import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from '@/data/CartContext'
import Layout from '@/components/layout/Layout'
import HomePage from '@/pages/Home'
import ShopPage from '@/components/shop/ShopPage'
import ProductDetail from '@/components/product/ProductDetail'
import AboutPage from '@/pages/About'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/journal" element={<AboutPage />} />
          </Routes>
        </Layout>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
