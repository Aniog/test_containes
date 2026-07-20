import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { Home } from './pages/Home'
import { Shop } from './pages/Shop'
import { ProductDetail } from './pages/ProductDetail'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/collections" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
