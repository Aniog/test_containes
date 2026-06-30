import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cartCount, toggleCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/shop', label: 'Shop' },
    { to: '/shop?category=earrings', label: 'Earrings' },
    { to: '/shop?category=necklaces', label: 'Necklaces' },
    { to: '/shop?category=huggies', label: 'Huggies' },
    { to: '/about', label: 'About' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream-50/95 backdrop-blur-md shadow-sm border-b border-cream-200'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 -ml-2 text-charcoal-900"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Left nav links - desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.slice(0, 3).map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="text-xs tracking-widest uppercase text-charcoal-700 hover:text-gold-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <span className="font-serif text-2xl md:text-3xl font-semibold tracking-wider text-charcoal-900">
              VELMORA
            </span>
          </Link>

          {/* Right nav links - desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.slice(3).map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="text-xs tracking-widest uppercase text-charcoal-700 hover:text-gold-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <button className="p-2 text-charcoal-700 hover:text-gold-600 transition-colors" aria-label="Search">
              <Search size={18} />
            </button>
            <button
              className="p-2 text-charcoal-700 hover:text-gold-600 transition-colors relative"
              onClick={toggleCart}
              aria-label="Shopping cart"
            >
              <ShoppingBag size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold-500 text-charcoal-900 text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile right icons */}
          <div className="flex md:hidden items-center space-x-4">
            <button className="p-2 text-charcoal-700" aria-label="Search">
              <Search size={18} />
            </button>
            <button
              className="p-2 text-charcoal-700 relative"
              onClick={toggleCart}
              aria-label="Shopping cart"
            >
              <ShoppingBag size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold-500 text-charcoal-900 text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream-50 border-t border-cream-200 animate-slide-up">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="block text-sm tracking-widest uppercase text-charcoal-700 hover:text-gold-600 py-2"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
