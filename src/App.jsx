import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from '@/context/CartContext'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/layout/CartDrawer'
import Home from '@/pages/Home'
import ProductDetail from '@/pages/ProductDetail'
import Collection from '@/pages/Collection'
import './App.css'

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-cream">
          <Navbar />
          <CartDrawer />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/collection" element={<Collection />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  )
}

export default App
