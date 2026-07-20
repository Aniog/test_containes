import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'sonner';

import Home from './components/home/Home';
import Shop from './components/shop/Shop';
import ProductDetail from './components/shop/ProductDetail';
import Layout from './components/layout/Layout';

const PlaceholderPage = ({ title }) => (
  <Layout>
    <div className="container mx-auto px-4 py-32 text-center">
      <h1 className="text-4xl font-serif mb-4">{title}</h1>
      <p className="text-muted-foreground">This page is under construction.</p>
    </div>
  </Layout>
);

function App() {
  return (
    <BrowserRouter>
      <Toaster position="bottom-center" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/collections" element={<PlaceholderPage title="Collections" />} />
        <Route path="/about" element={<PlaceholderPage title="Our Story" />} />
        <Route path="/journal" element={<PlaceholderPage title="Journal" />} />
        <Route path="/category/:categoryId" element={<Navigate to="/shop" replace />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
