import { useState, useCallback } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/nav/Navbar';
import CartDrawer from '@/components/cart/CartDrawer';
import Footer from '@/components/layout/Footer';
import HomePage from '@/pages/HomePage';
import ProductPage from '@/pages/ProductPage';
import ShopPage from '@/pages/ShopPage';
import './App.css';

function SearchOverlay({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white/95 backdrop-blur-sm">
      <div className="max-w-2xl mx-auto px-4 pt-32">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            autoFocus
            className="w-full bg-transparent border-b-2 border-velmora-divider py-4 text-2xl font-serif text-velmora-text placeholder:text-velmora-text-muted focus:outline-none focus:border-velmora-gold transition-colors"
          />
          <button
            onClick={onClose}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-velmora-text-muted hover:text-velmora-text"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

function AppLayout() {
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();

  const handlePreviewNavigate = useCallback(
    (path, options) => {
      if (options?.replace) {
        navigate(path, { replace: true });
      } else {
        navigate(path);
      }
    },
    [navigate]
  );

  if (typeof window !== 'undefined') {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = handlePreviewNavigate;
  }

  return (
    <>
      <Navbar onSearchOpen={() => setSearchOpen(true)} />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
      <CartDrawer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <AppLayout />
      </CartProvider>
    </BrowserRouter>
  );
}
