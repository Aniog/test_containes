import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import './App.css';

function App() {
  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="product/:id" element={<ProductDetail />} />
            {/* Placeholder routes */}
            <Route path="collections" element={<div className="pt-32 px-12 h-screen">Collections Page</div>} />
            <Route path="about" element={<div className="pt-32 px-12 h-screen">About Page</div>} />
            <Route path="journal" element={<div className="pt-32 px-12 h-screen">Journal Page</div>} />
          </Route>
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
