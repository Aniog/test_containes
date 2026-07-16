import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Layout from './Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <Router>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
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
    <div className="min-h-screen bg-parchment flex items-center justify-center pt-20">
      <div className="text-center">
        <p className="font-inter text-[10px] uppercase tracking-[0.2em] text-gold mb-3">Velmora</p>
        <h1 className="font-cormorant text-5xl font-light text-charcoal tracking-wide mb-4">{title}</h1>
        <p className="font-inter text-sm text-stone-warm">Coming soon.</p>
      </div>
    </div>
  );
}

export default App;
