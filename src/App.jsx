import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import { CartProvider } from './lib/CartContext';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="collections" element={<Shop />} />
            <Route path="product/:id" element={<ProductDetail />} />
            
            {/* Fallback routes for demo */}
            <Route path="about" element={<div className="pt-32 pb-24 text-center font-serif text-3xl">Our Story (Coming Soon)</div>} />
            <Route path="journal" element={<div className="pt-32 pb-24 text-center font-serif text-3xl">Journal (Coming Soon)</div>} />
            <Route path="*" element={<div className="pt-32 pb-24 text-center font-serif text-3xl">Page Not Found</div>} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App
