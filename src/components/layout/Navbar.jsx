import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, openCart } = useCart();
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
  }, [location.pathname]);

  const isHome = location.pathname === '/';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || !isHome
            ? 'bg-velmora-50/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 -ml-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className={`w-5 h-5 ${isScrolled || !isHome ? 'text-charcoal-900' : 'text-white'}`} />
              ) : (
                <Menu className={`w-5 h-5 ${isScrolled || !isHome ? 'text-charcoal-900' : 'text-white'}`} />
              )}
            </button>

            {/* Logo */}
            <Link to="/" className="flex-1 md:flex-none text-center md:text-left">
              <span
                className={`font-serif text-2xl md:text-3xl tracking-widest transition-colors duration-300 ${
                  isScrolled || !isHome ? 'text-charcoal-950' : 'text-white'
                }`}
              >
                VELMORA
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 lg:gap-12">
              {['Shop', 'Collections', 'About', 'Journal'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Shop' ? '/shop' : item === 'Collections' ? '/shop' : '/'}
                  className={`text-xs tracking-widest uppercase transition-colors duration-300 hover:opacity-70 ${
                    isScrolled || !isHome
                      ? 'text-charcoal-800'
                      : 'text-white/90'
                  }`}
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-3">
              <button
                className={`p-2 transition-colors duration-300 hover:opacity-70 ${
                  isScrolled || !isHome ? 'text-charcoal-900' : 'text-white'
                }`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                className={`p-2 relative transition-colors duration-300 hover:opacity-70 ${
                  isScrolled || !isHome ? 'text-charcoal-900' : 'text-white'
                }`}
                onClick={openCart}
                aria-label="Shopping cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold-600 text-white text-[10px] rounded-full flex items-center justify-center font-medium">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-velmora-50 md:hidden animate-fade-in">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {['Shop', 'Collections', 'About', 'Journal'].map((item) => (
              <Link
                key={item}
                to={item === 'Shop' ? '/shop' : item === 'Collections' ? '/shop' : '/'}
                className="font-serif text-3xl text-charcoal-950 tracking-wider hover:text-gold-600 transition-colors"
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
