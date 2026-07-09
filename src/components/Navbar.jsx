import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();

  // Handle scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Shop', path: '/shop' },
    { label: 'Collections', path: '/shop' },
    { label: 'About', path: '/about' },
    { label: 'Journal', path: '/journal' },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/shop?search=${encodeURIComponent(searchQuery.trim())}`;
      setSearchQuery('');
      setShowSearch(false);
    }
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-[#E5DFD6]' : 'bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        {/* Left: Logo */}
        <Link to="/" className="font-serif text-2xl tracking-[0.2em] text-[#1C1917]">
          VELMORA
        </Link>

        {/* Center: Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 text-sm tracking-[0.1em] uppercase">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className={`transition-colors hover:text-[#B8976A] ${
                isActive(link.path) ? 'text-[#B8976A]' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: Icons */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative hidden sm:block">
            {showSearch ? (
              <form onSubmit={handleSearch} className="flex items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="input w-48 text-sm py-1.5"
                  autoFocus
                  onBlur={() => {
                    if (!searchQuery) setShowSearch(false);
                  }}
                />
              </form>
            ) : (
              <button
                onClick={() => setShowSearch(true)}
                className="p-2 text-[#1C1917] hover:text-[#B8976A] transition-colors"
                aria-label="Search"
              >
                <Search size={18} />
              </button>
            )}
          </div>

          {/* Cart */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="p-2 text-[#1C1917] hover:text-[#B8976A] transition-colors relative"
            aria-label="Open cart"
          >
            <ShoppingBag size={18} />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 text-[10px] bg-[#B8976A] text-white rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#1C1917]"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#E5DFD6]">
          <div className="container py-6 flex flex-col gap-4 text-sm tracking-[0.1em] uppercase">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={isActive(link.path) ? 'text-[#B8976A]' : ''}
              >
                {link.label}
              </Link>
            ))}
            <form onSubmit={handleSearch} className="pt-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search jewelry..."
                className="input text-sm"
              />
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;