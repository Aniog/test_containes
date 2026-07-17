import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import './index.css';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="collections" element={<Shop />} />
            <Route path="product/:slug" element={<ProductDetail />} />
            <Route path="product/:slug/:variant" element={<ProductDetail />} />
            {/* Placeholder routes */}
            <Route path="about" element={<ComingSoon title="Our Story" />} />
            <Route path="journal" element={<ComingSoon title="Journal" />} />
            <Route path="contact" element={<ComingSoon title="Contact Us" />} />
            <Route path="shipping" element={<ComingSoon title="Shipping & Returns" />} />
            <Route path="privacy" element={<ComingSoon title="Privacy Policy" />} />
            <Route path="terms" element={<ComingSoon title="Terms of Service" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

// Placeholder component for routes not yet implemented
function ComingSoon({ title }) {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-serif text-3xl text-charcoal-900">{title}</h1>
        <p className="mt-4 font-sans text-charcoal-800/70">This page is coming soon.</p>
      </div>
    </div>
  );
}

export default App;
