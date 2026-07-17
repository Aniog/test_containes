import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/layout/Navbar';
import CartDrawer from '@/components/layout/CartDrawer';
import Footer from '@/components/layout/Footer';
import HomePage from '@/pages/HomePage';
import ShopPage from '@/pages/ShopPage';
import ProductPage from '@/pages/ProductPage';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <CartDrawer />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/about" element={<AboutPlaceholder />} />
              <Route path="/journal" element={<PlaceholderPage title="Journal" />} />
              <Route path="/shipping" element={<PlaceholderPage title="Shipping & Returns" />} />
              <Route path="/care" element={<PlaceholderPage title="Care Guide" />} />
              <Route path="/faq" element={<PlaceholderPage title="FAQ" />} />
              <Route path="/contact" element={<PlaceholderPage title="Contact Us" />} />
              <Route path="/sustainability" element={<PlaceholderPage title="Sustainability" />} />
              <Route path="/stockists" element={<PlaceholderPage title="Stockists" />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

function AboutPlaceholder() {
  return (
    <div className="min-h-screen bg-cream pt-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-20">
        <p className="text-xs tracking-widest3 uppercase text-accent mb-4">Our Story</p>
        <h1 className="font-serif text-3xl lg:text-4xl text-deep-900 font-light mb-8">About Velmora</h1>
        <div className="prose prose-sm text-deep-600 space-y-4">
          <p>
            Velmora was born from a simple belief: that fine jewelry should not be locked away for special occasions.
            Founded in 2022, we set out to create demi-fine pieces that feel luxurious but are designed for everyday life.
          </p>
          <p>
            Each Velmora piece is crafted from 18K gold-plated brass with meticulous attention to detail. We work
            closely with artisan workshops that share our commitment to quality, ethical production, and
            environmental responsibility.
          </p>
          <p>
            Our design philosophy blends timeless elegance with modern sensibility — clean lines, sculptural forms,
            and subtle sparkle. We produce in small batches to minimize waste and ensure every piece meets our
            exacting standards before it reaches you.
          </p>
          <p>
            Because we believe luxury isn't about the price tag. It's about the feeling a piece gives you when you
            put it on — confident, radiant, and completely yourself.
          </p>
        </div>
      </div>
    </div>
  );
}

function PlaceholderPage({ title }) {
  return (
    <div className="min-h-screen bg-cream pt-24 flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-serif text-3xl text-deep-900 font-light mb-4">{title}</h1>
        <p className="text-sm text-deep-400">This page is coming soon.</p>
      </div>
    </div>
  );
}
