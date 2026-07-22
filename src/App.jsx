import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import ProductDetail from '@/pages/ProductDetail';
import './App.css';

function App() {
  return (
    <Router>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:slug" element={<ProductDetail />} />
            <Route path="/about" element={<PlaceholderPage title="Our Story" />} />
            <Route path="/journal" element={<PlaceholderPage title="Journal" />} />
            <Route path="*" element={<PlaceholderPage title="Page Not Found" />} />
          </Routes>
        </Layout>
      </CartProvider>
    </Router>
  );
}

function PlaceholderPage({ title }) {
  return (
    <div className="min-h-screen bg-ivory flex items-center justify-center pt-20">
      <div className="text-center">
        <p className="font-inter text-xs uppercase tracking-widest text-gold mb-4">Velmora</p>
        <h1 className="font-cormorant text-5xl text-charcoal font-light tracking-wide">{title}</h1>
        <p className="font-inter text-sm text-warm-gray mt-4">Coming soon.</p>
      </div>
    </div>
  );
}

export default App;

