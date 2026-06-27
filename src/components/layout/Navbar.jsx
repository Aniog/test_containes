import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cartCount, toggleCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/shop', label: 'Shop' },
    { to: '/shop?category=earrings', label: 'Collections' },
    { to: '/about', label: 'About' },
    { to: '/journal', label: 'Journal' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#FBF9F6]/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 -ml-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-5 h-5 text-[#1A1A1A]" />
            ) : (
              <Menu className="w-5 h-5 text-[#1A1A1A]" />
            )}
          </button>

          {/* Left nav links (desktop) */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-xs font-medium tracking-[0.2em] uppercase transition-colors duration-300 hover:text-[#B8860B] ${
                  location.pathname === link.to
                    ? 'text-[#B8860B]'
                    : scrolled
                    ? 'text-[#1A1A1A]'
                    : 'text-[#1A1A1A]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Logo */}
          <Link
            to="/"
            className="absolute left-1/2 -translate-x-1/2 font-['Cormorant_Garamond'] text-2xl md:text-3xl font-semibold tracking-[0.15em] text-[#1A1A1A]"
          >
            VELMORA
          </Link>

          {/* Right nav links (desktop) */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.slice(2).map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-xs font-medium tracking-[0.2em] uppercase transition-colors duration-300 hover:text-[#B8860B] ${
                  location.pathname === link.to
                    ? 'text-[#B8860B]'
                    : scrolled
                    ? 'text-[#1A1A1A]'
                    : 'text-[#1A1A1A]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              className="p-2 hover:text-[#B8860B] transition-colors duration-300"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              className="p-2 hover:text-[#B8860B] transition-colors duration-300 relative"
              onClick={toggleCart}
              aria-label="Open cart"
            >
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#B8860B] text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile right icons */}
          <div className="flex md:hidden items-center space-x-4">
            <button
              className="p-2 hover:text-[#B8860B] transition-colors duration-300"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              className="p-2 hover:text-[#B8860B] transition-colors duration-300 relative"
              onClick={toggleCart}
              aria-label="Open cart"
            >
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#B8860B] text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-[#FBF9F6] border-t border-[#E8E4DF]">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-sm font-medium tracking-[0.15em] uppercase text-[#1A1A1A] hover:text-[#B8860B] transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
