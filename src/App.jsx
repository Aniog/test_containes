import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "@/components/layout/Layout"
import ScrollToTop from "@/components/layout/ScrollToTop"
import { CartProvider } from "@/context/CartContext"
import HomePage from "@/pages/HomePage"
import ProductPage from "@/pages/ProductPage"
import ShopPage from "@/pages/ShopPage"
import AboutPage from "@/pages/AboutPage"
import NotFoundPage from "@/pages/NotFoundPage"
import "./App.css"

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/journal" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
