import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import CartDrawer from './components/layout/CartDrawer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import './App.css';

function PlaceholderPage({ title }) {
  return (
    <div className="min-h-screen bg-velmora-cream flex items-center justify-center pt-20">
      <div className="text-center px-4">
        <p className="text-xs font-medium tracking-[0.25em] uppercase text-velmora-gold mb-4">Velmora</p>
        <h1 className="font-serif text-4xl md:text-5xl font-light text-velmora-ink tracking-wide mb-6">{title}</h1>
        <div className="w-12 h-px bg-velmora-gold mx-auto mb-8" />
        <p className="text-sm text-velmora-muted mb-8">This page is coming soon.</p>
        <a href="/" className="text-xs font-medium tracking-[0.18em] uppercase text-velmora-gold border-b border-velmora-gold pb-0.5">
          Return Home
        </a>
      </div>
    </div>
  );
}

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

export default App;
