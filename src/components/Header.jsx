import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Header() {
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
    { name: 'Journal', path: '/journal' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || location.pathname !== '/'
          ? 'bg-white shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container-luxury">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-2xl tracking-wider ${
              isScrolled || location.pathname !== '/'
                ? 'text-[#2d2d2d]'
                : 'text-white'
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
                className={`text-sm uppercase tracking-wider transition-colors ${
                  isScrolled || location.pathname !== '/'
                    ? 'text-[#2d2d2d] hover:text-[#c9a96e]'
                    : 'text-white hover:text-[#c9a96e]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button
              className={`transition-colors ${
                isScrolled || location.pathname !== '/'
                  ? 'text-[#2d2d2d] hover:text-[#c9a96e]'
                  : 'text-white hover:text-[#c9a96e]'
              }`}
              aria-label="Search"
            >
              <Search size={20} />
            </button>

            <button
              onClick={toggleCart}
              className={`relative transition-colors ${
                isScrolled || location.pathname !== '/'
                  ? 'text-[#2d2d2d] hover:text-[#c9a96e]'
                  : 'text-white hover:text-[#c9a96e]'
              }`}
              aria-label="Open cart"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#c9a96e] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden transition-colors ${
                isScrolled || location.pathname !== '/'
                  ? 'text-[#2d2d2d]'
                  : 'text-white'
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
        <div className="md:hidden bg-white border-t border-[#e8e3dd]">
          <nav className="container-luxury py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block text-[#2d2d2d] hover:text-[#c9a96e] text-sm uppercase tracking-wider py-2"
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
