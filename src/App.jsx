import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Shop from './pages/Shop';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="about" element={<div className="pt-32 text-center h-screen"><h1 className="font-serif text-4xl">Our Story</h1><p className="mt-4 text-velmora-muted">Coming soon.</p></div>} />
          <Route path="journal" element={<div className="pt-32 text-center h-screen"><h1 className="font-serif text-4xl">Journal</h1><p className="mt-4 text-velmora-muted">Coming soon.</p></div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
