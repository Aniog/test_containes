import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';
import CollectionsPage from './pages/CollectionsPage';
import AboutPage from './pages/AboutPage';
import JournalPage from './pages/JournalPage';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-ivory text-espresso">
          <Navbar />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/collections" element={<CollectionsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/journal" element={<JournalPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App
