import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useScrollPosition } from '../../lib/hooks';

const navLinks = [
  { to: '/collections', label: 'Shop' },
  { to: '/collections', label: 'Collections' },
  { to: '/about', label: 'About' },
  { to: '/journal', label: 'Journal' },
];

export default function Navbar() {
  const { isScrolled } = useScrollPosition();
  const { cartCount, toggleCart } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';
  const showTransparent = isHome && !isScrolled && !mobileOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          showTransparent
            ? 'bg-transparent'
            : 'bg-ivory/95 backdrop-blur-md shadow-sm'
        }`}
      >
        <nav className="max-w-[1280px] mx-auto px-6 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <span
              className={`font-serif text-2xl font-semibold tracking-nav transition-colors duration-300 ${
                showTransparent ? 'text-white' : 'text-charcoal'
              }`}
            >
              VELMORA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`text-capti uppercase tracking-caption font-sans font-medium transition-colors duration-200 hover:text-gold ${
                  showTransparent ? 'text-white/90 hover:text-white' : 'text-charcoal/70'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <button
              className={`p-2 transition-colors duration-200 ${
                showTransparent ? 'text-white hover:text-white/80' : 'text-charcoal hover:text-gold'
              }`}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={toggleCart}
              className={`relative p-2 transition-colors duration-200 ${
                showTransparent ? 'text-white hover:text-white/80' : 'text-charcoal hover:text-gold'
              }`}
              aria-label="Shopping cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-gold text-white text-[10px] font-semibold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2 transition-colors duration-200 ${
                showTransparent ? 'text-white' : 'text-charcoal'
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-charcoal/40"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute top-[72px] left-0 right-0 bg-ivory border-b border-linen shadow-lg">
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="text-charcoal font-sans text-sm uppercase tracking-caption font-medium py-2 border-b border-linen last:border-b-0 hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
