import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '/#about' },
  { label: 'Journal', href: '/#journal' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
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
        scrolled
          ? 'bg-ivory-50/95 backdrop-blur-md shadow-sm border-b border-charcoal-100/30'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 -ml-2 text-charcoal-800 hover:text-gold-500 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Logo */}
          <Link to="/" className="absolute left-1/2 -translate-x-1/2 md:relative md:left-0 md:translate-x-0">
            <span className="font-serif text-2xl md:text-[1.7rem] tracking-ultra-wide text-charcoal-900 font-semibold">
              VELMORA
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={cn(
                  'text-[13px] font-sans font-medium tracking-widest uppercase',
                  'text-charcoal-600 hover:text-charcoal-900 transition-colors duration-300',
                  'relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px]',
                  'after:bg-gold-500 hover:after:w-full after:transition-all after:duration-300'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-3">
            <button
              className="p-2 text-charcoal-700 hover:text-gold-500 transition-colors"
              aria-label="Search"
            >
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button
              onClick={() => setIsOpen(true)}
              className="p-2 text-charcoal-700 hover:text-gold-500 transition-colors relative"
              aria-label="Cart"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-gold-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-400',
          mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="bg-ivory-50/98 backdrop-blur-lg border-t border-charcoal-100/20 px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="block text-sm font-sans font-medium tracking-widest uppercase text-charcoal-700 hover:text-gold-500 transition-colors py-1"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
