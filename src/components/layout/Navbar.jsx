import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import SearchModal from '../ui/SearchModal';

const Navbar = () => {
  const [isSolid, setIsSolid] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getCartCount, openCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsSolid(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: '/shop', label: 'Shop' },
    { to: '/collections', label: 'Collections' },
    { to: '/about', label: 'About' },
    { to: '/journal', label: 'Journal' },
  ];

  const isHome = location.pathname === '/';

  return (
    <>
      <nav
        className={`nav fixed top-0 left-0 right-0 z-50 ${isSolid || !isHome ? 'solid' : 'bg-transparent'}`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Left: Logo */}
          <Link to="/" className="logo text-[var(--color-text)]">
            VELMORA
          </Link>

          {/* Center: Navigation Links — Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="nav-link text-xs text-[var(--color-text)] hover:text-[var(--color-gold)]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right: Icons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2.5 text-[var(--color-text)] hover:text-[var(--color-gold)] transition-colors"
              aria-label="Search"
            >
              <Search size={18} />
            </button>
            <button
              onClick={openCart}
              className="p-2.5 text-[var(--color-text)] hover:text-[var(--color-gold)] transition-colors relative"
              aria-label="Cart"
            >
              <ShoppingBag size={18} />
              {getCartCount() > 0 && (
                <span className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-[var(--color-gold)] text-[var(--color-surface)] text-[10px] flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </button>
            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2.5 text-[var(--color-text)] hover:text-[var(--color-gold)] transition-colors"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Desktop subtle bottom border handled by .solid class */}
      </nav>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/40 z-[90] md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed top-20 left-0 right-0 bg-[var(--color-surface)] z-[95] md:hidden border-b border-[var(--color-border)] shadow-lg">
            <div className="px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="py-3 text-sm tracking-[0.1em] text-[var(--color-text)] hover:text-[var(--color-gold)] border-b border-[var(--color-border-light)] last:border-b-0"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </>
      )}

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Navbar;
