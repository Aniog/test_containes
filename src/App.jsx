import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import ProductDetail from '@/pages/ProductDetail';
import About from '@/pages/About';
import './App.css';

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  if (typeof window !== 'undefined') {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, opts) => {
      // handled by react-router via URL changes
    };
  }

  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen bg-velvet-surface text-velvet-base font-sans">
          <Navbar onCartClick={() => setCartOpen(true)} />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/shop/:category" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <Footer />
          <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
