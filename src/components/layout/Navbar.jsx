import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useScrollPosition } from '@/hooks/useScrollPosition';

const navLinks = [
  { name: 'Shop', href: '/shop' },
  { name: 'Collections', href: '/shop' },
  { name: 'About', href: '/about' },
  { name: 'Journal', href: '/journal' },
];

const Navbar = ({ transparent }) => {
  const scrolled = useScrollPosition(50);
  const { count, toggleCart } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const isTransparent = isHome && transparent && !scrolled && !mobileOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-500 ${
          isTransparent
            ? 'bg-transparent text-white'
            : 'bg-velmora-surface/95 text-velmora-charcoal backdrop-blur-sm shadow-sm'
        }`}
      >
        <nav className="mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link
              to="/"
              className="font-serif text-2xl lg:text-3xl tracking-[0.15em] uppercase"
            >
              Velmora
            </Link>

            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors hover:text-velmora-gold ${
                    isTransparent ? 'text-white/90' : 'text-velmora-charcoal'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button
                className="p-2 hover:opacity-70 transition-opacity"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={toggleCart}
                className="relative p-2 hover:opacity-70 transition-opacity"
                aria-label="Open cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {count > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-velmora-gold text-white text-[10px] font-semibold flex items-center justify-center rounded-full">
                    {count}
                  </span>
                )}
              </button>
              <button
                onClick={() => setMobileOpen((v) => !v)}
                className="lg:hidden p-2 hover:opacity-70 transition-opacity"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </nav>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            mobileOpen ? 'max-h-96 border-t border-velmora-border/30' : 'max-h-0'
          }`}
        >
          <div className="px-6 py-4 space-y-4 bg-velmora-surface">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-xs uppercase tracking-[0.2em] font-medium text-velmora-charcoal hover:text-velmora-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
