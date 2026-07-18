import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const navLinks = [
  { label: 'Shop', path: '/shop' },
  { label: 'Collections', path: '/shop' },
  { label: 'About', path: '/about' },
  { label: 'Journal', path: '/journal' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { setIsOpen, totalItems } = useCart();
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

  const transparent = isHome && !scrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          transparent
            ? 'bg-transparent text-white'
            : 'bg-background/95 backdrop-blur-sm text-foreground border-b border-border'
        }`}
      >
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 -ml-2"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Logo */}
            <Link
              to="/"
              className="font-serif text-2xl md:text-3xl tracking-wide font-medium"
            >
              VELMORA
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="text-sm font-medium tracking-wide uppercase hover:opacity-70 transition-opacity duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right icons */}
            <div className="flex items-center gap-3 md:gap-5">
              <button
                className="p-2 hover:opacity-70 transition-opacity"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                className="p-2 hover:opacity-70 transition-opacity relative"
                onClick={() => setIsOpen(true)}
                aria-label="Open cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-accent text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-background">
          <div className="flex items-center justify-between h-16 px-4 border-b border-border">
            <span className="font-serif text-2xl tracking-wide">VELMORA</span>
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="p-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="flex flex-col px-6 py-8 gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className="font-serif text-2xl tracking-wide"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
