import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/lib/CartContext';

const navLinks = [
  { label: 'Shop', path: '/shop' },
  { label: 'Collections', path: '/shop' },
  { label: 'About', path: '/' },
  { label: 'Journal', path: '/' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, openDrawer } = useCart();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isTransparent = location.pathname === '/' && !scrolled && !mobileOpen;

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        isTransparent
          ? 'bg-transparent text-white'
          : 'bg-white/95 backdrop-blur-md text-brand-ink shadow-sm'
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 -ml-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Center nav links (desktop) */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className={`text-xs uppercase tracking-wider font-medium transition-colors duration-300 ${
                  isTransparent
                    ? 'text-white/80 hover:text-white'
                    : 'text-brand-warmgray hover:text-brand-ink'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Logo */}
          <Link
            to="/"
            className={`absolute left-1/2 -translate-x-1/2 font-serif text-xl md:text-2xl tracking-[0.25em] font-semibold transition-colors duration-500 ${
              isTransparent ? 'text-white' : 'text-brand-ink'
            }`}
          >
            VELMORA
          </Link>

          {/* Right icons */}
          <div className="flex items-center gap-1 md:gap-4">
            <button
              className={`p-2 transition-colors duration-300 ${
                isTransparent ? 'text-white/80 hover:text-white' : 'text-brand-warmgray hover:text-brand-ink'
              }`}
              aria-label="Search"
            >
              <Search className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <button
              className={`relative p-2 transition-colors duration-300 ${
                isTransparent ? 'text-white/80 hover:text-white' : 'text-brand-warmgray hover:text-brand-ink'
              }`}
              onClick={openDrawer}
              aria-label="Cart"
            >
              <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-brand-gold text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${
          mobileOpen ? 'max-h-80' : 'max-h-0'
        }`}
      >
        <div className="bg-white border-t border-brand-sand/50 px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className="block text-sm uppercase tracking-wider text-brand-charcoal hover:text-brand-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
