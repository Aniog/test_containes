import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { CartProvider } from './context/CartContext';

// Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Journal from './pages/Journal';
import ProductDetail from './components/product/ProductDetail';

import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
        </Routes>
        <Toaster position="top-center" richColors closeButton />
      </Router>
    </CartProvider>
  );
}

export default App;
