import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import { Toaster } from 'sonner';

// Layout components
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';

// Pages
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import ProductDetail from '@/pages/ProductDetail';
import About from '@/pages/About';
import Journal from '@/pages/Journal';
import Checkout from '@/pages/Checkout';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-[#F8F5F1] text-[#2C2825]">
          <Navigation />
          
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:slug" element={<ProductDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/journal" element={<Journal />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </main>

          <Footer />
          <CartDrawer />
          <Toaster position="top-center" richColors closeButton />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
