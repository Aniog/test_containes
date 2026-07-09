import React, { useState, useCallback } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CartDrawer from './components/cart/CartDrawer';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Collection from './pages/Collection';

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  const [cartOpen, setCartOpen] = useState(false);

  const handleCartOpen = useCallback(() => setCartOpen(true), []);
  const handleCartClose = useCallback(() => setCartOpen(false), []);

  return (
    <div className="min-h-screen bg-ivory-100">
      <ScrollToTop />
      <Navbar onCartOpen={handleCartOpen} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:slug" element={<ProductDetail />} />
        <Route path="/collection" element={<Collection />} />
      </Routes>
      <Footer />
      <CartDrawer open={cartOpen} onClose={handleCartClose} />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
