import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Toaster } from 'sonner';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import CartDrawer from './components/CartDrawer';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-[#f8f5f1]">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
          <CartDrawer />
          <Toaster position="top-center" richColors closeButton />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App
