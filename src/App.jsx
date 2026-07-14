import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartProvider } from '@/context/CartContext'
import Layout from './Layout.jsx'
import Home from '@/pages/Home?velmora-runtime=20260714d'
import Shop from '@/pages/Shop?velmora-runtime=20260714d'
import ProductDetail from '@/pages/ProductDetail?velmora-runtime=20260714d'
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
