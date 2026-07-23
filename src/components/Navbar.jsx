import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { toggleCart, totalItems } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: '/shop', label: 'Shop' },
    { to: '/collections', label: 'Collections' },
    { to: '/about', label: 'About' },
    { to: '/journal', label: 'Journal' },
  ];

  const bgClass = scrolled || !isHome
    ? 'bg-velmora-white/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent';

  const textClass = scrolled || !isHome
    ? 'text-velmora-base'
    : 'text-white';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${bgClass}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              className={`md:hidden p-2 ${textClass} transition-colors`}
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-xl md:text-2xl font-light tracking-widest-xl ${textClass} transition-colors`}
            >
              VELMORA
            </Link>

            {/* Center links - desktop */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-xs font-medium tracking-widest uppercase ${textClass} hover:text-velmora-gold transition-colors duration-300`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-3 md:gap-5">
              <button
                className={`p-2 ${textClass} hover:text-velmora-gold transition-colors`}
                onClick={() => setSearchOpen(true)}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                className={`p-2 relative ${textClass} hover:text-velmora-gold transition-colors`}
                onClick={toggleCart}
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-velmora-gold text-white text-[10px] font-semibold rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60]">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-velmora-white p-6 shadow-xl">
            <button
              className="absolute top-4 right-4 text-velmora-base"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="mt-12 flex flex-col gap-6">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm font-medium tracking-widest uppercase text-velmora-base hover:text-velmora-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Search overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-[60] bg-velmora-white/98 backdrop-blur-sm flex items-start justify-center pt-24">
          <button
            className="absolute top-5 right-5 text-velmora-base"
            onClick={() => setSearchOpen(false)}
            aria-label="Close search"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="w-full max-w-xl px-6">
            <input
              type="text"
              placeholder="Search products..."
              autoFocus
              className="w-full bg-transparent border-b-2 border-velmora-base text-2xl font-serif py-3 outline-none placeholder:text-velmora-muted-light text-velmora-base"
            />
            <p className="mt-4 text-sm text-velmora-muted">Press Enter to search</p>
          </div>
        </div>
      )}
    </>
  );
}
