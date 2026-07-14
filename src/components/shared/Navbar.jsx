import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Shop', path: '/shop' },
  { label: 'Collections', path: '/collections' },
  { label: 'About', path: '/about' },
  { label: 'Journal', path: '/journal' },
];

export default function Navbar() {
  const { totalItems, toggleCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const showSolid = scrolled || !isHome;

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          showSolid
            ? 'bg-white/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 -ml-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className={cn('w-5 h-5', !showSolid && isHome ? 'text-white' : 'text-charcoal')} />
              ) : (
                <Menu className={cn('w-5 h-5', !showSolid && isHome ? 'text-white' : 'text-charcoal')} />
              )}
            </button>

            {/* Logo */}
            <Link
              to="/"
              className={cn(
                'font-cormorant text-2xl sm:text-3xl font-bold tracking-superwide uppercase transition-colors',
                !showSolid && isHome ? 'text-white' : 'text-charcoal'
              )}
            >
              Velmora
            </Link>

            {/* Center nav - desktop */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'text-xs uppercase tracking-widest font-medium transition-colors hover:text-gold',
                    !showSolid && isHome ? 'text-white/90' : 'text-charcoal'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button
                aria-label="Search"
                className={cn(
                  'p-1.5 transition-colors hover:text-gold',
                  !showSolid && isHome ? 'text-white/90' : 'text-charcoal'
                )}
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                aria-label="Open cart"
                onClick={toggleCart}
                className={cn(
                  'relative p-1.5 transition-colors hover:text-gold',
                  !showSolid && isHome ? 'text-white/90' : 'text-charcoal'
                )}
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gold text-white text-[10px] font-medium w-4 h-4 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            'lg:hidden overflow-hidden transition-all duration-300',
            mobileOpen ? 'max-h-80' : 'max-h-0'
          )}
        >
          <div className="bg-white border-t border-beige px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block text-sm uppercase tracking-widest text-charcoal hover:text-gold py-2"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
}