import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
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

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { href: '/collection', label: 'Shop' },
    { href: '/collection?category=earrings', label: 'Earrings' },
    { href: '/collection?category=necklaces', label: 'Necklaces' },
    { href: '/about', label: 'About' },
  ];

  const shouldBeTransparent = isHome && !isScrolled && !isMobileMenuOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          shouldBeTransparent
            ? 'bg-transparent'
            : 'bg-[var(--color-cream)] shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 -ml-2"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" style={{ color: 'var(--color-espresso)' }} />
              ) : (
                <Menu className="w-5 h-5" style={{ color: 'var(--color-espresso)' }} />
              )}
            </button>

            {/* Logo */}
            <Link
              to="/"
              className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 font-serif text-xl md:text-2xl tracking-wider"
              style={{
                color: shouldBeTransparent ? 'var(--color-cream)' : 'var(--color-espresso)',
                fontFamily: 'var(--font-serif)',
              }}
            >
              VELMORA
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm tracking-wide transition-colors hover:opacity-70"
                  style={{
                    color: shouldBeTransparent ? 'var(--color-cream)' : 'var(--color-espresso)',
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 transition-opacity hover:opacity-70"
                aria-label="Search"
              >
                <Search
                  className="w-5 h-5"
                  style={{ color: shouldBeTransparent ? 'var(--color-cream)' : 'var(--color-espresso)' }}
                />
              </button>
              <button
                onClick={() => setIsCartOpen(true)}
                className="p-2 transition-opacity hover:opacity-70 relative"
                aria-label="Shopping bag"
              >
                <ShoppingBag
                  className="w-5 h-5"
                  style={{ color: shouldBeTransparent ? 'var(--color-cream)' : 'var(--color-espresso)' }}
                />
                {cartCount > 0 && (
                  <span
                    className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full text-[10px] font-medium flex items-center justify-center"
                    style={{
                      backgroundColor: 'var(--color-gold)',
                      color: 'var(--color-charcoal)',
                    }}
                  >
                    {cartCount > 9 ? '9+' : cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div
            className="absolute left-0 right-0 p-4 md:p-6"
            style={{ backgroundColor: 'var(--color-cream)' }}
          >
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for earrings, necklaces..."
                  className="w-full px-4 py-3 pr-12 text-sm border-b-2 outline-none"
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: 'var(--color-champagne)',
                    color: 'var(--color-espresso)',
                  }}
                  autoFocus
                />
                <Search
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4"
                  style={{ color: 'var(--color-taupe)' }}
                />
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          style={{ backgroundColor: 'var(--color-cream)' }}
        >
          <div className="flex flex-col h-full pt-20 px-6">
            <nav className="flex-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block py-4 text-2xl font-serif border-b"
                  style={{
                    borderColor: 'var(--color-champagne)',
                    color: 'var(--color-espresso)',
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="py-8">
              <p className="text-sm" style={{ color: 'var(--color-taupe)' }}>
                Free Worldwide Shipping · 30-Day Returns
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}