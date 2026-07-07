import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCart } from '@/context/CartContext';

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop?category=sets' },
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/journal' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggleCart, count } = useCart();
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

  const transparent = isHome && !scrolled && !mobileOpen;

  return (
    <>
      <header
        className={cn(
          'fixed top-0 inset-x-0 z-40 transition-all duration-500 ease-out-expo',
          transparent
            ? 'bg-transparent text-white'
            : 'bg-background/95 text-foreground backdrop-blur-md border-b border-border'
        )}
      >
        <div className="mx-auto px-5 md:px-8 lg:px-12">
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="md:hidden p-2 -ml-2"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Logo */}
            <Link
              to="/"
              className="font-serif text-xl md:text-2xl uppercase tracking-[0.18em] font-medium"
            >
              Velmora
            </Link>

            {/* Center links */}
            <ul className="hidden md:flex items-center gap-8 lg:gap-10">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-xs uppercase tracking-[0.16em] font-medium hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Right icons */}
            <div className="flex items-center gap-3 md:gap-5">
              <button type="button" className="p-2" aria-label="Search">
                <Search className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={toggleCart}
                className="relative p-2"
                aria-label="Open cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {count > 0 && (
                  <span className="absolute top-0 right-0 w-4 h-4 flex items-center justify-center text-[10px] font-bold rounded-full bg-accent text-accent-foreground">
                    {count}
                  </span>
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile menu drawer */}
      <div
        className={cn(
          'fixed inset-0 z-50 md:hidden transition-opacity duration-300',
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <div
          className="absolute inset-0 bg-foreground/40"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            'absolute top-0 left-0 h-full w-[80%] max-w-xs bg-background shadow-lifted transition-transform duration-500 ease-out-expo',
            mobileOpen ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          <div className="flex items-center justify-between p-5 border-b border-border">
            <span className="font-serif text-lg uppercase tracking-[0.18em]">Menu</span>
            <button type="button" onClick={() => setMobileOpen(false)} aria-label="Close menu">
              <X className="w-5 h-5" />
            </button>
          </div>
          <ul className="flex flex-col p-5 gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className="block text-sm uppercase tracking-[0.16em] font-medium py-2 border-b border-border"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
