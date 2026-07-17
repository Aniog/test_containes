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

  const navClass = scrolled
    ? 'bg-brand-surface/90 backdrop-blur-md border-b border-brand-divider'
    : 'bg-transparent';

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${navClass}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <button
          type="button"
          className="md:hidden p-2 -ml-2 text-brand-ink"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <Link to="/" className="font-serif text-xl md:text-2xl tracking-widest text-brand-ink">
          VELMORA
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-widest text-brand-ink">
          <Link to="/shop" className="hover:text-brand-accent transition-colors">Shop</Link>
          <Link to="/shop" className="hover:text-brand-accent transition-colors">Collections</Link>
          <Link to="/" className="hover:text-brand-accent transition-colors">About</Link>
          <Link to="/" className="hover:text-brand-accent transition-colors">Journal</Link>
        </nav>

        <div className="flex items-center gap-4">
          <button type="button" className="p-2 text-brand-ink hover:text-brand-accent transition-colors" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="relative p-2 text-brand-ink hover:text-brand-accent transition-colors"
            onClick={toggleCart}
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -right-0.5 -top-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-brand-accent text-[10px] font-bold text-white">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-brand-divider bg-brand-surface/95 backdrop-blur-md md:hidden">
          <nav className="flex flex-col gap-4 px-6 py-6 text-sm font-semibold uppercase tracking-widest text-brand-ink">
            <Link to="/shop" className="py-2">Shop</Link>
            <Link to="/shop" className="py-2">Collections</Link>
            <Link to="/" className="py-2">About</Link>
            <Link to="/" className="py-2">Journal</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Nav;
