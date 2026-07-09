import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './contexts/CartContext.jsx'
import Navbar from './components/Navbar.jsx'
import CartDrawer from './components/CartDrawer.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import ProductDetail from './pages/ProductDetail.jsx'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-velmora-cream">
          <Navbar />
          <CartDrawer />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/products/:slug" element={<ProductDetail />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
