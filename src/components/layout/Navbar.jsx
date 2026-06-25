import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/cn';

const NAV_LINKS = [
  { to: '/shop', label: 'Shop' },
  { to: '/collections', label: 'Collections' },
  { to: '/about', label: 'About' },
  { to: '/journal', label: 'Journal' },
];

export default function Navbar({ transparentOnTop = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { count, open: openCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  const overTransparent = transparentOnTop && !scrolled && !mobileOpen;

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        overTransparent
          ? 'bg-transparent text-cream'
          : 'bg-cream/95 text-ink backdrop-blur-md border-b border-hairline'
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:h-20 md:px-10">
        {/* Left: Logo */}
        <Link
          to="/"
          className="font-serif text-2xl tracking-[0.32em] md:text-[26px]"
          aria-label="Velmora home"
        >
          VELMORA
        </Link>

        {/* Center: Nav */}
        <nav className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cn(
                  'text-[11px] uppercase tracking-[0.3em] transition-colors',
                  isActive ? 'text-champagne' : 'hover:text-champagne'
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* Right: actions */}
        <div className="flex items-center gap-5 md:gap-6">
          <button
            type="button"
            aria-label="Search"
            onClick={() => setSearchOpen((v) => !v)}
            className="transition-colors hover:text-champagne"
          >
            <Search size={18} strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label={`Cart (${count})`}
            onClick={openCart}
            className="relative transition-colors hover:text-champagne"
          >
            <ShoppingBag size={18} strokeWidth={1.5} />
            {count > 0 && (
              <span className="absolute -right-2 -top-2 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-champagne px-1 text-[10px] font-medium text-ink">
                {count}
              </span>
            )}
          </button>
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setMobileOpen(true)}
            className="md:hidden"
          >
            <Menu size={20} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Search dropdown */}
      {searchOpen && (
        <div className="border-t border-hairline bg-cream text-ink fade-in">
          <div className="mx-auto flex max-w-[1400px] items-center gap-4 px-5 py-5 md:px-10">
            <Search size={18} strokeWidth={1.5} className="text-mocha" />
            <input
              autoFocus
              type="text"
              placeholder="Search the collection…"
              className="w-full bg-transparent text-base tracking-wide placeholder:text-mocha focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setSearchOpen(false)}
              className="text-[11px] uppercase tracking-[0.28em] text-mocha hover:text-ink"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Mobile nav drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-cream text-ink fade-in md:hidden">
          <div className="flex h-16 items-center justify-between px-5">
            <Link to="/" className="font-serif text-2xl tracking-[0.32em]">
              VELMORA
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            >
              <X size={22} strokeWidth={1.5} />
            </button>
          </div>
          <nav className="flex flex-col gap-6 px-8 pt-12">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className="font-serif text-3xl tracking-wide"
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
