import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { cn } from '../../lib/utils';

const navLinks = [
  { to: '/shop', label: 'Shop' },
  { to: '/collections', label: 'Collections' },
  { to: '/about', label: 'About' },
  { to: '/journal', label: 'Journal' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();
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

  const navBg = !isHome || scrolled
    ? 'bg-cream/95 backdrop-blur-md shadow-nav'
    : 'bg-transparent';

  const textColor = !isHome || scrolled ? 'text-charcoal' : 'text-white';

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        navBg
      )}
    >
      <nav className="container-wide flex items-center justify-between h-16 md:h-20">
        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={cn('md:hidden p-2 -ml-2', textColor)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Logo */}
        <Link
          to="/"
          className={cn(
            'font-serif text-2xl md:text-3xl font-light tracking-wider absolute left-1/2 -translate-x-1/2 md:relative md:left-auto md:translate-x-0',
            textColor
          )}
        >
          VELMORA
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                'font-sans text-xs uppercase tracking-button font-medium transition-colors duration-200 hover:opacity-70',
                textColor
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right icons */}
        <div className={cn('flex items-center gap-3', textColor)}>
          <button className="p-2 hidden md:block" aria-label="Search">
            <Search size={19} strokeWidth={1.5} />
          </button>
          <button
            className="p-2 relative"
            onClick={() => setIsOpen(true)}
            aria-label="Open cart"
          >
            <ShoppingBag size={19} strokeWidth={1.5} />
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden fixed inset-0 top-16 bg-cream z-40 transition-all duration-300',
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <div className="container-wide py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="font-serif text-2xl text-charcoal tracking-wider hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
