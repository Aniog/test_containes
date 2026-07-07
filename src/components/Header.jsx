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
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-premium' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="font-serif text-2xl font-light tracking-widest uppercase">
            Velmora
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-sans text-sm tracking-wide uppercase hover:text-velmora-gold transition-colors duration-300 ${
                  isScrolled ? 'text-velmora-charcoal' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button className={`hover:text-velmora-gold transition-colors duration-300 ${
              isScrolled ? 'text-velmora-charcoal' : 'text-white'
            }`}>
              <Search className="w-5 h-5" />
            </button>
            
            <button 
              onClick={toggleCart}
              className={`relative hover:text-velmora-gold transition-colors duration-300 ${
                isScrolled ? 'text-velmora-charcoal' : 'text-white'
              }`}
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="cart-badge">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden hover:text-velmora-gold transition-colors duration-300 ${
                isScrolled ? 'text-velmora-charcoal' : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : 'closed'}`}>
        <div className="flex flex-col h-full pt-20 px-8">
          <nav className="flex flex-col space-y-6">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className="font-serif text-2xl font-light text-velmora-charcoal hover:text-velmora-gold transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="mt-auto mb-8 pt-8 border-t border-velmora-border">
            <div className="flex items-center space-x-4">
              <button className="text-velmora-charcoal hover:text-velmora-gold transition-colors duration-300">
                <Search className="w-5 h-5" />
              </button>
              <button 
                onClick={toggleCart}
                className="relative text-velmora-charcoal hover:text-velmora-gold transition-colors duration-300"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="cart-badge">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
