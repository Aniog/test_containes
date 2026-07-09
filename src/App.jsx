import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import { CartProvider } from './context/CartContext'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import CartDrawer from './components/cart/CartDrawer'
import HomePage from './pages/HomePage'
import ProductDetail from './pages/ProductDetail'
import Collection from './pages/Collection'

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <CartDrawer />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/shop" element={<Collection />} />
            <Route path="/collections" element={<Collection />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </CartProvider>
  )
}

export default App
