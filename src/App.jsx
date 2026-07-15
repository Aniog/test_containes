import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import CartDrawer from './components/CartDrawer';
import { CartProvider } from './context/CartContext';
import './App.css';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-[#F8F6F3]">
          <Navbar onCartClick={() => setIsCartOpen(true)} />
          <Routes>
            <Route path="/" element={<Home onCartClick={() => setIsCartOpen(true)} />} />
            <Route path="/shop" element={<Shop onCartClick={() => setIsCartOpen(true)} />} />
            <Route path="/product/:id" element={<ProductDetail onCartClick={() => setIsCartOpen(true)} />} />
          </Routes>
          <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
          <Toaster position="top-center" richColors closeButton />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
