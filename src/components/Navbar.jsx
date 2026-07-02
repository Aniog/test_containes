import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { getCartCount, openCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Shop', to: '/shop' },
    { label: 'Collections', to: '/shop' },
    { label: 'About', to: '/about' },
    { label: 'Journal', to: '/journal' },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/shop?search=${encodeURIComponent(searchQuery)}`;
      setSearchQuery('');
    }
  };

  const isHome = location.pathname === '/';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHome
          ? 'bg-[#F8F5F1] border-b border-[#E5DFD6]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-serif text-2xl tracking-[0.15em] text-[#2C2522]">
          VELMORA
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 text-sm tracking-[0.08em] uppercase">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="hover:text-[#B89778] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <form onSubmit={handleSearch} className="hidden md:flex items-center relative">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input w-48 text-sm py-1.5 pr-8"
            />
            <button type="submit" className="absolute right-3 text-[#6B6058]">
              <Search size={16} />
            </button>
          </form>

          {/* Cart */}
          <button
            onClick={openCart}
            className="relative p-2 hover:text-[#B89778] transition-colors"
            aria-label="Open cart"
          >
            <ShoppingBag size={20} />
            {getCartCount() > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#B89778] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                {getCartCount()}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#F8F5F1] border-t border-[#E5DFD6] px-6 py-6">
          <div className="flex flex-col gap-4 text-sm tracking-[0.08em] uppercase">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2"
              >
                {link.label}
              </Link>
            ))}
            <form onSubmit={handleSearch} className="pt-2 flex items-center gap-2">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input flex-1 text-sm"
              />
              <button type="submit" className="btn btn-outline px-4 py-2 text-xs">
                Go
              </button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
