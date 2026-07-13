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
    <div className="min-h-screen bg-cream flex items-center justify-center pt-20">
      <div className="text-center px-6">
        <p className="font-sans text-xs tracking-widest uppercase text-gold mb-4">Velmora</p>
        <h1 className="font-serif text-4xl md:text-5xl text-obsidian font-light mb-4">{title}</h1>
        <div className="w-10 h-px bg-gold mx-auto mb-6" />
        <p className="font-sans text-sm text-stone mb-8">This page is coming soon.</p>
        <a href="/" className="font-sans text-xs tracking-widest uppercase border border-obsidian text-obsidian px-8 py-3 hover:bg-obsidian hover:text-warm-white transition-all duration-300 inline-block">
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
        <div className="flex flex-col min-h-screen bg-cream">
          <Nav />
          <CartDrawer />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:slug" element={<ProductDetail />} />
              <Route path="/about" element={<PlaceholderPage title="Our Story" />} />
              <Route path="/journal" element={<PlaceholderPage title="Journal" />} />
              <Route path="*" element={<PlaceholderPage title="Page Not Found" />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;

