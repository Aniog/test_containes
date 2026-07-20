import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LayoutWrapper from './components/layout/LayoutWrapper';
import { CartProvider } from './context/CartContext';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import { Toaster } from 'sonner';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LayoutWrapper />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="product/:id" element={<ProductDetail />} />
          </Route>
        </Routes>
      </Router>
      <Toaster position="top-center" />
    </CartProvider>
  );
}

export default App
