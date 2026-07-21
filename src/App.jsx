import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import { CartProvider } from './context/CartContext';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <CartProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/collections" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/about" element={<div className="pt-32 pb-60 px-12 text-center serif-uppercase text-3xl">Our Story - Coming Soon</div>} />
          <Route path="/journal" element={<div className="pt-32 pb-60 px-12 text-center serif-uppercase text-3xl">Journal - Coming Soon</div>} />
        </Routes>
      </Layout>
    </CartProvider>
  );
}

export default App;
