import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';

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
    { name: 'Journal', path: '/journal' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white shadow-sm' 
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
            className={`font-serif text-2xl tracking-widest ${
              isScrolled || location.pathname !== '/' ? 'text-velmora-charcoal' : 'text-white'
            }`}
          >
            VELMORA
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-sans text-sm uppercase tracking-wider transition-colors ${
                  isScrolled || location.pathname !== '/'
                    ? 'text-velmora-charcoal hover:text-velmora-gold'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button
              className={`transition-colors ${
                isScrolled || location.pathname !== '/'
                  ? 'text-velmora-charcoal hover:text-velmora-gold'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              <Search size={20} />
            </button>
            
            <button
              onClick={() => setIsCartOpen(true)}
              className={`relative transition-colors ${
                isScrolled || location.pathname !== '/'
                  ? 'text-velmora-charcoal hover:text-velmora-gold'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-velmora-gold text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden transition-colors ${
                isScrolled || location.pathname !== '/'
                  ? 'text-velmora-charcoal'
                  : 'text-white/90'
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-velmora-sand">
          <nav className="flex flex-col px-4 py-6 space-y-4">
            {navLinks.map(link => (
              <Link
                key={link.name}
                to={link.path}
                className="font-sans text-sm uppercase tracking-wider text-velmora-charcoal hover:text-velmora-gold transition-colors"
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
