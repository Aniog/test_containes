import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toggleCart, cartCount } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { label: 'Shop', to: '/shop' },
    { label: 'Collections', to: '/collections' },
    { label: 'About', to: '/about' },
    { label: 'Journal', to: '/journal' },
  ];

  const isHome = location.pathname === '/';
  const headerBg = isHome && !isScrolled ? 'bg-transparent' : 'bg-cream-50 shadow-soft';
  const textColor = isHome && !isScrolled ? 'text-white' : 'text-charcoal-900';
  const borderColor = isHome && !isScrolled ? 'border-white/20' : 'border-charcoal-900/10';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}
    >
      <div className={`max-w-7xl mx-auto px-6 lg:px-8 ${isHome && !isScrolled ? 'py-6' : 'py-4'}`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-2xl tracking-[0.2em] uppercase ${textColor}`}
          >
            Velmora
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm tracking-wider uppercase transition-colors duration-300 ${textColor} hover:opacity-70`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button
              className={`p-2 transition-colors duration-300 ${textColor} hover:opacity-70`}
              aria-label="Search"
            >
              <Search size={20} />
            </button>

            <button
              className={`relative p-2 transition-colors duration-300 ${textColor} hover:opacity-70`}
              onClick={toggleCart}
              aria-label="Cart"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-gold text-charcoal-900 text-xs font-medium rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className={`md:hidden p-2 transition-colors duration-300 ${textColor}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t ${borderColor}">
            <div className="flex flex-col space-y-4 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm tracking-wider uppercase text-charcoal-900 hover:opacity-70"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
