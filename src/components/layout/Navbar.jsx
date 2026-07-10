import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, openCart } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navBg = scrolled
    ? 'bg-brand-cream/95 backdrop-blur-md shadow-sm'
    : isHome
      ? 'bg-transparent'
      : 'bg-brand-cream/95 backdrop-blur-md';

  const textColor = scrolled || !isHome ? 'text-brand-charcoal' : 'text-white';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 transition-colors ${textColor}`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-2xl md:text-3xl tracking-ultra-wide font-semibold transition-colors ${textColor}`}
          >
            VELMORA
          </Link>

          {/* Center nav links - desktop */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/shop"
              className={`text-xs tracking-extra-wide uppercase font-sans font-medium transition-colors hover:text-brand-gold ${textColor}`}
            >
              Shop
            </Link>
            <Link
              to="/shop"
              className={`text-xs tracking-extra-wide uppercase font-sans font-medium transition-colors hover:text-brand-gold ${textColor}`}
            >
              Collections
            </Link>
            <Link
              to="/about"
              className={`text-xs tracking-extra-wide uppercase font-sans font-medium transition-colors hover:text-brand-gold ${textColor}`}
            >
              About
            </Link>
            <Link
              to="/journal"
              className={`text-xs tracking-extra-wide uppercase font-sans font-medium transition-colors hover:text-brand-gold ${textColor}`}
            >
              Journal
            </Link>
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-3">
            <button className={`p-2 transition-colors hover:text-brand-gold ${textColor}`} aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={openCart}
              className={`p-2 transition-colors hover:text-brand-gold relative ${textColor}`}
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-brand-gold text-white text-[10px] font-sans font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-brand-cream border-t border-brand-sand">
          <div className="px-6 py-6 space-y-4">
            <Link to="/shop" className="block text-sm tracking-extra-wide uppercase font-sans text-brand-charcoal hover:text-brand-gold transition-colors">Shop</Link>
            <Link to="/shop" className="block text-sm tracking-extra-wide uppercase font-sans text-brand-charcoal hover:text-brand-gold transition-colors">Collections</Link>
            <Link to="/about" className="block text-sm tracking-extra-wide uppercase font-sans text-brand-charcoal hover:text-brand-gold transition-colors">About</Link>
            <Link to="/journal" className="block text-sm tracking-extra-wide uppercase font-sans text-brand-charcoal hover:text-brand-gold transition-colors">Journal</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
