import { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '/#story' },
  { label: 'Journal', href: '/#journal' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count, openCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isHero = location.pathname === '/';

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-500',
          scrolled || !isHero
            ? 'bg-velmora-porcelain/95 backdrop-blur-md border-b border-velmora-sand py-3'
            : 'bg-transparent py-5'
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <button
            className={cn(
              'p-2 md:hidden',
              scrolled || !isHero ? 'text-velmora-ink' : 'text-white'
            )}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={cn(
                  'text-xs font-medium uppercase tracking-widest transition-colors hover:text-velmora-gold',
                  scrolled || !isHero
                    ? 'text-velmora-ink'
                    : 'text-white'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/"
            className={cn(
              'font-serif text-2xl font-semibold tracking-[0.15em] uppercase transition-colors sm:text-3xl',
              scrolled || !isHero ? 'text-velmora-ink' : 'text-white'
            )}
          >
            Velmora
          </Link>

          <div className="flex items-center gap-3 sm:gap-5">
            <button
              className={cn(
                'p-2 transition-colors hover:text-velmora-gold',
                scrolled || !isHero ? 'text-velmora-ink' : 'text-white'
              )}
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button
              className={cn(
                'relative p-2 transition-colors hover:text-velmora-gold',
                scrolled || !isHero ? 'text-velmora-ink' : 'text-white'
              )}
              onClick={openCart}
              aria-label={`Cart with ${count} items`}
            >
              <ShoppingBag size={20} />
              {count > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-velmora-gold text-[10px] font-semibold text-white">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 z-50 bg-velmora-porcelain transition-transform duration-500 md:hidden',
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex items-center justify-between border-b border-velmora-sand px-4 py-4">
          <span className="font-serif text-xl font-semibold tracking-[0.15em] uppercase">
            Velmora
          </span>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 text-velmora-ink"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col px-8 pt-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="border-b border-velmora-sand py-5 font-serif text-2xl text-velmora-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
