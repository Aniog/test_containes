import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icons } from './ui/Icon';
import { useCart } from '../context/CartContext';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { label: 'Shop', to: '/shop' },
    { label: 'Collections', to: '/shop' },
    { label: 'About', to: '/about' },
    { label: 'Journal', to: '/journal' },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearchOpen(false);
      setSearchQuery('');
      window.location.href = `/shop?search=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  return (
    <>
      <nav className={`nav fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'scrolled' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Left: Logo */}
          <Link to="/" className="logo text-[#2C2522]">
            VELMORA
          </Link>

          {/* Center: Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="nav-link text-[#2C2522] hover:text-[#8C6F52]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right: Icons */}
          <div className="flex items-center gap-5">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="text-[#2C2522] hover:text-[#8C6F52] transition-colors"
              aria-label="Search"
            >
              <Icons.Search />
            </button>
            <button
              onClick={() => setIsCartOpen(true)}
              className="text-[#2C2522] hover:text-[#8C6F52] transition-colors relative"
              aria-label="Cart"
            >
              <Icons.Cart />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#B89778] text-white text-[10px] flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-[#2C2522]"
              aria-label="Menu"
            >
              <Icons.Menu />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#F8F5F1] border-t border-[#D9D0C4]">
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="nav-link text-[#2C2522] py-1"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="search-overlay" onClick={() => setIsSearchOpen(false)}>
          <div className="w-full max-w-2xl px-6" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleSearch}>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search our collection..."
                className="search-input"
                autoFocus
              />
              <p className="text-center text-[#9A8F85] text-xs tracking-[0.1em] mt-4 uppercase">
                Press Enter to search • Esc to close
              </p>
            </form>
          </div>
          <button
            onClick={() => setIsSearchOpen(false)}
            className="absolute top-6 right-6 text-[#2C2522]"
            aria-label="Close search"
          >
            <Icons.Close />
          </button>
        </div>
      )}

      {/* Keyboard escape for search */}
      {isSearchOpen && (
        <div
          className="fixed inset-0 z-[99]"
          onKeyDown={(e) => e.key === 'Escape' && setIsSearchOpen(false)}
        />
      )}
    </>
  );
};

export default Nav;
