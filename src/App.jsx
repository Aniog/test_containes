import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
        <CartDrawer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App
