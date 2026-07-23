import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const navLinks = [
  { label: 'Shop', path: '/shop' },
  { label: 'Collections', path: '/shop' },
  { label: 'About', path: '/about' },
  { label: 'Journal', path: '/journal' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, toggleCart } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navBg = scrolled || !isHome
    ? 'bg-cream/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent';
  const textColor = scrolled || !isHome ? 'text-velvet-900' : 'text-white';
  const logoColor = scrolled || !isHome ? 'text-velvet-900' : 'text-white';
  const borderColor = scrolled || !isHome ? 'border-velvet-100' : 'border-white/20';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg} ${scrolled || !isHome ? 'py-3' : 'py-5'}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Mobile menu button */}
        <button
          className={`lg:hidden ${textColor}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Center links - desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className={`text-xs font-medium tracking-wider uppercase transition-colors duration-300 hover:text-gold ${textColor}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Logo */}
        <Link
          to="/"
          className={`absolute left-1/2 -translate-x-1/2 font-serif text-xl md:text-2xl font-semibold tracking-widest transition-colors duration-500 ${logoColor}`}
        >
          VELMORA
        </Link>

        {/* Right icons */}
        <div className={`flex items-center gap-5 ${textColor}`}>
          <button aria-label="Search" className="hover:text-gold transition-colors duration-300">
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={toggleCart}
            aria-label={`Cart with ${itemCount} items`}
            className="relative hover:text-gold transition-colors duration-300"
          >
            <ShoppingBag className="w-5 h-5" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className={`max-w-7xl mx-auto px-6 lg:px-12 mt-3 transition-opacity duration-500 ${scrolled || !isHome ? 'opacity-100' : 'opacity-0'}`}>
        <hr className={`border-0 h-px ${borderColor}`} />
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${
          mobileOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-cream border-t border-velvet-100 mt-3 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className="text-sm font-medium tracking-wider uppercase text-velvet-800 hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
