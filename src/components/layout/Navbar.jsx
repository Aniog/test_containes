import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCart } from '@/context/CartContext';

const NAV_LINKS = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop?category=sets' },
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/journal' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, toggleCart } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.search]);

  return (
    <>
      <header
        className={cn(
          'fixed left-0 right-0 top-0 z-40 transition-all duration-500 ease-luxury',
          scrolled || !isHome
            ? 'bg-velmora-cream/95 py-3 shadow-sm backdrop-blur-md'
            : 'bg-transparent py-5',
          scrolled || !isHome ? 'text-velmora-base' : 'text-white'
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            className="p-2 lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="relative font-sans text-xs font-medium uppercase tracking-widest transition-opacity hover:opacity-70"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/"
            className="absolute left-1/2 -translate-x-1/2 font-serif text-2xl uppercase tracking-[0.18em] sm:text-3xl"
          >
            Velmora
          </Link>

          <div className="flex items-center gap-3 sm:gap-5">
            <button
              type="button"
              className="p-2 transition-opacity hover:opacity-70"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="relative p-2 transition-opacity hover:opacity-70"
              onClick={toggleCart}
              aria-label="Cart"
            >
              <ShoppingBag className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute right-0.5 top-0.5 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-velmora-gold px-1 font-sans text-[10px] font-semibold text-white">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          'fixed inset-0 z-50 bg-velmora-cream transition-transform duration-300 ease-luxury lg:hidden',
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex items-center justify-between border-b border-velmora-base/10 px-4 py-4">
          <span className="font-serif text-xl uppercase tracking-[0.18em]">Velmora</span>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="p-2"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex flex-col px-8 py-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="border-b border-velmora-base/10 py-5 font-serif text-2xl uppercase tracking-widest text-velmora-base"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
