import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggleCart, cartCount } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navClass = scrolled
    ? 'bg-[var(--color-surface)]/95 backdrop-blur-md shadow-sm border-b border-[var(--color-border)]'
    : 'bg-transparent';

  const textClass = scrolled ? 'text-[var(--color-ink)]' : 'text-white';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClass}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <button
            type="button"
            className={`md:hidden p-2 -ml-2 ${textClass}`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <nav className="hidden md:flex items-center gap-8">
            <Link to="/shop" className={`text-sm font-medium transition-colors ${textClass} hover:text-[var(--color-accent)]`}>
              Shop
            </Link>
            <Link to="/shop?category=earrings" className={`text-sm font-medium transition-colors ${textClass} hover:text-[var(--color-accent)]`}>
              Earrings
            </Link>
            <Link to="/shop?category=necklaces" className={`text-sm font-medium transition-colors ${textClass} hover:text-[var(--color-accent)]`}>
              Necklaces
            </Link>
            <Link to="/shop?category=huggies" className={`text-sm font-medium transition-colors ${textClass} hover:text-[var(--color-accent)]`}>
              Huggies
            </Link>
          </nav>

          <Link to="/" className="absolute left-1/2 -translate-x-1/2 font-display text-xl sm:text-2xl font-semibold tracking-wide text-[var(--color-ink)]">
            VELMORA
          </Link>

          <div className="flex items-center gap-2 sm:gap-4">
            <button
              type="button"
              className={`p-2 transition-colors ${textClass} hover:text-[var(--color-accent)]`}
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              type="button"
              className={`relative p-2 transition-colors ${textClass} hover:text-[var(--color-accent)]`}
              onClick={toggleCart}
              aria-label="Open cart"
            >
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -right-0.5 -top-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-[var(--color-accent)] text-[10px] font-semibold text-white">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            <Link to="/shop" className="text-sm font-medium text-[var(--color-ink)]">
              Shop All
            </Link>
            <Link to="/shop?category=earrings" className="text-sm font-medium text-[var(--color-ink)]">
              Earrings
            </Link>
            <Link to="/shop?category=necklaces" className="text-sm font-medium text-[var(--color-ink)]">
              Necklaces
            </Link>
            <Link to="/shop?category=huggies" className="text-sm font-medium text-[var(--color-ink)]">
              Huggies
            </Link>
            <Link to="/" className="text-sm font-medium text-[var(--color-ink)]">
              About
            </Link>
            <Link to="/" className="text-sm font-medium text-[var(--color-ink)]">
              Journal
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
