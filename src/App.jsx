import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/layout/CartDrawer';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import ProductDetail from '@/pages/ProductDetail';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  return null;
}

function AppLayout() {
  return (
    <>
      <Navbar />
      <CartDrawer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:slug" element={<ProductDetail />} />
        <Route path="/about" element={<PlaceholderPage title="Our Story" />} />
        <Route path="/journal" element={<PlaceholderPage title="Journal" />} />
        <Route path="*" element={<PlaceholderPage title="Page Not Found" />} />
      </Routes>
      <Footer />
    </>
  );
}

function PlaceholderPage({ title }) {
  return (
    <div className="min-h-screen bg-velmora-cream pt-20 flex items-center justify-center">
      <div className="text-center">
        <p className="font-manrope text-xs uppercase tracking-widest text-velmora-gold mb-4">Velmora</p>
        <h1 className="font-cormorant text-4xl md:text-5xl font-light text-velmora-obsidian mb-4">{title}</h1>
        <p className="font-manrope text-sm text-velmora-muted">Coming soon.</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <CartProvider>
        <AppLayout />
      </CartProvider>
    </Router>
  );
}

export default App;
