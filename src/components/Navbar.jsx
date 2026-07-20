import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggleCart, itemCount } = useCart();
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

  const textColor = scrolled || !isHome ? 'text-brand-charcoal' : 'text-white';

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <Link to="/" className={`font-serif text-2xl md:text-3xl font-semibold tracking-ultra-wide ${textColor} transition-colors`}>
              VELMORA
            </Link>

            {/* Center nav links - desktop */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/shop" className={`text-xs font-sans uppercase tracking-ultra-wide ${textColor} hover:text-brand-gold transition-colors`}>
                Shop
              </Link>
              <Link to="/shop" className={`text-xs font-sans uppercase tracking-ultra-wide ${textColor} hover:text-brand-gold transition-colors`}>
                Collections
              </Link>
              <Link to="/about" className={`text-xs font-sans uppercase tracking-ultra-wide ${textColor} hover:text-brand-gold transition-colors`}>
                About
              </Link>
              <Link to="/journal" className={`text-xs font-sans uppercase tracking-ultra-wide ${textColor} hover:text-brand-gold transition-colors`}>
                Journal
              </Link>
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-3">
              <button className={`p-2 ${textColor} hover:text-brand-gold transition-colors`} aria-label="Search">
                <Search className="w-5 h-5" />
              </button>
              <button onClick={toggleCart} className={`p-2 relative ${textColor} hover:text-brand-gold transition-colors`} aria-label="Cart">
                <ShoppingBag className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-brand-gold text-white text-[10px] font-sans font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-brand-cream pt-20 px-6 md:hidden">
          <div className="flex flex-col gap-6">
            <Link to="/shop" className="font-serif text-3xl text-brand-charcoal tracking-ultra-wide uppercase" onClick={() => setMobileOpen(false)}>
              Shop
            </Link>
            <Link to="/shop" className="font-serif text-3xl text-brand-charcoal tracking-ultra-wide uppercase" onClick={() => setMobileOpen(false)}>
              Collections
            </Link>
            <Link to="/about" className="font-serif text-3xl text-brand-charcoal tracking-ultra-wide uppercase" onClick={() => setMobileOpen(false)}>
              About
            </Link>
            <Link to="/journal" className="font-serif text-3xl text-brand-charcoal tracking-ultra-wide uppercase" onClick={() => setMobileOpen(false)}>
              Journal
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
