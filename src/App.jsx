import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import CartDrawer from './components/ui/CartDrawer';
import Home from './pages/Home';
import Collection from './pages/Collection';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <CartProvider>
      <Router>
        <Navigation />
        <CartDrawer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/about" element={<PlaceholderPage title="About Us" />} />
          <Route path="/journal" element={<PlaceholderPage title="Journal" />} />
          <Route path="/contact" element={<PlaceholderPage title="Contact" />} />
          <Route path="/shipping" element={<PlaceholderPage title="Shipping & Returns" />} />
          <Route path="/faq" element={<PlaceholderPage title="FAQ" />} />
          <Route path="/care" element={<PlaceholderPage title="Jewelry Care" />} />
          <Route path="/privacy" element={<PlaceholderPage title="Privacy Policy" />} />
          <Route path="/terms" element={<PlaceholderPage title="Terms of Service" />} />
          <Route path="*" element={<PlaceholderPage title="Page Not Found" />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

function PlaceholderPage({ title }) {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="text-center">
        <h1 className="font-serif text-4xl text-charcoal-800 mb-4">{title}</h1>
        <p className="text-charcoal-500 mb-6">This page is coming soon.</p>
        <a href="/" className="btn-outline text-xs">
          Back to Home
        </a>
      </div>
    </div>
  );
}

export default App;
