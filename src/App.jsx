import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';
import Home from './pages/Home.jsx';
import Shop from './pages/Shop.jsx';
import ProductDetail from './pages/ProductDetail.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="collections" element={<Shop />} />
        <Route path="product/:id" element={<ProductDetail />} />
        {/* Placeholders for other routes */}
        <Route path="about" element={<div className="pt-32 text-center h-screen font-serif text-2xl">About Page Placeholder</div>} />
        <Route path="journal" element={<div className="pt-32 text-center h-screen font-serif text-2xl">Journal Page Placeholder</div>} />
      </Route>
    </Routes>
  );
}
