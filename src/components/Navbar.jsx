import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useScrollHeader } from '@/hooks/useScrollHeader';

export default function Navbar() {
  const scrolled = useScrollHeader(40);
  const { count, openCart } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navLinks = [
    { to: '/shop', label: 'Shop' },
    { to: '/collections', label: 'Collections' },
    { to: '/about', label: 'About' },
    { to: '/journal', label: 'Journal' },
  ];

  const textColor = isHome && !scrolled ? 'text-cream' : 'text-espresso';
  const bgClass =
    isHome && !scrolled
      ? 'bg-transparent'
      : 'bg-cream/95 backdrop-blur-md shadow-card';

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-30 transition-all duration-300 ${bgClass}`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <button
            type="button"
            className={`p-1 md:hidden ${textColor}`}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-sans text-xs font-medium uppercase tracking-widest transition-colors hover:text-gold ${textColor}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/"
            className={`absolute left-1/2 -translate-x-1/2 font-serif text-xl font-semibold uppercase tracking-[0.25em] transition-colors ${textColor}`}
          >
            Velmora
          </Link>

          <div className={`flex items-center gap-4 ${textColor}`}>
            <button
              type="button"
              aria-label="Search"
              className="p-1 transition-colors hover:text-gold"
            >
              <Search size={20} />
            </button>
            <button
              type="button"
              onClick={openCart}
              className="relative p-1 transition-colors hover:text-gold"
              aria-label="Open cart"
            >
              <ShoppingBag size={20} />
              {count > 0 && (
                <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[10px] font-semibold text-cream">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="absolute inset-0 bg-espresso/40 backdrop-blur-sm"
            aria-label="Close menu overlay"
          />
          <div className="absolute left-0 top-0 h-full w-4/5 max-w-sm bg-cream p-6 shadow-soft">
            <div className="mb-8 flex items-center justify-between">
              <span className="font-serif text-lg font-semibold uppercase tracking-[0.25em] text-espresso">
                Velmora
              </span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="text-taupe"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col gap-6">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="font-serif text-2xl font-medium text-espresso"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
