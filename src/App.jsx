import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Toaster } from 'sonner';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-[#f8f6f3]">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/collections" element={<ShopPage />} />
            <Route path="/about" element={<HomePage />} />
            <Route path="/journal" element={<HomePage />} />
          </Routes>
          <Footer />
          <CartDrawer />
          <Toaster position="top-center" richColors closeButton />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
