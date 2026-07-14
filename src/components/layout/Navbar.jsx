import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const navLinks = [
  { to: '/shop', label: 'Shop' },
  { to: '/collections', label: 'Collections' },
  { to: '/about', label: 'About' },
  { to: '/journal', label: 'Journal' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, openCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
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
          ? 'bg-sand-50/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className={cn(
              'font-serif text-2xl md:text-3xl tracking-widest-2xl font-medium transition-colors duration-500',
              scrolled || !isHome ? 'text-espresso' : 'text-sand-50'
            )}
          >
            VELMORA
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  'font-sans text-[11px] tracking-widest uppercase transition-colors duration-300',
                  scrolled || !isHome
                    ? location.pathname === link.to
                      ? 'text-gold'
                      : 'text-espresso/70 hover:text-espresso'
                    : 'text-sand-50/80 hover:text-sand-50'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-3">
            <button
              className={cn(
                'p-2 transition-colors duration-300',
                scrolled || !isHome
                  ? 'text-espresso/70 hover:text-espresso'
                  : 'text-sand-50/80 hover:text-sand-50'
              )}
              aria-label="Search"
            >
              <Search className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button
              onClick={openCart}
              className={cn(
                'relative p-2 transition-colors duration-300',
                scrolled || !isHome
                  ? 'text-espresso/70 hover:text-espresso'
                  : 'text-sand-50/80 hover:text-sand-50'
              )}
              aria-label="Shopping bag"
            >
              <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold text-white text-[9px] font-bold rounded-full flex items-center justify-center leading-none">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={cn(
                'md:hidden p-2 transition-colors duration-300',
                scrolled || !isHome
                  ? 'text-espresso/70 hover:text-espresso'
                  : 'text-sand-50/80 hover:text-sand-50'
              )}
              aria-label="Menu"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" strokeWidth={1.5} />
              ) : (
                <Menu className="w-5 h-5" strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300 bg-sand-50 border-t border-espresso/10',
          mobileOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <nav className="flex flex-col py-4 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                'py-3 font-sans text-xs tracking-widest uppercase border-b border-espresso/5 last:border-0',
                location.pathname === link.to
                  ? 'text-gold'
                  : 'text-espresso/70 hover:text-espresso'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
