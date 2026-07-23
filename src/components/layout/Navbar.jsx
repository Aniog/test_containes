import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toggleCart, totalItems } = useCart();
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-2xl md:text-3xl tracking-wider ${
              isScrolled ? 'text-velmora-charcoal' : 'text-white'
            }`}
          >
            VELMORA
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-sans text-sm uppercase tracking-wider transition-colors ${
                  isScrolled
                    ? 'text-velmora-charcoal hover:text-velmora-gold'
                    : 'text-white/90 hover:text-velmora-gold-light'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button
              className={`transition-colors ${
                isScrolled ? 'text-velmora-charcoal' : 'text-white'
              } hover:text-velmora-gold`}
              aria-label="Search"
            >
              <Search size={20} />
            </button>

            <button
              onClick={toggleCart}
              className={`relative transition-colors ${
                isScrolled ? 'text-velmora-charcoal' : 'text-white'
              } hover:text-velmora-gold`}
              aria-label="Open cart"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-velmora-gold text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden transition-colors ${
                isScrolled ? 'text-velmora-charcoal' : 'text-white'
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
        <div className="md:hidden bg-white border-t border-velmora-sand">
          <div className="container-custom py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block font-sans text-lg text-velmora-charcoal hover:text-velmora-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
