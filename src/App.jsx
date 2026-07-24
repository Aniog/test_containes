import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/layout/CartDrawer';
import { Toaster } from '@/components/ui/sonner';

// Pages
import Home from '@/pages/Home';
import Product from '@/pages/Product';
import Collection from '@/pages/Collection';

// Mock empty pages for routing links
const PlaceholderPage = ({ title }) => (
  <div className="flex items-center justify-center min-h-[60vh] pt-24 bg-background">
    <h1 className="text-3xl font-serif">{title}</h1>
  </div>
);

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/collections/:categoryId" element={<Collection />} />
            <Route path="/about" element={<PlaceholderPage title="Our Story" />} />
            <Route path="/journal" element={<PlaceholderPage title="Journal" />} />
            <Route path="/faq" element={<PlaceholderPage title="FAQ" />} />
            <Route path="/shipping" element={<PlaceholderPage title="Shipping & Returns" />} />
            <Route path="/care" element={<PlaceholderPage title="Jewelry Care" />} />
            <Route path="/contact" element={<PlaceholderPage title="Contact Us" />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        
        <Footer />
        <CartDrawer />
        <Toaster position="bottom-right" className="font-sans" />
      </div>
    </Router>
  );
}

export default App;
