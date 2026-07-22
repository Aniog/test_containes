import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const NAV_LINKS = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/journal' },
];

export function Navbar() {
  const { openCart, count } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const bgClass =
    isHome && !scrolled
      ? 'bg-transparent text-white'
      : 'bg-cream/95 backdrop-blur-md text-espresso shadow-sm border-b border-stone';

  const logoClass = isHome && !scrolled ? 'text-white' : 'text-espresso';
  const iconClass = isHome && !scrolled ? 'text-white' : 'text-espresso';

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${bgClass}`}>
        <nav className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
          <button
            type="button"
            className="md:hidden p-2 -ml-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} className={iconClass} />
          </button>

          <Link to="/" className={`font-serif text-2xl tracking-[0.12em] ${logoClass}`}>
            VELMORA
          </Link>

          <ul className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className="text-xs uppercase tracking-label hover:opacity-70 transition-opacity"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <button
              type="button"
              className={`p-2 hover:opacity-70 transition-opacity ${iconClass}`}
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button
              type="button"
              onClick={openCart}
              className={`relative p-2 hover:opacity-70 transition-opacity ${iconClass}`}
              aria-label="Open cart"
            >
              <ShoppingBag size={20} />
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-accent text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>
          </div>
        </nav>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-espresso/30" onClick={() => setMobileOpen(false)} />
          <div className="absolute top-0 left-0 h-full w-4/5 max-w-xs bg-cream shadow-xl p-6 flex flex-col animate-in slide-in-from-left duration-300">
            <div className="flex items-center justify-between mb-10">
              <span className="font-serif text-xl text-espresso tracking-[0.12em]">VELMORA</span>
              <button type="button" onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <X size={24} className="text-espresso" />
              </button>
            </div>
            <ul className="space-y-6">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-sm uppercase tracking-label text-espresso hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
