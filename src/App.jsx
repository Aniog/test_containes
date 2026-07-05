import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Toaster } from 'sonner';

// Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Journal from './pages/Journal';

import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/journal" element={<Journal />} />
        </Routes>
      </Router>
      <Toaster 
        position="bottom-center" 
        richColors 
        closeButton
        className="sonner-toast"
      />
    </CartProvider>
  );
}

export default App;
