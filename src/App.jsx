import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Layout from './Layout'
import HomePage from './components/home/HomePage'
import ProductDetail from './components/product/ProductDetail'
import ShopPage from './components/shop/ShopPage'

function App() {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/about" element={<div className="min-h-screen pt-24 flex items-center justify-center"><p className="text-velmora-text-secondary">About page coming soon</p></div>} />
            <Route path="/journal" element={<div className="min-h-screen pt-24 flex items-center justify-center"><p className="text-velmora-text-secondary">Journal page coming soon</p></div>} />
            <Route path="/collections" element={<ShopPage />} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  )
}

export default App
