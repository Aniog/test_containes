import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import ProductDetail from '@/pages/ProductDetail';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen flex flex-col bg-cream">
          <Navbar />
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

function PlaceholderPage({ title }) {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center pt-20">
      <div className="text-center px-4">
        <p className="font-sans text-xs font-medium tracking-[0.3em] uppercase text-gold mb-4">Velmora</p>
        <h1 className="font-serif text-5xl font-light text-obsidian mb-4">{title}</h1>
        <p className="font-sans text-sm text-obsidian-400">Coming soon.</p>
      </div>
    </div>
  );
}

export default App;

