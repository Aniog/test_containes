import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from '@/lib/cart'
import Layout from '@/components/Layout'

// Pages
import Home from '@/pages/Home'
import Shop from '@/pages/Shop'
import Collections from '@/pages/Collections'
import About from '@/pages/About'
import Journal from '@/pages/Journal'
import ProductDetail from '@/pages/ProductDetail'

function App() {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/about" element={<About />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  )
}

export default App
