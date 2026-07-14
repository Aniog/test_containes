import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import { CartProvider } from './hooks/useCart';
import CartDrawer from './components/cart/CartDrawer';
import { Toaster } from 'sonner';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <Router>
        <Layout onCartClick={() => setIsCartOpen(true)}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/collections" element={<Shop />} />
            <Route path="/product/:slug" element={<ProductDetail />} />
          </Routes>
        </Layout>
        <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        <Toaster position="bottom-right" richColors />
      </Router>
    </CartProvider>
  );
}

export default App;
