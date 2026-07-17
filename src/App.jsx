import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '@/components/common/Header.jsx'
import Footer from '@/components/common/Footer.jsx'
import CartDrawer from '@/components/cart/CartDrawer.jsx'
import { CartProvider } from '@/context/CartContext.jsx'
import Home from '@/pages/Home.jsx'
import ProductDetail from '@/pages/ProductDetail.jsx'
import Shop from '@/pages/Shop.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen bg-velmora-cream text-velmora-ink">
          <Header />
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
