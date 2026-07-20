import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '/#about' },
  { label: 'Journal', href: '/#journal' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, openCart } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navBg = scrolled || !isHome
    ? 'bg-cream/95 backdrop-blur-md border-b border-border'
    : 'bg-transparent';

  const textColor = scrolled || !isHome ? 'text-charcoal' : 'text-white';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between h-16 md:h-20">
        {/* Mobile menu button */}
        <button
          className={`md:hidden ${textColor}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Logo */}
        <Link
          to="/"
          className={`font-serif text-2xl md:text-3xl tracking-wide-xl font-medium ${textColor}`}
        >
          VELMORA
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.label}
              to={link.href}
              className={`text-sm tracking-wider uppercase font-sans font-medium hover:opacity-70 transition-opacity duration-200 ${textColor}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-4">
          <button className={`${textColor} hover:opacity-70 transition-opacity`} aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button
            className={`relative ${textColor} hover:opacity-70 transition-opacity`}
            onClick={openCart}
            aria-label="Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-gold text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-border">
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm tracking-wider uppercase font-sans font-medium text-charcoal hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
