import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

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
    { label: 'Journal', path: '/journal' },
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
    <>
      <nav className={`nav ${isScrolled ? 'nav-solid' : 'nav-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Left: Logo */}
          <Link to="/" className="logo text-[#2C2522]">
            VELMORA
          </Link>

          {/* Center: Navigation Links */}
          <div className="nav-links hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className="nav-link text-[#2C2522] hover:text-[#8C6F52]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right: Search + Cart */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-[#2C2522] hover:text-[#8C6F52] transition-colors"
              aria-label="Search"
            >
              <Search size={18} />
            </button>
            <button
              onClick={openCart}
              className="p-2 text-[#2C2522] hover:text-[#8C6F52] transition-colors relative"
              aria-label="Open cart"
            >
              <ShoppingBag size={18} />
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#8C6F52] text-white text-[10px] flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="border-t border-[#D4C9B8] bg-white">
            <div className="max-w-7xl mx-auto px-6 py-4">
              <form onSubmit={handleSearch} className="flex gap-3">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search our collection..."
                  className="input flex-1"
                  autoFocus
                />
                <button type="submit" className="btn btn-primary">
                  Search
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSearchOpen(false);
                    setSearchQuery('');
                  }}
                  className="btn btn-outline"
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        )}
      </nav>
      <div className="h-20" />
    </>
  );
};

export default Navigation;
