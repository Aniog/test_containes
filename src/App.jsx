import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="collections/:category" element={<Shop />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}


export default App
