import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductDetail from './pages/ProductDetail';
import ShopPage from './pages/ShopPage';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <CartDrawer />
          
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/collections" element={<ShopPage />} />
              <Route path="/about" element={<div className="min-h-screen flex items-center justify-center"><h1 className="font-serif text-4xl">About Page - Coming Soon</h1></div>} />
              <Route path="/journal" element={<div className="min-h-screen flex items-center justify-center"><h1 className="font-serif text-4xl">Journal Page - Coming Soon</h1></div>} />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
