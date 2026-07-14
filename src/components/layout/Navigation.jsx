import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { clsx } from 'clsx';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { getCartCount, toggleCart } = useCart();
  const location = useLocation();
  const cartCount = getCartCount();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/shop', label: 'Shop' },
    { to: '/shop?category=earrings', label: 'Earrings' },
    { to: '/shop?category=necklaces', label: 'Necklaces' },
    { to: '/shop?category=huggies', label: 'Huggies' },
    { to: '/about', label: 'About' },
  ];

  const shouldBeTransparent = isHomePage && !isScrolled;

  return (
    <>
      <header
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          shouldBeTransparent 
            ? 'bg-transparent' 
            : 'bg-warm-ivory shadow-sm'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={clsx(
                'md:hidden p-2 -ml-2',
                shouldBeTransparent ? 'text-warm-ivory' : 'text-warm-gray-900'
              )}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <Link
              to="/"
              className={clsx(
                'font-serif text-xl md:text-2xl tracking-widest',
                shouldBeTransparent ? 'text-warm-ivory' : 'text-warm-gray-900'
              )}
            >
              VELMORA
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={clsx(
                    'nav-link gold-underline transition-colors',
                    shouldBeTransparent 
                      ? 'text-warm-ivory text-opacity-90 hover:text-warm-ivory' 
                      : 'text-warm-gray-600 hover:text-warm-gray-900'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right icons */}
            <div className="flex items-center gap-2 md:gap-4">
              <button
                type="button"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={clsx(
                  'p-2 transition-colors',
                  shouldBeTransparent 
                    ? 'text-warm-ivory hover:text-champagne' 
                    : 'text-warm-gray-600 hover:text-champagne'
                )}
                aria-label="Search"
              >
                <Search size={20} strokeWidth={1.5} />
              </button>

              <button
                type="button"
                onClick={toggleCart}
                className={clsx(
                  'relative p-2 transition-colors',
                  shouldBeTransparent 
                    ? 'text-warm-ivory hover:text-champagne' 
                    : 'text-warm-gray-600 hover:text-champagne'
                )}
                aria-label="Shopping cart"
              >
                <ShoppingBag size={20} strokeWidth={1.5} />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-champagne text-rich-black text-xs font-medium rounded-full flex items-center justify-center">
                    {cartCount > 9 ? '9+' : cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Search bar */}
          <div
            className={clsx(
              'overflow-hidden transition-all duration-300',
              isSearchOpen ? 'max-h-16 pb-4' : 'max-h-0'
            )}
          >
            <div className="relative">
              <input
                type="search"
                placeholder="Search for jewelry..."
                className={clsx(
                  'w-full px-4 py-3 pr-12 text-sm',
                  'bg-transparent border-b',
                  shouldBeTransparent 
                    ? 'border-warm-ivory border-opacity-30 text-warm-ivory placeholder-warm-ivory placeholder-opacity-50' 
                    : 'border-warm-gray-200 text-warm-gray-900 placeholder-warm-gray-400',
                  'focus:outline-none focus:border-champagne'
                )}
              />
              <Search 
                size={18} 
                className={clsx(
                  'absolute right-4 top-1/2 -translate-y-1/2',
                  shouldBeTransparent ? 'text-warm-ivory text-opacity-50' : 'text-warm-gray-400'
                )} 
              />
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={clsx(
            'md:hidden overflow-hidden transition-all duration-300',
            isMobileMenuOpen ? 'max-h-96' : 'max-h-0'
          )}
        >
          <nav className="px-4 py-4 space-y-1 bg-warm-ivory border-t border-warm-gray-100">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block py-3 px-4 text-sm font-medium tracking-wider uppercase text-warm-gray-900 hover:bg-warm-gray-50"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Spacer for non-home pages */}
      {!isHomePage && <div className="h-16 md:h-20" />}
    </>
  );
}

export default Navigation;
