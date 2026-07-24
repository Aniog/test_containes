import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { totalItems, openCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/shop', label: 'Shop' },
    { to: '/collections', label: 'Collections' },
    { to: '/about', label: 'About' },
    { to: '/journal', label: 'Journal' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-velvet/95 backdrop-blur-md border-b border-divider shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-champagne hover:text-gold transition-colors"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <h1 className="font-serif text-2xl md:text-3xl tracking-[0.3em] text-champagne hover:text-gold transition-colors">
                VELMORA
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-xs tracking-[0.2em] uppercase font-sans font-light transition-colors duration-300 ${
                    location.pathname === link.to
                      ? 'text-gold'
                      : 'text-champagne/70 hover:text-champagne'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="text-champagne/70 hover:text-champagne transition-colors"
                aria-label="Search"
              >
                <Search size={18} strokeWidth={1.5} />
              </button>
              <button
                onClick={openCart}
                className="relative text-champagne/70 hover:text-champagne transition-colors"
                aria-label={`Cart with ${totalItems} items`}
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-gold text-velvet text-[10px] font-semibold rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Search bar */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              searchOpen ? 'max-h-16 pb-4' : 'max-h-0'
            }`}
          >
            <input
              type="search"
              placeholder="Search our collection..."
              className="w-full bg-night/60 border border-divider rounded-none px-4 py-2.5 text-sm text-champagne placeholder:text-muted focus:outline-none focus:border-gold/40 transition-colors"
            />
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-400 ${
          mobileOpen ? 'visible' : 'invisible'
        }`}
      >
        <div
          className={`absolute inset-0 bg-velvet/80 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-16 left-0 right-0 bg-night border-b border-divider transition-all duration-400 ${
            mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <div className="px-6 py-8 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block text-sm tracking-[0.2em] uppercase font-sans font-light ${
                  location.pathname === link.to ? 'text-gold' : 'text-champagne/70'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
