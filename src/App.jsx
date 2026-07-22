import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import ProductDetail from '@/pages/ProductDetail';
import CartDrawer from '@/components/product/CartDrawer';
import './App.css';

function AppContent() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();

  // Close cart when navigating
  React.useEffect(() => {
    setIsCartOpen(false);
  }, [location]);

  return (
    <Layout onCartClick={() => setIsCartOpen(true)}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/collections" element={<Shop />} />
        <Route path="/about" element={<div className="container-custom py-20"><h1 className="text-3xl font-serif">About Page</h1></div>} />
        <Route path="/journal" element={<div className="container-custom py-20"><h1 className="text-3xl font-serif">Journal Page</h1></div>} />
        <Route path="/cart" element={<div className="container-custom py-20"><h1 className="text-3xl font-serif">Cart Page</h1></div>} />
      </Routes>

      {/* Global Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </Layout>
  );
}

function App() {
  return (
    <CartProvider>
      <Router>
        <AppContent />
      </Router>
    </CartProvider>
  );
}

export default App;
