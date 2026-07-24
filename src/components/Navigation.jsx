import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navigation() {
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

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/100 shadow-sm'
            : location.pathname === '/'
            ? 'bg-transparent'
            : 'bg-white'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 -ml-2 text-text-primary"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <Link
              to="/"
              className="font-serif text-xl sm:text-2xl tracking-wide text-text-primary absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
            >
              VELMORA
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-sm tracking-wider uppercase text-text-secondary hover:text-text-primary transition-colors duration-200"
                  style={{ letterSpacing: '0.1em' }}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button
                className="p-2 text-text-secondary hover:text-text-primary transition-colors duration-200"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              <button
                onClick={() => setIsCartOpen(true)}
                className="p-2 text-text-secondary hover:text-text-primary transition-colors duration-200 relative"
                aria-label="Shopping cart"
              >
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-gold text-white text-xs rounded-full flex items-center justify-center font-medium">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/20"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-xl transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <span
                className="font-serif text-xl tracking-wide"
                style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
              >
                VELMORA
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 -mr-2"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block py-2 text-lg tracking-wider uppercase text-text-primary"
                  style={{ letterSpacing: '0.1em' }}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
