import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import { getProducts } from './api/products';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        console.error('Failed to fetch products:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-[#F9F7F2]">
        <div className="text-center">
          <h2 className="font-serif text-3xl tracking-[0.3em] mb-4 animate-pulse">VELMORA</h2>
          <div className="h-px w-20 bg-[#C5A059] mx-auto overflow-hidden">
            <div className="h-full bg-[#1A1A1A] w-full -translate-x-full animate-progress" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home products={products} />} />
        <Route path="/shop" element={<Shop products={products} />} />
        <Route path="/collections" element={<Shop products={products} />} />
        <Route path="/product/:id" element={<ProductDetail products={products} />} />
        <Route path="/about" element={<div className="pt-40 pb-20 text-center font-serif text-3xl">Our Story Coming Soon</div>} />
        <Route path="/journal" element={<div className="pt-40 pb-20 text-center font-serif text-3xl">Journal Coming Soon</div>} />
      </Routes>
    </Layout>
  );
}

export default App;
