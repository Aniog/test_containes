import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { to: '/shop', label: 'Shop' },
  { to: '/shop?category=collections', label: 'Collections' },
  { to: '/about', label: 'About' },
  { to: '/journal', label: 'Journal' },
];

export default function Navbar({ transparentOverHero = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, openCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    if (!transparentOverHero) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [transparentOverHero]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.search]);

  const isSolid = scrolled || !transparentOverHero || mobileOpen;

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-colors duration-500',
        isSolid
          ? 'bg-ivory/95 backdrop-blur border-b border-hairline text-ink'
          : 'bg-transparent text-ivory'
      )}
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        {/* Mobile menu */}
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden -ml-2 p-2"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Left: logo */}
        <Link
          to="/"
          className="font-serif text-2xl md:text-3xl tracking-[0.25em] font-medium absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
          aria-label="Velmora — Home"
        >
          VELMORA
        </Link>

        {/* Center nav (desktop) */}
        <nav className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  'text-[11px] uppercase tracking-[0.28em] font-medium transition-opacity duration-300 hover:opacity-70',
                  isActive && 'underline underline-offset-[6px] decoration-[0.5px]'
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right icons */}
        <div className="flex items-center gap-4 md:gap-5">
          <button
            type="button"
            aria-label="Search"
            className="p-2 hover:opacity-70 transition-opacity duration-300"
          >
            <Search className="w-[18px] h-[18px]" strokeWidth={1.4} />
          </button>
          <button
            type="button"
            aria-label={`Cart, ${itemCount} item${itemCount === 1 ? '' : 's'}`}
            onClick={openCart}
            className="relative p-2 hover:opacity-70 transition-opacity duration-300"
          >
            <ShoppingBag className="w-[18px] h-[18px]" strokeWidth={1.4} />
            {itemCount > 0 && (
              <span
                className={cn(
                  'absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full text-[10px] font-medium flex items-center justify-center',
                  isSolid ? 'bg-ink text-ivory' : 'bg-gold text-ink'
                )}
              >
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu drop */}
      <div
        className={cn(
          'md:hidden overflow-hidden bg-ivory text-ink border-t border-hairline transition-[max-height] duration-500 ease-in-out',
          mobileOpen ? 'max-h-96' : 'max-h-0'
        )}
      >
        <nav className="px-6 py-6 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm uppercase tracking-[0.28em] font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
