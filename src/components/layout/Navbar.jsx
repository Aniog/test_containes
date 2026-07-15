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
  const { cartCount, setIsCartOpen } = useCart();
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

  const navBg = scrolled || !isHome
    ? 'bg-ivory/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent';
  const textColor = scrolled || !isHome ? 'text-charcoal' : 'text-white';

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          navBg,
          textColor
        )}
      >
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 -ml-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Left links - desktop */}
          <div className="hidden md:flex items-center gap-8 flex-1">
            {navLinks.slice(0, 2).map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="font-sans text-xs uppercase tracking-widest-xl font-medium hover:opacity-70 transition-opacity"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Center logo */}
          <Link
            to="/"
            className="font-serif text-xl md:text-2xl font-semibold tracking-wider absolute left-1/2 -translate-x-1/2"
          >
            VELMORA
          </Link>

          {/* Right links + icons - desktop */}
          <div className="hidden md:flex items-center gap-8 flex-1 justify-end">
            {navLinks.slice(2).map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="font-sans text-xs uppercase tracking-widest-xl font-medium hover:opacity-70 transition-opacity"
              >
                {link.label}
              </Link>
            ))}
            <button className="p-1 hover:opacity-70 transition-opacity" aria-label="Search">
              <Search size={18} />
            </button>
            <button
              className="p-1 hover:opacity-70 transition-opacity relative"
              onClick={() => setIsCartOpen(true)}
              aria-label="Open cart"
            >
              <ShoppingBag size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-gold text-charcoal text-[10px] font-sans font-semibold w-4.5 h-4.5 flex items-center justify-center rounded-full leading-none">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile icons */}
          <div className="flex md:hidden items-center gap-4">
            <button className="p-1" aria-label="Search">
              <Search size={18} />
            </button>
            <button
              className="p-1 relative"
              onClick={() => setIsCartOpen(true)}
              aria-label="Open cart"
            >
              <ShoppingBag size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-gold text-charcoal text-[10px] font-sans font-semibold w-4.5 h-4.5 flex items-center justify-center rounded-full leading-none">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile slide-out menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 md:hidden transition-all duration-300',
          mobileOpen ? 'visible' : 'invisible'
        )}
      >
        <div
          className={cn(
            'absolute inset-0 bg-charcoal/40 transition-opacity duration-300',
            mobileOpen ? 'opacity-100' : 'opacity-0'
          )}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            'absolute top-16 left-0 right-0 bg-ivory shadow-lg transition-transform duration-300',
            mobileOpen ? 'translate-y-0' : '-translate-y-full'
          )}
        >
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="font-sans text-sm uppercase tracking-widest-xl font-medium text-charcoal py-2 border-b border-divider"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
