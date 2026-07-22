import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './pages/Home.jsx';
import Shop from './pages/Shop.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import { CartProvider } from './lib/CartContext';
import { Toaster } from 'sonner';

function App() {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/collections/:category" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            {/* Fallback to Home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
        <Toaster position="bottom-right" />
      </Router>
    </CartProvider>
  );
}

export default App;
