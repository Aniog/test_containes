import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/layout/Navbar';
import CartDrawer from './components/cart/CartDrawer';
import Footer from './components/layout/Footer';
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
              <Route path="/about" element={<PlaceholderPage title="About Velmora" />} />
              <Route path="/journal" element={<PlaceholderPage title="Journal" />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

function PlaceholderPage({ title }) {
  return (
    <div className="container-premium py-20 text-center">
      <h1 className="font-serif text-4xl mb-4">{title}</h1>
      <div className="hairline w-24 mx-auto mb-8" />
      <p className="text-[#6B6B6B] max-w-2xl mx-auto">
        This page is coming soon. Continue exploring our collection.
      </p>
    </div>
  );
}

export default App;
