import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider, useCart } from '@/context/CartContext';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import CartDrawer from '@/components/ui/cart-drawer';
import Homepage from '@/components/home/homepage';
import ShopPage from '@/components/shop/shop-page';
import ProductDetail from '@/components/products/product-detail';
import About from '@/pages/About';
import Journal from '@/pages/Journal';

const AppContent = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const { count } = useCart();
  const location = useLocation();

  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen bg-brand-bg text-brand-ink">
      <Navbar onOpenCart={() => setCartOpen(true)} />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/journal" element={<Journal />} />
        </Routes>
      </main>
      {!isHome && <Footer />}
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
};

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
