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
  const { count, toggleCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
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
  }, [location]);

  const isSolid = scrolled || !isHome;

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-30 transition-all duration-500',
        isSolid
          ? 'bg-velmora-cream/95 backdrop-blur-md border-b border-velmora-espresso/10 shadow-sm'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
        <Link
          to="/"
          className={cn(
            'font-serif text-xl md:text-2xl tracking-[0.22em] uppercase transition-colors duration-300',
            isSolid ? 'text-velmora-espresso' : 'text-white'
          )}
        >
          Velmora
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={cn(
                'text-sm uppercase tracking-[0.14em] transition-colors duration-300 relative group',
                isSolid ? 'text-velmora-espresso' : 'text-white/90 hover:text-white'
              )}
            >
              {link.label}
              <span
                className={cn(
                  'absolute -bottom-1 left-0 h-px w-0 group-hover:w-full transition-all duration-300',
                  isSolid ? 'bg-velmora-gold' : 'bg-white'
                )}
              />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-1 md:gap-3">
          <button
            type="button"
            aria-label="Search"
            className={cn(
              'p-2 transition-colors duration-300',
              isSolid ? 'text-velmora-espresso hover:text-velmora-gold' : 'text-white hover:text-white/80'
            )}
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={toggleCart}
            aria-label="Open cart"
            className={cn(
              'p-2 transition-colors duration-300 relative',
              isSolid ? 'text-velmora-espresso hover:text-velmora-gold' : 'text-white hover:text-white/80'
            )}
          >
            <ShoppingBag className="w-5 h-5" />
            {count > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-velmora-gold text-white text-[10px] font-semibold rounded-full flex items-center justify-center">
                {count}
              </span>
            )}
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className={cn(
              'p-2 md:hidden transition-colors duration-300',
              isSolid ? 'text-velmora-espresso' : 'text-white'
            )}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        aria-hidden={!mobileOpen}
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300 bg-velmora-cream border-b border-velmora-espresso/10',
          mobileOpen ? 'max-h-96' : 'max-h-0'
        )}
      >
        <div className="px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              tabIndex={mobileOpen ? 0 : -1}
              className="text-sm uppercase tracking-[0.14em] text-velmora-espresso"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
