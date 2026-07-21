import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Shop', href: '/collection' },
  { name: 'Collections', href: '/collection' },
  { name: 'About', href: '/about' },
  { name: 'Journal', href: '/journal' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const { toggleCart, itemCount } = useCart();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const shouldBeTransparent = isHomePage && !isScrolled && !isMobileMenuOpen;

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          shouldBeTransparent
            ? 'bg-transparent'
            : isScrolled
            ? 'bg-ivory shadow-sm'
            : 'bg-ivory'
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              to="/"
              className={cn(
                'font-serif text-2xl md:text-3xl tracking-ultra-wide transition-colors duration-300',
                shouldBeTransparent ? 'text-ivory' : 'text-espresso'
              )}
            >
              VELMORA
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    'text-sm font-medium tracking-wide uppercase transition-colors duration-200',
                    shouldBeTransparent
                      ? 'text-ivory/90 hover:text-ivory'
                      : 'text-espresso/80 hover:text-gold'
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              {/* Search */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={cn(
                  'p-2 transition-colors duration-200',
                  shouldBeTransparent
                    ? 'text-ivory hover:text-ivory/80'
                    : 'text-espresso hover:text-gold'
                )}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Cart */}
              <button
                onClick={toggleCart}
                className={cn(
                  'p-2 transition-colors duration-200 relative',
                  shouldBeTransparent
                    ? 'text-ivory hover:text-ivory/80'
                    : 'text-espresso hover:text-gold'
                )}
                aria-label="Shopping cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-gold text-espresso text-xs font-medium rounded-full flex items-center justify-center">
                    {itemCount > 9 ? '9+' : itemCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={cn(
                  'md:hidden p-2 transition-colors duration-200',
                  shouldBeTransparent
                    ? 'text-ivory hover:text-ivory/80'
                    : 'text-espresso hover:text-gold'
                )}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div
            className={cn(
              'overflow-hidden transition-all duration-300',
              isSearchOpen ? 'max-h-16 pb-4' : 'max-h-0'
            )}
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search for jewelry..."
                className={cn(
                  'w-full px-4 py-3 pr-12 bg-transparent border-b transition-colors duration-200',
                  shouldBeTransparent
                    ? 'border-ivory/30 text-ivory placeholder:text-ivory/50 focus:border-ivory'
                    : 'border-silk text-espresso placeholder:text-cocoa/50 focus:border-gold'
                )}
              />
              <Search
                className={cn(
                  'absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5',
                  shouldBeTransparent ? 'text-ivory/50' : 'text-cocoa/50'
                )}
              />
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-espresso/95 transition-opacity duration-300 md:hidden',
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              to={link.href}
              className="font-serif text-3xl text-ivory tracking-wide hover:text-gold transition-colors duration-200"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
