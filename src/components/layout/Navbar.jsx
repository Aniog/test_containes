import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Navbar() {
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
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' }
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || !isHome
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-soft'
            : 'bg-transparent'
        }`}
        style={{ height: 'var(--header-height)' }}
      >
        <div className="container h-full flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" style={{ color: isScrolled || !isHome ? 'var(--color-charcoal)' : 'var(--color-charcoal)' }} />
          </button>

          {/* Logo */}
          <Link
            to="/"
            className="font-serif text-2xl tracking-[0.2em] font-semibold"
            style={{ color: 'var(--color-charcoal)' }}
          >
            VELMORA
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-sans tracking-wide hover:text-[var(--color-gold)] transition-colors"
                style={{ color: 'var(--color-charcoal)' }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button
              className="p-2 hover:opacity-70 transition-opacity"
              aria-label="Search"
            >
              <Search className="w-5 h-5" style={{ color: 'var(--color-charcoal)' }} />
            </button>
            <button
              className="p-2 hover:opacity-70 transition-opacity relative"
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
          className="fixed inset-0 z-[60] bg-black/50"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="absolute top-0 left-0 h-full w-80 bg-[#FAF7F2] p-6 animate-slide-in"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: 'slideInUp 0.3s ease' }}
          >
            <div className="flex justify-between items-center mb-8">
              <span className="font-serif text-xl tracking-[0.15em]">VELMORA</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-lg font-sans tracking-wide"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideInUp {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </>
  );
}