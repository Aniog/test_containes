import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';
import HomePage from '@/pages/HomePage';
import ProductDetailPage from '@/pages/ProductDetailPage';
import CollectionPage from '@/pages/CollectionPage';
import './App.css';

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-velmora-cream">
          <Navbar onCartOpen={() => setCartOpen(true)} onSearchOpen={() => setSearchOpen(true)} />
          <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<CollectionPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
