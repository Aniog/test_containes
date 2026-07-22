import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './components/layout/Layout';
import Footer from './components/layout/Footer';
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
            <Route path="/product/:id" element={<ProductDetail />} />
            {/* Placeholder routes */}
            <Route path="/about" element={<ComingSoon title="Our Story" />} />
            <Route path="/journal" element={<ComingSoon title="Journal" />} />
            <Route path="/contact" element={<ComingSoon title="Contact Us" />} />
            <Route path="/shipping" element={<ComingSoon title="Shipping Info" />} />
            <Route path="/returns" element={<ComingSoon title="Returns & Exchanges" />} />
            <Route path="/checkout" element={<ComingSoon title="Checkout" />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
        <Footer />
      </Router>
    </CartProvider>
  );
}

function ComingSoon({ title }) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-cream">
      <div className="text-center">
        <h1 className="heading-serif text-3xl mb-4">{title}</h1>
        <p className="font-sans text-charcoal-600">Coming soon...</p>
      </div>
    </div>
  );
}

export default App;
