import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CartDrawer from '@/components/ui/CartDrawer';
import { useCart } from '@/context/CartContext';

export default function Layout() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { closeCart } = useCart();
  const location = useLocation();

  // Close cart drawer on page navigation so product pages and other views remain interactive
  useEffect(() => {
    closeCart();
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white text-[#2C2825]">
      <Navbar 
        onSearchOpen={() => setIsSearchOpen(true)}
      />
      
      <main>
        <Outlet />
      </main>

      <Footer />

      <CartDrawer />

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 bg-black/40" onClick={() => setIsSearchOpen(false)}>
          <div className="bg-white w-full max-w-lg mx-4 p-8" onClick={e => e.stopPropagation()}>
            <input 
              type="text" 
              placeholder="Search our collection..." 
              className="w-full text-lg border-b border-[#E8E4DE] pb-3 focus:outline-none placeholder:text-[#8B8178]"
              autoFocus
            />
            <p className="text-xs text-[#8B8178] mt-4">Try: earrings, huggies, gold, necklace</p>
          </div>
        </div>
      )}
    </div>
  );
}
