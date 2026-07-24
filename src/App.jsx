import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navigation from './components/Navigation';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:slug" element={<ProductDetail />} />
              {/* Placeholder routes for other pages */}
              <Route path="/about" element={<ComingSoon title="About Us" />} />
              <Route path="/journal" element={<ComingSoon title="Journal" />} />
              <Route path="/contact" element={<ComingSoon title="Contact" />} />
              <Route path="/shipping" element={<ComingSoon title="Shipping & Returns" />} />
              <Route path="/faq" element={<ComingSoon title="FAQ" />} />
              <Route path="/care-guide" element={<ComingSoon title="Jewelry Care" />} />
              <Route path="/size-guide" element={<ComingSoon title="Size Guide" />} />
              <Route path="/sustainability" element={<ComingSoon title="Sustainability" />} />
              <Route path="/careers" element={<ComingSoon title="Careers" />} />
              <Route path="/privacy" element={<ComingSoon title="Privacy Policy" />} />
              <Route path="/terms" element={<ComingSoon title="Terms of Service" />} />
              <Route path="/checkout" element={<ComingSoon title="Checkout" />} />
            </Routes>
          </main>
          <Footer />
          <CartDrawer />
        </div>
      </CartProvider>
    </Router>
  );
}

// Placeholder component for pages not yet implemented
function ComingSoon({ title }) {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="font-serif text-3xl md:text-4xl mb-4">{title}</h1>
        <p className="text-[#8B7E74] mb-8">
          This page is coming soon. In the meantime, feel free to explore our collection.
        </p>
        <a href="/shop" className="btn-primary inline-block">
          Shop Now
        </a>
      </div>
    </div>
  );
}

export default App;
