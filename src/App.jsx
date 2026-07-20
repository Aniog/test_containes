import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Layout from '@/Layout.jsx'
import Home from '@/pages/Home.jsx'
import Shop from '@/pages/Shop.jsx'
import ProductDetail from '@/pages/ProductDetail.jsx'
import { CartProvider } from '@/context/CartContext.jsx'
import './App.css'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <ScrollToTop />
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
