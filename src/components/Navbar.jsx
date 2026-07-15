import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggleCart, totalItems } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navBg =
    !isHome || scrolled
      ? 'bg-cream/95 backdrop-blur-md shadow-sm'
      : 'bg-transparent';
  const textColor = !isHome || scrolled ? 'text-charcoal' : 'text-white';

  const links = [
    { to: '/shop', label: 'Shop' },
    { to: '/shop', label: 'Collections' },
    { to: '/', label: 'About' },
    { to: '/', label: 'Journal' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
    >
      <div className="max-w-container mx-auto px-6 lg:px-10">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            className={`md:hidden ${textColor}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-2xl md:text-3xl tracking-widest font-light ${textColor} transition-colors duration-500`}
          >
            VELMORA
          </Link>

          {/* Center links */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`text-xs font-medium tracking-ultra-wide uppercase ${textColor} hover:opacity-60 transition-opacity duration-300`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-5">
            <button
              className={`${textColor} hover:opacity-60 transition-opacity duration-300`}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              className={`relative ${textColor} hover:opacity-60 transition-opacity duration-300`}
              onClick={toggleCart}
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-white text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream/95 backdrop-blur-md border-t border-hairline">
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-sm font-medium tracking-ultra-wide uppercase text-charcoal"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
