import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Toaster } from 'sonner';
import Layout from './Layout';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Shop from './pages/Shop';

function App() {
  return (
    <Router>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            {/* Catch-all for not implemented routes */}
            <Route path="*" element={<div className="container mx-auto py-24 px-4 text-center"><h1 className="font-serif text-4xl mb-4">Page Not Found</h1><p>The page you are looking for does not exist.</p></div>} />
          </Routes>
        </Layout>
        <Toaster position="bottom-right" richColors />
      </CartProvider>
    </Router>
  );
}

export default App;
