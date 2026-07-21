import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';
import Home from '@/pages/Home';
import ProductDetail from '@/pages/ProductDetail';
import Collection from '@/pages/Collection';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-ivory">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/collection" element={<Collection />} />
              <Route path="/collection/:category" element={<Collection />} />
              {/* Placeholder routes */}
              <Route path="/about" element={<ComingSoon title="Our Story" />} />
              <Route path="/journal" element={<ComingSoon title="Journal" />} />
              <Route path="/contact" element={<ComingSoon title="Contact Us" />} />
              <Route path="/shipping" element={<ComingSoon title="Shipping & Returns" />} />
              <Route path="/size-guide" element={<ComingSoon title="Size Guide" />} />
              <Route path="/care" element={<ComingSoon title="Care Instructions" />} />
              <Route path="/faq" element={<ComingSoon title="FAQs" />} />
              <Route path="/sustainability" element={<ComingSoon title="Sustainability" />} />
              <Route path="/careers" element={<ComingSoon title="Careers" />} />
              <Route path="/press" element={<ComingSoon title="Press" />} />
              <Route path="/privacy" element={<ComingSoon title="Privacy Policy" />} />
              <Route path="/terms" element={<ComingSoon title="Terms of Service" />} />
            </Routes>
          </main>
          <Footer />
          <CartDrawer />
        </div>
      </Router>
    </CartProvider>
  );
}

// Placeholder component for routes not yet implemented
function ComingSoon({ title }) {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="text-center px-4">
        <h1 className="font-serif text-3xl md:text-4xl text-espresso mb-4">{title}</h1>
        <p className="text-cocoa mb-8">This page is coming soon.</p>
        <a href="/" className="text-gold hover:underline">Return to Homepage</a>
      </div>
    </div>
  );
}

export default App;
