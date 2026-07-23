import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Product from './pages/Product';
import { Toaster } from 'sonner';
// import './App.css' // Removed to keep it clean

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:category" element={<Shop />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </Layout>
      <Toaster position="bottom-right" richColors />
    </BrowserRouter>
  );
}

export default App;
