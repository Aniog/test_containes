import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

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

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/shop?search=${encodeURIComponent(searchQuery)}`;
      setSearchQuery('');
      setShowSearch(false);
    }
  };

  const isHome = location.pathname === '/';

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled || !isHome 
          ? 'bg-[#F8F6F2] border-b border-[#EDE9E3]' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Left: Logo */}
        <Link to="/" className="font-serif text-2xl tracking-[3px] text-[#0A0806]">
          VELMORA
        </Link>

        {/* Center: Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 text-sm tracking-[1.5px]">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className="text-[#4A4640] hover:text-[#0A0806] transition-colors"
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
                  className="w-48 bg-transparent border-b border-[#C5A46E] py-1 text-sm focus:outline-none placeholder:text-[#9A9590]"
                  autoFocus
                  onBlur={() => {
                    if (!searchQuery) setShowSearch(false);
                  }}
                />
              </form>
            ) : (
              <button 
                onClick={() => setShowSearch(true)}
                className="text-[#4A4640] hover:text-[#0A0806] transition-colors"
                aria-label="Search"
              >
                <Search className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Cart */}
          <button 
            onClick={openCart}
            className="relative text-[#4A4640] hover:text-[#0A0806] transition-colors"
            aria-label="Open cart"
          >
            <ShoppingBag className="h-4 w-4" />
            {getCartCount() > 0 && (
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-[#C5A46E] text-[#0A0806] text-[10px] flex items-center justify-center">
                {getCartCount()}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#4A4640] hover:text-[#0A0806]"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#F8F6F2] border-t border-[#EDE9E3] px-6 py-6">
          <div className="flex flex-col gap-4 text-sm tracking-[1.5px]">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className="text-[#4A4640] hover:text-[#0A0806] py-1"
                onClick={() => setIsMobileMenuOpen(false)}
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
                className="w-full bg-transparent border border-[#EDE9E3] px-4 py-2 text-sm focus:border-[#C5A46E] focus:outline-none"
              />
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
