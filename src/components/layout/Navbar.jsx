import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/collections' },
  { label: 'About', to: '/about' },
  { label: 'Journal', to: '/journal' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, toggleDrawer } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled || !isHome
            ? 'bg-velmora-ivory/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Mobile menu button */}
            <button
              className="sm:hidden p-2 -ml-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className={cn('w-5 h-5', scrolled || !isHome ? 'text-velmora-charcoal' : 'text-velmora-white')} />
              ) : (
                <Menu className={cn('w-5 h-5', scrolled || !isHome ? 'text-velmora-charcoal' : 'text-velmora-white')} />
              )}
            </button>

            {/* Logo */}
            <Link
              to="/"
              className={cn(
                'font-serif text-xl sm:text-2xl tracking-[0.25em] font-medium transition-colors',
                scrolled || !isHome ? 'text-velmora-charcoal' : 'text-velmora-white'
              )}
            >
              VELMORA
            </Link>

            {/* Desktop nav links */}
            <div className="hidden sm:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={cn(
                    'text-sm tracking-widest uppercase transition-colors hover:opacity-70',
                    scrolled || !isHome ? 'text-velmora-charcoal' : 'text-velmora-white'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-3">
              <button
                className={cn(
                  'p-2 transition-colors hover:opacity-70',
                  scrolled || !isHome ? 'text-velmora-charcoal' : 'text-velmora-white'
                )}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                className={cn(
                  'p-2 relative transition-colors hover:opacity-70',
                  scrolled || !isHome ? 'text-velmora-charcoal' : 'text-velmora-white'
                )}
                onClick={() => toggleDrawer(true)}
                aria-label="Open cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-velmora-gold text-velmora-white text-[10px] font-semibold w-4.5 h-4.5 flex items-center justify-center rounded-full leading-none">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 sm:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <div className="absolute top-16 left-0 right-0 bg-velmora-ivory shadow-lg animate-in slide-in-from-top">
            <div className="flex flex-col px-6 py-8 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-lg tracking-widest uppercase text-velmora-charcoal hover:text-velmora-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
