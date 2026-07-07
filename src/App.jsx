import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { Home } from './pages/Home'

import { Shop } from './pages/Shop'
import { ProductDetail } from './pages/ProductDetail'

import { CartProvider } from './context/CartContext'

function App() {
  return (
    <Router>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </Layout>
      </CartProvider>
    </Router>
  )
}

export default App
