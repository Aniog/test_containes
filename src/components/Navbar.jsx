import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, toggleCart } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

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

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/collections' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || !isHome
            ? 'bg-cream shadow-sm'
            : 'bg-transparent'
        }`}
        style={{
          backgroundColor: isScrolled || !isHome ? 'var(--color-cream)' : 'transparent',
        }}
      >
        <nav className="container flex items-center justify-between" style={{ height: '80px' }}>
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className="font-serif text-2xl tracking-wider absolute left-1/2 transform -translate-x-1/2 md:static md:translate-x-0 md:left-0"
            style={{ 
              color: isScrolled || !isHome ? 'var(--color-charcoal)' : isHome ? 'var(--color-warm-white)' : 'var(--color-charcoal)',
              letterSpacing: '0.2em'
            }}
          >
            VELMORA
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm uppercase tracking-wider hover:text-gold transition-colors"
                style={{
                  color: isScrolled || !isHome ? 'var(--color-charcoal)' : isHome ? 'var(--color-warm-white)' : 'var(--color-charcoal)',
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button
              className="p-2"
              style={{
                color: isScrolled || !isHome ? 'var(--color-charcoal)' : isHome ? 'var(--color-warm-white)' : 'var(--color-charcoal)',
              }}
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button
              className="p-2 relative"
              onClick={toggleCart}
              style={{
                color: isScrolled || !isHome ? 'var(--color-charcoal)' : isHome ? 'var(--color-warm-white)' : 'var(--color-charcoal)',
              }}
              aria-label="Cart"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span
                  className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-xs flex items-center justify-center text-white"
                  style={{ backgroundColor: 'var(--color-gold)' }}
                >
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="p-6">
          <button
            className="absolute top-6 right-6 p-2"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>

          <nav className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="font-serif text-2xl tracking-wider"
                style={{ letterSpacing: '0.15em' }}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;