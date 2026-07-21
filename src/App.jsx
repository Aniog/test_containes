import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Layout from './Layout'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import ProductPage from './pages/ProductPage'
import AboutPage from './pages/AboutPage'
import JournalPage from './pages/JournalPage'

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:slug" element={<ProductPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/journal" element={<JournalPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </CartProvider>
  )
}
