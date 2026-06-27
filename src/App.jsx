import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import CollectionPage from './pages/CollectionPage'
import CartDrawer from './components/CartDrawer'
import { CartProvider } from './context/CartContext'
import './index.css'

function App() {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/collections/:category" element={<CollectionPage />} />
            <Route path="/shop" element={<CollectionPage />} />
          </Routes>
        </Layout>
        <CartDrawer />
      </Router>
    </CartProvider>
  )
}

export default App
