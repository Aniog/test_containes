import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const { cartCount, openCart } = useCart();
  const location = useLocation();

  // Handle scroll for transparent/solid nav
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

  return (
    <>
      <nav className={`nav ${isScrolled ? 'solid' : 'transparent'}`}>
        <div className="container flex items-center justify-between h-20">
          {/* Left: Logo */}
          <Link to="/" className="logo text-velmora-text">
            VELMORA
          </Link>

          {/* Center: Desktop Navigation */}
          <div className="nav-links hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className="nav-link text-velmora-text hover:text-velmora-gold-dark"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right: Icons */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative">
              {showSearch ? (
                <form onSubmit={handleSearch} className="flex items-center">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search..."
                    className="input w-48 md:w-64 text-sm py-1.5"
                    autoFocus
                    onBlur={() => {
                      if (!searchQuery) setShowSearch(false);
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setShowSearch(false);
                      setSearchQuery('');
                    }}
                    className="ml-2 text-velmora-text-muted hover:text-velmora-text"
                  >
                    <X size={18} />
                  </button>
                </form>
              ) : (
                <button
                  onClick={() => setShowSearch(true)}
                  className="text-velmora-text hover:text-velmora-gold-dark transition-colors"
                  aria-label="Search"
                >
                  <Search size={18} />
                </button>
              )}
            </div>

            {/* Cart */}
            <button
              onClick={openCart}
              className="relative text-velmora-text hover:text-velmora-gold-dark transition-colors"
              aria-label="Open cart"
            >
              <ShoppingBag size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-velmora-gold text-white text-[10px] flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-velmora-text"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-velmora-border bg-velmora-white">
            <div className="container py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="nav-link py-2 text-velmora-text"
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/about" className="nav-link py-2 text-velmora-text">
                About
              </Link>
            </div>
          </div>
        )}
      </nav>
      {/* Spacer for fixed nav */}
      <div className="h-20" />
    </>
  );
};

export default Navbar;
