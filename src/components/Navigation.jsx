import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();
  const { totalItems, toggleCart } = useCart();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/shop', label: 'Shop' },
    { to: '/collections', label: 'Collections' },
    { to: '/about', label: 'About' },
    { to: '/journal', label: 'Journal' },
  ];

  const navBg = scrolled || !isHome
    ? 'bg-ivory/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent';

  const textColor = scrolled || !isHome
    ? 'text-charcoal'
    : 'text-white';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-luxury ${navBg}`}
      >
        <nav className="max-w-site mx-auto flex items-center justify-between h-16 lg:h-20 section-padding">
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 -ml-2 ${textColor} transition-colors`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-2xl lg:text-[1.75rem] tracking-[0.15em] uppercase ${textColor} transition-colors duration-300`}
          >
            Velmora
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-sans text-xs uppercase tracking-[0.15em] ${textColor} hover:opacity-70 transition-opacity duration-300 relative group`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className={`p-2 ${textColor} hover:opacity-70 transition-opacity`}
              aria-label="Search"
            >
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button
              onClick={toggleCart}
              className={`p-2 ${textColor} hover:opacity-70 transition-opacity relative`}
              aria-label="Cart"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 bg-gold-600 text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </nav>

        {/* Search Bar */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            searchOpen ? 'max-h-16 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="max-w-site mx-auto section-padding pb-4">
            <input
              type="text"
              placeholder="Search for jewelry..."
              className="w-full bg-ivory-warm border border-ivory-dark px-4 py-2.5 font-sans text-sm text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-gold-400 transition-colors"
            />
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-charcoal/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 left-0 bottom-0 w-[300px] z-50 bg-ivory shadow-xl transition-transform duration-400 ease-luxury lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-10">
            <span className="font-serif text-xl tracking-[0.15em] uppercase text-charcoal">
              Velmora
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-charcoal"
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>
          <div className="flex flex-col gap-6">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="font-sans text-sm uppercase tracking-[0.12em] text-charcoal hover:text-gold-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-10 pt-6 border-t border-ivory-dark">
            <Link
              to="/shop"
              className="btn-gold-outline w-full text-center"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
