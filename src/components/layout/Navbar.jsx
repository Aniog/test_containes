import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { itemCount, toggleCart } = useCart();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Shop', href: '/collection' },
    { name: 'Collections', href: '/collection' },
    { name: 'About', href: '/about' },
    { name: 'Journal', href: '/journal' },
  ];

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled || !isHomePage
            ? 'bg-ivory/95 backdrop-blur-sm shadow-sm'
            : 'bg-transparent'
        )}
      >
        <div className="container-narrow">
          <div className="flex items-center justify-between h-20">
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 -ml-2"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Logo */}
            <Link
              to="/"
              className={cn(
                'font-serif text-2xl md:text-3xl tracking-wide transition-colors duration-300',
                isScrolled || !isHomePage ? 'text-charcoal' : 'text-white'
              )}
            >
              VELMORA
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    'text-sm font-medium tracking-wide uppercase transition-colors duration-200',
                    isScrolled || !isHomePage
                      ? 'text-charcoal hover:text-gold'
                      : 'text-white/90 hover:text-white'
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button
                className={cn(
                  'p-2 transition-colors duration-200',
                  isScrolled || !isHomePage
                    ? 'text-charcoal hover:text-gold'
                    : 'text-white hover:text-white/80'
                )}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                className={cn(
                  'p-2 transition-colors duration-200 relative',
                  isScrolled || !isHomePage
                    ? 'text-charcoal hover:text-gold'
                    : 'text-white hover:text-white/80'
                )}
                onClick={toggleCart}
                aria-label="Shopping cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-gold text-charcoal text-xs font-medium rounded-full flex items-center justify-center">
                    {itemCount > 9 ? '9+' : itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-50 bg-ivory transition-all duration-300',
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        )}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex items-center justify-between mb-12">
            <span className="font-serif text-2xl tracking-wide text-charcoal">VELMORA</span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-charcoal" />
            </button>
          </div>

          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="font-serif text-3xl text-charcoal hover:text-gold transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
