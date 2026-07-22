import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ShoppingBag } from 'lucide-react';
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
    { to: '/shop?category=earrings', label: 'Collections' },
    { to: '/about', label: 'About' },
    { to: '/journal', label: 'Journal' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-brand-bg/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          <button
            className="md:hidden p-2 -ml-2 text-brand-ink"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <Link to="/" className="font-serif text-xl font-semibold tracking-widest text-brand-ink md:text-2xl">
            VELMORA
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-xs font-medium uppercase tracking-widest transition-colors hover:text-brand-accent ${
                  location.pathname === link.to ? 'text-brand-accent' : 'text-brand-ink'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button className="p-2 text-brand-ink hover:text-brand-accent transition-colors" aria-label="Search">
              <Search className="h-5 w-5" />
            </button>
            <button
              className="relative p-2 text-brand-ink hover:text-brand-accent transition-colors"
              onClick={toggleCart}
              aria-label="Open cart"
            >
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-brand-accent text-[10px] font-semibold text-white">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-brand-bg border-t border-brand-line">
          <nav className="flex flex-col px-4 py-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm font-medium uppercase tracking-widest text-brand-ink hover:text-brand-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
