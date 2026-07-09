import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useScrollPosition } from '@/lib/hooks';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { totalItems, toggleCart } = useCart();
  const scrollY = useScrollPosition();
  const location = useLocation();

  const isScrolled = scrollY > 50;
  const isHome = location.pathname === '/';

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/collections' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' },
  ];

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled || !isHome
            ? 'bg-cream-50/95 backdrop-blur-md shadow-soft'
            : 'bg-transparent'
        )}
      >
        <nav className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 -ml-2 text-charcoal-900 hover:text-gold-600 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Logo - centered on mobile, left on desktop */}
            <Link
              to="/"
              className="font-serif text-xl sm:text-2xl tracking-[0.15em] text-charcoal-900 hover:text-gold-600 transition-colors lg:flex-none"
            >
              VELMORA
            </Link>

            {/* Desktop navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    'font-sans text-xs tracking-[0.15em] uppercase transition-colors duration-300',
                    location.pathname === link.path
                      ? 'text-gold-600'
                      : 'text-charcoal-700 hover:text-gold-600'
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-3 sm:gap-4">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-charcoal-900 hover:text-gold-600 transition-colors"
                aria-label="Search"
              >
                <Search className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={toggleCart}
                className="relative p-2 text-charcoal-900 hover:text-gold-600 transition-colors"
                aria-label="Shopping cart"
              >
                <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold-600 text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Search overlay */}
        <div
          className={cn(
            'absolute top-full left-0 right-0 bg-cream-50 border-b border-charcoal-100 transition-all duration-300 overflow-hidden',
            searchOpen ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-400" />
              <input
                type="text"
                placeholder="Search for jewelry..."
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-charcoal-200 text-charcoal-900 text-sm font-sans placeholder:text-charcoal-400 focus:outline-none focus:border-gold-500 transition-colors"
                autoFocus={searchOpen}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          'fixed inset-0 z-[60] lg:hidden transition-opacity duration-300',
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-charcoal-950/50 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Menu panel */}
        <div
          className={cn(
            'absolute top-0 left-0 bottom-0 w-[85%] max-w-sm bg-cream-50 transform transition-transform duration-300 ease-out',
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          <div className="flex items-center justify-between p-4 border-b border-charcoal-100">
            <span className="font-serif text-xl tracking-[0.15em] text-charcoal-900">
              VELMORA
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-charcoal-900 hover:text-gold-600 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    'py-3 font-sans text-sm tracking-[0.15em] uppercase transition-colors border-b border-charcoal-50',
                    location.pathname === link.path
                      ? 'text-gold-600'
                      : 'text-charcoal-700 hover:text-gold-600'
                  )}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="mt-8 pt-6 border-t border-charcoal-100">
              <p className="text-xs text-charcoal-500 font-sans tracking-wide">
                Free worldwide shipping on all orders
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
