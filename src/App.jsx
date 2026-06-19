import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/layout/Navbar';
import CartDrawer from '@/components/layout/CartDrawer';
import HomePage from '@/pages/HomePage';
import ProductPage from '@/pages/ProductPage';
import ShopPage from '@/pages/ShopPage';
import AboutPage from '@/pages/AboutPage';
import JournalPage from '@/pages/JournalPage';
import CollectionsPage from '@/pages/CollectionsPage';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-brand-cream">
          <Navbar />
          <CartDrawer />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/journal" element={<JournalPage />} />
            <Route path="/collections" element={<CollectionsPage />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
