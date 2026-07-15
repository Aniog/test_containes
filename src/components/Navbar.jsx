import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { toggleCart, totalItems } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
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
    ? 'bg-cream/95 backdrop-blur-sm shadow-sm'
    : 'bg-transparent';

  const textClass = scrolled || !isHome ? 'text-text-primary' : 'text-white';

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          bgClass
        )}
      >
        <div className="max-w-content mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Mobile menu button */}
            <button
              className={cn('lg:hidden p-2', textClass)}
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Logo */}
            <Link
              to="/"
              className={cn(
                'font-serif text-xl lg:text-2xl tracking-widest-plus font-medium uppercase',
                textClass
              )}
            >
              Velmora
            </Link>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={cn(
                    'font-sans text-xs uppercase tracking-widest font-medium transition-colors duration-300 hover:text-gold',
                    textClass
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button
                className={cn('p-2 transition-colors duration-300 hover:text-gold', textClass)}
                onClick={() => setSearchOpen(true)}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                className={cn('p-2 relative transition-colors duration-300 hover:text-gold', textClass)}
                onClick={toggleCart}
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-cream">
          <div className="flex items-center justify-between px-6 h-16">
            <span className="font-serif text-xl tracking-widest-plus font-medium uppercase text-text-primary">
              Velmora
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 text-text-primary"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex flex-col items-center gap-8 pt-12">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="font-serif text-2xl text-text-primary hover:text-gold transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Search overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-[60] bg-cream/98 backdrop-blur-sm flex flex-col items-center pt-24 px-6">
          <button
            onClick={() => setSearchOpen(false)}
            className="absolute top-5 right-6 p-2 text-text-primary"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="w-full max-w-xl">
            <input
              type="text"
              placeholder="Search jewelry..."
              className="w-full bg-transparent border-b border-hairline pb-3 text-xl font-serif text-text-primary placeholder:text-text-muted focus:outline-none focus:border-gold transition-colors"
              autoFocus
            />
          </div>
        </div>
      )}
    </>
  );
}
