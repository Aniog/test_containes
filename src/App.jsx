import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { CartProvider } from '@/context/CartContext'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/layout/CartDrawer'
import Home from '@/pages/Home'
import Shop from '@/pages/Shop'
import ProductDetail from '@/pages/ProductDetail'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen bg-velmora-cream font-sans text-velmora-ink">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/products/:slug" element={<ProductDetail />} />
          </Routes>
          <Footer />
          <CartDrawer />
        </div>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
