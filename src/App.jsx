import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from '@/components/storefront/Navbar.jsx'
import CartDrawer from '@/components/storefront/CartDrawer.jsx'
import Footer from '@/components/storefront/Footer.jsx'
import { CartProvider } from '@/context/CartContext.jsx'
import Home from '@/pages/Home.jsx'
import ProductDetail from '@/pages/ProductDetail.jsx'
import Shop from '@/pages/Shop.jsx'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen bg-[#f6f0ea] text-[#241d1f]">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:slug" element={<ProductDetail />} />
          </Routes>
          <Footer />
          <CartDrawer />
        </div>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
