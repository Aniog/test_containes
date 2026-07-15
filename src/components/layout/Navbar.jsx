import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop' },
  { label: 'About', to: '/about' },
  { label: 'Journal', to: '/journal' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count, openCart } = useCart();
  const location = useLocation();

  const isHome = location.pathname === '/';
  const transparent = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        transparent
          ? 'bg-transparent'
          : 'bg-cream/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(226,217,203,0.8)]'
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        {/* Left: mobile menu + logo */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Open menu"
          >
            {mobileOpen ? (
              <X width={20} height={20} className={transparent ? 'text-cream' : 'text-ink'} />
            ) : (
              <Menu width={20} height={20} className={transparent ? 'text-cream' : 'text-ink'} />
            )}
          </button>
          <Link
            to="/"
            className={cn(
              'font-serif text-2xl tracking-[0.3em] transition-colors',
              transparent ? 'text-cream' : 'text-ink'
            )}
          >
            VELMORA
          </Link>
        </div>

        {/* Center links */}
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={cn(
                'text-[11px] uppercase tracking-widest2 transition-colors hover:text-gold',
                transparent ? 'text-cream' : 'text-ink'
              )}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Right: search + cart */}
        <div className="flex items-center gap-5">
          <button
            type="button"
            aria-label="Search"
            className={cn('transition-colors hover:text-gold', transparent ? 'text-cream' : 'text-ink')}
          >
            <Search width={19} height={19} />
          </button>
          <button
            type="button"
            onClick={openCart}
            aria-label="Open cart"
            className={cn('relative transition-colors hover:text-gold', transparent ? 'text-cream' : 'text-ink')}
          >
            <ShoppingBag width={19} height={19} />
            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[9px] font-medium text-white">
                {count}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-hairline bg-cream md:hidden">
          <div className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className="py-3 text-xs uppercase tracking-widest2 text-ink"
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
