import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop?category=sets' },
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/journal' },
];

export default function Nav({ onCartOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navBg = scrolled || !isHome ? 'bg-ivory/95 backdrop-blur-md shadow-sm' : 'bg-transparent';
  const textColor = scrolled || !isHome ? 'text-near-black' : 'text-white';

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        navBg
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 -ml-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className={cn('w-5 h-0.5 mb-1 transition-colors', textColor)} />
            <div className={cn('w-5 h-0.5 mb-1 transition-colors', textColor)} />
            <div className={cn('w-5 h-0.5 transition-colors', textColor)} />
          </button>

          {/* Logo */}
          <Link
            to="/"
            className={cn(
              'font-serif text-2xl md:text-3xl tracking-widest-lg transition-colors',
              textColor
            )}
          >
            VELMORA
          </Link>

          {/* Center nav — desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  'text-sm tracking-wider uppercase font-sans font-medium transition-colors duration-300 hover:text-gold',
                  textColor
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button
              className={cn(
                'p-2 transition-colors duration-300 hover:text-gold',
                textColor
              )}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={onCartOpen}
              className={cn(
                'p-2 transition-colors duration-300 hover:text-gold relative',
                textColor
              )}
              aria-label="Open cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {totalItems > 9 ? '9+' : totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300',
          mobileOpen ? 'max-h-80 bg-ivory/95 backdrop-blur-md' : 'max-h-0'
        )}
      >
        <div className="px-4 py-4 space-y-3 border-t border-beige">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm tracking-wider uppercase font-sans font-medium text-near-black hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}