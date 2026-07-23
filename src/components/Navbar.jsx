import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, openCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === '/';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? 'bg-nav-dark shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-content mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu toggle */}
          <button
            className={`md:hidden transition-colors ${scrolled || !isHome ? 'text-white' : 'text-white'}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-xl md:text-2xl tracking-widest uppercase transition-colors ${
              scrolled || !isHome ? 'text-gold' : 'text-white'
            }`}
          >
            VELMORA
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { to: '/shop', label: 'Shop' },
              { to: '/collections', label: 'Collections' },
              { to: '/about', label: 'About' },
              { to: '/journal', label: 'Journal' },
            ].map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-xs uppercase tracking-widest transition-colors duration-300 hover:text-gold ${
                  scrolled || !isHome ? 'text-white' : 'text-white/90'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button
              className={`transition-colors duration-300 hover:text-gold ${
                scrolled || !isHome ? 'text-white' : 'text-white'
              }`}
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              className={`relative transition-colors duration-300 hover:text-gold ${
                scrolled || !isHome ? 'text-white' : 'text-white'
              }`}
              onClick={openCart}
              aria-label="Open cart"
            >
              <ShoppingBag className="w-4 h-4" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold text-white text-[10px] font-sans font-medium w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-64 bg-nav-dark' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-4 space-y-3">
          {[
            { to: '/shop', label: 'Shop' },
            { to: '/collections', label: 'Collections' },
            { to: '/about', label: 'About' },
            { to: '/journal', label: 'Journal' },
          ].map(link => (
            <Link
              key={link.to}
              to={link.to}
              className="block text-white text-xs uppercase tracking-widest py-2 hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
