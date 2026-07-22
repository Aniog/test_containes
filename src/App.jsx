import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import ProductDetail from '@/pages/ProductDetail';

function App() {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:slug" element={<ProductDetail />} />
            <Route path="/about" element={<ComingSoon title="Our Story" />} />
            <Route path="/journal" element={<ComingSoon title="Journal" />} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  );
}

// Placeholder component for pages not yet built
function ComingSoon({ title }) {
  return (
    <div className="min-h-screen pt-[72px] flex items-center justify-center">
      <div className="text-center max-w-md px-6">
        <h1 className="font-serif text-4xl text-charcoal mb-4">{title}</h1>
        <p className="text-charcoal-light mb-8">
          We're working on something beautiful for you. Check back soon!
        </p>
        <a href="/" className="btn-secondary">
          Return Home
        </a>
      </div>
    </div>
  );
}

export default App
