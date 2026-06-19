import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || !isHome
            ? 'bg-[var(--color-cream)] shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className={`w-5 h-5 ${isScrolled || !isHome ? 'text-[var(--color-charcoal)]' : 'text-white'}`} />
              ) : (
                <Menu className={`w-5 h-5 ${isScrolled || !isHome ? 'text-[var(--color-charcoal)]' : 'text-white'}`} />
              )}
            </button>

            {/* Logo */}
            <Link
              to="/"
              className={`font-serif-display text-2xl md:text-3xl tracking-[0.3em] font-light transition-colors duration-300 ${
                isScrolled || !isHome ? 'text-[var(--color-charcoal)]' : 'text-white'
              }`}
            >
              VELMORA
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
              {['Shop', 'Collections', 'About', 'Journal'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Shop' ? '/shop' : item === 'Collections' ? '/shop' : '#'}
                  className={`text-xs tracking-[0.2em] uppercase transition-colors duration-300 hover:text-[var(--color-gold)] ${
                    isScrolled || !isHome ? 'text-[var(--color-charcoal)]' : 'text-white'
                  }`}
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              <button
                className={`p-2 transition-colors duration-300 hover:text-[var(--color-gold)] ${
                  isScrolled || !isHome ? 'text-[var(--color-charcoal)]' : 'text-white'
                }`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                className={`p-2 relative transition-colors duration-300 hover:text-[var(--color-gold)] ${
                  isScrolled || !isHome ? 'text-[var(--color-charcoal)]' : 'text-white'
                }`}
                onClick={() => setIsCartOpen(true)}
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[var(--color-gold)] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[var(--color-cream)] pt-20 animate-fade-in md:hidden">
          <div className="flex flex-col items-center space-y-8 py-12">
            {['Shop', 'Collections', 'About', 'Journal'].map((item) => (
              <Link
                key={item}
                to={item === 'Shop' ? '/shop' : item === 'Collections' ? '/shop' : '#'}
                className="font-serif-display text-2xl tracking-[0.2em] text-[var(--color-charcoal)] hover:text-[var(--color-gold)] transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
