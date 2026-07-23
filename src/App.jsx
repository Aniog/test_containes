import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '@/Layout'
import { CartProvider } from '@/context/CartContext'
import Home from '@/pages/Home'
import Shop from '@/pages/Shop'
import ProductDetail from '@/pages/ProductDetail'
import NotFound from '@/pages/NotFound'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <Layout>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Shop />} path="/shop" />
            <Route element={<ProductDetail />} path="/product/:slug" />
            <Route element={<NotFound />} path="*" />
          </Routes>
        </Layout>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
