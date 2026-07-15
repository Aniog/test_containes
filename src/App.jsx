import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/lib/cart-context';
import Layout from '@/Layout';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import ProductDetail from '@/pages/ProductDetail';

const Placeholder = ({ title }) => (
  <div className="pt-32 pb-20 px-6 flex flex-col items-center justify-center min-h-[60vh]">
    <h1 className="font-serif text-4xl mb-4 tracking-widest uppercase">{title}</h1>
    <p className="text-secondary">Coming soon. We are curating something special for you.</p>
  </div>
);

function App() {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/collections" element={<Placeholder title="Collections" />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/about" element={<Placeholder title="Our Story" />} />
            <Route path="/journal" element={<Placeholder title="Journal" />} />
            <Route path="*" element={<Placeholder title="Not Found" />} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  );
}

export default App;
