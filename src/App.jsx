import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';
import { CartDrawer } from './components/layout/CartDrawer';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetail } from './pages/ProductDetail';
import { About } from './pages/About';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-cream">
          <Navigation />
          <CartDrawer />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/collections" element={<Shop />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/journal" element={<ComingSoon title="Journal" />} />
            <Route path="/contact" element={<ComingSoon title="Contact" />} />
            <Route path="/shipping" element={<ComingSoon title="Shipping & Returns" />} />
            <Route path="/care" element={<ComingSoon title="Care Guide" />} />
            <Route path="/faq" element={<ComingSoon title="FAQs" />} />
            <Route path="/sustainability" element={<ComingSoon title="Sustainability" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

function ComingSoon({ title }) {
  return (
    <main className="flex-1 flex items-center justify-center pt-20 md:pt-24">
      <div className="text-center px-4">
        <h1 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">{title}</h1>
        <p className="text-charcoal/60">This page is coming soon.</p>
      </div>
    </main>
  );
}

function NotFound() {
  return (
    <main className="flex-1 flex items-center justify-center pt-20 md:pt-24">
      <div className="text-center px-4">
        <h1 className="font-serif text-6xl text-charcoal mb-4">404</h1>
        <p className="text-charcoal/60 mb-6">Page not found</p>
        <a href="/" className="text-gold-600 hover:text-gold-700 underline">
          Return Home
        </a>
      </div>
    </main>
  );
}

export default App;
