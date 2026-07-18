import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const NAV_LINKS = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/journal' },
];

export function Navbar() {
  const { itemCount, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const solid = scrolled || !isHome;
  const textColor = solid ? 'text-ink' : 'text-cream';
  const borderColor = solid ? 'border-hairline' : 'border-white/10';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          solid ? 'bg-cream/95 shadow-sm backdrop-blur' : 'bg-transparent'
        } border-b ${borderColor}`}
      >
        <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-4 md:px-8">
          <Link
            to="/"
            className={`font-serif text-2xl font-medium tracking-wide ${textColor}`}
          >
            VELMORA
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className={`font-sans text-xs font-medium uppercase tracking-widest transition hover:opacity-70 ${textColor}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <button
              type="button"
              className={`p-1 transition hover:opacity-70 ${textColor}`}
              aria-label="Search"
            >
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={openCart}
              className={`relative p-1 transition hover:opacity-70 ${textColor}`}
              aria-label="Open cart"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[10px] font-medium text-white">
                  {itemCount}
                </span>
              )}
            </button>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className={`p-1 md:hidden ${textColor}`}
              aria-label="Open menu"
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>
          </div>
        </nav>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-cream md:hidden">
          <div className="flex items-center justify-between border-b border-hairline px-4 py-4">
            <span className="font-serif text-2xl font-medium tracking-wide text-ink">
              VELMORA
            </span>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="p-1 text-ink"
              aria-label="Close menu"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>
          <ul className="flex flex-col px-6 py-8">
            {NAV_LINKS.map((link) => (
              <li key={link.label} className="border-b border-hairline">
                <Link
                  to={link.href}
                  className="block py-4 font-serif text-3xl text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
