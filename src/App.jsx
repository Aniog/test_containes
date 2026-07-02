import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-[var(--color-cream)] text-[var(--color-base)]">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/journal" element={<Shop />} />
            <Route path="/collections" element={<Shop />} />
          </Routes>
          <CartDrawer />
          <Toaster position="top-center" richColors closeButton />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
