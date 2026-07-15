import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import ProductDetail from '@/pages/ProductDetail';
import './App.css';

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const handler = () => setCartOpen(true);
    window.addEventListener('velmora:open-cart', handler);
    return () => window.removeEventListener('velmora:open-cart', handler);
  }, []);

  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar onCartOpen={() => setCartOpen(true)} />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
          </div>
          <Footer />
          <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
