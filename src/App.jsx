import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from '@/Layout'
import { CartProvider } from '@/context/CartContext'
import Home from '@/pages/Home'
import ProductDetail from '@/pages/ProductDetail'
import Shop from '@/pages/Shop'
import './App.css'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />} path="/">
            <Route element={<Home />} index />
            <Route element={<Shop />} path="shop" />
            <Route element={<ProductDetail />} path="product/:slug" />
            <Route element={<Navigate replace to="/" />} path="*" />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
