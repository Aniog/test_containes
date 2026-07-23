import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetail from './pages/ProductDetail'
import CartDrawer from './components/cart/CartDrawer'

function App() {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <CartDrawer />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  )
}

export default App
