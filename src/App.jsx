import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetail from './pages/ProductDetail'
import CartDrawer from './components/CartDrawer'

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-[#F8F5F1]">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
          <CartDrawer />
        </div>
      </Router>
    </CartProvider>
  )
}

export default App
