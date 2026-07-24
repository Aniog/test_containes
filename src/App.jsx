import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout.jsx'
import HomePage from '@/components/home/HomePage.jsx'
import ProductDetailPage from '@/pages/ProductDetailPage.jsx'
import ShopPage from '@/pages/ShopPage.jsx'
import { CartProvider } from '@/context/CartContext.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:productId" element={<ProductDetailPage />} />
          </Routes>
        </Layout>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
