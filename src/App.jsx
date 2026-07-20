import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/lib/CartContext';
import Layout from '@/Layout';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import ProductDetail from '@/pages/ProductDetail';
import About from '@/pages/About';

export default function App() {
  if (typeof window !== 'undefined') {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, options) => {
      const { replace } = options || {};
      if (replace) {
        window.history.replaceState({}, '', path);
      } else {
        window.history.pushState({}, '', path);
      }
      window.dispatchEvent(new PopStateEvent('popstate', { state: {} }));
    };
  }

  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/journal" element={<About />} />
            <Route path="/shipping" element={<About />} />
            <Route path="/care" element={<About />} />
            <Route path="/size-guide" element={<About />} />
            <Route path="/faq" element={<About />} />
            <Route path="/contact" element={<About />} />
            <Route path="/stockists" element={<About />} />
            <Route path="/checkout" element={<About />} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  );
}
