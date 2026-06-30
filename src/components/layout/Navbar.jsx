import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const navLinks = [
  { to: '/shop', label: 'Shop' },
  { to: '/shop?category=earrings', label: 'Earrings' },
  { to: '/shop?category=necklaces', label: 'Necklaces' },
  { to: '/shop?category=huggies', label: 'Huggies' },
  { to: '/about', label: 'About' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cartCount, toggleDrawer } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-cream/90 backdrop-blur-md shadow-soft'
          : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          className="lg:hidden p-2 -ml-2 text-ink"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <Link to="/" className="font-serif text-2xl font-semibold tracking-wide text-ink">
          VELMORA
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                'text-sm font-medium tracking-wide transition-colors duration-200',
                location.pathname === link.to || location.pathname.startsWith(link.to.split('?')[0])
                  ? 'text-gold-600'
                  : 'text-ink/70 hover:text-ink',
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="p-2 text-ink/80 hover:text-ink transition-colors"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="relative p-2 text-ink/80 hover:text-ink transition-colors"
            onClick={toggleDrawer}
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-gold-500 text-[10px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-base-200 bg-cream/95 backdrop-blur-md">
          <nav className="flex flex-col px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="py-3 text-base font-medium text-ink/80 hover:text-ink border-b border-base-200 last:border-0"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
