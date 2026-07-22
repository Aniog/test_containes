import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { navLinks } from '../data/products';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { setIsCartOpen, cartCount } = useCart();
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

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
          isScrolled || !isHome
            ? 'bg-[var(--color-warm-white)] shadow-[var(--shadow-sm)]'
            : 'bg-transparent'
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 -ml-2"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Logo */}
            <Link
              to="/"
              className="font-serif text-2xl md:text-3xl tracking-[0.1em] absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
              style={{ color: isScrolled || !isHome ? 'var(--color-charcoal)' : 'var(--color-warm-white)' }}
            >
              VELMORA
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm uppercase tracking-wider hover:text-[var(--color-gold)] transition-colors"
                  style={{ color: isScrolled || !isHome ? 'var(--color-charcoal)' : 'var(--color-warm-white)' }}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Icons */}
            <div className="flex items-center gap-4">
              <button
                className="p-2"
                aria-label="Search"
                style={{ color: isScrolled || !isHome ? 'var(--color-charcoal)' : 'var(--color-warm-white)' }}
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                className="p-2 relative"
                onClick={() => setIsCartOpen(true)}
                aria-label="Cart"
                style={{ color: isScrolled || !isHome ? 'var(--color-charcoal)' : 'var(--color-warm-white)' }}
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-[var(--color-gold)] text-white text-xs rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="p-6">
          <div className="flex justify-end">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col gap-6 mt-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="font-serif text-2xl"
                onClick={() => setIsMobileMenuOpen(false)}
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