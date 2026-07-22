import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const navLinks = [
  { label: 'Shop', path: '/shop' },
  { label: 'Collections', path: '/shop' },
  { label: 'About', path: '/#about' },
  { label: 'Journal', path: '/#journal' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className={`w-5 h-5 ${scrolled || !isHome ? 'text-charcoal' : 'text-white'}`} />
            ) : (
              <Menu className={`w-5 h-5 ${scrolled || !isHome ? 'text-charcoal' : 'text-white'}`} />
            )}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-xl md:text-2xl tracking-[0.3em] font-light ${
              scrolled || !isHome ? 'text-charcoal' : 'text-white'
            }`}
          >
            VELMORA
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.path}
                className={`font-sans text-[11px] uppercase tracking-nav font-medium transition-colors duration-300 hover:text-gold ${
                  scrolled || !isHome ? 'text-charcoal' : 'text-white/90'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-3">
            <button
              className={`p-2 transition-colors duration-300 hover:text-gold ${
                scrolled || !isHome ? 'text-charcoal' : 'text-white'
              }`}
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsOpen(true)}
              className={`p-2 relative transition-colors duration-300 hover:text-gold ${
                scrolled || !isHome ? 'text-charcoal' : 'text-white'
              }`}
              aria-label="Cart"
            >
              <ShoppingBag className="w-4 h-4" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-gold text-white text-[9px] font-sans font-medium w-4 h-4 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white ${
          mobileOpen ? 'max-h-64 border-b border-charcoal/10' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-4 space-y-4">
          {navLinks.map(link => (
            <Link
              key={link.label}
              to={link.path}
              className="block font-sans text-xs uppercase tracking-nav text-charcoal hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
