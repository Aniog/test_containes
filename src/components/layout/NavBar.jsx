import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { to: '/shop', label: 'Shop' },
  { to: '/shop?collection=bestsellers', label: 'Collections' },
  { to: '/about', label: 'About' },
  { to: '/journal', label: 'Journal' },
];

export default function NavBar({ transparentOverHero = false }) {
  const { itemCount, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (!transparentOverHero) {
      setScrolled(true);
      return undefined;
    }
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [transparentOverHero]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.search]);

  const solid = scrolled || mobileOpen;

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out',
        solid
          ? 'bg-cream/95 backdrop-blur-md border-b border-hairline text-ink'
          : 'bg-transparent text-cream',
      )}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
        {/* Left: logo */}
        <Link
          to="/"
          className="font-serif text-2xl md:text-3xl tracking-[0.18em] uppercase font-medium select-none"
        >
          Velmora
        </Link>

        {/* Center: nav links (desktop) */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  'text-xs uppercase tracking-[0.25em] link-underline transition-colors',
                  isActive ? 'opacity-100' : 'opacity-90 hover:opacity-100',
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right: actions */}
        <div className="flex items-center gap-4 md:gap-5">
          <button
            type="button"
            aria-label="Search"
            className="p-1 hover:opacity-70 transition-opacity"
          >
            <Search className="w-5 h-5" strokeWidth={1.4} />
          </button>
          <button
            type="button"
            aria-label="Open cart"
            onClick={openCart}
            className="relative p-1 hover:opacity-70 transition-opacity"
          >
            <ShoppingBag className="w-5 h-5" strokeWidth={1.4} />
            {itemCount > 0 && (
              <span
                className={cn(
                  'absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full text-[10px] flex items-center justify-center font-medium',
                  solid ? 'bg-ink text-cream' : 'bg-cream text-ink',
                )}
              >
                {itemCount}
              </span>
            )}
          </button>
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden p-1"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" strokeWidth={1.4} />
            ) : (
              <Menu className="w-5 h-5" strokeWidth={1.4} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-hairline animate-fade">
          <nav className="flex flex-col px-5 py-6 gap-5 text-ink">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm uppercase tracking-[0.25em]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
