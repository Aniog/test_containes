import { useState, useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import './App.css';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import DealsSection from '@/components/deals/DealsSection';
import NewsSection from '@/components/news/NewsSection';
import StoreSection from '@/components/store/StoreSection';
import CartSidebar from '@/components/store/CartSidebar';

function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const pageRef = useRef(null);

  useEffect(() => {
    if (pageRef.current) {
      ImageHelper.loadImages(strkImgConfig, pageRef.current);
    }
  }, []);

  const addToCart = (game) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === game.id);
      if (existing) {
        return prev.map((i) => i.id === game.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { ...game, qty: 1 }];
    });
    setCartOpen(true);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const clearCart = () => setCart([]);

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  return (
    <div className="min-h-screen bg-[#0d0d14]" ref={pageRef}>
      <Navbar cartCount={cartCount} onCartClick={() => setCartOpen(true)} />

      <HeroSection />
      <DealsSection />
      <NewsSection />
      <StoreSection onAddToCart={addToCart} />

      <Footer />

      {cartOpen && (
        <CartSidebar
          cart={cart}
          onClose={() => setCartOpen(false)}
          onRemove={removeFromCart}
          onClear={clearCart}
        />
      )}
    </div>
  );
}

export default App;
