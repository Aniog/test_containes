import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import CartDrawer from './components/layout/CartDrawer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Nav />
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
      </CartProvider>
    </BrowserRouter>
  );
}

function PlaceholderPage({ title }) {
  return (
    <div className="min-h-screen bg-ivory flex items-center justify-center pt-20">
      <div className="text-center px-6">
        <p className="font-sans text-xs uppercase tracking-widest text-champagne font-medium mb-4">Velmora</p>
        <h1 className="font-serif text-5xl text-charcoal font-light mb-4">{title}</h1>
        <p className="font-sans text-sm text-stone mb-8">This page is coming soon.</p>
        <a href="/" className="font-sans text-xs uppercase tracking-widest text-champagne-dark font-semibold hover:text-champagne transition-colors">
          ← Back to Home
        </a>
      </div>
    </div>
  );
}

export default App;
