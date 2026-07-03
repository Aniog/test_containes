import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useScrollPosition } from '@/hooks/useScrollReveal';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { scrollY } = useScrollPosition();
  const { getCartCount, openCart } = useCart();
  const location = useLocation();
  const cartCount = getCartCount();

  const isHomePage = location.pathname === '/';
  const isTransparent = isHomePage && scrollY < 100;
  
  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' }
  ];

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isTransparent
            ? 'bg-transparent'
            : 'bg-[var(--velmora-cream)]/95 backdrop-blur-md shadow-sm'
        }`}
      >
        <nav className="velmora-container">
          <div className="flex items-center justify-between h-20">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 -ml-2 transition-colors"
              aria-label="Toggle menu"
              style={{ color: isTransparent ? 'white' : 'var(--velmora-charcoal)' }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <Link
              to="/"
              className="font-serif text-2xl md:text-3xl font-semibold tracking-wide absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
              style={{ 
                color: isTransparent ? 'white' : 'var(--velmora-charcoal)',
                textShadow: isTransparent ? '0 2px 4px rgba(0,0,0,0.1)' : 'none'
              }}
            >
              VELMORA
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-sm uppercase tracking-widest font-medium transition-colors relative group"
                  style={{ 
                    color: isTransparent ? 'rgba(255,255,255,0.9)' : 'var(--velmora-charcoal)',
                  }}
                >
                  {link.name}
                  <span 
                    className="absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full"
                    style={{ backgroundColor: isTransparent ? 'white' : 'var(--velmora-gold)' }}
                  />
                </Link>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4 md:gap-6">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 transition-colors"
                aria-label="Search"
                style={{ color: isTransparent ? 'white' : 'var(--velmora-charcoal)' }}
              >
                <Search size={20} strokeWidth={1.5} />
              </button>
              
              <button
                onClick={openCart}
                className="p-2 relative transition-colors"
                aria-label="Shopping cart"
                style={{ color: isTransparent ? 'white' : 'var(--velmora-charcoal)' }}
              >
                <ShoppingBag size={20} strokeWidth={1.5} />
                {cartCount > 0 && (
                  <span 
                    className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full text-[10px] font-semibold flex items-center justify-center text-white"
                    style={{ backgroundColor: 'var(--velmora-gold)' }}
                  >
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[var(--velmora-cream)] transition-transform duration-500 lg:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 pt-20">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="font-serif text-3xl font-medium"
              style={{ color: 'var(--velmora-charcoal)' }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-[var(--velmora-cream)]/98 backdrop-blur-md flex items-start justify-center pt-32 animate-fade-in">
          <button
            onClick={() => setIsSearchOpen(false)}
            className="absolute top-8 right-8 p-2"
            aria-label="Close search"
          >
            <X size={24} style={{ color: 'var(--velmora-charcoal)' }} />
          </button>
          
          <div className="w-full max-w-2xl px-6">
            <p className="text-sm uppercase tracking-widest mb-4" style={{ color: 'var(--velmora-taupe)' }}>
              Search
            </p>
            <div className="relative">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-full bg-transparent border-b-2 pb-4 text-2xl md:text-4xl font-serif focus:outline-none transition-colors"
                style={{ borderColor: 'var(--velmora-sand)' }}
                autoFocus
              />
              <Search 
                className="absolute right-0 top-1/2 -translate-y-1/2" 
                size={24} 
                style={{ color: 'var(--velmora-taupe)' }}
              />
            </div>
            <p className="mt-8 text-sm" style={{ color: 'var(--velmora-taupe)' }}>
              Press ESC to close
            </p>
          </div>
        </div>
      )}
    </>
  );
}
