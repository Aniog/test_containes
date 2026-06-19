import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CartDrawer from './components/layout/CartDrawer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-velmora-ivory text-velmora-dark">
          <Navbar />
          <CartDrawer />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/about" element={<AboutPlaceholder />} />
              <Route path="/journal" element={<JournalPlaceholder />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

function AboutPlaceholder() {
  return (
    <div className="min-h-screen pt-24 section-padding py-20 text-center">
      <p className="font-sans text-caption uppercase tracking-widest-2xl text-gold mb-3">Coming Soon</p>
      <h1 className="font-serif text-heading-xl text-velmora-dark mb-4">Our Story</h1>
      <p className="font-sans text-body text-velmora-stone max-w-md mx-auto">
        We're crafting something special. In the meantime, explore our collection of fine jewelry.
      </p>
    </div>
  );
}

function JournalPlaceholder() {
  return (
    <div className="min-h-screen pt-24 section-padding py-20 text-center">
      <p className="font-sans text-caption uppercase tracking-widest-2xl text-gold mb-3">Coming Soon</p>
      <h1 className="font-serif text-heading-xl text-velmora-dark mb-4">The Journal</h1>
      <p className="font-sans text-body text-velmora-stone max-w-md mx-auto">
        Style guides, care tips, and stories are on their way. Discover our jewelry in the meantime.
      </p>
    </div>
  );
}

export default App;
