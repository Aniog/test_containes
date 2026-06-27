import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { cartCount, openCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/shop', label: 'Shop' },
    { to: '/collections', label: 'Collections' },
    { to: '/about', label: 'About' },
    { to: '/journal', label: 'Journal' },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/shop?search=${encodeURIComponent(searchQuery)}`;
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#F8F5F0] border-b border-[#D4C9B8]' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-serif text-2xl tracking-[3px] text-[#1C1B18]">
          VELMORA
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 text-sm tracking-[1.5px]">
          {navLinks.map((link) => (
            <Link 
              key={link.to} 
              to={link.to}
              className="text-[#1C1B18] hover:text-[#BFA46F] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative hidden sm:block">
            {searchOpen ? (
              <form onSubmit={handleSearch} className="flex items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="bg-transparent border-b border-[#D4C9B8] text-sm py-1 pr-8 focus:outline-none w-48 placeholder:text-[#8A8175]"
                  autoFocus
                  onBlur={() => {
                    if (!searchQuery) setSearchOpen(false);
                  }}
                />
                <button type="submit" className="absolute right-0 p-1">
                  <Search className="h-4 w-4 text-[#8A8175]" />
                </button>
              </form>
            ) : (
              <button 
                onClick={() => setSearchOpen(true)}
                className="p-2 text-[#1C1B18] hover:text-[#BFA46F] transition-colors"
                aria-label="Search"
              >
                <Search className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Cart */}
          <button 
            onClick={openCart}
            className="relative p-2 text-[#1C1B18] hover:text-[#BFA46F] transition-colors"
            aria-label="Open cart"
          >
            <ShoppingBag className="h-4 w-4" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 bg-[#BFA46F] text-[#F8F5F0] text-[10px] w-4 h-4 rounded-full flex items-center justify-center tabular-nums">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#1C1B18]"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#F8F5F0] border-t border-[#D4C9B8] px-6 py-6">
          <div className="flex flex-col gap-4 text-sm tracking-[1.5px]">
            {navLinks.map((link) => (
              <Link 
                key={link.to} 
                to={link.to}
                className="text-[#1C1B18] py-1"
              >
                {link.label}
              </Link>
            ))}
            <Link to="/shop" className="text-[#1C1B18] py-1">Search</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
