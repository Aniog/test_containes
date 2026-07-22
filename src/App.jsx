import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/hooks/useCart';
import { CartUIProvider, useCartUI } from '@/hooks/useCartUI';
import CartDrawer from '@/components/layout/CartDrawer';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import Product from '@/pages/Product';
import About from '@/pages/About';

function App() {
  return (
    <CartProvider>
      <CartUIProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <CartDrawerWrapper />
        </Router>
      </CartUIProvider>
    </CartProvider>
  );
}

const CartDrawerWrapper = () => {
  const { cartOpen, setCartOpen } = useCartUI();
  return <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />;
};

export default App;
