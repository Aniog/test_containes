import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from '@/context/CartContext'
import Layout from '@/Layout'
import Home from '@/pages/Home'
import Shop from '@/pages/Shop'
import ProductDetail from '@/pages/ProductDetail'
import Placeholder from '@/pages/Placeholder'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="collections" element={<Placeholder title="Collections" />} />
            <Route path="about" element={<Placeholder title="About" />} />
            <Route path="journal" element={<Placeholder title="Journal" />} />
            <Route path="faq" element={<Placeholder title="FAQ" />} />
            <Route path="shipping" element={<Placeholder title="Shipping & Returns" />} />
            <Route path="care" element={<Placeholder title="Jewelry Care" />} />
            <Route path="contact" element={<Placeholder title="Contact Us" />} />
            <Route path="sustainability" element={<Placeholder title="Sustainability" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
