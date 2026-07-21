import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/shop', label: 'Shop' },
    { to: '/collections', label: 'Collections' },
    { to: '/about', label: 'About' },
    { to: '/journal', label: 'Journal' }
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || !isHome
            ? 'bg-[var(--color-bg-primary)] shadow-sm'
            : 'bg-transparent'
        }`}
        style={{
          backgroundColor: isScrolled || !isHome ? 'var(--color-bg-primary)' : 'transparent'
        }}
      >
        <div className="container">
          <div className="flex items-center justify-between h-20">
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} style={{ color: 'var(--color-text-primary)' }} />
            </button>

            {/* Logo */}
            <Link
              to="/"
              className="font-serif text-2xl tracking-[0.2em] font-medium"
              style={{ color: 'var(--color-text-primary)' }}
            >
              VELMORA
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm tracking-wider uppercase transition-colors hover:opacity-70"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Icons */}
            <div className="flex items-center gap-4">
              <button
                className="p-2 transition-opacity hover:opacity-70"
                aria-label="Search"
              >
                <Search size={20} style={{ color: 'var(--color-text-primary)' }} />
              </button>
              <button
                className="p-2 transition-opacity hover:opacity-70 relative"
                onClick={() => setIsOpen(true)}
                aria-label="Cart"
              >
                <ShoppingBag size={20} style={{ color: 'var(--color-text-primary)' }} />
                {totalItems > 0 && (
                  <span
                    className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center text-[10px] font-medium text-white rounded-full"
                    style={{ backgroundColor: 'var(--color-accent)' }}
                  >
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-[60] lg:hidden"
          style={{ backgroundColor: 'var(--color-bg-primary)' }}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b" style={{ borderColor: 'var(--color-border)' }}>
              <span className="font-serif text-xl tracking-[0.2em]">VELMORA</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} style={{ color: 'var(--color-text-primary)' }} />
              </button>
            </div>
            <nav className="flex-1 flex flex-col items-center justify-center gap-8">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-2xl tracking-wider"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;