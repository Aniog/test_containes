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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-premium'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-2xl md:text-3xl font-light tracking-wider ${
                isScrolled ? 'text-velmora-charcoal' : 'text-white'
              } transition-colors duration-300`}
            >
              VELMORA
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-sans text-sm uppercase tracking-wider ${
                    isScrolled ? 'text-velmora-charcoal' : 'text-white'
                  } hover:text-velmora-gold transition-colors duration-300`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              <button
                className={`${
                  isScrolled ? 'text-velmora-charcoal' : 'text-white'
                } hover:text-velmora-gold transition-colors duration-300`}
                aria-label="Search"
              >
                <Search size={20} />
              </button>

              <button
                onClick={toggleCart}
                className={`relative ${
                  isScrolled ? 'text-velmora-charcoal' : 'text-white'
                } hover:text-velmora-gold transition-colors duration-300`}
                aria-label="Open cart"
              >
                <ShoppingBag size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-velmora-gold text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`md:hidden ${
                  isScrolled ? 'text-velmora-charcoal' : 'text-white'
                } hover:text-velmora-gold transition-colors duration-300`}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className="mobile-menu-content"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-8">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6"
            >
              <X size={24} />
            </button>

            <nav className="mt-16 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block font-serif text-2xl font-light text-velmora-charcoal hover:text-velmora-gold transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="mt-12 pt-8 border-t border-velmora-border">
              <Link
                to="/shop"
                className="block font-sans text-sm uppercase tracking-wider text-velmora-muted hover:text-velmora-gold mb-4"
              >
                Earrings
              </Link>
              <Link
                to="/shop?category=Necklaces"
                className="block font-sans text-sm uppercase tracking-wider text-velmora-muted hover:text-velmora-gold mb-4"
              >
                Necklaces
              </Link>
              <Link
                to="/shop?category=Huggies"
                className="block font-sans text-sm uppercase tracking-wider text-velmora-muted hover:text-velmora-gold"
              >
                Huggies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
