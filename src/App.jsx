import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import { CartProvider } from './context/CartContext';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="collections" element={<Shop />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="category/:category" element={<Shop />} />
            {/* Catch all to Home */}
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
