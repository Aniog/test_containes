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
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navBg = scrolled
    ? 'bg-brand-cream/95 backdrop-blur-md shadow-sm'
    : isHome
      ? 'bg-transparent'
      : 'bg-brand-cream/95 backdrop-blur-md';

  const textColor = scrolled || !isHome ? 'text-brand-dark' : 'text-white';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 ${textColor} transition-colors`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Logo */}
          <Link to="/" className={`font-serif text-xl md:text-2xl tracking-ultra-wide font-light ${textColor} transition-colors`}>
            VELMORA
          </Link>

          {/* Center nav links - desktop */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/shop" className={`font-sans text-xs uppercase tracking-super-wide ${textColor} hover:text-brand-gold transition-colors`}>
              Shop
            </Link>
            <Link to="/shop" className={`font-sans text-xs uppercase tracking-super-wide ${textColor} hover:text-brand-gold transition-colors`}>
              Collections
            </Link>
            <Link to="/about" className={`font-sans text-xs uppercase tracking-super-wide ${textColor} hover:text-brand-gold transition-colors`}>
              About
            </Link>
            <Link to="/journal" className={`font-sans text-xs uppercase tracking-super-wide ${textColor} hover:text-brand-gold transition-colors`}>
              Journal
            </Link>
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-3">
            <button className={`p-2 ${textColor} hover:text-brand-gold transition-colors`} aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={openCart}
              className={`p-2 ${textColor} hover:text-brand-gold transition-colors relative`}
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-brand-gold text-white text-[10px] font-sans font-medium w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-brand-cream border-t border-brand-border animate-fade-in">
          <div className="px-4 py-6 space-y-4">
            <Link to="/shop" className="block font-sans text-sm uppercase tracking-super-wide text-brand-dark hover:text-brand-gold transition-colors">
              Shop
            </Link>
            <Link to="/shop" className="block font-sans text-sm uppercase tracking-super-wide text-brand-dark hover:text-brand-gold transition-colors">
              Collections
            </Link>
            <Link to="/about" className="block font-sans text-sm uppercase tracking-super-wide text-brand-dark hover:text-brand-gold transition-colors">
              About
            </Link>
            <Link to="/journal" className="block font-sans text-sm uppercase tracking-super-wide text-brand-dark hover:text-brand-gold transition-colors">
              Journal
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
