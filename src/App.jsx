import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Navigation from '@/components/layout/Navigation';
import CartDrawer from '@/components/layout/CartDrawer';
import Footer from '@/components/layout/Footer';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import ProductDetail from '@/pages/ProductDetail';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <Navigation />
        <CartDrawer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
          {/* Fallback routes */}
          <Route path="/about" element={<PlaceholderPage title="Our Story" />} />
          <Route path="/journal" element={<PlaceholderPage title="Journal" />} />
          <Route path="/help" element={<PlaceholderPage title="Help & FAQ" />} />
          <Route path="/contact" element={<PlaceholderPage title="Contact Us" />} />
          <Route path="*" element={<PlaceholderPage title="Page Not Found" />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

function PlaceholderPage({ title }) {
  return (
    <div className="min-h-screen bg-ivory pt-16 lg:pt-20 flex items-center justify-center">
      <div className="text-center px-6">
        <p className="text-xs uppercase tracking-widest font-sans text-gold mb-4">Velmora</p>
        <h1 className="font-serif text-5xl text-charcoal font-light mb-4">{title}</h1>
        <div className="w-12 h-px bg-gold mx-auto mb-6" />
        <p className="text-sm font-sans text-stone mb-8">This page is coming soon.</p>
        <a
          href="/"
          className="text-xs uppercase tracking-widest font-sans text-charcoal border border-charcoal px-8 py-3 hover:bg-charcoal hover:text-ivory transition-all duration-300 inline-block"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}

export default App;
