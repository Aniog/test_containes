import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { to: '/shop', label: 'Shop' },
  { to: '/shop?category=earrings', label: 'Collections' },
  { to: '/about', label: 'About' },
  { to: '/journal', label: 'Journal' },
];

export default function Navbar({ onOpenSearch }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, openCart } = useCart();
  const location = useLocation();

  // Reset scroll state and close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname, location.search]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
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

  // Determine if we're over a "dark" hero (homepage)
  const isHome = location.pathname === '/';
  const transparent = isHome && !scrolled;

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          transparent
            ? 'bg-transparent'
            : 'bg-cream/95 backdrop-blur-sm border-b border-hairline'
        )}
      >
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div
            className={cn(
              'flex items-center justify-between transition-all duration-300',
              scrolled || !isHome ? 'h-16 md:h-20' : 'h-20 md:h-28'
            )}
          >
            {/* Mobile menu trigger */}
            <button
              type="button"
              aria-label="Open menu"
              className={cn(
                'md:hidden p-2 -ml-2 transition-colors',
                transparent ? 'text-cream hover:text-soft-gold' : 'text-ink hover:text-charcoal'
              )}
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="w-5 h-5" strokeWidth={1.25} />
            </button>

            {/* Left: Logo */}
            <Link
              to="/"
              aria-label="Velmora home"
              className={cn(
                'font-serif tracking-[0.32em] text-[1.05rem] md:text-[1.15rem] transition-colors',
                transparent ? 'text-cream' : 'text-ink'
              )}
            >
              VELMORA
            </Link>

            {/* Center nav (desktop) */}
            <nav className="hidden md:flex items-center gap-10">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.to}
                  className={({ isActive }) =>
                    cn(
                      'label transition-colors duration-200',
                      transparent ? 'text-cream/90 hover:text-cream' : 'text-charcoal hover:text-ink',
                      isActive && !transparent && 'text-ink',
                      isActive && transparent && 'text-cream'
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Right: search + cart */}
            <div className="flex items-center gap-2 md:gap-4">
              <button
                type="button"
                aria-label="Search"
                className={cn(
                  'p-2 transition-colors',
                  transparent ? 'text-cream hover:text-soft-gold' : 'text-ink hover:text-charcoal'
                )}
                onClick={onOpenSearch}
              >
                <Search className="w-[18px] h-[18px]" strokeWidth={1.25} />
              </button>
              <button
                type="button"
                aria-label={`Cart with ${itemCount} item${itemCount === 1 ? '' : 's'}`}
                className={cn(
                  'relative p-2 transition-colors',
                  transparent ? 'text-cream hover:text-soft-gold' : 'text-ink hover:text-charcoal'
                )}
                onClick={openCart}
              >
                <ShoppingBag className="w-[18px] h-[18px]" strokeWidth={1.25} />
                {itemCount > 0 && (
                  <span
                    className={cn(
                      'absolute -top-0.5 -right-0.5 min-w-[16px] h-[16px] px-1 rounded-full text-[10px] font-medium flex items-center justify-center',
                      transparent ? 'bg-cream text-ink' : 'bg-ink text-cream'
                    )}
                    aria-hidden="true"
                  >
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu drawer */}
      <div
        className={cn(
          'fixed inset-0 z-[60] md:hidden transition-opacity duration-300',
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        aria-hidden={!mobileOpen}
      >
        <div
          className="absolute inset-0 bg-ink/30"
          onClick={() => setMobileOpen(false)}
        />
        <aside
          className={cn(
            'absolute top-0 left-0 bottom-0 w-[85%] max-w-[360px] bg-cream shadow-velmora-lg transition-transform duration-300 ease-out',
            mobileOpen ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          <div className="flex items-center justify-between px-6 h-16 border-b border-hairline">
            <span className="font-serif tracking-[0.32em] text-[1.05rem]">VELMORA</span>
            <button
              type="button"
              aria-label="Close menu"
              className="p-2 -mr-2 text-ink"
              onClick={() => setMobileOpen(false)}
            >
              <X className="w-5 h-5" strokeWidth={1.25} />
            </button>
          </div>
          <nav className="flex flex-col px-6 py-10 gap-6">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className="font-serif text-3xl text-ink hover:text-charcoal"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="px-6 py-8 border-t border-hairline mt-auto">
            <p className="label-light mb-2">Visit us</p>
            <p className="editorial text-base text-charcoal">
              hello@velmora.com
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}