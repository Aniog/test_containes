import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openCart, totalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? 'bg-brand-cream/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className={`w-5 h-5 ${scrolled || !isHome ? 'text-brand-charcoal' : 'text-white'}`} />
            ) : (
              <Menu className={`w-5 h-5 ${scrolled || !isHome ? 'text-brand-charcoal' : 'text-white'}`} />
            )}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-2xl md:text-3xl tracking-ultra-wide font-semibold transition-colors duration-300 ${
              scrolled || !isHome ? 'text-brand-charcoal' : 'text-white'
            }`}
          >
            VELMORA
          </Link>

          {/* Center nav links - desktop */}
          <div className="hidden md:flex items-center gap-8">
            {['Shop', 'Collections', 'About', 'Journal'].map((link) => (
              <Link
                key={link}
                to={link === 'Shop' ? '/shop' : link === 'Collections' ? '/shop' : '/'}
                className={`text-xs tracking-extra-wide uppercase font-sans font-medium transition-colors duration-300 hover:text-brand-gold ${
                  scrolled || !isHome ? 'text-brand-charcoal' : 'text-white'
                }`}
              >
                {link}
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-3">
            <button
              className={`p-2 transition-colors duration-300 hover:text-brand-gold ${
                scrolled || !isHome ? 'text-brand-charcoal' : 'text-white'
              }`}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={openCart}
              className={`p-2 relative transition-colors duration-300 hover:text-brand-gold ${
                scrolled || !isHome ? 'text-brand-charcoal' : 'text-white'
              }`}
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-brand-gold text-white text-[10px] font-sans font-semibold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-brand-cream border-t border-brand-sand">
          <div className="px-6 py-6 space-y-4">
            {['Shop', 'Collections', 'About', 'Journal'].map((link) => (
              <Link
                key={link}
                to={link === 'Shop' ? '/shop' : link === 'Collections' ? '/shop' : '/'}
                className="block text-sm tracking-extra-wide uppercase font-sans text-brand-charcoal hover:text-brand-gold transition-colors"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
