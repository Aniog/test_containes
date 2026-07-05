import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getCartCount, openCart } = useCart();
  const location = useLocation();
  
  const cartCount = getCartCount();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/shop', label: 'Shop' },
    { to: '/collections', label: 'Collections' },
    { to: '/about', label: 'About' },
    { to: '/journal', label: 'Journal' }
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled || !isHome 
            ? 'bg-white/95 backdrop-blur-sm shadow-sm' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 -ml-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>

            {/* Logo */}
            <Link 
              to="/" 
              className={`font-serif text-xl md:text-2xl tracking-[0.2em] transition-colors ${
                isScrolled || !isHome ? 'text-[var(--color-text-primary)]' : 'text-white'
              }`}
            >
              VELMORA
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm tracking-wider transition-colors hover:opacity-70 ${
                    isScrolled || !isHome 
                      ? 'text-[var(--color-text-primary)]' 
                      : 'text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button 
                className={`p-2 transition-colors hover:opacity-70 ${
                  isScrolled || !isHome 
                    ? 'text-[var(--color-text-primary)]' 
                    : 'text-white'
                }`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              
              <button 
                onClick={openCart}
                className={`p-2 transition-colors hover:opacity-70 relative ${
                  isScrolled || !isHome 
                    ? 'text-[var(--color-text-primary)]' 
                    : 'text-white'
                }`}
                aria-label={`Shopping bag with ${cartCount} items`}
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-[var(--color-gold-primary)] text-white text-xs font-medium rounded-full flex items-center justify-center cart-badge-pulse">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-30 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div 
          className={`absolute inset-0 bg-black/50 ${isMobileMenuOpen ? '' : 'hidden'}`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div 
          className={`absolute left-0 top-0 h-full w-80 max-w-[85%] bg-white shadow-xl transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-6 pt-20">
            <nav className="space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-lg tracking-wider text-[var(--color-text-primary)] hover:text-[var(--color-gold-primary)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
