import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCart } from '@/context/CartContext';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
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
    { name: 'Shop', href: '/shop' },
    { name: 'Collections', href: '/shop?collection=new' },
    { name: 'About', href: '/about' },
    { name: 'Journal', href: '/journal' },
  ];

  const shouldBeTransparent = isHomePage && !isScrolled;

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-500',
          shouldBeTransparent 
            ? 'bg-transparent' 
            : 'bg-cream-50/95 backdrop-blur-md shadow-sm'
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 -ml-2 text-charcoal-900"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Logo */}
            <Link 
              to="/" 
              className={cn(
                'font-serif text-2xl tracking-wide transition-colors duration-300',
                shouldBeTransparent ? 'text-cream-50' : 'text-charcoal-900'
              )}
            >
              VELMORA
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    'font-sans text-sm tracking-wide transition-colors duration-200',
                    shouldBeTransparent 
                      ? 'text-cream-50/90 hover:text-cream-50' 
                      : 'text-charcoal-700 hover:text-charcoal-900'
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              {/* Search */}
              <button
                className={cn(
                  'p-2 transition-colors duration-200',
                  shouldBeTransparent 
                    ? 'text-cream-50/90 hover:text-cream-50' 
                    : 'text-charcoal-700 hover:text-charcoal-900'
                )}
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Cart */}
              <button
                className={cn(
                  'p-2 relative transition-colors duration-200',
                  shouldBeTransparent 
                    ? 'text-cream-50/90 hover:text-cream-50' 
                    : 'text-charcoal-700 hover:text-charcoal-900'
                )}
                onClick={() => setIsCartOpen(true)}
                aria-label="Open cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-gold-500 text-charcoal-900 text-xs font-medium rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-charcoal-900/50 backdrop-blur-sm z-50 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-cream-50 z-50 lg:hidden animate-slide-in-right">
            <div className="flex items-center justify-between px-6 py-5 border-b border-charcoal-100">
              <span className="font-serif text-xl text-charcoal-900">VELMORA</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 -mr-2 text-charcoal-500 hover:text-charcoal-900"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="px-6 py-8">
              <ul className="space-y-6">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="block font-serif text-2xl text-charcoal-900 hover:text-gold-600 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </>
      )}

      {/* Search Modal */}
      {isSearchOpen && (
        <>
          <div 
            className="fixed inset-0 bg-charcoal-900/50 backdrop-blur-sm z-50"
            onClick={() => setIsSearchOpen(false)}
          />
          <div className="fixed top-0 left-0 right-0 bg-cream-50 z-50 px-4 py-6 shadow-xl animate-slide-up">
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-charcoal-400" />
                <input
                  type="text"
                  placeholder="Search for jewelry..."
                  className="w-full pl-12 pr-4 py-4 bg-white border border-charcoal-200 font-sans text-charcoal-800 focus:outline-none focus:border-gold-400"
                  autoFocus
                />
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-charcoal-400 hover:text-charcoal-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Spacer for transparent nav */}
      {shouldBeTransparent && <div className="h-20" />}
    </>
  );
};

export default Navigation;
