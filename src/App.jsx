import { useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/layout/CartDrawer';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import ProductDetail from '@/pages/ProductDetail';
import About from '@/pages/About';
import './App.css';

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  const handleCartOpen = useCallback(() => {
    setCartOpen(true);
  }, []);

  const handleCartClose = useCallback(() => {
    setCartOpen(false);
  }, []);

  return (
    <Router>
      <CartProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar onCartOpen={handleCartOpen} />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:productId" element={<ProductDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/journal" element={<About />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </div>
          <Footer />
          <CartDrawer open={cartOpen} onClose={handleCartClose} />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
