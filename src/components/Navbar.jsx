import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const links = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop?category=Sets' },
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/journal' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count, toggleCart } = useCart();
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-400',
        scrolled || !isHome
          ? 'bg-cream/95 backdrop-blur border-b border-warmgray shadow-sm text-ink'
          : 'bg-transparent text-white',
      )}
    >
      <nav className="mx-auto flex items-center justify-between px-5 md:px-8 lg:px-12 h-16 md:h-20">
        <Link
          to="/"
          className="font-serif text-xl md:text-2xl tracking-[0.18em] font-semibold"
        >
          VELMORA
        </Link>

        <ul className="hidden md:flex items-center gap-8 lg:gap-10">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                className="text-xs uppercase tracking-[0.18em] font-medium hover:opacity-70 transition-opacity"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 md:gap-5">
          <button aria-label="Search" className="hover:opacity-70 transition-opacity">
            <Search className="w-5 h-5" strokeWidth={1.6} />
          </button>
          <button
            aria-label="Cart"
            onClick={toggleCart}
            className="relative hover:opacity-70 transition-opacity"
          >
            <ShoppingBag className="w-5 h-5" strokeWidth={1.6} />
            {count > 0 && (
              <span className="absolute -top-1.5 -right-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold-600 text-[10px] font-semibold text-white px-1">
                {count}
              </span>
            )}
          </button>
          <button
            aria-label="Menu"
            className="md:hidden hover:opacity-70 transition-opacity"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="w-5 h-5" strokeWidth={1.6} />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-cream text-ink md:hidden">
          <div className="flex items-center justify-between px-5 h-16 border-b border-warmgray">
            <span className="font-serif text-xl tracking-[0.18em] font-semibold">VELMORA</span>
            <button aria-label="Close menu" onClick={() => setMobileOpen(false)}>
              <X className="w-5 h-5" strokeWidth={1.6} />
            </button>
          </div>
          <ul className="flex flex-col px-8 py-10 gap-6">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className="font-serif text-3xl tracking-wide"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
