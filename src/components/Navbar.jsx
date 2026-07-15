import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCart } from '@/context/CartContext';
import { IconButton } from './IconButton';

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
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const textColor = scrolled || !isHome ? 'text-velmora-charcoal' : 'text-white';
  const bg = scrolled || !isHome ? 'bg-velmora-cream/95 backdrop-blur-md shadow-sm' : 'bg-transparent';

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        bg
      )}
    >
      <nav className="mx-auto flex h-16 md:h-20 max-w-[1600px] items-center justify-between px-5 md:px-10">
        <button
          type="button"
          className={cn('md:hidden p-2 -ml-2', textColor)}
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>

        <Link
          to="/"
          className={cn(
            'font-serif text-xl md:text-2xl tracking-widest-xl uppercase',
            textColor
          )}
        >
          Velmora
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                className={cn(
                  'font-sans text-xs uppercase tracking-widest transition-colors duration-300 hover:text-velmora-gold',
                  textColor
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className={cn('flex items-center gap-1 md:gap-2', textColor)}>
          <IconButton aria-label="Search">
            <Search size={20} />
          </IconButton>
          <IconButton onClick={toggleCart} aria-label="Cart" badge={count}>
            <ShoppingBag size={20} />
          </IconButton>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 z-50 bg-velmora-cream transition-transform duration-500 md:hidden',
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex h-16 items-center justify-between px-5">
          <span className="font-serif text-xl tracking-widest-xl uppercase text-velmora-charcoal">
            Velmora
          </span>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="p-2 text-velmora-charcoal"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <ul className="mt-8 flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                className="font-serif text-2xl text-velmora-charcoal"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
