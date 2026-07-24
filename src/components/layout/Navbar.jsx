import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Navbar = ({ onOpenCart }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems } = useCart();
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
    ? 'bg-background/90 backdrop-blur border-b border-border'
    : 'bg-transparent';

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${navClass}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <button
            type="button"
            className="md:hidden p-2 -ml-2 text-ink"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <Link to="/" className="font-serif text-xl tracking-[0.18em] text-ink">
            VELMORA
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-[0.16em] uppercase text-ink-secondary">
            <Link to="/shop" className="hover:text-ink transition-colors">Shop</Link>
            <Link to="/shop" className="hover:text-ink transition-colors">Collections</Link>
            <Link to="/" className="hover:text-ink transition-colors">About</Link>
            <Link to="/" className="hover:text-ink transition-colors">Journal</Link>
          </nav>

          <div className="flex items-center gap-4">
            <button type="button" className="p-2 text-ink hover:text-accent transition-colors" aria-label="Search">
              <Search className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="relative p-2 text-ink hover:text-accent transition-colors"
              onClick={onOpenCart}
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
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-6">
            <nav className="flex flex-col gap-4 text-sm font-semibold tracking-[0.16em] uppercase text-ink-secondary">
              <Link to="/shop" className="py-2">Shop</Link>
              <Link to="/shop" className="py-2">Collections</Link>
              <Link to="/" className="py-2">About</Link>
              <Link to="/" className="py-2">Journal</Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
