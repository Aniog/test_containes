import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const NAV_LINKS = [
  { to: '/shop', label: 'Shop' },
  { to: '/collections', label: 'Collections' },
  { to: '/about', label: 'About' },
  { to: '/journal', label: 'Journal' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggleCart, cartCount } = useCart();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container-editorial flex items-center justify-between py-4">
        <Link to="/" className="font-serif text-2xl md:text-3xl tracking-widest text-brand-ink">
          VELMORA
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-xs uppercase tracking-widest transition-colors ${
                location.pathname === link.to
                  ? 'text-brand-accent'
                  : 'text-brand-ink hover:text-brand-accent'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            aria-label="Search"
            className="hidden md:inline-flex text-brand-ink hover:text-brand-accent transition-colors"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            aria-label="Cart"
            onClick={toggleCart}
            className="relative text-brand-ink hover:text-brand-accent transition-colors"
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-brand-accent text-[10px] font-semibold text-white">
                {cartCount}
              </span>
            )}
          </button>
          <button
            aria-label="Menu"
            className="md:hidden text-brand-ink"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-brand-line">
          <div className="container-editorial flex flex-col gap-4 py-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm uppercase tracking-widest text-brand-ink"
              >
                {link.label}
              </Link>
            ))}
            <button className="flex items-center gap-2 text-sm text-brand-muted">
              <Search className="h-4 w-4" />
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
