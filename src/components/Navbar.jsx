import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { toggleCart, totalItems } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navBg = scrolled || !isHome
    ? 'bg-cream/95 backdrop-blur-sm shadow-sm'
    : 'bg-transparent';

  const textColor = scrolled || !isHome ? 'text-charcoal' : 'text-white';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${navBg}`}
      >
        <div className="max-w-content mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            className={`md:hidden p-2 -ml-2 ${textColor}`}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-xl md:text-2xl font-semibold tracking-[0.15em] ${textColor}`}
          >
            VELMORA
          </Link>

          {/* Desktop links */}
          <div className={`hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase ${textColor}`}>
            <Link to="/shop" className="hover:text-gold transition-colors duration-300">Shop</Link>
            <Link to="/shop?category=sets" className="hover:text-gold transition-colors duration-300">Collections</Link>
            <Link to="/" className="hover:text-gold transition-colors duration-300">About</Link>
            <Link to="/" className="hover:text-gold transition-colors duration-300">Journal</Link>
          </div>

          {/* Right icons */}
          <div className={`flex items-center gap-3 md:gap-5 ${textColor}`}>
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 hover:text-gold transition-colors duration-300"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={toggleCart}
              className="p-2 hover:text-gold transition-colors duration-300 relative"
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold text-white text-[10px] font-semibold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="border-t border-hairline bg-cream/95 backdrop-blur-sm">
            <div className="max-w-content mx-auto px-4 md:px-8 py-3">
              <input
                type="text"
                placeholder="Search jewelry..."
                className="w-full bg-transparent border-b border-charcoal/20 pb-2 text-sm outline-none focus:border-gold transition-colors placeholder:text-muted"
                autoFocus
              />
            </div>
          </div>
        )}
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] flex">
          <div
            className="absolute inset-0 bg-charcoal/40"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative w-72 max-w-[80vw] bg-cream h-full shadow-xl flex flex-col">
            <div className="flex items-center justify-between p-5 border-b border-hairline">
              <span className="font-serif text-xl font-semibold tracking-[0.15em]">VELMORA</span>
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex flex-col p-6 gap-5 text-sm font-medium tracking-wide uppercase">
              <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
              <Link to="/shop?category=sets" className="hover:text-gold transition-colors">Collections</Link>
              <Link to="/" className="hover:text-gold transition-colors">About</Link>
              <Link to="/" className="hover:text-gold transition-colors">Journal</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
