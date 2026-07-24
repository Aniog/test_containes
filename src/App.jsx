import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from '@/context/CartContext'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/layout/CartDrawer'
import HomePage from '@/pages/Home'
import ProductDetail from '@/pages/ProductDetail'
import ShopPage from '@/pages/Shop'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-velmora-light font-sans">
          <Navbar />
          <CartDrawer />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:slug" element={<ProductDetail />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
