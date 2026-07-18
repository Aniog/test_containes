import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { itemCount, toggleCart } = useCart();
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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || location.pathname !== '/'
          ? 'bg-velmora-cream shadow-premium'
          : 'bg-transparent'
      }`}
    >
      <div className="container-premium">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-2xl tracking-widest uppercase transition-colors duration-300 ${
              isScrolled || location.pathname !== '/'
                ? 'text-velmora-charcoal'
                : 'text-white'
            }`}
          >
            Velmora
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {['Shop', 'Collections', 'About', 'Journal'].map((item) => (
              <Link
                key={item}
                to={item === 'Shop' ? '/shop' : `/${item.toLowerCase()}`}
                className={`text-sm tracking-wide uppercase transition-colors duration-300 ${
                  isScrolled || location.pathname !== '/'
                    ? 'text-velmora-charcoal hover:text-velmora-gold'
                    : 'text-white/90 hover:text-velmora-gold'
                }`}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button
              className={`transition-colors duration-300 ${
                isScrolled || location.pathname !== '/'
                  ? 'text-velmora-charcoal hover:text-velmora-gold'
                  : 'text-white hover:text-velmora-gold'
              }`}
            >
              <Search size={20} />
            </button>
            <button
              onClick={toggleCart}
              className={`relative transition-colors duration-300 ${
                isScrolled || location.pathname !== '/'
                  ? 'text-velmora-charcoal hover:text-velmora-gold'
                  : 'text-white hover:text-velmora-gold'
              }`}
            >
              <ShoppingBag size={20} />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-velmora-gold text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden transition-colors duration-300 ${
                isScrolled || location.pathname !== '/'
                  ? 'text-velmora-charcoal'
                  : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-velmora-cream border-t border-velmora-charcoal/10">
            <div className="py-4 space-y-4">
              {['Shop', 'Collections', 'About', 'Journal'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Shop' ? '/shop' : `/${item.toLowerCase()}`}
                  className="block text-sm tracking-wide uppercase text-velmora-charcoal hover:text-velmora-gold py-2"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
