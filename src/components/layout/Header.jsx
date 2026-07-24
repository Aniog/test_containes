import { useEffect, useState, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart, openCartEvent } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { to: '/shop', label: 'Shop' },
  { to: '/shop?category=earrings', label: 'Collections', isCollection: true },
  { to: '/about', label: 'About' },
  { to: '/journal', label: 'Journal' },
];

function CartButton({ onClick, count }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Open cart, ${count} item${count === 1 ? '' : 's'}`}
      className="relative inline-flex items-center justify-center w-10 h-10 -mr-2 text-current transition-opacity duration-300 ease-editorial hover:opacity-70"
    >
      <ShoppingBag className="w-[18px] h-[18px]" strokeWidth={1.4} />
      {count > 0 && (
        <span
          aria-hidden="true"
          className="absolute top-1 right-1 min-w-[16px] h-4 px-1 flex items-center justify-center rounded-full bg-gold text-white text-[9px] font-sans font-medium leading-none"
        >
          {count}
        </span>
      )}
    </button>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const headerRef = useRef(null);
  const { itemCount, openCart } = useCart();

  // detect scroll position to flip from transparent -> solid
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.search]);

  // lock body scroll when mobile menu is open
  useEffect(() => {
    if (!mobileOpen) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  // Home is the only page with the full-bleed transparent hero
  const isHome = location.pathname === '/';
  const transparent = isHome && !scrolled && !mobileOpen;

  return (
    <header
      ref={headerRef}
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-editorial',
        transparent
          ? 'bg-transparent text-ivory'
          : 'bg-ivory/95 backdrop-blur-md text-ink border-b border-hairline'
      )}
    >
      <div className="container-page flex items-center justify-between h-16 md:h-20">
        {/* mobile: hamburger | desktop: empty spacer for centering */}
        <div className="flex items-center md:w-1/3">
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 -ml-2"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="w-5 h-5" strokeWidth={1.4} />
          </button>
          {/* desktop: search */}
          <button
            type="button"
            aria-label="Search"
            className="hidden md:inline-flex items-center justify-center w-10 h-10 -ml-2 transition-opacity duration-300 ease-editorial hover:opacity-70"
          >
            <Search className="w-[18px] h-[18px]" strokeWidth={1.4} />
          </button>
        </div>

        {/* logo center */}
        <Link
          to="/"
          aria-label="Velmora home"
          className="font-serif text-2xl md:text-[28px] font-medium tracking-[0.18em] uppercase -mt-0.5"
        >
          Velmora
        </Link>

        {/* right cluster */}
        <div className="flex items-center justify-end md:w-1/3 gap-1">
          <span className="hidden md:inline-flex text-[11px] uppercase tracking-widest-2 mr-4 cursor-pointer transition-opacity duration-300 ease-editorial hover:opacity-70">
            Account
          </span>
          <CartButton count={itemCount} onClick={openCart} />
        </div>
      </div>

      {/* desktop nav row */}
      <nav
        aria-label="Primary"
        className={cn(
          'hidden md:block border-t transition-colors duration-500 ease-editorial',
          transparent ? 'border-ivory/15' : 'border-hairline'
        )}
      >
        <ul className="container-page flex items-center justify-center gap-12 h-12">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <NavLink
                to={link.to}
                end={false}
                className={({ isActive }) =>
                  cn(
                    'text-[11px] uppercase tracking-widest-2 transition-opacity duration-300 ease-editorial hover:opacity-70',
                    isActive && !link.isCollection ? 'opacity-100' : 'opacity-100'
                  )
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* mobile menu sheet */}
      <div
        className={cn(
          'md:hidden fixed inset-0 z-50 transition-opacity duration-500 ease-editorial',
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        aria-hidden={!mobileOpen}
      >
        <div
          className="absolute inset-0 bg-ink/40"
          onClick={() => setMobileOpen(false)}
        />
        <aside
          className={cn(
            'absolute top-0 left-0 h-full w-[86%] max-w-sm bg-ivory text-ink shadow-soft-lg flex flex-col transition-transform duration-500 ease-editorial',
            mobileOpen ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          <div className="flex items-center justify-between h-16 px-6 border-b border-hairline">
            <span className="font-serif text-xl tracking-[0.18em] uppercase">Velmora</span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center w-10 h-10 -mr-2"
            >
              <X className="w-5 h-5" strokeWidth={1.4} />
            </button>
          </div>
          <nav className="flex-1 px-6 py-10" aria-label="Mobile">
            <ul className="space-y-6">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <NavLink
                    to={link.to}
                    className="font-serif text-3xl text-ink-soft"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="mt-12 pt-8 border-t border-hairline space-y-3">
              <p className="text-[11px] uppercase tracking-widest-2 text-muted">Account</p>
              <p className="text-[11px] uppercase tracking-widest-2 text-muted">Search</p>
            </div>
          </nav>
        </aside>
      </div>
    </header>
  );
}
