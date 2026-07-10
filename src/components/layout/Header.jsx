import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, toggleCart } = useCart();
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
          ? 'bg-cream/95 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link 
            to="/" 
            className={`font-serif text-2xl md:text-3xl font-medium tracking-wider ${
              isScrolled ? 'text-charcoal' : 'text-cream'
            }`}
          >
            VELMORA
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${isScrolled ? 'text-charcoal' : 'text-cream'}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button
              className={`transition-colors duration-300 ${
                isScrolled ? 'text-charcoal hover:text-gold' : 'text-cream hover:text-gold-light'
              }`}
              aria-label="Search"
            >
              <Search size={20} />
            </button>

            <button
              onClick={toggleCart}
              className={`relative transition-colors duration-300 ${
                isScrolled ? 'text-charcoal hover:text-gold' : 'text-cream hover:text-gold-light'
              }`}
              aria-label="Open cart"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold text-cream text-xs w-5 h-5 rounded-full flex items-center justify-center font-sans font-medium">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden transition-colors duration-300 ${
                isScrolled ? 'text-charcoal hover:text-gold' : 'text-cream hover:text-gold-light'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-cream/98 backdrop-blur-md animate-slide-down">
          <nav className="container-custom py-8 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block font-sans text-lg tracking-wide text-charcoal hover:text-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}