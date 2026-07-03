// Velmora Fine Jewelry - Main App Component
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './components/layout/Layout';
import HomePage from './components/home/HomePage';
import ProductDetail from './components/products/ProductDetail';
import CollectionPage from './components/products/CollectionPage';

function App() {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/collections/all" element={<CollectionPage />} />
            <Route path="/collections/:category" element={<CollectionPage />} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  );
}

export default App;
