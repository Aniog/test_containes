import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import SearchOverlay from '@/components/layout/SearchOverlay';

const NAV_LINKS = [
  { to: '/shop', label: 'Shop' },
  { to: '/collections', label: 'Collections' },
  { to: '/about', label: 'About' },
  { to: '/journal', label: 'Journal' },
];

export default function Navbar() {
  const { count, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const transparent = isHome && !scrolled && !menuOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          transparent
            ? 'bg-transparent'
            : 'border-b border-hairline bg-ivory/90 shadow-[0_10px_40px_-24px_rgba(30,21,13,0.35)] backdrop-blur-md'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
          {/* Mobile menu button */}
          <button
            type="button"
            className={`flex h-10 w-10 items-center justify-center md:hidden ${
              transparent ? 'text-ivory' : 'text-ink'
            }`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X className="h-5 w-5" strokeWidth={1.5} /> : <Menu className="h-5 w-5" strokeWidth={1.5} />}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-xl tracking-[0.35em] md:text-2xl ${
              transparent ? 'text-ivory' : 'text-ink'
            }`}
          >
            VELMORA
          </Link>

          {/* Center links */}
          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 md:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `group relative text-[11px] uppercase tracking-[0.25em] transition-colors duration-300 ${
                    transparent
                      ? isActive
                        ? 'text-gold'
                        : 'text-ivory/85 hover:text-ivory'
                      : isActive
                        ? 'text-bronze'
                        : 'text-cocoa hover:text-ink'
                  }`
                }
              >
                {link.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${
                    transparent ? 'bg-gold' : 'bg-bronze'
                  }`}
                />
              </NavLink>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-1 md:gap-2">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className={`flex h-10 w-10 items-center justify-center transition-colors ${
                transparent ? 'text-ivory hover:text-gold' : 'text-ink hover:text-bronze'
              }`}
              aria-label="Search"
            >
              <Search className="h-[18px] w-[18px]" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={openCart}
              className={`relative flex h-10 w-10 items-center justify-center transition-colors ${
                transparent ? 'text-ivory hover:text-gold' : 'text-ink hover:text-bronze'
              }`}
              aria-label={`Open cart, ${count} items`}
            >
              <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={1.5} />
              {count > 0 && (
                <span className="absolute right-0.5 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-bronze px-1 text-[9px] font-bold text-ivory">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`overflow-hidden border-b border-hairline bg-ivory transition-all duration-500 ease-out-soft md:hidden ${
            menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col gap-1 px-6 py-5" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `border-b border-hairline/70 py-3.5 text-xs uppercase tracking-[0.3em] ${
                    isActive ? 'text-bronze' : 'text-ink'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
