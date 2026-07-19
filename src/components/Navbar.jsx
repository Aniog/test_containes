import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toggleCart, cartCount } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';
  const navBg = isHome && !scrolled
    ? 'bg-transparent'
    : 'bg-velmora-base/95 backdrop-blur-md shadow-sm';
  const textColor = isHome && !scrolled ? 'text-white' : 'text-velmora-text';

  const navLinks = [
    { to: '/shop', label: 'Shop' },
    { to: '/shop', label: 'Collections' },
    { to: '/', label: 'About' },
    { to: '/', label: 'Journal' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            className={`md:hidden ${textColor} p-1`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Logo */}
          <Link to="/" className={`font-serif text-xl md:text-2xl tracking-widest uppercase ${textColor} transition-colors duration-300`}>
            Velmora
          </Link>

          {/* Center links — desktop */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.to}
                className={`font-sans text-xs uppercase tracking-widest ${textColor} hover:opacity-70 transition-opacity duration-300`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-4 md:gap-6">
            <button className={`${textColor} hover:opacity-70 transition-opacity p-1`} aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button
              className={`${textColor} hover:opacity-70 transition-opacity p-1 relative`}
              onClick={toggleCart}
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-velmora-accent text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-sans">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-velmora-base border-t border-velmora-divider">
          <div className="px-6 py-6 space-y-4">
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.to}
                className="block font-sans text-sm uppercase tracking-widest text-velmora-text hover:text-velmora-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
