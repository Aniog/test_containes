import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getCartCount, openCart } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/shop?collection=all' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' }
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || !isHome 
            ? 'bg-[var(--color-surface)] shadow-soft' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" style={{ color: 'var(--color-text)' }} />
              ) : (
                <Menu className="w-6 h-6" style={{ color: 'var(--color-text)' }} />
              )}
            </button>

            {/* Logo */}
            <Link 
              to="/" 
              className="font-serif text-xl md:text-2xl tracking-wider absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
              style={{ 
                color: isScrolled || !isHome ? 'var(--color-text)' : (isHome ? '#FFFFFF' : 'var(--color-text)'),
                fontFamily: 'var(--font-family-serif)'
              }}
            >
              VELMORA
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-sm tracking-wider uppercase transition-colors duration-200 hover:opacity-70"
                  style={{ 
                    color: isScrolled || !isHome ? 'var(--color-text)' : (isHome ? '#FFFFFF' : 'var(--color-text)'),
                    fontFamily: 'var(--font-family-sans)'
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-4 md:space-x-6">
              <button 
                className="p-2 transition-opacity duration-200 hover:opacity-70"
                aria-label="Search"
                style={{ color: isScrolled || !isHome ? 'var(--color-text)' : (isHome ? '#FFFFFF' : 'var(--color-text)') }}
              >
                <Search className="w-5 h-5" />
              </button>
              <button 
                className="p-2 relative transition-opacity duration-200 hover:opacity-70"
                aria-label="Cart"
                onClick={openCart}
                style={{ color: isScrolled || !isHome ? 'var(--color-text)' : (isHome ? '#FFFFFF' : 'var(--color-text)') }}
              >
                <ShoppingBag className="w-5 h-5" />
                {getCartCount() > 0 && (
                  <span 
                    className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-xs flex items-center justify-center text-white"
                    style={{ backgroundColor: 'var(--color-velmora-gold)' }}
                  >
                    {getCartCount()}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden absolute top-16 left-0 right-0 bg-[var(--color-surface)] shadow-lg transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block text-sm tracking-wider uppercase py-2 border-b border-[var(--color-border)]"
                style={{ 
                  color: 'var(--color-text)',
                  fontFamily: 'var(--font-family-sans)'
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-16 md:h-20" />
    </>
  );
};

export default Navbar;