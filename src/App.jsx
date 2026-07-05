import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './lib/CartContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CartDrawer from './components/layout/CartDrawer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import { Toaster } from 'sonner';

function App() {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen bg-background">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </main>
        <Footer />
        <CartDrawer />
        <Toaster position="bottom-right" />
      </div>
    </CartProvider>
  );
}

export default App;
