import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetail from './pages/ProductDetail';

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <CartProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-cream-50">
          <Navbar onCartOpen={() => setCartOpen(true)} />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/product/:productId" element={<ProductDetail />} />
            </Routes>
          </div>
          <Footer />
        </div>
        <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
