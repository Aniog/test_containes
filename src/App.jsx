import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import Product from '@/pages/Product';
import About from '@/pages/About';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/collections" element={<Shop />} />
          <Route path="/journal" element={<About />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
