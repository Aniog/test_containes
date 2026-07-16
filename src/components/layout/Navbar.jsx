import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isHomePage = location.pathname === '/';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || !isHomePage
            ? 'bg-[var(--velmora-cream)] shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 -ml-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className={`w-5 h-5 ${isScrolled || !isHomePage ? 'text-[var(--velmora-text)]' : 'text-white'}`} />
              ) : (
                <Menu className={`w-5 h-5 ${isScrolled || !isHomePage ? 'text-[var(--velmora-text)]' : 'text-white'}`} />
              )}
            </button>

            {/* Logo */}
            <Link to="/" className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
              <h1
                className={`serif-heading text-2xl md:text-3xl tracking-widest transition-colors duration-300 ${
                  isScrolled || !isHomePage ? 'text-[var(--velmora-text)]' : 'text-white'
                }`}
              >
                VELMORA
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 lg:gap-12">
              {['Shop', 'Collections', 'About', 'Journal'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Shop' ? '/shop' : item === 'Collections' ? '/shop' : '#'}
                  className={`text-xs tracking-widest uppercase transition-colors duration-300 hover:opacity-70 ${
                    isScrolled || !isHomePage ? 'text-[var(--velmora-text)]' : 'text-white'
                  }`}
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-3 md:gap-4">
              <button
                className={`p-2 transition-colors duration-300 hover:opacity-70 ${
                  isScrolled || !isHomePage ? 'text-[var(--velmora-text)]' : 'text-white'
                }`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                className={`p-2 relative transition-colors duration-300 hover:opacity-70 ${
                  isScrolled || !isHomePage ? 'text-[var(--velmora-text)]' : 'text-white'
                }`}
                onClick={() => setIsCartOpen(true)}
                aria-label={`Shopping cart with ${cartCount} items`}
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-[var(--velmora-gold)] text-white text-[10px] rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[var(--velmora-cream)] pt-20 md:hidden animate-fade-in">
          <nav className="flex flex-col items-center gap-8 pt-8">
            {['Shop', 'Collections', 'About', 'Journal'].map((item) => (
              <Link
                key={item}
                to={item === 'Shop' ? '/shop' : item === 'Collections' ? '/shop' : '#'}
                className="text-lg tracking-widest uppercase text-[var(--velmora-text)] hover:text-[var(--velmora-gold)] transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
