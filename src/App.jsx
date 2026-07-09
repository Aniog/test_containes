import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Toaster } from 'sonner';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CartDrawer from './components/layout/CartDrawer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen bg-[#F8F5F1]">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
          <Footer />
          <CartDrawer />
          <Toaster position="top-center" richColors closeButton />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App
