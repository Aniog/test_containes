import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/cart/CartContext';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Collection } from './pages/Collection';
import { ProductDetails } from './pages/ProductDetails';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="collections/:categoryId" element={<Collection />} />
            <Route path="products/:id" element={<ProductDetails />} />
            <Route path="*" element={
              <div className="container mx-auto py-32 text-center h-[50vh] flex flex-col items-center justify-center">
                <h1 className="text-4xl font-serif mb-4">404 - Page Not Found</h1>
                <p className="text-muted-foreground mb-8">The page you are looking for does not exist.</p>
                <a href="/" className="uppercase tracking-widest text-sm border-b border-foreground pb-1">Return Home</a>
              </div>
            } />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
