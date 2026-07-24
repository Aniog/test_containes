import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/shop', label: 'Shop' },
    { to: '/collections', label: 'Collections' },
    { to: '/about', label: 'About' },
    { to: '/journal', label: 'Journal' }
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || !isHome
            ? 'bg-[var(--color-cream)] shadow-sm'
            : 'bg-transparent'
        }`}
        style={{
          backgroundColor: isScrolled || !isHome ? 'var(--color-cream)' : 'transparent'
        }}
      >
        <div className="container mx-auto px-6 h-[72px] flex items-center justify-between">
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" style={{ color: 'var(--color-charcoal)' }} />
          </button>

          {/* Logo */}
          <Link
            to="/"
            className="font-serif text-2xl tracking-[0.2em] absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 md:left-auto"
            style={{
              color: isScrolled || !isHome ? 'var(--color-charcoal)' : 'var(--color-charcoal)'
            }}
          >
            VELMORA
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm font-sans tracking-wide hover:opacity-60 transition-opacity"
                style={{ color: 'var(--color-charcoal)' }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <button
              className="p-2 hover:opacity-60 transition-opacity"
              aria-label="Search"
            >
              <Search className="w-5 h-5" style={{ color: 'var(--color-charcoal)' }} />
            </button>
            <button
              className="p-2 hover:opacity-60 transition-opacity relative"
              onClick={() => setIsCartOpen(true)}
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" style={{ color: 'var(--color-charcoal)' }} />
              {cartCount > 0 && (
                <span
                  className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-[10px] flex items-center justify-center text-white"
                  style={{ backgroundColor: 'var(--color-gold)' }}
                >
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-[60] md:hidden"
          style={{ backgroundColor: 'var(--color-cream)' }}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-6">
              <span className="font-serif text-xl tracking-[0.2em]">VELMORA</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex-1 flex flex-col items-center justify-center gap-8">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-2xl tracking-widest"
                  style={{ color: 'var(--color-charcoal)' }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}