import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { totalItems, toggleCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';

  return (
    <>
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
              className={`md:hidden p-2 transition-colors ${
                scrolled || !isHome ? 'text-brand-charcoal' : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
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
              {['Shop', 'Collections', 'About', 'Journal'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Shop' ? '/shop' : '/'}
                  className={`text-xs tracking-super-wide uppercase font-sans font-medium transition-colors duration-300 hover:text-brand-gold ${
                    scrolled || !isHome ? 'text-brand-charcoal' : 'text-white/90'
                  }`}
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className={`p-2 transition-colors ${
                  scrolled || !isHome ? 'text-brand-charcoal' : 'text-white'
                }`}
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              <button
                onClick={toggleCart}
                className={`p-2 relative transition-colors ${
                  scrolled || !isHome ? 'text-brand-charcoal' : 'text-white'
                }`}
                aria-label="Cart"
              >
                <ShoppingBag size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-brand-gold text-white text-[10px] font-sans font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="bg-brand-cream border-t border-brand-sand px-4 py-3 animate-fade-in">
            <div className="max-w-xl mx-auto relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-muted" />
              <input
                type="text"
                placeholder="Search jewelry..."
                className="w-full pl-10 pr-4 py-2 bg-white border border-brand-sand rounded-none text-sm font-sans text-brand-charcoal placeholder:text-brand-muted-light focus:outline-none focus:border-brand-gold"
                autoFocus
              />
            </div>
          </div>
        )}
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-brand-espresso/60 md:hidden" onClick={() => setMobileOpen(false)}>
          <div
            className="absolute top-0 left-0 w-72 h-full bg-brand-cream shadow-xl animate-slide-in-right"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: 'slideInRight 0.3s ease-out forwards', transformOrigin: 'left' }}
          >
            <div className="pt-20 px-6">
              <Link to="/" className="block py-4 font-serif text-2xl tracking-ultra-wide text-brand-charcoal border-b border-brand-sand">
                VELMORA
              </Link>
              {['Shop', 'Collections', 'About', 'Journal'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Shop' ? '/shop' : '/'}
                  className="block py-4 text-sm tracking-super-wide uppercase font-sans text-brand-charcoal border-b border-brand-sand/50 hover:text-brand-gold transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
