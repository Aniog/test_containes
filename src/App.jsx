import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import CartDrawer from '@/components/ui/CartDrawer';
import SearchModal from '@/components/ui/SearchModal';

// Pages
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import ProductDetail from '@/pages/ProductDetail';
import About from '@/pages/About';
import Journal from '@/pages/Journal';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-[#F8F5F0] text-[#1A1A1A]">
          <Navbar 
            onCartOpen={() => setIsCartOpen(true)} 
            onSearchOpen={() => setIsSearchOpen(true)} 
          />

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:slug" element={<ProductDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/journal" element={<Journal />} />
            </Routes>
          </main>

          <Footer />

          {/* Global Overlays */}
          <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
          <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
