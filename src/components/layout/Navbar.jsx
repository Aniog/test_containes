import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, toggleDrawer } = useCart();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';
  const navTransparent = isHome && !scrolled;

  const navLinks = [
    { to: '/shop', label: 'Shop' },
    { to: '/collections', label: 'Collections' },
    { to: '/about', label: 'About' },
    { to: '/journal', label: 'Journal' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          navTransparent
            ? 'bg-transparent'
            : 'bg-cream-50/95 backdrop-blur-md shadow-sm border-b border-gold-200/30'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2 transition-colors ${
                navTransparent ? 'text-cream-50' : 'text-charcoal-800'
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-2xl md:text-3xl tracking-widest transition-colors ${
                navTransparent ? 'text-cream-50' : 'text-charcoal-800'
              }`}
              style={{ fontWeight: 400 }}
            >
              VELMORA
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-xs tracking-widest-xl uppercase font-sans font-medium transition-colors hover:text-gold-500 ${
                    navTransparent ? 'text-cream-100/90' : 'text-charcoal-600'
                  } ${location.pathname === link.to ? 'text-gold-500' : ''}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-3">
              <button
                className={`p-2 transition-colors hover:text-gold-500 ${
                  navTransparent ? 'text-cream-100/90' : 'text-charcoal-600'
                }`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={toggleDrawer}
                className={`relative p-2 transition-colors hover:text-gold-500 ${
                  navTransparent ? 'text-cream-100/90' : 'text-charcoal-600'
                }`}
                aria-label="Shopping cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-gold-500 text-white text-2xs w-4 h-4 rounded-full flex items-center justify-center font-medium">
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
            mobileOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-cream-50/98 backdrop-blur-md border-t border-gold-200/20 px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block py-3 text-sm tracking-widest uppercase font-sans font-medium transition-colors ${
                  location.pathname === link.to ? 'text-gold-500' : 'text-charcoal-600 hover:text-gold-500'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
