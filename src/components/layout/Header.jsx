import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';

export default function Header({ onOpenCart }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-velmora-cream shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <div className="container-velmora">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Left: Logo */}
          <Link
            to="/"
            className={`font-serif text-2xl tracking-widest transition-colors ${
              isScrolled ? 'text-velmora-charcoal' : 'text-velmora-cream'
            }`}
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            VELMORA
          </Link>

          {/* Center: Navigation (Desktop) */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm tracking-wide transition-colors hover:text-velmora-gold ${
                  isScrolled ? 'text-velmora-charcoal' : 'text-velmora-cream'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right: Icons */}
          <div className="flex items-center space-x-4">
            <button
              className={`transition-colors hover:text-velmora-gold ${
                isScrolled ? 'text-velmora-charcoal' : 'text-velmora-cream'
              }`}
              aria-label="Search"
            >
              <Search size={20} />
            </button>

            <button
              onClick={onOpenCart}
              className={`relative transition-colors hover:text-velmora-gold ${
                isScrolled ? 'text-velmora-charcoal' : 'text-velmora-cream'
              }`}
              aria-label="Cart"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-velmora-gold text-velmora-cream text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden transition-colors hover:text-velmora-gold ${
                isScrolled ? 'text-velmora-charcoal' : 'text-velmora-cream'
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
      <div
        className={`md:hidden fixed inset-0 bg-velmora-cream z-40 transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ top: '80px' }}
      >
        <nav className="container-velmora py-8">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-2xl font-serif text-velmora-charcoal hover:text-velmora-gold transition-colors"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
