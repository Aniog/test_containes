import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { itemCount, toggleCart } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Shop', href: '/shop' },
    { name: 'Collections', href: '/shop?collection=new' },
    { name: 'About', href: '/about' },
    { name: 'Journal', href: '/journal' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || !isHome
            ? 'bg-cream/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 -ml-2 text-charcoal"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-xl md:text-2xl tracking-extra-wide transition-colors ${
                isScrolled || !isHome ? 'text-charcoal' : 'text-charcoal'
              }`}
            >
              VELMORA
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map(link => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm font-sans font-medium tracking-wide transition-colors hover:text-gold-600 ${
                    isScrolled || !isHome ? 'text-charcoal' : 'text-charcoal'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              <button
                className={`p-2 transition-colors hover:text-gold-600 ${
                  isScrolled || !isHome ? 'text-charcoal' : 'text-charcoal'
                }`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                className={`relative p-2 transition-colors hover:text-gold-600 ${
                  isScrolled || !isHome ? 'text-charcoal' : 'text-charcoal'
                }`}
                onClick={toggleCart}
                aria-label="Shopping cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-gold-500 text-cream text-xs font-medium rounded-full flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-charcoal/50"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-cream p-6 animate-slide-in">
            <div className="flex items-center justify-between mb-12">
              <span className="font-serif text-xl tracking-extra-wide text-charcoal">
                VELMORA
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-charcoal"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-6">
              {navLinks.map(link => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-lg font-sans font-medium text-charcoal hover:text-gold-600 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
