import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(0,0,0,0.04)]'
          : 'bg-transparent'
      }`}
    >
      <div className="section-padding flex items-center justify-between h-16 md:h-20">
        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 -ml-2 text-bronze-900"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Logo */}
        <Link
          to="/"
          className="font-serif text-2xl md:text-3xl tracking-[0.3em] text-bronze-900 no-underline hover:text-bronze-600 transition-colors"
        >
          VELMORA
        </Link>

        {/* Center nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/shop" className="text-xs tracking-[0.2em] uppercase text-bronze-700 hover:text-bronze-500 transition-colors no-underline">
            Shop
          </Link>
          <Link to="/shop?category=earrings" className="text-xs tracking-[0.2em] uppercase text-bronze-700 hover:text-bronze-500 transition-colors no-underline">
            Earrings
          </Link>
          <Link to="/shop?category=necklaces" className="text-xs tracking-[0.2em] uppercase text-bronze-700 hover:text-bronze-500 transition-colors no-underline">
            Necklaces
          </Link>
          <Link to="/shop?category=huggies" className="text-xs tracking-[0.2em] uppercase text-bronze-700 hover:text-bronze-500 transition-colors no-underline">
            Huggies
          </Link>
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-4">
          <button className="p-2 text-bronze-700 hover:text-bronze-500 transition-colors" aria-label="Search">
            <Search className="w-4 h-4" />
          </button>
          <button
            className="p-2 text-bronze-700 hover:text-bronze-500 transition-colors relative"
            onClick={openCart}
            aria-label="Cart"
          >
            <ShoppingBag className="w-4 h-4" />
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-bronze-600 text-cream text-[10px] flex items-center justify-center rounded-full font-sans">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-64 border-t border-bronze-200' : 'max-h-0'
        }`}
      >
        <div className="section-padding py-4 flex flex-col gap-4 bg-cream">
          <Link to="/shop" onClick={() => setMobileOpen(false)} className="text-xs tracking-[0.2em] uppercase text-bronze-700 hover:text-bronze-500 transition-colors no-underline">
            Shop All
          </Link>
          <Link to="/shop?category=earrings" onClick={() => setMobileOpen(false)} className="text-xs tracking-[0.2em] uppercase text-bronze-700 hover:text-bronze-500 transition-colors no-underline">
            Earrings
          </Link>
          <Link to="/shop?category=necklaces" onClick={() => setMobileOpen(false)} className="text-xs tracking-[0.2em] uppercase text-bronze-700 hover:text-bronze-500 transition-colors no-underline">
            Necklaces
          </Link>
          <Link to="/shop?category=huggies" onClick={() => setMobileOpen(false)} className="text-xs tracking-[0.2em] uppercase text-bronze-700 hover:text-bronze-500 transition-colors no-underline">
            Huggies
          </Link>
        </div>
      </div>
    </nav>
  );
}
