import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const navLinks = [
  { label: 'Shop', path: '/shop' },
  { label: 'Collections', path: '/collections' },
  { label: 'About', path: '/about' },
  { label: 'Journal', path: '/journal' },
];

export default function Navbar({ onCartOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { totalItems } = useCart();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const bgClass = scrolled || !isHome
    ? 'bg-cream-50/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent';
  const textClass = scrolled || !isHome ? 'text-ink-900' : 'text-white';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${bgClass}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Mobile menu toggle */}
            <button
              className={`lg:hidden p-2 -ml-2 ${textClass}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xs tracking-widest uppercase font-medium transition-colors duration-300 hover:text-gold-500 ${textClass}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-2xl lg:text-3xl font-semibold tracking-wider transition-colors duration-300 ${textClass}`}
            >
              VELMORA
            </Link>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button
                className={`p-2 transition-colors duration-300 hover:text-gold-500 ${textClass}`}
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>
              <button
                className={`p-2 relative transition-colors duration-300 hover:text-gold-500 ${textClass}`}
                aria-label="Open cart"
                onClick={onCartOpen}
              >
                <ShoppingBag className="w-4 h-4" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-gold-500 text-white text-[10px] font-medium w-4 h-4 rounded-full flex items-center justify-center">
                    {totalItems > 9 ? '9+' : totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileOpen ? 'max-h-80' : 'max-h-0'
          }`}
        >
          <div className="px-4 pb-4 space-y-1 bg-cream-50/95 backdrop-blur-md border-t border-cream-200">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block py-3 text-sm tracking-widest uppercase font-medium text-ink-700 hover:text-gold-600 border-b border-cream-100 last:border-0"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Spacer for non-home pages */}
      {!isHome && <div className="h-16 lg:h-20" />}
    </>
  );
}