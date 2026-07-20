import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:slug" element={<ProductDetail />} />
            {/* Placeholder routes */}
            <Route path="/about" element={<ComingSoon title="Our Story" />} />
            <Route path="/journal" element={<ComingSoon title="Journal" />} />
            <Route path="/contact" element={<ComingSoon title="Contact Us" />} />
            <Route path="/shipping" element={<ComingSoon title="Shipping & Returns" />} />
            <Route path="/faq" element={<ComingSoon title="FAQs" />} />
            <Route path="/checkout" element={<ComingSoon title="Checkout" />} />
            {/* Catch all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  );
}

function ComingSoon({ title }) {
  return (
    <div className="min-h-screen bg-velmora-cream flex items-center justify-center pt-20">
      <div className="text-center px-4">
        <h1 className="font-serif text-3xl md:text-4xl text-velmora-charcoal mb-4">
          {title}
        </h1>
        <p className="text-velmora-text-secondary font-sans mb-8">
          This page is coming soon.
        </p>
        <a
          href="/"
          className="inline-block px-8 py-3 bg-velmora-gold text-white font-sans font-medium text-sm tracking-wide hover:bg-velmora-gold-dark transition-colors"
        >
          Return Home
        </a>
      </div>
    </div>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen bg-velmora-cream flex items-center justify-center pt-20">
      <div className="text-center px-4">
        <h1 className="font-serif text-6xl md:text-8xl text-velmora-gold mb-4">
          404
        </h1>
        <h2 className="font-serif text-2xl md:text-3xl text-velmora-charcoal mb-4">
          Page Not Found
        </h2>
        <p className="text-velmora-text-secondary font-sans mb-8">
          The page you're looking for doesn't exist.
        </p>
        <a
          href="/"
          className="inline-block px-8 py-3 bg-velmora-gold text-white font-sans font-medium text-sm tracking-wide hover:bg-velmora-gold-dark transition-colors"
        >
          Return Home
        </a>
      </div>
    </div>
  );
}

export default App;
