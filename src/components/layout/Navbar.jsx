import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navBg = scrolled || !isHome
    ? 'bg-brand-cream/95 backdrop-blur-md border-b border-brand-sand/50'
    : 'bg-transparent';

  const textColor = scrolled || !isHome ? 'text-brand-charcoal' : 'text-white';

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            className={`md:hidden ${textColor} transition-colors duration-300`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Logo */}
          <Link to="/" className={`font-serif text-2xl md:text-3xl font-light tracking-wide ${textColor} transition-colors duration-300`}>
            VELMORA
          </Link>

          {/* Desktop nav links */}
          <div className={`hidden md:flex items-center gap-8 ${textColor} transition-colors duration-300`}>
            <Link to="/shop" className="text-xs uppercase tracking-wide-xl font-medium hover:text-brand-gold transition-colors duration-300">
              Shop
            </Link>
            <Link to="/shop" className="text-xs uppercase tracking-wide-xl font-medium hover:text-brand-gold transition-colors duration-300">
              Collections
            </Link>
            <Link to="/" className="text-xs uppercase tracking-wide-xl font-medium hover:text-brand-gold transition-colors duration-300">
              About
            </Link>
            <Link to="/" className="text-xs uppercase tracking-wide-xl font-medium hover:text-brand-gold transition-colors duration-300">
              Journal
            </Link>
          </div>

          {/* Right icons */}
          <div className={`flex items-center gap-4 ${textColor} transition-colors duration-300`}>
            <button aria-label="Search" className="hover:text-brand-gold transition-colors duration-300">
              <Search className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <button
              aria-label="Cart"
              className="relative hover:text-brand-gold transition-colors duration-300"
              onClick={() => setIsOpen(true)}
            >
              <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-brand-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-brand-cream pt-20">
          <div className="flex flex-col items-center gap-8 py-12">
            <Link to="/shop" className="font-serif text-2xl text-brand-charcoal hover:text-brand-gold transition-colors">
              Shop
            </Link>
            <Link to="/shop" className="font-serif text-2xl text-brand-charcoal hover:text-brand-gold transition-colors">
              Collections
            </Link>
            <Link to="/" className="font-serif text-2xl text-brand-charcoal hover:text-brand-gold transition-colors">
              About
            </Link>
            <Link to="/" className="font-serif text-2xl text-brand-charcoal hover:text-brand-gold transition-colors">
              Journal
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
