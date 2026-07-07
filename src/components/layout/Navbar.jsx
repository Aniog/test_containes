import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, openCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? 'bg-[var(--velmora-cream)]/95 backdrop-blur-sm shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 -ml-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Logo */}
            <Link to="/" className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
              <h1 className={`serif-heading text-2xl md:text-3xl tracking-wider transition-colors duration-300 ${
                scrolled || !isHome ? 'text-[var(--velmora-text)]' : 'text-white'
              }`}>
                VELMORA
              </h1>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {['Shop', 'Collections', 'About', 'Journal'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Shop' ? '/shop' : item === 'Collections' ? '/shop' : '/'}
                  className={`text-xs tracking-widest uppercase transition-colors duration-300 hover:opacity-70 ${
                    scrolled || !isHome ? 'text-[var(--velmora-text)]' : 'text-white'
                  }`}
                >
                  {item}
                </Link>
              ))}
            </nav>

            {/* Right icons */}
            <div className="flex items-center gap-3">
              <button
                className={`p-2 transition-colors duration-300 hover:opacity-70 ${
                  scrolled || !isHome ? 'text-[var(--velmora-text)]' : 'text-white'
                }`}
                aria-label="Search"
              >
                <Search size={18} />
              </button>
              <button
                onClick={openCart}
                className={`p-2 relative transition-colors duration-300 hover:opacity-70 ${
                  scrolled || !isHome ? 'text-[var(--velmora-text)]' : 'text-white'
                }`}
                aria-label="Cart"
              >
                <ShoppingBag size={18} />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-[var(--velmora-gold)] text-white text-[10px] rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[var(--velmora-cream)] animate-fade-in md:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {['Shop', 'Collections', 'About', 'Journal'].map((item) => (
              <Link
                key={item}
                to={item === 'Shop' ? '/shop' : item === 'Collections' ? '/shop' : '/'}
                className="serif-heading text-3xl tracking-wider"
                onClick={() => setMobileMenuOpen(false)}
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
