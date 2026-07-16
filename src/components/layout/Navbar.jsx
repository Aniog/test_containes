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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, openCart } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navClass = scrolled
    ? 'bg-white shadow-sm border-b border-brand-border'
    : isHome
    ? 'bg-transparent'
    : 'bg-white border-b border-brand-border';

  const linkClass = scrolled || !isHome
    ? 'text-brand-deep hover:text-brand-gold'
    : 'text-white hover:text-brand-gold-soft';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClass}`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              className={`md:hidden ${linkClass}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Left nav links - desktop */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xs tracking-[0.15em] uppercase font-medium transition-colors duration-300 ${linkClass}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-2xl md:text-3xl tracking-[0.2em] uppercase font-light transition-colors duration-300 ${
                scrolled || !isHome ? 'text-brand-deep' : 'text-white'
              }`}
            >
              VELMORA
            </Link>

            {/* Right nav links - desktop */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.slice(2).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xs tracking-[0.15em] uppercase font-medium transition-colors duration-300 ${linkClass}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-4 md:gap-6">
              <button
                className={`transition-colors duration-300 ${linkClass}`}
                aria-label="Search"
              >
                <Search className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              <button
                className={`relative transition-colors duration-300 ${linkClass}`}
                onClick={openCart}
                aria-label="Open cart"
              >
                <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-brand-gold text-brand-deep text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-brand-border">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-sm tracking-[0.15em] uppercase text-brand-deep hover:text-brand-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
      {/* Spacer for fixed nav */}
      <div className="h-16 md:h-20" />
    </>
  );
}