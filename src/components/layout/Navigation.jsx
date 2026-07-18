import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/journal' },
];

export default function Navigation() {
  const isScrolled = useScrollPosition(80);
  const { totalItems, toggleCart } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out',
          isScrolled || !isHome
            ? 'bg-velmora-cream/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className={cn('w-5 h-5', isScrolled || !isHome ? 'text-velmora-charcoal' : 'text-velmora-cream')} />
              ) : (
                <Menu className={cn('w-5 h-5', isScrolled || !isHome ? 'text-velmora-charcoal' : 'text-velmora-cream')} />
              )}
            </button>

            {/* Logo */}
            <Link
              to="/"
              className={cn(
                'font-serif text-xl md:text-2xl tracking-mega-wide transition-colors duration-300',
                isScrolled || !isHome ? 'text-velmora-charcoal' : 'text-velmora-cream'
              )}
            >
              VELMORA
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={cn(
                    'font-sans text-caption uppercase tracking-ultra-wide transition-colors duration-300 hover:text-velmora-gold',
                    isScrolled || !isHome ? 'text-velmora-charcoal' : 'text-velmora-cream'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button
                className={cn(
                  'p-2 transition-colors duration-300 hover:text-velmora-gold',
                  isScrolled || !isHome ? 'text-velmora-charcoal' : 'text-velmora-cream'
                )}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={toggleCart}
                className={cn(
                  'relative p-2 transition-colors duration-300 hover:text-velmora-gold',
                  isScrolled || !isHome ? 'text-velmora-charcoal' : 'text-velmora-cream'
                )}
                aria-label="Shopping cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-velmora-gold text-velmora-cream text-[10px] font-medium rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Hairline divider */}
        <div
          className={cn(
            'h-px transition-opacity duration-500',
            isScrolled || !isHome ? 'bg-velmora-gold/20 opacity-100' : 'opacity-0'
          )}
        />
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-velmora-cream transition-all duration-300 md:hidden',
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <div className="pt-20 px-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-serif text-heading-2 text-velmora-charcoal tracking-wide"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
