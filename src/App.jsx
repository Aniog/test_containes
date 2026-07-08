import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import ProductDetail from './pages/ProductDetail'
import ShopPage from './pages/ShopPage'
import CartDrawer from './components/cart/CartDrawer'

function App() {
  return (
    <Layout>
      <CartDrawer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </Layout>
  )
}

export default App
