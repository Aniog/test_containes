import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();

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
    { href: '/collections/all', label: 'Shop' },
    { href: '/collections/all?category=earrings', label: 'Earrings' },
    { href: '/collections/all?category=necklaces', label: 'Necklaces' },
    { href: '/collections/all?category=huggies', label: 'Huggies' },
    { href: '/about', label: 'About' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-400 ${
          isScrolled || location.pathname !== '/'
            ? 'bg-cream-50 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 -ml-2"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-xl sm:text-2xl tracking-extra-wide transition-colors ${
                isScrolled || location.pathname !== '/'
                  ? 'text-charcoal-800'
                  : 'text-charcoal-800'
              }`}
            >
              VELMORA
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm tracking-wider uppercase transition-colors hover:text-gold-600 ${
                    isScrolled || location.pathname !== '/'
                      ? 'text-charcoal-600'
                      : 'text-charcoal-700'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-2 sm:gap-4">
              <button
                className={`p-2 transition-colors ${
                  isScrolled || location.pathname !== '/'
                    ? 'hover:bg-charcoal-100'
                    : 'hover:bg-charcoal-800/10'
                } rounded-full`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                className={`p-2 transition-colors relative ${
                  isScrolled || location.pathname !== '/'
                    ? 'hover:bg-charcoal-100'
                    : 'hover:bg-charcoal-800/10'
                } rounded-full`}
                onClick={() => setIsCartOpen(true)}
                aria-label="Open cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-gold-500 text-cream-50 text-xs rounded-full flex items-center justify-center font-medium">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Hairline divider */}
        <div className={`h-px ${isScrolled || location.pathname !== '/' ? 'bg-charcoal-200' : 'bg-charcoal-800/10'}`} />
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-charcoal-900/50"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-80 bg-cream-50 shadow-2xl animate-fade-in">
            <div className="flex items-center justify-between px-6 py-6 border-b border-charcoal-200">
              <span className="font-serif text-xl tracking-extra-wide">
                VELMORA
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 hover:bg-charcoal-100 rounded-full"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="px-6 py-8 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block text-lg tracking-wider uppercase text-charcoal-700 hover:text-gold-600 transition-colors"
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