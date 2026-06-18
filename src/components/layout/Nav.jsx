import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, Search, ShoppingBag, X } from 'lucide-react';
import { clsx } from 'clsx';
import { useCart } from '@/context/CartContext';

const NAV_LINKS = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/collections' },
  { label: 'About', to: '/about' },
  { label: 'Journal', to: '/journal' },
];

export default function Nav({ transparentOnTop = true }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { itemCount, openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const solid = !transparentOnTop || scrolled;

  return (
    <>
      <header
        className={clsx(
          'fixed top-0 inset-x-0 z-40 transition-all duration-500',
          solid
            ? 'bg-porcelain/95 backdrop-blur-md border-b border-hairline text-espresso'
            : 'bg-transparent text-cream',
        )}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile: menu button */}
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="md:hidden -ml-2 p-2"
              aria-label="Open menu"
            >
              <Menu size={20} strokeWidth={1.4} />
            </button>

            {/* Left: nav links (desktop) */}
            <nav className="hidden md:flex items-center gap-8 lg:gap-10 flex-1">
              {NAV_LINKS.slice(0, 2).map((link) => (
                <NavItem key={link.to} link={link} solid={solid} />
              ))}
            </nav>

            {/* Center: logo */}
            <Link
              to="/"
              className={clsx(
                'font-serif font-medium absolute left-1/2 -translate-x-1/2 select-none',
                solid ? 'text-espresso' : 'text-cream',
              )}
              style={{ letterSpacing: '0.35em' }}
            >
              <span className="text-xl md:text-2xl">VELMORA</span>
            </Link>

            {/* Right: more nav (desktop) + icons */}
            <div className="hidden md:flex items-center gap-8 lg:gap-10 flex-1 justify-end">
              {NAV_LINKS.slice(2).map((link) => (
                <NavItem key={link.to} link={link} solid={solid} />
              ))}
            </div>

            <div className="flex items-center gap-4 md:gap-5 md:ml-6">
              <button
                type="button"
                aria-label="Search"
                onClick={() => setSearchOpen(true)}
                className={clsx(
                  'p-1 transition-colors',
                  solid ? 'text-espresso hover:text-gold' : 'text-cream hover:text-gold-soft',
                )}
              >
                <Search size={18} strokeWidth={1.4} />
              </button>
              <button
                type="button"
                onClick={openCart}
                aria-label="Open cart"
                className={clsx(
                  'relative p-1 transition-colors',
                  solid ? 'text-espresso hover:text-gold' : 'text-cream hover:text-gold-soft',
                )}
              >
                <ShoppingBag size={18} strokeWidth={1.4} />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 min-w-[16px] h-[16px] px-1 rounded-full bg-gold text-cream text-[9px] font-medium flex items-center justify-center font-sans">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Search overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-porcelain/98 backdrop-blur-sm animate-fadeIn">
          <div className="max-w-3xl mx-auto px-6 pt-32">
            <div className="flex items-center justify-between mb-8">
              <span className="text-[11px] uppercase tracking-[0.3em] text-mute">
                Search Velmora
              </span>
              <button
                onClick={() => setSearchOpen(false)}
                aria-label="Close search"
                className="text-espresso hover:text-gold"
              >
                <X size={20} strokeWidth={1.4} />
              </button>
            </div>
            <input
              autoFocus
              type="text"
              placeholder="Search earrings, necklaces, gifts…"
              className="w-full bg-transparent border-b border-hairline focus:border-gold outline-none py-3 text-2xl md:text-4xl font-serif text-espresso placeholder:text-mute/60 transition-colors"
            />
            <p className="mt-6 text-xs text-mute font-sans">
              Press <span className="text-espresso">Enter</span> to search, or{' '}
              <span className="text-espresso">Esc</span> to close.
            </p>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-porcelain animate-fadeIn md:hidden">
          <div className="flex items-center justify-between h-16 px-5 border-b border-hairline">
            <span className="font-serif text-xl text-espresso" style={{ letterSpacing: '0.3em' }}>
              VELMORA
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="p-2 text-espresso"
            >
              <X size={22} strokeWidth={1.4} />
            </button>
          </div>
          <nav className="flex flex-col px-6 py-10 gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="font-serif text-3xl text-espresso py-3 border-b border-hairline hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="px-6 mt-4 text-xs uppercase tracking-[0.3em] text-mute">
            Free worldwide shipping · 30-day returns
          </div>
        </div>
      )}
    </>
  );
}

function NavItem({ link, solid }) {
  return (
    <NavLink
      to={link.to}
      className={({ isActive }) =>
        clsx(
          'text-[11px] uppercase tracking-[0.25em] font-sans transition-colors duration-300',
          solid
            ? isActive
              ? 'text-gold'
              : 'text-espresso hover:text-gold'
            : isActive
              ? 'text-gold-soft'
              : 'text-cream hover:text-gold-soft',
        )
      }
    >
      {link.label}
    </NavLink>
  );
}
