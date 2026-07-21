import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import CartDrawer from './components/layout/CartDrawer'

// Pages
import HomePage from './pages/HomePage'
import ProductDetail from './pages/ProductDetail'
import ShopPage from './pages/ShopPage'

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <CartDrawer />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  )
}

export default App
