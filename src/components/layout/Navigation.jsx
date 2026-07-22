import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { cn } from '../../lib/utils';

const navLinks = [
  { name: 'Shop', path: '/shop' },
  { name: 'Collections', path: '/shop?collection=new' },
  { name: 'About', path: '/about' },
  { name: 'Journal', path: '/journal' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const shouldBeTransparent = isHome && !isScrolled && !isMobileMenuOpen;

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          shouldBeTransparent
            ? 'bg-transparent'
            : 'bg-cream/95 backdrop-blur-md border-b border-charcoal-200/50 shadow-sm'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                'lg:hidden p-2 -ml-2 transition-colors',
                shouldBeTransparent ? 'text-ivory-100' : 'text-charcoal-800'
              )}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Logo */}
            <Link
              to="/"
              className={cn(
                'font-serif text-2xl md:text-3xl tracking-widest transition-colors',
                shouldBeTransparent ? 'text-ivory-100' : 'text-espresso'
              )}
              style={{ letterSpacing: '0.35em' }}
            >
              VELMORA
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    'font-sans text-sm tracking-wide transition-colors relative group',
                    shouldBeTransparent
                      ? 'text-ivory-100/90 hover:text-ivory-100'
                      : 'text-charcoal-700 hover:text-espresso'
                  )}
                >
                  {link.name}
                  <span
                    className={cn(
                      'absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full',
                      shouldBeTransparent ? 'bg-ivory-100' : 'bg-accent'
                    )}
                  />
                </Link>
              ))}
            </nav>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button
                className={cn(
                  'p-2 transition-colors',
                  shouldBeTransparent ? 'text-ivory-100' : 'text-charcoal-800',
                  'hover:text-accent'
                )}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              <button
                onClick={() => setIsCartOpen(true)}
                className={cn(
                  'p-2 transition-colors relative',
                  shouldBeTransparent ? 'text-ivory-100' : 'text-charcoal-800',
                  'hover:text-accent'
                )}
                aria-label="Shopping cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-accent text-ivory-100 text-xs font-medium rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 lg:hidden transition-all duration-300',
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <div
          className="absolute inset-0 bg-espresso/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <nav
          className={cn(
            'absolute top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-cream shadow-2xl transition-transform duration-300',
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          <div className="p-6 pt-24">
            <div className="space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block font-serif text-2xl text-espresso hover:text-accent transition-colors"
                  style={{ letterSpacing: '0.15em' }}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="hairline my-8" />

            <div className="space-y-4">
              <button className="flex items-center gap-3 text-charcoal-700 hover:text-espresso transition-colors">
                <Search className="w-5 h-5" />
                <span className="font-sans">Search</span>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
