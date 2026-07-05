import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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

  const textColor = scrolled || !isHome ? 'text-brand-charcoal' : 'text-white';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className={`font-serif text-2xl md:text-3xl font-light tracking-wide-xl ${textColor}`}>
          VELMORA
        </Link>

        {/* Center links - desktop */}
        <div className={`hidden md:flex items-center gap-8 ${textColor}`}>
          <Link to="/shop" className="text-xs tracking-widest uppercase font-sans font-medium hover:text-brand-gold transition-colors">
            Shop
          </Link>
          <Link to="/shop?category=earrings" className="text-xs tracking-widest uppercase font-sans font-medium hover:text-brand-gold transition-colors">
            Collections
          </Link>
          <Link to="/about" className="text-xs tracking-widest uppercase font-sans font-medium hover:text-brand-gold transition-colors">
            About
          </Link>
          <Link to="/journal" className="text-xs tracking-widest uppercase font-sans font-medium hover:text-brand-gold transition-colors">
            Journal
          </Link>
        </div>

        {/* Right icons */}
        <div className={`flex items-center gap-4 ${textColor}`}>
          {/* Search icon */}
          <button className="hover:text-brand-gold transition-colors" aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>

          {/* Cart icon */}
          <button onClick={openCart} className="relative hover:text-brand-gold transition-colors" aria-label="Cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" x2="21" y1="6" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-brand-gold text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden hover:text-brand-gold transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="4" y1="8" x2="20" y2="8" />
                <line x1="4" y1="16" x2="20" y2="16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-brand-cream border-t border-brand-sand animate-fade-in">
          <div className="px-6 py-6 flex flex-col gap-4">
            <Link to="/shop" className="text-sm tracking-widest uppercase font-sans text-brand-charcoal hover:text-brand-gold transition-colors">
              Shop
            </Link>
            <Link to="/shop?category=earrings" className="text-sm tracking-widest uppercase font-sans text-brand-charcoal hover:text-brand-gold transition-colors">
              Collections
            </Link>
            <Link to="/about" className="text-sm tracking-widest uppercase font-sans text-brand-charcoal hover:text-brand-gold transition-colors">
              About
            </Link>
            <Link to="/journal" className="text-sm tracking-widest uppercase font-sans text-brand-charcoal hover:text-brand-gold transition-colors">
              Journal
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
