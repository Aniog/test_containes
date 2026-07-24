import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { Product } from './pages/Product';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="*" element={
            <div className="min-h-screen pt-40 px-4 text-center">
              <h1 className="font-serif text-4xl mb-4">Coming Soon</h1>
              <p className="text-muted-foreground">This page is under construction.</p>
            </div>
          } />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
