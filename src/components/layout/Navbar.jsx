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
  const { totalCount, setIsOpen } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const transparent = isHome && !scrolled && !mobileOpen;

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-30 transition-all duration-300',
        transparent
          ? 'bg-transparent text-white'
          : 'bg-background/95 text-foreground backdrop-blur-md border-b border-hairline/50 shadow-soft'
      )}
    >
      <nav className="max-w-[1400px] mx-auto px-6 md:px-10 h-[72px] md:h-[84px] flex items-center justify-between">
        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden p-2 -ml-2"
          onClick={() => setMobileOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Logo */}
        <Link
          to="/"
          className={cn(
            'font-serif text-2xl md:text-3xl tracking-[0.18em] font-medium',
            transparent ? 'text-white' : 'text-foreground'
          )}
        >
          VELMORA
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                className={cn(
                  'font-sans text-xs uppercase tracking-extra-wide font-medium hover:opacity-70 transition-opacity',
                  transparent ? 'text-white' : 'text-foreground'
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right icons */}
        <div className="flex items-center gap-4 md:gap-6">
          <button
            type="button"
            className="p-1 hover:opacity-70 transition-opacity"
            aria-label="Search"
          >
            <Search className="w-[18px] h-[18px] md:w-5 md:h-5" />
          </button>
          <button
            type="button"
            className="relative p-1 hover:opacity-70 transition-opacity"
            onClick={() => setIsOpen(true)}
            aria-label="Open cart"
          >
            <ShoppingBag className="w-[18px] h-[18px] md:w-5 md:h-5" />
            {totalCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-accent text-accent-foreground text-[10px] font-medium rounded-full flex items-center justify-center">
                {totalCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300 bg-background border-b border-hairline',
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <ul className="px-6 py-6 space-y-5">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                className="block font-sans text-sm uppercase tracking-extra-wide text-foreground"
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
