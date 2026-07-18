import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/journal' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, openCart } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDark = isHome && !scrolled;

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-30 transition-all duration-300',
          scrolled || !isHome
            ? 'bg-velmora-cream/95 backdrop-blur-md border-b border-velmora-hairline py-3'
            : 'bg-transparent py-5'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(true)}
              className={cn(
                'p-2 -ml-2 md:hidden transition-colors',
                isDark ? 'text-velmora-cream' : 'text-velmora-charcoal'
              )}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Logo */}
            <Link
              to="/"
              className={cn(
                'font-serif text-2xl md:text-3xl tracking-[0.15em] transition-colors',
                isDark ? 'text-velmora-cream' : 'text-velmora-charcoal'
              )}
            >
              VELMORA
            </Link>

            {/* Desktop nav */}
            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className={cn(
                      'text-xs uppercase tracking-[0.15em] font-medium transition-colors hover:text-velmora-gold',
                      isDark ? 'text-velmora-cream' : 'text-velmora-charcoal'
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Right icons */}
            <div className="flex items-center gap-1 md:gap-3">
              <button
                className={cn(
                  'p-2 transition-colors hover:text-velmora-gold',
                  isDark ? 'text-velmora-cream' : 'text-velmora-charcoal'
                )}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={openCart}
                className={cn(
                  'relative p-2 transition-colors hover:text-velmora-gold',
                  isDark ? 'text-velmora-cream' : 'text-velmora-charcoal'
                )}
                aria-label="Open cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute top-0 right-0 w-4 h-4 bg-velmora-gold text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-velmora-cream transform transition-transform duration-300 md:hidden',
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex items-center justify-between px-4 py-5 border-b border-velmora-hairline">
          <span className="font-serif text-2xl tracking-[0.15em] text-velmora-charcoal">
            VELMORA
          </span>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 text-velmora-charcoal"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <ul className="flex flex-col px-6 py-8 gap-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-serif text-3xl text-velmora-charcoal hover:text-velmora-gold transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
