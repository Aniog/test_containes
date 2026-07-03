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
  }, [location.pathname]);

  const navLinks = [
    { to: '/shop', label: 'Shop' },
    { to: '/shop?category=earrings', label: 'Earrings' },
    { to: '/shop?category=necklaces', label: 'Necklaces' },
    { to: '/shop?category=huggies', label: 'Huggies' },
    { to: '/about', label: 'About' },
    { to: '/journal', label: 'Journal' },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-bg/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container-narrow">
        <div className="flex items-center justify-between py-4 md:py-5">
          <button
            className="md:hidden p-2 -ml-2 text-brand-ink"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <Link to="/" className="font-serif text-xl md:text-2xl font-semibold tracking-wide text-brand-ink">
            VELMORA
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-xs font-medium tracking-widest uppercase transition-colors duration-200 ${
                  location.pathname === link.to || location.pathname + location.search === link.to
                    ? 'text-brand-ink'
                    : 'text-brand-muted hover:text-brand-ink'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button className="hidden md:inline-flex p-2 text-brand-ink hover:text-brand-accent transition-colors" aria-label="Search">
              <Search className="h-5 w-5" />
            </button>
            <button
              className="relative p-2 text-brand-ink hover:text-brand-accent transition-colors"
              onClick={toggleCart}
              aria-label="Open cart"
            >
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-brand-accent text-[10px] font-semibold text-white">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <nav className="md:hidden border-t border-brand-line pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block py-3 text-sm font-medium tracking-widest uppercase text-brand-ink"
              >
                {link.label}
              </Link>
            ))}
            <button className="mt-3 flex items-center gap-2 text-sm text-brand-muted">
              <Search className="h-4 w-4" />
              Search
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
