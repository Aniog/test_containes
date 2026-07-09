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

  return (
    <nav className={`navbar ${isScrolled ? 'solid' : 'transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Left: Logo */}
        <Link to="/" className="serif text-2xl tracking-[0.15em] text-[#1C1917]">
          VELMORA
        </Link>

        {/* Center: Navigation Links (Desktop) */}
        <div className="nav-center hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className="nav-link text-sm text-[#2C2824] hover:text-[#B8976A]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: Icons */}
        <div className="flex items-center gap-5">
          {/* Search */}
          <div className="relative hidden sm:block">
            {showSearch ? (
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="input w-48 py-1.5 text-sm"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && searchQuery.trim()) {
                      window.location.href = `/shop?search=${encodeURIComponent(searchQuery)}`;
                      setShowSearch(false);
                      setSearchQuery('');
                    }
                    if (e.key === 'Escape') {
                      setShowSearch(false);
                      setSearchQuery('');
                    }
                  }}
                  autoFocus
                />
                <button
                  onClick={() => {
                    setShowSearch(false);
                    setSearchQuery('');
                  }}
                  className="ml-2 text-[#6B645E]"
                >
                  <X size={18} />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowSearch(true)}
                className="text-[#2C2824] hover:text-[#B8976A] transition-colors"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
            )}
          </div>

          {/* Cart */}
          <button
            onClick={openCart}
            className="relative text-[#2C2824] hover:text-[#B8976A] transition-colors"
            aria-label="Open cart"
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#B8976A] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#2C2824]"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-[#E5DFD6] bg-[#F8F5F0] px-6 py-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className="text-sm py-1 text-[#2C2824]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/shop"
              className="text-sm py-1 text-[#2C2824]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Search
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;