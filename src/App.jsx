import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PreviewBridge from '@/components/layout/PreviewBridge'
import { CartProvider } from '@/context/CartContext'
import Layout from '@/Layout'
import NotFound from '@/pages/NotFound'
import Home from '@/pages/Home'
import ProductDetail from '@/pages/ProductDetail'
import Shop from '@/pages/Shop'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <PreviewBridge />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
