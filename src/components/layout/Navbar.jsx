import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Navbar = ({ onOpenCart }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navClass = scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent';

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${navClass}`}>
      <div className="section-container flex h-16 items-center justify-between">
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-full p-2 text-ink hover:bg-black/5"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <Link to="/" className="font-serif text-xl font-semibold tracking-ultra text-ink">
          VELMORA
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium tracking-wide text-ink-secondary">
          {['Shop', 'Collections', 'About', 'Journal'].map((item) => (
            <Link
              key={item}
              to={item === 'Shop' ? '/shop' : `/${item.toLowerCase()}`}
              className="transition-colors hover:text-ink"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="hidden md:inline-flex items-center justify-center rounded-full p-2 text-ink hover:bg-black/5"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={onOpenCart}
            className="relative inline-flex items-center justify-center rounded-full p-2 text-ink hover:bg-black/5"
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -right-0.5 -top-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-semibold text-white">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-white/95 backdrop-blur-md">
          <div className="section-container flex flex-col gap-4 py-6 text-sm font-medium text-ink-secondary">
            {['Shop', 'Collections', 'About', 'Journal'].map((item) => (
              <Link
                key={item}
                to={item === 'Shop' ? '/shop' : `/${item.toLowerCase()}`}
                className="py-2"
              >
                {item}
              </Link>
            ))}
            <button
              type="button"
              className="inline-flex items-center gap-2 py-2 text-left text-ink"
            >
              <Search className="h-4 w-4" /> Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
