import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/collections" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/about" element={<div className="pt-40 text-center text-4xl font-serif">Our Story - Coming Soon</div>} />
            <Route path="/journal" element={<div className="pt-40 text-center text-4xl font-serif">The Journal - Coming Soon</div>} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  );
}

export default App;
