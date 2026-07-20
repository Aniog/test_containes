import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { to: '/shop', label: 'Shop' },
  { to: '/collections/earrings', label: 'Collections' },
  { to: '/about', label: 'About' },
  { to: '/journal', label: 'Journal' },
];

export default function Nav({ variant = 'auto' }) {
  // variant: 'auto' = transparent over hero, solid after scroll
  //         'solid' = always solid
  //         'transparent' = always transparent
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { itemCount, openCart } = useCart();
  const location = useLocation();
  const searchInputRef = useRef(null);

  useEffect(() => {
    if (variant !== 'auto') {
      setScrolled(variant === 'solid');
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [variant]);

  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (searchOpen) {
      // Focus the input shortly after open
      setTimeout(() => searchInputRef.current?.focus(), 50);
    }
  }, [searchOpen]);

  const isTransparent = variant === 'transparent' || (variant === 'auto' && !scrolled);

  // When transparent, we want light text over the dark hero
  const navTextClass = isTransparent ? 'text-bone' : 'text-espresso';
  const navBorderClass = isTransparent ? 'border-bone/0' : 'border-sand';

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out',
          isTransparent
            ? 'bg-transparent'
            : 'bg-bone/95 backdrop-blur-sm border-b',
        )}
      >
        <div className="mx-auto flex h-16 max-w-8xl items-center justify-between px-5 sm:h-20 sm:px-8 lg:px-12">
          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className={cn('-ml-1 p-2 md:hidden', navTextClass)}
          >
            <Menu className="h-5 w-5" strokeWidth={1.25} />
          </button>

          {/* Left: logo */}
          <Link
            to="/"
            className={cn(
              'font-serif text-xl font-medium tracking-[0.32em] sm:text-2xl',
              navTextClass
            )}
            aria-label="Velmora — home"
          >
            VELMORA
          </Link>

          {/* Center: nav links (desktop) */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-10">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    className={({ isActive }) =>
                      cn(
                        'text-[11px] font-medium uppercase tracking-[0.2em] transition-colors duration-300',
                        isTransparent
                          ? 'text-bone/90 hover:text-bone'
                          : 'text-espresso/80 hover:text-espresso',
                        isActive && !isTransparent && 'text-espresso'
                      )
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right: search + cart */}
          <div className="flex items-center gap-1 sm:gap-3">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className={cn('p-2', navTextClass)}
            >
              <Search className="h-5 w-5" strokeWidth={1.25} />
            </button>
            <button
              onClick={openCart}
              aria-label={`Open cart, ${itemCount} items`}
              className={cn('relative p-2', navTextClass)}
            >
              <ShoppingBag className="h-5 w-5" strokeWidth={1.25} />
              {itemCount > 0 && (
                <span
                  className={cn(
                    'absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full px-1 text-[9px] font-medium tracking-wide',
                    isTransparent ? 'bg-bone text-espresso' : 'bg-espresso text-bone'
                  )}
                >
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[100] flex md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 bg-espresso/30 animate-fade-in"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <div className="relative flex h-full w-[88%] max-w-sm flex-col bg-bone px-6 py-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <span className="font-serif text-xl tracking-[0.32em]">VELMORA</span>
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="p-2 text-espresso"
              >
                <X className="h-5 w-5" strokeWidth={1.25} />
              </button>
            </div>
            <nav className="mt-10">
              <ul className="flex flex-col gap-5">
                {NAV_LINKS.map((l) => (
                  <li key={l.to}>
                    <NavLink
                      to={l.to}
                      className="font-serif text-3xl text-espresso"
                    >
                      {l.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-auto border-t border-sand pt-6 text-[11px] uppercase tracking-[0.2em] text-mink">
              Free worldwide shipping · 30-day returns
            </div>
          </div>
        </div>
      )}

      {/* Search overlay */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center bg-espresso/50 px-5 pt-24 animate-fade-in"
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSearchOpen(false);
          }}
        >
          <div className="w-full max-w-2xl border border-sand bg-bone p-6">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-mink">
                Search Velmora
              </span>
              <button
                onClick={() => setSearchOpen(false)}
                aria-label="Close search"
                className="p-1 text-mink hover:text-espresso"
              >
                <X className="h-4 w-4" strokeWidth={1.25} />
              </button>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSearchOpen(false);
                // Stub: would route to /shop?q=...
              }}
              className="mt-4 flex items-center gap-3 border-b border-espresso/20 pb-3"
            >
              <Search className="h-5 w-5 text-mink" strokeWidth={1.25} />
              <input
                ref={searchInputRef}
                type="search"
                placeholder="Earrings, necklaces, huggies…"
                className="flex-1 bg-transparent text-base text-espresso placeholder:text-stone focus:outline-none"
              />
            </form>
            <div className="mt-5 flex flex-wrap gap-2">
              {['Earrings', 'Necklaces', 'Huggies', 'Gifts', 'Sets'].map((tag) => (
                <button
                  type="button"
                  key={tag}
                  className="border border-sand px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-mink hover:border-espresso hover:text-espresso"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
