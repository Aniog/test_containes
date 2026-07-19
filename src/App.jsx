import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/collections" element={<Shop />} />
          <Route path="/collections/bestsellers" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="*" element={<div className="min-h-[50vh] flex items-center justify-center pt-24"><h1 className="text-2xl font-serif">Page Not Found</h1></div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App
