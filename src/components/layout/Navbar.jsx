import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const links = [
  { to: '/shop', label: 'Shop' },
  { to: '/shop#categories', label: 'Collections' },
  { to: '/#story', label: 'About' },
  { to: '/#journal', label: 'Journal' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { count, openCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  const solid = scrolled || menuOpen || location.pathname !== '/';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? 'bg-noir/95 backdrop-blur-md border-b border-umber shadow-[0_8px_30px_rgba(0,0,0,0.25)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between px-5 md:px-10">
        <div className="flex flex-1 items-center md:hidden">
          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((v) => !v)}
            className="p-2 -ml-2 text-ivory transition-colors hover:text-gold"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <Link
          to="/"
          className="font-serif text-xl md:text-2xl font-medium uppercase tracking-[0.35em] text-ivory transition-colors hover:text-gold"
        >
          Velmora
        </Link>

        <ul className="hidden md:flex items-center gap-9">
          {links.map((link) => (
            <li key={link.label}>
              <NavLink
                to={link.to}
                className="text-[11px] font-sans font-medium uppercase tracking-[0.24em] text-ivory/80 transition-colors duration-300 hover:text-gold"
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex flex-1 items-center justify-end gap-1 md:gap-2">
          <button
            type="button"
            aria-label="Search"
            className="p-2 text-ivory transition-colors hover:text-gold"
          >
            <Search className="h-[18px] w-[18px]" />
          </button>
          <button
            type="button"
            aria-label="Open cart"
            onClick={openCart}
            className="relative p-2 text-ivory transition-colors hover:text-gold"
          >
            <ShoppingBag className="h-[18px] w-[18px]" />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-semibold text-noir">
                {count}
              </span>
            )}
          </button>
        </div>
      </nav>

      <div
        className={`md:hidden overflow-hidden border-umber bg-noir/98 backdrop-blur-md transition-all duration-500 ${
          menuOpen ? 'max-h-72 border-b' : 'max-h-0'
        }`}
      >
        <ul className="space-y-1 px-6 py-5">
          {links.map((link) => (
            <li key={link.label}>
              <NavLink
                to={link.to}
                className="block py-2.5 font-serif text-lg uppercase tracking-[0.2em] text-ivory/90 transition-colors hover:text-gold"
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
