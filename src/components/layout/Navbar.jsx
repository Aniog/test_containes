import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const navLinks = [
  { label: 'Shop', path: '/shop' },
  { label: 'Collections', path: '/shop' },
  { label: 'About', path: '/' },
  { label: 'Journal', path: '/' },
];

export default function Navbar({ onCartOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-brand-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            className="md:hidden text-brand-dark"
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-label="Toggle menu"
          >
            {mobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className={`text-sm tracking-widest uppercase font-sans font-medium transition-colors duration-300 ${
                  scrolled ? 'text-brand-charcoal hover:text-brand-gold' : 'text-brand-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-2xl md:text-3xl tracking-[0.2em] font-bold transition-colors duration-300 ${
              scrolled ? 'text-brand-dark' : 'text-white'
            }`}
          >
            VELMORA
          </Link>

          {/* Right icons */}
          <div className="flex items-center gap-4 md:gap-6">
            <button
              className={`transition-colors duration-300 ${
                scrolled ? 'text-brand-dark hover:text-brand-gold' : 'text-brand-white/90 hover:text-white'
              }`}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              className={`relative transition-colors duration-300 ${
                scrolled ? 'text-brand-dark hover:text-brand-gold' : 'text-brand-white/90 hover:text-white'
              }`}
              onClick={onCartOpen}
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-gold text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileMenu ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-brand-white/95 backdrop-blur-md border-t border-brand-border px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className="block text-sm tracking-widest uppercase font-sans text-brand-charcoal hover:text-brand-gold transition-colors"
              onClick={() => setMobileMenu(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}