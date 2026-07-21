import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { setIsCartOpen, getCartCount } = useCart();
  const location = useLocation();
  const cartCount = getCartCount();

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
    { to: '/shop', label: 'Shop' },
    { to: '/shop?category=Earrings', label: 'Earrings' },
    { to: '/shop?category=Necklaces', label: 'Necklaces' },
    { to: '/about', label: 'About' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || !isHomePage
            ? 'bg-[var(--color-ivory)] shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 -ml-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X size={20} className="text-[var(--color-espresso)]" />
              ) : (
                <Menu size={20} className="text-[var(--color-espresso)]" />
              )}
            </button>

            {/* Logo */}
            <Link
              to="/"
              className="font-serif text-xl lg:text-2xl tracking-[0.2em] text-[var(--color-espresso)] hover:text-[var(--color-gold)] transition-colors"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              VELMORA
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-xs font-medium tracking-[0.1em] uppercase text-[var(--color-mocha)] hover:text-[var(--color-gold)] transition-colors"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button
                className="p-2 text-[var(--color-mocha)] hover:text-[var(--color-gold)] transition-colors"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              <button
                className="p-2 text-[var(--color-mocha)] hover:text-[var(--color-gold)] transition-colors relative"
                onClick={() => setIsCartOpen(true)}
                aria-label="Shopping cart"
              >
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[var(--color-gold)] text-[var(--color-charcoal)] text-[10px] font-medium rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Hairline divider */}
        <div className="h-px bg-[var(--color-divider)]" />
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-0 left-0 bottom-0 w-72 bg-[var(--color-ivory)] shadow-xl transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-6 pt-20">
            <div className="space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-sm font-medium tracking-[0.1em] uppercase text-[var(--color-espresso)] hover:text-[var(--color-gold)] transition-colors py-2"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for fixed navbar */}
      <div className="h-16 lg:h-20" />
    </>
  );
}
