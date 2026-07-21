import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toggleCart, itemCount } = useCart();
  const location = useLocation();

  // Handle scroll effect for transparent/solid nav
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-velmora-cream shadow-premium'
          : 'bg-transparent'
      }`}
    >
      <div className="container-premium">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Left: Logo */}
          <Link
            to="/"
            className={`font-serif text-2xl md:text-3xl tracking-widest ${
              isScrolled ? 'text-velmora-charcoal' : 'text-velmora-white'
            }`}
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            VELMORA
          </Link>

          {/* Center: Navigation (Desktop) */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm tracking-wide uppercase transition-colors duration-300 ${
                  isScrolled
                    ? 'text-velmora-charcoal hover:text-velmora-gold'
                    : 'text-velmora-white hover:text-velmora-gold-light'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right: Icons */}
          <div className="flex items-center space-x-4">
            <button
              className={`transition-colors duration-300 ${
                isScrolled ? 'text-velmora-charcoal' : 'text-velmora-white'
              }`}
              aria-label="Search"
            >
              <Search size={20} />
            </button>

            <button
              onClick={toggleCart}
              className={`relative transition-colors duration-300 ${
                isScrolled ? 'text-velmora-charcoal' : 'text-velmora-white'
              }`}
              aria-label="Cart"
            >
              <ShoppingBag size={20} />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-velmora-gold text-velmora-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden transition-colors duration-300 ${
                isScrolled ? 'text-velmora-charcoal' : 'text-velmora-white'
              }`}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-velmora-cream border-t border-gray-200">
          <nav className="container-premium py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block text-velmora-charcoal text-sm tracking-wide uppercase hover:text-velmora-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
