import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, X, Menu } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { getCartCount, toggleCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

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
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  // Determine if we're on the homepage for transparent nav styling
  const isHome = location.pathname === '/';
  const navClass = isHome && !isScrolled ? 'transparent-home' : isScrolled ? 'solid' : 'solid';

  return (
    <div className="relative">
      <nav className={`nav ${navClass}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Left: Logo */}
          <Link 
            to="/" 
            className={`logo text-2xl tracking-[0.08em] ${isHome && !isScrolled ? 'text-white' : 'text-vel-text'}`}
          >
            VELMORA
          </Link>

          {/* Center: Navigation Links */}
          <div className={`hidden md:flex items-center gap-10 text-sm tracking-[0.04em] uppercase ${isHome && !isScrolled ? 'text-white/90' : 'text-vel-text'}`}>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className={`hover:text-vel-gold-dark transition-colors ${
                  location.pathname === link.path ? (isHome && !isScrolled ? 'text-white' : 'text-vel-gold-dark') : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right: Icons */}
          <div className={`flex items-center gap-4 ${isHome && !isScrolled ? 'text-white/90' : 'text-vel-text'}`}>
            {/* Search */}
            <div className="relative flex items-center">
              {isSearchOpen ? (
                <form onSubmit={handleSearch} className="flex items-center">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search jewelry..."
                    className="search-input pr-8"
                    autoFocus
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSearchQuery('');
                    }}
                    className="absolute right-0 p-1"
                  >
                    <X size={16} />
                  </button>
                </form>
              ) : (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 hover:text-vel-gold-dark transition-colors"
                  aria-label="Search"
                >
                  <Search size={18} />
                </button>
              )}
            </div>

            {/* Cart */}
            <button
              onClick={toggleCart}
              className="p-2 hover:text-vel-gold-dark transition-colors relative"
              aria-label="Open cart"
            >
              <ShoppingBag size={18} />
              {getCartCount() > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 text-[10px] bg-vel-gold text-white rounded-full flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 -mr-2"
              aria-label="Toggle menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-20 left-0 right-0 bg-white border-b border-vel-border shadow-lg z-[110]">
          <div className="px-6 py-6 flex flex-col gap-4 text-sm tracking-[0.04em] uppercase">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className="py-1 hover:text-vel-gold-dark transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link to="/shop" className="py-1 hover:text-vel-gold-dark transition-colors">
              Shop All
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
