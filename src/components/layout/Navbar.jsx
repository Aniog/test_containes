import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { cn } from '@/lib/utils';

const navLinks = [
  { to: '/shop', label: 'Shop' },
  { to: '/shop?category=earrings', label: 'Earrings' },
  { to: '/shop?category=necklaces', label: 'Necklaces' },
  { to: '/about', label: 'About' },
  { to: '/journal', label: 'Journal' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cartCount, toggleCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled || !isHome
          ? 'bg-velmora-pearl/95 backdrop-blur-md hairline-bottom shadow-sm'
          : 'bg-transparent'
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 -ml-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className={cn(
              'font-serif text-xl sm:text-2xl font-semibold tracking-ultra-wide transition-colors duration-300',
              scrolled || !isHome ? 'text-velmora-charcoal' : 'text-velmora-white'
            )}
          >
            VELMORA
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  'text-xs font-medium tracking-editorial uppercase transition-colors duration-300 hover:text-velmora-gold',
                  scrolled || !isHome ? 'text-velmora-ink' : 'text-velmora-white/90'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              type="button"
              className={cn(
                'p-2 transition-colors duration-300',
                scrolled || !isHome ? 'text-velmora-ink hover:text-velmora-gold' : 'text-velmora-white/90 hover:text-velmora-gold'
              )}
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={toggleCart}
              className={cn(
                'relative p-2 transition-colors duration-300',
                scrolled || !isHome ? 'text-velmora-ink hover:text-velmora-gold' : 'text-velmora-white/90 hover:text-velmora-gold'
              )}
              aria-label="Open cart"
            >
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-velmora-gold text-[10px] font-semibold text-velmora-white">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-velmora-border bg-velmora-pearl/98 backdrop-blur-md">
            <div className="px-2 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block px-3 py-3 text-sm font-medium tracking-editorial uppercase text-velmora-ink hover:text-velmora-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
