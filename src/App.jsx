import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import ProductDetail from '@/pages/ProductDetail';

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen bg-ivory">
          <Nav onCartOpen={() => setCartOpen(true)} />
          <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:slug" element={<ProductDetail />} />
          </Routes>

          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
