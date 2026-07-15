import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './pages/Home.jsx';
import Shop from './pages/Shop.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import Placeholder from './pages/Placeholder.jsx';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/collections" element={<Placeholder title="Collections" />} />
        <Route path="/about" element={<Placeholder title="Our Story" />} />
        <Route path="/journal" element={<Placeholder title="The Journal" />} />
      </Routes>
    </Layout>
  );
}

export default App;
