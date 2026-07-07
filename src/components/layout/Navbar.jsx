import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCart } from '@/contexts/CartContext';

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/journal' },
];

export function Navbar() {
  const { count, toggleCart } = useCart();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 inset-x-0 z-40 transition-all duration-500',
          scrolled || !isHome
            ? 'bg-cream/95 backdrop-blur-md border-b border-sand shadow-sm'
            : 'bg-transparent'
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <button
              className="md:hidden p-2 -ml-2 text-ink"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>

            <Link
              to="/"
              className={cn(
                'font-serif text-xl md:text-2xl tracking-[0.18em] uppercase font-semibold',
                scrolled || !isHome ? 'text-ink' : 'text-cream'
              )}
            >
              Velmora
            </Link>

            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className={cn(
                      'font-sans text-xs uppercase tracking-brand hover:text-gold transition-colors',
                      scrolled || !isHome ? 'text-ink' : 'text-cream'
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 md:gap-5">
              <button
                className={cn(
                  'p-2 transition-colors',
                  scrolled || !isHome
                    ? 'text-ink hover:text-gold'
                    : 'text-cream hover:text-gold-light'
                )}
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              <button
                onClick={toggleCart}
                className={cn(
                  'relative p-2 transition-colors',
                  scrolled || !isHome
                    ? 'text-ink hover:text-gold'
                    : 'text-cream hover:text-gold-light'
                )}
                aria-label="Cart"
              >
                <ShoppingBag size={20} />
                {count > 0 && (
                  <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[10px] font-sans font-semibold text-ink">
                    {count}
                  </span>
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 z-50 bg-cream transition-transform duration-500 ease-out-expo md:hidden',
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex items-center justify-between px-4 h-16 border-b border-sand">
          <span className="font-serif text-xl tracking-[0.18em] uppercase font-semibold text-ink">
            Velmora
          </span>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 -mr-2 text-ink"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>
        <ul className="flex flex-col p-6 gap-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-serif text-2xl text-ink hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
