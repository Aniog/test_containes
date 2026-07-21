import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggleDrawer, totalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navClass = scrolled
    ? 'bg-surface/90 backdrop-blur-md border-b border-border'
    : 'bg-transparent';

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${navClass}`}>
      <div className="container-editorial flex items-center justify-between py-4">
        <button
          className="md:hidden p-2 -ml-2 text-ink"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <Link to="/" className="font-serif text-xl md:text-2xl font-semibold tracking-[0.18em] text-ink">
          VELMORA
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          {['Shop', 'Collections', 'About', 'Journal'].map((item) => (
            <Link
              key={item}
              to={item === 'Shop' ? '/shop' : `/${item.toLowerCase()}`}
              className="text-muted hover:text-ink transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden md:inline-flex p-2 text-ink hover:text-accent transition-colors" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button
            className="relative p-2 text-ink hover:text-accent transition-colors"
            onClick={toggleDrawer}
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-semibold text-surface">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-surface/95 backdrop-blur-md">
          <nav className="container-editorial flex flex-col gap-4 py-6 text-sm font-medium tracking-wide">
            {['Shop', 'Collections', 'About', 'Journal'].map((item) => (
              <Link
                key={item}
                to={item === 'Shop' ? '/shop' : `/${item.toLowerCase()}`}
                className="text-ink"
              >
                {item}
              </Link>
            ))}
            <button className="flex items-center gap-2 text-muted" aria-label="Search">
              <Search className="h-4 w-4" /> Search
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
