import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const navLinks = [
  { label: 'Shop', href: '/collection' },
  { label: 'Collections', href: '/collection' },
  { label: 'About', href: '/#about' },
  { label: 'Journal', href: '/#journal' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-surface/95 backdrop-blur-md shadow-sm'
          : isHome
            ? 'bg-transparent'
            : 'bg-surface/95 backdrop-blur-md'
      }`}
    >
      <nav className="container-wide mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 -ml-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-xl md:text-2xl tracking-wide-heading font-medium transition-colors duration-300 ${
              scrolled || !isHome ? 'text-text-primary' : 'text-text-light'
            }`}
          >
            VELMORA
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.href}
                className={`text-xs font-medium tracking-nav uppercase transition-colors duration-300 hover:opacity-70 ${
                  scrolled || !isHome ? 'text-text-primary' : 'text-text-light'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-3">
            <button
              className={`p-2 transition-colors duration-300 hover:opacity-70 ${
                scrolled || !isHome ? 'text-text-primary' : 'text-text-light'
              }`}
              aria-label="Search"
            >
              <Search size={18} />
            </button>
            <button
              onClick={() => setIsOpen(true)}
              className={`relative p-2 transition-colors duration-300 hover:opacity-70 ${
                scrolled || !isHome ? 'text-text-primary' : 'text-text-light'
              }`}
              aria-label="Shopping bag"
            >
              <ShoppingBag size={18} />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-accent text-base text-[10px] font-semibold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pb-6 bg-surface border-t border-border">
          {navLinks.map(link => (
            <Link
              key={link.label}
              to={link.href}
              className="block py-3 text-sm font-medium tracking-nav uppercase text-text-primary border-b border-border/50 last:border-0"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
