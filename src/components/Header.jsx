import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
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
        isScrolled
          ? 'bg-[rgb(var(--color-background))] shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link
            to="/"
            className={`text-2xl md:text-3xl font-light tracking-[0.2em] ${
              isScrolled ? 'text-[rgb(var(--color-foreground))]' : 'text-white'
            } transition-colors duration-500`}
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            VELMORA
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm tracking-wider uppercase ${
                  isScrolled
                    ? 'text-[rgb(var(--color-foreground))]'
                    : 'text-white'
                } hover:opacity-70 transition-opacity duration-300`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button
              className={`${
                isScrolled
                  ? 'text-[rgb(var(--color-foreground))]'
                  : 'text-white'
              } hover:opacity-70 transition-opacity duration-300`}
              aria-label="Search"
            >
              <Search size={20} />
            </button>

            <button
              onClick={() => setIsCartOpen(true)}
              className={`relative ${
                isScrolled
                  ? 'text-[rgb(var(--color-foreground))]'
                  : 'text-white'
              } hover:opacity-70 transition-opacity duration-300`}
              aria-label="Open cart"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[rgb(var(--color-accent))] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden ${
                isScrolled
                  ? 'text-[rgb(var(--color-foreground))]'
                  : 'text-white'
              } hover:opacity-70 transition-opacity duration-300`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[rgb(var(--color-background))] border-t border-[rgb(var(--color-border))]">
          <nav className="container-custom py-8 space-y-6">
            {navLinks.map(link => (
              <Link
                key={link.name}
                to={link.path}
                className="block text-lg tracking-wider uppercase text-[rgb(var(--color-foreground))] hover:opacity-70 transition-opacity"
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
