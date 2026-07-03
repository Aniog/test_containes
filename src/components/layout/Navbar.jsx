import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { cn } from '../../lib/utils';

const navLinks = [
  { label: 'Shop', path: '/shop' },
  { label: 'Collections', path: '/collections' },
  { label: 'About', path: '/about' },
  { label: 'Journal', path: '/journal' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openCart, totalItems } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled || !isHome
          ? 'bg-[#FDFBFA]/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 -ml-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className={cn(
              'font-serif text-xl md:text-2xl tracking-wide-xl transition-colors',
              scrolled || !isHome ? 'text-ink' : 'text-white'
            )}
          >
            VELMORA
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-sm tracking-wide-lg uppercase font-sans transition-colors duration-300 hover:text-gold-500',
                  scrolled || !isHome ? 'text-ink' : 'text-white/90'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center gap-3 md:gap-4">
            <button
              className={cn(
                'p-2 transition-colors',
                scrolled || !isHome ? 'text-ink hover:text-gold-600' : 'text-white/90 hover:text-white'
              )}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={openCart}
              className={cn(
                'p-2 relative transition-colors',
                scrolled || !isHome ? 'text-ink hover:text-gold-600' : 'text-white/90 hover:text-white'
              )}
              aria-label="Open cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold-500 text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            'lg:hidden overflow-hidden transition-all duration-300',
            mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <div className="pb-4 pt-2 space-y-1 border-t border-warm-200">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block py-2 text-sm tracking-wide-lg uppercase font-sans text-ink hover:text-gold-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}