import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Shop', path: '/shop' },
  { name: 'Collections', path: '/collections' },
  { name: 'About', path: '/about' },
  { name: 'Journal', path: '/journal' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setCartOpen } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navClass = cn(
    'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
    scrolled || !isHome
      ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm'
      : 'bg-transparent'
  );

  const linkClass = (isScrolled, isHomePage) =>
    cn(
      'text-sm tracking-wider uppercase transition-colors duration-200 font-medium',
      (isScrolled || !isHomePage) ? 'text-foreground hover:text-accent' : 'text-white/90 hover:text-white'
    );

  return (
    <>
      <nav className={navClass}>
        <div className="max-w-content mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 -ml-2"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className={cn('w-5 h-5', (scrolled || !isHome) ? 'text-foreground' : 'text-white')} />
              ) : (
                <Menu className={cn('w-5 h-5', (scrolled || !isHome) ? 'text-foreground' : 'text-white')} />
              )}
            </button>

            {/* Center desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={linkClass(scrolled, isHome)}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Logo */}
            <Link
              to="/"
              className={cn(
                'font-serif text-xl md:text-2xl tracking-widest uppercase transition-colors duration-300',
                (scrolled || !isHome) ? 'text-foreground' : 'text-white'
              )}
            >
              Velmora
            </Link>

            {/* Desktop nav right */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.slice(2).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={linkClass(scrolled, isHome)}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Icons */}
            <div className="flex items-center gap-4">
              <button
                className={cn(
                  'p-2 transition-colors duration-200',
                  (scrolled || !isHome) ? 'text-foreground hover:text-accent' : 'text-white/90 hover:text-white'
                )}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={() => setCartOpen(true)}
                className={cn(
                  'p-2 relative transition-colors duration-200',
                  (scrolled || !isHome) ? 'text-foreground hover:text-accent' : 'text-white/90 hover:text-white'
                )}
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-accent text-white text-[10px] font-medium rounded-full flex items-center justify-center">
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
            'md:hidden overflow-hidden transition-all duration-300',
            mobileOpen ? 'max-h-80 border-b border-border' : 'max-h-0'
          )}
        >
          <div className="px-4 py-4 space-y-3 bg-background">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block text-sm tracking-wider uppercase text-foreground hover:text-accent transition-colors py-2"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Spacer for fixed nav */}
      <div className="h-16 md:h-20" />
    </>
  );
}