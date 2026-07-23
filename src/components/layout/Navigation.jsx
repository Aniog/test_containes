import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

export function Navigation() {
  const { isScrolled } = useScrollPosition();
  const { itemCount, toggleCart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: '/shop', label: 'Shop' },
    { href: '/shop?category=earrings', label: 'Earrings' },
    { href: '/shop?category=necklaces', label: 'Necklaces' },
    { href: '/shop?category=huggies', label: 'Huggies' },
  ];

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled
            ? 'bg-ivory/95 backdrop-blur-md shadow-soft'
            : 'bg-transparent'
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px] md:h-[80px]">
            {/* Left: Mobile menu + Desktop links */}
            <div className="flex items-center gap-8">
              <button
                className="lg:hidden p-2 -ml-2 text-charcoal hover:text-gold transition-colors"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </button>
              
              <div className="hidden lg:flex items-center gap-8">
                {navLinks.slice(0, 4).map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={cn(
                      'text-sm font-medium tracking-wide transition-colors duration-300',
                      location.pathname === link.href
                        ? 'text-gold'
                        : 'text-charcoal hover:text-gold'
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Center: Logo */}
            <Link
              to="/"
              className={cn(
                'font-serif text-2xl md:text-3xl tracking-extra-wide transition-colors duration-300',
                isScrolled ? 'text-charcoal' : 'text-ivory'
              )}
            >
              VELMORA
            </Link>

            {/* Right: Search + Cart */}
            <div className="flex items-center gap-4">
              <button
                className={cn(
                  'p-2 transition-colors duration-300',
                  isScrolled ? 'text-charcoal hover:text-gold' : 'text-ivory hover:text-gold'
                )}
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              <button
                className={cn(
                  'p-2 transition-colors duration-300 relative',
                  isScrolled ? 'text-charcoal hover:text-gold' : 'text-ivory hover:text-gold'
                )}
                onClick={toggleCart}
                aria-label="Open cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-gold text-espresso text-xs font-medium rounded-full flex items-center justify-center">
                    {itemCount > 9 ? '9+' : itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Search bar */}
          {searchOpen && (
            <div className="pb-4 animate-fade-up">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-taupe" />
                <input
                  type="text"
                  placeholder="Search for jewelry..."
                  className="w-full h-12 pl-12 pr-4 bg-cream border border-sand rounded-sm text-charcoal placeholder:text-taupe focus:outline-none focus:border-gold transition-colors"
                  autoFocus
                />
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-espresso/50"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-ivory p-6 animate-slide-in-right">
            <div className="flex items-center justify-between mb-8">
              <span className="font-serif text-xl tracking-extra-wide text-charcoal">VELMORA</span>
              <button
                className="p-2 text-charcoal hover:text-gold transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 text-lg font-medium text-charcoal hover:text-gold transition-colors border-b border-sand/50"
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
