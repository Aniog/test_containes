import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Shop', path: '/collection' },
    { name: 'Collections', path: '/collection' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' },
  ];

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-400',
          isHomePage
            ? isScrolled
              ? 'bg-velmora-cream/95 backdrop-blur-sm shadow-sm'
              : 'bg-transparent'
            : 'bg-velmora-cream/95 backdrop-blur-sm shadow-sm'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Left: Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-velmora-charcoal hover:text-velmora-taupe transition-colors"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Left: Logo */}
            <Link
              to="/"
              className={cn(
                'font-serif text-xl md:text-2xl tracking-ultrawide transition-colors',
                isHomePage && !isScrolled ? 'text-velmora-cream' : 'text-velmora-charcoal'
              )}
            >
              VELMORA
            </Link>

            {/* Center: Nav Links (Desktop) */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    'font-sans text-sm tracking-wide transition-colors hover:text-velmora-gold',
                    isHomePage && !isScrolled ? 'text-velmora-cream' : 'text-velmora-charcoal'
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right: Icons */}
            <div className="flex items-center space-x-4">
              <button
                className={cn(
                  'p-2 transition-colors hover:text-velmora-gold',
                  isHomePage && !isScrolled ? 'text-velmora-cream' : 'text-velmora-charcoal'
                )}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsCartOpen(true)}
                className={cn(
                  'p-2 relative transition-colors hover:text-velmora-gold',
                  isHomePage && !isScrolled ? 'text-velmora-cream' : 'text-velmora-charcoal'
                )}
                aria-label="Shopping cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-velmora-gold text-velmora-espresso text-xs font-medium rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-velmora-cream pt-20 md:hidden">
          <div className="flex flex-col items-center space-y-8 py-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="font-serif text-2xl text-velmora-charcoal hover:text-velmora-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
