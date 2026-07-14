import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartProvider } from '@/components/cart/CartContext.jsx'
import Layout from '@/Layout.jsx'
import Home from '@/pages/Home.jsx'
import ProductDetail from '@/pages/ProductDetail.jsx'
import Shop from '@/pages/Shop.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/products/:slug" element={<ProductDetail />} />
          </Routes>
        </Layout>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
