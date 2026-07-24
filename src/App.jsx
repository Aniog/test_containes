import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import { CartProvider } from './context/CartContext';
import { Toaster } from 'sonner';

function App() {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/collections" element={<Shop />} />
            <Route path="/about" element={<div className="pt-32 px-12 text-center h-[60vh] flex flex-col justify-center text-white">Our Story coming soon.</div>} />
            <Route path="/journal" element={<div className="pt-32 px-12 text-center h-[60vh] flex flex-col justify-center text-white">Journal coming soon.</div>} />
          </Routes>
        </Layout>
        <Toaster position="bottom-right" richColors theme="dark" />
      </Router>
    </CartProvider>
  );
}

export default App;
