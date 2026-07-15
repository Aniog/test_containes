import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toggleCart, cartCount } = useCart();
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white shadow-sm' 
        : location.pathname === '/' 
          ? 'bg-transparent' 
          : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link 
            to="/" 
            className={`font-serif text-2xl lg:text-3xl tracking-widest ${
              isScrolled || location.pathname !== '/' 
                ? 'text-charcoal' 
                : 'text-white'
            }`}
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            VELMORA
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm tracking-wider uppercase transition-colors ${
                  isScrolled || location.pathname !== '/'
                    ? 'text-charcoal hover:text-gold'
                    : 'text-white hover:text-gold-light'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4 lg:space-x-6">
            <button 
              className={`transition-colors ${
                isScrolled || location.pathname !== '/'
                  ? 'text-charcoal hover:text-gold'
                  : 'text-white hover:text-gold-light'
              }`}
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            
            <button 
              className={`relative transition-colors ${
                isScrolled || location.pathname !== '/'
                  ? 'text-charcoal hover:text-gold'
                  : 'text-white hover:text-gold-light'
              }`}
              onClick={toggleCart}
              aria-label="Cart"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden transition-colors ${
                isScrolled || location.pathname !== '/'
                  ? 'text-charcoal'
                  : 'text-white'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-6 py-8 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block text-sm tracking-wider uppercase text-charcoal hover:text-gold"
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
