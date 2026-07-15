import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useScrollPosition } from '@/hooks/useScrollPosition';

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop?category=earrings' },
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/journal' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggleCart, totalItems } = useCart();
  const scrollY = useScrollPosition();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isScrolled = scrollY > 60;

  const navClasses = `fixed top-0 left-0 right-0 z-30 transition-all duration-400 ${
    isScrolled || !isHome
      ? 'bg-cream/95 backdrop-blur-md border-b border-taupe/40 shadow-sm'
      : 'bg-transparent'
  }`;

  const textColor = isScrolled || !isHome ? 'text-ink' : 'text-cream';

  return (
    <>
      <header className={navClasses}>
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            className={`p-2 lg:hidden ${textColor}`}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>

          <Link to="/" className={`font-serif text-2xl tracking-[0.12em] ${textColor}`}>
            VELMORA
          </Link>

          <ul className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className={`text-sm uppercase tracking-widest transition-colors hover:text-gold ${textColor}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className={`flex items-center gap-4 ${textColor}`}>
            <button type="button" aria-label="Search" className="p-2 hover:text-gold transition-colors">
              <Search size={20} />
            </button>
            <button
              type="button"
              onClick={toggleCart}
              aria-label="Open cart"
              className="relative p-2 hover:text-gold transition-colors"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[10px] font-semibold text-ink">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </nav>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-ink/40 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-4/5 max-w-sm bg-cream p-6 shadow-2xl">
            <div className="mb-10 flex items-center justify-between">
              <span className="font-serif text-2xl tracking-[0.12em]">VELMORA</span>
              <button type="button" onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <X size={24} />
              </button>
            </div>
            <ul className="space-y-6">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-serif text-2xl hover:text-goldDark transition-colors"
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
