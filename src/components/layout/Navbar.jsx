import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const navLinks = [
  { name: 'Shop', path: '/shop' },
  { name: 'Collections', path: '/shop' },
  { name: 'About', path: '/#about' },
  { name: 'Journal', path: '/#journal' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cartCount, toggleCart } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navBg = scrolled || !isHome
    ? 'bg-cream-50/95 backdrop-blur-md shadow-soft border-b border-ink-100/30'
    : 'bg-transparent';

  const textColor = scrolled || !isHome ? 'text-ink-800' : 'text-ink-800';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
      >
        <nav className="section-padding flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            className={`md:hidden ${textColor} p-1`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-xl md:text-2xl font-semibold tracking-ultra-wide ${textColor} order-first md:order-none`}
          >
            VELMORA
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-sans text-xs font-medium tracking-ultra-wide uppercase ${textColor} hover:text-gold-500 transition-colors duration-300`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className={`flex items-center gap-4 ${textColor}`}>
            <button className="p-1 hover:text-gold-500 transition-colors" aria-label="Search">
              <Search className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <button
              className="p-1 hover:text-gold-500 transition-colors relative"
              onClick={toggleCart}
              aria-label={`Cart with ${cartCount} items`}
            >
              <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-ink-900/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute top-16 left-0 right-0 bg-cream-50 border-b border-ink-100/30 shadow-elevated animate-slide-up">
            <div className="section-padding py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="font-serif text-2xl text-ink-700 hover:text-gold-500 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="hairline-divider mt-2" />
              <Link
                to="/shop"
                className="btn-primary text-center mt-2"
                onClick={() => setMobileOpen(false)}
              >
                Shop All
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
