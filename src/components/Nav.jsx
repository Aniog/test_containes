import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const NAV_LINKS = [
  { to: '/shop', label: 'Shop' },
  { to: '/shop?view=collections', label: 'Collections' },
  { to: '/about', label: 'About' },
  { to: '/journal', label: 'Journal' },
];

export default function Nav({ transparentOverHero = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openCart, itemCount } = useCart();
  const location = useLocation();

  useEffect(() => {
    if (!transparentOverHero) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [transparentOverHero]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const solid = scrolled || mobileOpen;

  return (
    <header
      className={[
        'fixed top-0 left-0 right-0 z-40 transition-all duration-500',
        solid
          ? 'bg-bone/95 backdrop-blur-sm border-b border-hairline text-ink'
          : 'bg-transparent text-bone',
      ].join(' ')}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="font-serif text-2xl md:text-3xl tracking-[0.25em] font-medium select-none"
            aria-label="Velmora home"
          >
            VELMORA
          </Link>

          {/* Center links (desktop) */}
          <nav className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.label}
                to={l.to}
                className={({ isActive }) =>
                  [
                    'text-[11px] uppercase tracking-[0.25em] font-medium transition-colors',
                    isActive ? 'text-champagne-deep' : 'hover:text-champagne-deep',
                  ].join(' ')
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-4 md:gap-6">
            <button
              aria-label="Search"
              className="hidden sm:inline-flex hover:text-champagne-deep transition-colors"
            >
              <Search className="w-5 h-5" strokeWidth={1.4} />
            </button>
            <button
              onClick={openCart}
              aria-label={`Cart (${itemCount} items)`}
              className="relative hover:text-champagne-deep transition-colors"
            >
              <ShoppingBag className="w-5 h-5" strokeWidth={1.4} />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 min-w-[18px] h-[18px] px-1 rounded-full bg-champagne text-ink text-[10px] font-medium flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
            <button
              className="md:hidden hover:text-champagne-deep transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" strokeWidth={1.4} /> : <Menu className="w-5 h-5" strokeWidth={1.4} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav className="md:hidden pb-6 flex flex-col gap-4 border-t border-hairline pt-6">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.label}
                to={l.to}
                className="text-xs uppercase tracking-[0.25em] font-medium text-ink hover:text-champagne-deep"
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
