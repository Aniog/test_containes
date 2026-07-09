import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import { Toaster } from './components/ui/sonner';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="collections" element={<Shop />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="*" element={
              <div className="flex-1 flex items-center justify-center min-h-[50vh]">
                <div className="text-center">
                  <h1 className="text-4xl font-serif mb-4">Page Not Found</h1>
                  <p className="text-muted-foreground mb-8">The page you are looking for does not exist.</p>
                  <a href="/" className="px-8 py-3 bg-primary text-primary-foreground uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors">
                    Return to Home
                  </a>
                </div>
              </div>
            } />
          </Route>
        </Routes>
        <Toaster position="top-center" />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
