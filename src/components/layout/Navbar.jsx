import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '/#about' },
  { label: 'Journal', href: '/#journal' },
];

export default function Navbar() {
  const scrolled = useScrollPosition(80);
  const { totalItems, toggleDrawer } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const navRef = useRef(null);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        ref={navRef}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out',
          scrolled || !isHome
            ? 'bg-cream-50/95 backdrop-blur-md shadow-sm border-b border-brand-200/30'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 -ml-2"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className={cn('w-5 h-5', scrolled || !isHome ? 'text-charcoal-950' : 'text-charcoal-950')} />
              ) : (
                <Menu className={cn('w-5 h-5', scrolled || !isHome ? 'text-charcoal-950' : 'text-charcoal-950')} />
              )}
            </button>

            {/* Logo */}
            <Link
              to="/"
              className={cn(
                'font-serif text-xl md:text-2xl font-medium tracking-wide transition-colors duration-300',
                scrolled || !isHome ? 'text-charcoal-950' : 'text-charcoal-950'
              )}
            >
              VELMORA
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={cn(
                    'text-xs uppercase tracking-ultra-wide font-medium transition-colors duration-200 hover:text-gold-600',
                    scrolled || !isHome ? 'text-charcoal-700' : 'text-charcoal-800'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className={cn(
                  'p-2 transition-colors duration-200 hover:text-gold-600',
                  scrolled || !isHome ? 'text-charcoal-700' : 'text-charcoal-800'
                )}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={toggleDrawer}
                className={cn(
                  'relative p-2 transition-colors duration-200 hover:text-gold-600',
                  scrolled || !isHome ? 'text-charcoal-700' : 'text-charcoal-800'
                )}
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 bg-gold-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center leading-none">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Search bar */}
        <div
          className={cn(
            'overflow-hidden transition-all duration-300 ease-out bg-cream-50/95 backdrop-blur-md border-t border-brand-100',
            searchOpen ? 'max-h-16 opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <div className="max-w-2xl mx-auto px-4 py-3">
            <input
              type="search"
              placeholder="Search our collection..."
              className="w-full bg-transparent border-b border-charcoal-200 py-2 text-sm text-charcoal-950 placeholder:text-charcoal-400 focus:outline-none focus:border-gold-500 transition-colors"
              autoFocus={searchOpen}
            />
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-cream-50 transition-all duration-400 ease-out md:hidden',
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <div className="pt-20 px-8">
          <div className="flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <Link
                key={link.label}
                to={link.href}
                className="font-serif text-3xl text-charcoal-950 py-3 border-b border-brand-100 transition-all duration-300"
                style={{ transitionDelay: mobileOpen ? `${i * 80}ms` : '0ms', transform: mobileOpen ? 'translateX(0)' : 'translateX(-20px)', opacity: mobileOpen ? 1 : 0 }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
