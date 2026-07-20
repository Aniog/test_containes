import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartProvider } from '@/components/cart/CartContext'
import Layout from '@/components/layout/Layout'
import Home from '@/pages/Home.jsx?velmora=3'
import Shop from '@/pages/Shop.jsx?velmora=3'
import ProductDetail from '@/pages/ProductDetail.jsx?velmora=3'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </Layout>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
