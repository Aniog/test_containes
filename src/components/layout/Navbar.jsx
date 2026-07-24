import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { itemCount, toggleCart } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/shop?category=all' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' }
  ];

  const isTransparent = isHome && !isScrolled && !isMobileMenuOpen;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isTransparent
            ? 'bg-transparent'
            : 'bg-[var(--color-cream)] shadow-sm'
        }`}
      >
        <div className="container-luxury">
          <div className="flex items-center justify-between h-20">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 -ml-2"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" style={{ color: 'var(--color-espresso)' }} />
              ) : (
                <Menu className="w-6 h-6" style={{ color: isTransparent ? 'var(--color-cream)' : 'var(--color-espresso)' }} />
              )}
            </button>

            {/* Left - Logo */}
            <Link
              to="/"
              className="font-serif text-2xl tracking-[0.2em] font-medium"
              style={{
                color: isTransparent ? 'var(--color-cream)' : 'var(--color-espresso)'
              }}
            >
              VELMORA
            </Link>

            {/* Center - Nav Links (Desktop) */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-sm tracking-wide font-medium transition-colors hover:text-[var(--color-gold-dark)]"
                  style={{
                    color: isTransparent ? 'var(--color-cream)' : 'var(--color-espresso)'
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right - Icons */}
            <div className="flex items-center gap-4">
              <button
                className="p-2 transition-colors hover:text-[var(--color-gold-dark)]"
                style={{ color: isTransparent ? 'var(--color-cream)' : 'var(--color-espresso)' }}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={toggleCart}
                className="p-2 relative transition-colors hover:text-[var(--color-gold-dark)]"
                style={{ color: isTransparent ? 'var(--color-cream)' : 'var(--color-espresso)' }}
                aria-label="Shopping cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {itemCount > 0 && (
                  <span
                    className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full text-xs flex items-center justify-center font-medium"
                    style={{
                      backgroundColor: 'var(--color-gold)',
                      color: 'var(--color-espresso)'
                    }}
                  >
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 transition-all duration-300 ${
            isMobileMenuOpen
              ? 'opacity-100 visible'
              : 'opacity-0 invisible'
          }`}
          style={{
            backgroundColor: 'var(--color-cream)',
            boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
          }}
        >
          <div className="container-luxury py-6">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-base tracking-wide font-medium py-2 transition-colors hover:text-[var(--color-gold-dark)]"
                  style={{ color: 'var(--color-espresso)' }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer for transparent navbar on homepage */}
      {isHome && !isScrolled && <div className="h-20" />}
    </>
  );
};

export default Navbar;
