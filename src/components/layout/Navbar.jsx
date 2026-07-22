import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const NAV_LINKS = [
  { to: '/shop', label: 'Shop' },
  { to: '/collections', label: 'Collections' },
  { to: '/about', label: 'About' },
  { to: '/journal', label: 'Journal' },
];

export default function Navbar() {
  const { count, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Transparent only over the homepage hero before scrolling.
  const solid = !isHome || scrolled || mobileOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        solid
          ? 'border-b border-espresso/10 bg-cream/95 shadow-[0_1px_0_rgba(43,33,24,0.04)] backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        {/* Left: logo */}
        <Link
          to="/"
          className={`font-serif text-xl tracking-[0.35em] transition-colors md:text-2xl ${
            solid ? 'text-espresso' : 'text-cream'
          }`}
        >
          VELMORA
        </Link>

        {/* Center: links (desktop) */}
        <div className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-[11px] font-medium uppercase tracking-[0.25em] transition-colors ${
                  solid
                    ? isActive
                      ? 'text-gold-deep'
                      : 'text-espresso hover:text-gold-deep'
                    : isActive
                      ? 'text-cream'
                      : 'text-cream/80 hover:text-cream'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Right: icons */}
        <div className="flex items-center gap-4 md:gap-5">
          <button
            type="button"
            aria-label="Search"
            className={`transition-colors ${
              solid ? 'text-espresso hover:text-gold-deep' : 'text-cream hover:text-sand'
            }`}
          >
            <Search className="h-5 w-5" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label={`Open cart, ${count} items`}
            onClick={openCart}
            className={`relative transition-colors ${
              solid ? 'text-espresso hover:text-gold-deep' : 'text-cream hover:text-sand'
            }`}
          >
            <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4.5 min-w-[18px] items-center justify-center rounded-full bg-gold px-1 text-[10px] font-semibold text-cream">
                {count}
              </span>
            )}
          </button>
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMobileOpen((v) => !v)}
            className={`transition-colors lg:hidden ${
              solid ? 'text-espresso' : 'text-cream'
            }`}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" strokeWidth={1.5} />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-espresso/10 bg-cream transition-all duration-300 lg:hidden ${
          mobileOpen ? 'max-h-72' : 'max-h-0 border-t-0'
        }`}
      >
        <div className="flex flex-col gap-1 px-5 py-4">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `py-2.5 text-xs font-medium uppercase tracking-[0.25em] transition-colors ${
                  isActive ? 'text-gold-deep' : 'text-espresso hover:text-gold-deep'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
}
