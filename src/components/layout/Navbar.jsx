import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/collections' },
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/journal' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();
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

  const navbarBg = scrolled || !isHome
    ? 'bg-cream-50/95 backdrop-blur-md shadow-sm border-b border-charcoal-100/50'
    : 'bg-transparent';

  const textColor = scrolled || !isHome ? 'text-charcoal-800' : 'text-cream-50';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navbarBg}`}
      >
        <nav className="container-wide flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 ${textColor}`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-2xl md:text-3xl tracking-[0.15em] font-medium ${textColor} order-0`}
          >
            VELMORA
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.href}
                className={`font-sans text-xs tracking-[0.2em] uppercase ${textColor} hover:opacity-70 transition-opacity duration-300`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button
              className={`p-2 ${textColor} hover:opacity-70 transition-opacity`}
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button
              onClick={() => setIsOpen(true)}
              className={`p-2 ${textColor} hover:opacity-70 transition-opacity relative`}
              aria-label="Cart"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-gold-500 text-cream-50 text-[10px] font-medium rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-cream-50 border-b border-charcoal-100 transition-all duration-300 ${
            mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="container-wide py-6 flex flex-col gap-4">
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.href}
                className="font-sans text-sm tracking-[0.15em] uppercase text-charcoal-800 py-2"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}
