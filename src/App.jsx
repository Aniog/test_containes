import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './components/layout/Layout';
import Homepage from './components/home/Homepage';
import ProductDetail from './components/product/ProductDetail';
import ShopPage from './components/shop/ShopPage';
import CollectionsPage from './pages/CollectionsPage';
import AboutPage from './pages/AboutPage';
import JournalPage from './pages/JournalPage';

function App() {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/collections" element={<CollectionsPage />} />
            <Route path="/collections/:category" element={<ShopPage />} />
            <Route path="/product/:slug" element={<ProductDetail />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/journal" element={<JournalPage />} />
            {/* Catch-all route for 404 */}
            <Route path="*" element={
              <div className="min-h-screen pt-20 flex items-center justify-center">
                <div className="text-center">
                  <h1 className="font-serif text-4xl text-charcoal-900 mb-4">Page Not Found</h1>
                  <a href="/" className="btn-primary text-xs">Return Home</a>
                </div>
              </div>
            } />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  );
}

export default App;
