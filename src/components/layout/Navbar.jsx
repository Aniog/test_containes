import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCart } from '@/context/CartContext';

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/journal' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggleCart, count } = useCart();
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const textColor = isHome && !scrolled ? 'text-white' : 'text-velmora-text';
  const bgClass =
    isHome && !scrolled
      ? 'bg-transparent'
      : 'bg-velmora-bg/95 backdrop-blur-md border-b border-velmora-hairline';

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-30 transition-all duration-300',
          bgClass
        )}
      >
        <nav className="flex items-center justify-between px-5 md:px-8 lg:px-12 xl:px-16 h-16 md:h-20">
          <Link
            to="/"
            className={cn(
              'font-serif text-xl md:text-2xl uppercase tracking-[0.25em] transition-colors',
              textColor
            )}
          >
            Velmora
          </Link>

          <ul className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className={cn(
                    'font-sans text-xs uppercase tracking-widest transition-colors hover:text-velmora-accent',
                    textColor
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 md:gap-5">
            <button
              className={cn('p-2 transition-colors hover:text-velmora-accent', textColor)}
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button
              onClick={toggleCart}
              className={cn(
                'relative p-2 transition-colors hover:text-velmora-accent',
                textColor
              )}
              aria-label="Open cart"
            >
              <ShoppingBag size={20} />
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-velmora-accent text-[10px] font-medium text-white">
                  {count}
                </span>
              )}
            </button>
            <button
              className={cn('p-2 md:hidden transition-colors hover:text-velmora-accent', textColor)}
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-velmora-bg transition-transform duration-500 ease-out-editorial md:hidden',
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        aria-hidden={!mobileOpen}
      >
        <div className="flex items-center justify-between px-5 h-16 border-b border-velmora-hairline">
          <span className="font-serif text-xl uppercase tracking-[0.25em] text-velmora-text">
            Velmora
          </span>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 text-velmora-text"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <ul className="flex flex-col px-8 pt-10 gap-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-serif text-2xl uppercase tracking-widest text-velmora-text hover:text-velmora-accent transition-colors"
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
