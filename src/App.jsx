import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { CartProvider } from './context/CartContext';
import Nav from './components/Nav';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import './index.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-[#F8F5F1]">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
          <CartDrawer />
          <Toaster position="top-center" richColors closeButton />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
