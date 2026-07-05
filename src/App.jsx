import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/layout/Navbar';
import CartDrawer from '@/components/layout/CartDrawer';
import Footer from '@/components/layout/Footer';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import ProductDetail from '@/pages/ProductDetail';
import ScrollToTop from '@/components/layout/ScrollToTop';
import './App.css'

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="flex flex-col min-h-screen">
          <ScrollToTop />
          <Navbar />
          <CartDrawer />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
          </main>
          <Footer />
          <Toaster position="bottom-right" />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
