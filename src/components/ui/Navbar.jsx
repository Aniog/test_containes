import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const { getCartCount, openCart } = useCart();
  const location = useLocation();

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

  const cartCount = getCartCount();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/shop?search=${encodeURIComponent(searchQuery)}`;
      setSearchQuery('');
      setShowSearch(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#F8F5F1] border-b border-[#E8E4DE]' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Left: Logo */}
        <Link to="/" className="font-serif-custom text-2xl tracking-[0.15em] text-[#1A1816]">
          VELMORA
        </Link>

        {/* Center: Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 text-sm tracking-[0.05em]">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className={`transition-colors hover:text-[#C5A46E] ${
                location.pathname === link.path ? 'text-[#C5A46E]' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: Icons */}
        <div className="flex items-center gap-5">
          {/* Search */}
          <div className="relative">
            {showSearch ? (
              <form onSubmit={handleSearch} className="flex items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="bg-transparent border-b border-[#1A1816] py-1 pr-8 text-sm focus:outline-none w-40"
                  autoFocus
                  onBlur={() => {
                    if (!searchQuery) setShowSearch(false);
                  }}
                />
                <button type="submit" className="absolute right-0">
                  <Search size={16} />
                </button>
              </form>
            ) : (
              <button 
                onClick={() => setShowSearch(true)}
                className="hover:text-[#C5A46E] transition-colors"
                aria-label="Search"
              >
                <Search size={18} />
              </button>
            )}
          </div>

          {/* Cart */}
          <button 
            onClick={openCart}
            className="relative hover:text-[#C5A46E] transition-colors"
            aria-label="Open cart"
          >
            <ShoppingBag size={18} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#C5A46E] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden hover:text-[#C5A46E] transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#F8F5F1] border-t border-[#E8E4DE] px-6 py-6">
          <div className="flex flex-col gap-4 text-sm tracking-[0.05em]">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-1"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
