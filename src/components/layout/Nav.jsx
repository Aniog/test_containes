import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggleCart, totalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navClasses = [
    'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
    scrolled
      ? 'bg-white/90 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]'
      : 'bg-transparent',
  ].join(' ');

  const linkClasses = (path) =>
    [
      'text-xs font-medium tracking-[0.18em] uppercase transition-colors duration-200',
      location.pathname === path ? 'text-ink' : 'text-ink-secondary hover:text-ink',
    ].join(' ');

  return (
    <header className={navClasses}>
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex h-16 items-center justify-between md:h-20">
          <button
            type="button"
            className="md:hidden p-2 -ml-2 text-ink"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <Link to="/" className="font-serif text-xl font-semibold tracking-wide text-ink md:text-2xl">
            VELMORA
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link to="/shop" className={linkClasses('/shop')}>
              Shop
            </Link>
            <Link to="/shop" className={linkClasses('/shop')}>
              Collections
            </Link>
            <Link to="/" className={linkClasses('/')}>
              About
            </Link>
            <Link to="/" className={linkClasses('/')}>
              Journal
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <button
              type="button"
              className="hidden md:inline-flex p-2 text-ink-secondary transition-colors hover:text-ink"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={toggleCart}
              className="relative p-2 text-ink-secondary transition-colors hover:text-ink"
              aria-label="Open cart"
            >
              <ShoppingBag className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -right-0.5 -top-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-ink text-[10px] font-semibold text-white">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="border-t border-border-soft bg-white/95 px-2 pb-6 pt-4 md:hidden">
            <nav className="flex flex-col gap-4">
              <Link to="/shop" className="text-sm font-medium tracking-wide text-ink">
                Shop
              </Link>
              <Link to="/shop" className="text-sm font-medium tracking-wide text-ink">
                Collections
              </Link>
              <Link to="/" className="text-sm font-medium tracking-wide text-ink">
                About
              </Link>
              <Link to="/" className="text-sm font-medium tracking-wide text-ink">
                Journal
              </Link>
              <button
                type="button"
                className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-ink-secondary"
              >
                <Search className="h-4 w-4" />
                Search
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Nav;
