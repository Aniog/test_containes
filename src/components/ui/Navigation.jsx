import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const { getCartCount, openCart, closeCart } = useCart();
  const location = useLocation();
  const cartCount = getCartCount();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu and cart on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    closeCart();
  }, [location, closeCart]);

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

  return (
    <nav className={`nav fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'scrolled' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Left: Logo */}
        <Link to="/" className="logo z-10">
          VELMORA
        </Link>

        {/* Center: Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 nav-links">
          {navLinks.map((link) => (
            <Link 
              key={link.label} 
              to={link.path} 
              className="nav-link"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: Icons */}
        <div className="flex items-center gap-4 z-10">
          {/* Search */}
          <div className="relative">
            {showSearch ? (
              <form onSubmit={handleSearch} className="flex items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="bg-transparent border-b border-velmora-border py-1 px-2 text-sm w-40 focus:outline-none"
                  autoFocus
                  onBlur={() => {
                    if (!searchQuery) setShowSearch(false);
                  }}
                />
                <button type="submit" className="p-2">
                  <Search className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <button 
                onClick={() => setShowSearch(true)}
                className="p-2 hover:text-velmora-gold transition-colors"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Cart */}
          <button 
            onClick={openCart}
            className="p-2 hover:text-velmora-gold transition-colors relative"
            aria-label="Open cart"
          >
            <ShoppingBag className="w-4 h-4" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-velmora-gold text-velmora-bg text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-velmora-bg-light border-t border-velmora-border">
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.label} 
                to={link.path} 
                className="nav-link py-1"
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

export default Navigation;