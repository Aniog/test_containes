import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/layout/CartDrawer';
import HomePage from '@/pages/HomePage';
import ShopPage from '@/pages/ShopPage';
import ProductDetailPage from '@/pages/ProductDetailPage';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <CartDrawer />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/product/:slug" element={<ProductDetailPage />} />
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
    <div className="min-h-screen bg-velmora-cream flex items-center justify-center pt-20">
      <div className="text-center px-4">
        <p className="font-sans text-xs uppercase tracking-[0.3em] text-velmora-gold mb-4">Velmora</p>
        <h1 className="font-serif text-5xl text-velmora-text-dark font-light mb-4">{title}</h1>
        <p className="font-sans text-sm text-velmora-text-muted">Coming soon.</p>
      </div>
    </div>
  );
}

export default App;

