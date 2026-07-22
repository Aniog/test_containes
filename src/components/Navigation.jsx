import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
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
    { label: 'Journal', path: '/journal' }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/shop?search=${encodeURIComponent(searchQuery)}`;
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  const isHome = location.pathname === '/';

  return (
    <nav className={`nav ${isScrolled || !isHome ? 'nav-solid' : 'nav-transparent'}`}>
      <div className="container flex items-center justify-between h-20">
        {/* Left: Logo */}
        <Link to="/" className="nav-logo text-[#1C1917]">
          VELMORA
        </Link>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="nav-link text-[#1C1917]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: Search + Cart */}
        <div className="flex items-center gap-1">
          <div className="relative">
            {searchOpen ? (
              <form onSubmit={handleSearch} className="flex items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search jewelry..."
                  className="input w-48 md:w-64 py-1.5 text-sm"
                  autoFocus
                  onBlur={() => {
                    if (!searchQuery) setSearchOpen(false);
                  }}
                />
              </form>
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                className="nav-icon text-[#1C1917]"
                aria-label="Search"
              >
                <Search size={18} />
              </button>
            )}
          </div>

          <button
            onClick={openCart}
            className="nav-icon text-[#1C1917] relative"
            aria-label="Open cart"
          >
            <ShoppingBag size={18} />
            {getCartCount() > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#B89778] text-white text-[10px] flex items-center justify-center">
                {getCartCount()}
              </span>
            )}
          </button>

          {/* Mobile Menu */}
          <div className="md:hidden ml-2">
            <Link to="/shop" className="nav-link text-xs text-[#1C1917]">Shop</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
