import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { itemCount, toggleCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white shadow-premium'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Left: Logo */}
          <Link
            to="/"
            className={`font-serif text-2xl lg:text-3xl tracking-widest uppercase transition-colors duration-500 ${
              isScrolled ? 'text-velmora-charcoal' : 'text-white'
            }`}
            style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: '0.3em' }}
          >
            VELMORA
          </Link>

          {/* Center: Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs tracking-widest uppercase transition-colors duration-500 hover:text-velmora-gold ${
                  isScrolled ? 'text-velmora-charcoal' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right: Icons */}
          <div className="flex items-center space-x-4 lg:space-x-6">
            <button
              className={`transition-colors duration-500 hover:text-velmora-gold ${
                isScrolled ? 'text-velmora-charcoal' : 'text-white'
              }`}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={toggleCart}
              className={`relative transition-colors duration-500 hover:text-velmora-gold ${
                isScrolled ? 'text-velmora-charcoal' : 'text-white'
              }`}
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-velmora-gold text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-sans">
                  {itemCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden transition-colors duration-500 ${
                isScrolled ? 'text-velmora-charcoal' : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-velmora-border">
            <div className="py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-sm tracking-widest uppercase text-velmora-charcoal hover:text-velmora-gold transition-colors px-6 py-2"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hairline divider */}
      <div className={`hairline transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0'}`} />
    </header>
  );
}
