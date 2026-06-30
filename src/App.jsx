import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetail from './pages/ProductDetail'
import About from './pages/About'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen bg-velmora-bg">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:slug" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
