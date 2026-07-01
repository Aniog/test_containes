import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const { cartCount, openCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setShowSearch(false);
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'Shop', to: '/shop' },
    { label: 'Collections', to: '/shop' },
    { label: 'About', to: '/about' },
    { label: 'Journal', to: '/journal' },
  ];

  return (
    <nav
      className={`nav fixed top-0 left-0 right-0 z-50 ${
        isScrolled ? 'solid' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Left: Logo */}
        <Link to="/" className="font-serif text-2xl tracking-[0.15em] text-velmora-charcoal">
          VELMORA
        </Link>

        {/* Center: Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 text-sm tracking-[0.05em]">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="text-velmora-charcoal hover:text-velmora-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: Icons */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative hidden md:block">
            {showSearch ? (
              <form onSubmit={handleSearch} className="flex items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search jewelry..."
                  className="bg-transparent border-b border-velmora-border pb-1 text-sm w-48 focus:outline-none placeholder:text-velmora-muted"
                  autoFocus
                  onBlur={() => {
                    if (!searchQuery) setShowSearch(false);
                  }}
                />
                <button type="submit" className="ml-2">
                  <Search className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <button
                onClick={() => setShowSearch(true)}
                className="text-velmora-charcoal hover:text-velmora-gold transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Cart */}
          <button
            onClick={openCart}
            className="relative text-velmora-charcoal hover:text-velmora-gold transition-colors"
            aria-label="Open cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-velmora-gold text-velmora-charcoal text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-velmora-charcoal"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-velmora-bg border-t border-velmora-border px-6 py-6">
          <div className="flex flex-col gap-4 text-sm tracking-[0.05em]">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-velmora-charcoal py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <form onSubmit={handleSearch} className="flex items-center gap-2 pt-2 border-t border-velmora-border mt-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="flex-1 bg-transparent text-sm focus:outline-none"
              />
              <button type="submit">
                <Search className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;