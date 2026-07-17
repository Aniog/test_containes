import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { label: 'Shop', path: '/shop' },
    { label: 'Collections', path: '/collections' },
    { label: 'About', path: '/about' },
    { label: 'Journal', path: '/journal' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-premium'
          : location.pathname === '/'
          ? 'bg-transparent'
          : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-2xl tracking-[0.3em] ${
              isScrolled || location.pathname !== '/' ? 'text-[#1A1A1A]' : 'text-white'
            }`}
          >
            VELMORA
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm uppercase tracking-wider transition-colors ${
                  isScrolled || location.pathname !== '/'
                    ? 'text-[#1A1A1A] hover:text-[#C9A96E]'
                    : 'text-white hover:text-[#C9A96E]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <button
              className={`transition-colors ${
                isScrolled || location.pathname !== '/'
                  ? 'text-[#1A1A1A] hover:text-[#C9A96E]'
                  : 'text-white hover:text-[#C9A96E]'
              }`}
              aria-label="Search"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Cart Icon */}
            <button
              onClick={toggleCart}
              className={`relative transition-colors ${
                isScrolled || location.pathname !== '/'
                  ? 'text-[#1A1A1A] hover:text-[#C9A96E]'
                  : 'text-white hover:text-[#C9A96E]'
              }`}
              aria-label="Cart"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {totalItems > 0 && (
                <span className="cart-badge-pulse absolute -top-2 -right-2 bg-[#C9A96E] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden transition-colors ${
                isScrolled || location.pathname !== '/'
                  ? 'text-[#1A1A1A]'
                  : 'text-white'
              }`}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#E8E4DF] animate-slide-down">
          <nav className="flex flex-col px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-[#1A1A1A] hover:text-[#C9A96E] text-sm uppercase tracking-wider py-2"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
