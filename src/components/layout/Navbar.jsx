import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cartCount, toggleCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-sm border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 -ml-2 text-charcoal hover:text-gold transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Left nav links - desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.slice(0, 3).map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-xs font-medium tracking-[0.2em] uppercase transition-colors hover:text-gold ${
                  location.pathname === link.to ? 'text-gold' : 'text-charcoal'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Logo */}
          <Link
            to="/"
            className="absolute left-1/2 -translate-x-1/2 font-serif text-2xl md:text-3xl tracking-[0.15em] text-charcoal hover:text-gold transition-colors"
          >
            VELMORA
          </Link>

          {/* Right nav links - desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.slice(3).map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-xs font-medium tracking-[0.2em] uppercase transition-colors hover:text-gold ${
                  location.pathname === link.to ? 'text-gold' : 'text-charcoal'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              className="p-2 text-charcoal hover:text-gold transition-colors"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              className="p-2 text-charcoal hover:text-gold transition-colors relative"
              onClick={toggleCart}
              aria-label="Open cart"
            >
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile right icons */}
          <div className="flex md:hidden items-center gap-3">
            <button className="p-2 text-charcoal hover:text-gold transition-colors" aria-label="Search">
              <Search className="w-4 h-4" />
            </button>
            <button
              className="p-2 text-charcoal hover:text-gold transition-colors relative"
              onClick={toggleCart}
              aria-label="Open cart"
            >
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border bg-cream/98 backdrop-blur-md">
            <div className="py-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block px-4 py-3 text-sm tracking-[0.15em] uppercase transition-colors ${
                    location.pathname === link.to
                      ? 'text-gold bg-cream-dark'
                      : 'text-charcoal hover:text-gold hover:bg-cream-dark'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
