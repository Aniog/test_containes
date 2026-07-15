import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCart } from '@/context/CartContext';

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/collections' },
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/journal' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count, setIsOpen } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setIsOpen(false);
  }, [location.pathname, setIsOpen]);

  const textColor = scrolled || !isHome ? 'text-velmora-ink' : 'text-white';
  const bg = scrolled || !isHome ? 'bg-velmora-cream shadow-sm' : 'bg-transparent';

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-30 transition-all duration-300',
          bg
        )}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 h-20 flex items-center justify-between">
          <button
            className={cn('md:hidden p-2 -ml-2', textColor)}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          <Link
            to="/"
            className={cn(
              'font-serif text-2xl md:text-3xl tracking-widest uppercase',
              textColor
            )}
          >
            Velmora
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  'text-xs uppercase tracking-widest hover:opacity-70 transition-opacity',
                  textColor
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className={cn('flex items-center gap-4', textColor)}>
            <button aria-label="Search" className="p-2 hover:opacity-70 transition-opacity">
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsOpen(true)}
              className="relative p-2 hover:opacity-70 transition-opacity"
              aria-label="Open cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {count > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-velmora-accent text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>
          </div>
        </nav>
      </header>

      <div
        className={cn(
          'fixed inset-0 bg-velmora-ink/50 z-40 md:hidden transition-opacity',
          mobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setMobileOpen(false)}
      />
      <aside
        className={cn(
          'fixed top-0 left-0 h-full w-72 bg-velmora-cream z-50 transform transition-transform duration-300 md:hidden',
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="p-6 flex items-center justify-between border-b border-velmora-border">
          <span className="font-serif text-2xl tracking-widest uppercase">Velmora</span>
          <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-sm uppercase tracking-widest text-velmora-ink"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </aside>
    </>
  );
}
