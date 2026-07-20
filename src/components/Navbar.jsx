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
    ? 'bg-brand-cream/95 backdrop-blur-md border-b border-brand-sand'
    : 'bg-transparent';

  const textColor = scrolled || !isHome
    ? 'text-brand-charcoal'
    : 'text-white';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 ${textColor} bg-transparent border-none`}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-2xl md:text-3xl font-light tracking-wide-xl ${textColor} no-underline hover:opacity-80 transition-opacity`}
          >
            VELMORA
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/shop"
              className={`font-sans text-xs uppercase tracking-wide-xl ${textColor} no-underline hover:opacity-60 transition-opacity`}
            >
              Shop
            </Link>
            <Link
              to="/shop"
              className={`font-sans text-xs uppercase tracking-wide-xl ${textColor} no-underline hover:opacity-60 transition-opacity`}
            >
              Collections
            </Link>
            <Link
              to="/about"
              className={`font-sans text-xs uppercase tracking-wide-xl ${textColor} no-underline hover:opacity-60 transition-opacity`}
            >
              About
            </Link>
            <Link
              to="/journal"
              className={`font-sans text-xs uppercase tracking-wide-xl ${textColor} no-underline hover:opacity-60 transition-opacity`}
            >
              Journal
            </Link>
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button
              className={`p-2 ${textColor} bg-transparent border-none hover:opacity-60 transition-opacity`}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={openCart}
              className={`p-2 relative ${textColor} bg-transparent border-none hover:opacity-60 transition-opacity`}
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-brand-gold text-white text-[10px] font-sans font-medium rounded-full flex items-center justify-center">
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
            <Link
              to="/shop"
              className="font-serif text-2xl text-brand-charcoal no-underline hover:text-brand-gold transition-colors"
            >
              Shop
            </Link>
            <Link
              to="/shop"
              className="font-serif text-2xl text-brand-charcoal no-underline hover:text-brand-gold transition-colors"
            >
              Collections
            </Link>
            <Link
              to="/about"
              className="font-serif text-2xl text-brand-charcoal no-underline hover:text-brand-gold transition-colors"
            >
              About
            </Link>
            <Link
              to="/journal"
              className="font-serif text-2xl text-brand-charcoal no-underline hover:text-brand-gold transition-colors"
            >
              Journal
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
