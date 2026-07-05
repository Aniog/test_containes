import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

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

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location?.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className={`text-2xl font-light tracking-[0.2em] ${
              isScrolled ? 'text-gray-900' : 'text-white'
            } font-['Cormorant_Garamond']`}
          >
            VELMORA
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Shop', 'Collections', 'About', 'Journal'].map((link) => (
              <Link
                key={link}
                to={link === 'Shop' ? '/shop' : `/${link.toLowerCase()}`}
                className={`text-sm tracking-wider ${
                  isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
                } transition-colors`}
              >
                {link}
              </Link>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button
              className={`${
                isScrolled ? 'text-gray-700' : 'text-white'
              } hover:opacity-70 transition-opacity`}
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={toggleCart}
              className={`relative ${
                isScrolled ? 'text-gray-700' : 'text-white'
              } hover:opacity-70 transition-opacity`}
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-700 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden ${isScrolled ? 'text-gray-700' : 'text-white'}`}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '80px' }}
      >
        <nav className="flex flex-col px-6 py-8 space-y-6">
          {['Shop', 'Collections', 'About', 'Journal'].map((link) => (
            <Link
              key={link}
              to={link === 'Shop' ? '/shop' : `/${link.toLowerCase()}`}
              className="text-gray-900 hover:text-amber-700 text-lg tracking-wider font-light"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
