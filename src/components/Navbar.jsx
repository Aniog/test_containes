import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isSolid, setIsSolid] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { getCartCount, openCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsSolid(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setShowSearch(false);
      setSearchQuery('');
    }
  };

  const navLinks = [
    { label: 'Shop', to: '/shop' },
    { label: 'Collections', to: '/shop' },
    { label: 'About', to: '/about' },
    { label: 'Journal', to: '/journal' },
  ];

  return (
    <>
      <nav className={`nav ${isSolid ? 'solid' : 'transparent'}`}>
        <div className="container flex items-center justify-between h-20">
          {/* Left: Logo */}
          <Link to="/" className="nav-logo text-[#2C2825]">
            VELMORA
          </Link>

          {/* Center: Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.label} to={link.to} className="nav-link">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right: Icons */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="p-2 text-[#2C2825] hover:text-[#B8976E] transition-colors"
              aria-label="Search"
            >
              <Search size={18} />
            </button>
            <button
              onClick={openCart}
              className="p-2 text-[#2C2825] hover:text-[#B8976E] transition-colors relative"
              aria-label="Open cart"
            >
              <ShoppingBag size={18} />
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#B8976E] text-white text-[10px] flex items-center justify-center rounded-full">
                  {getCartCount()}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {showSearch && (
          <div className="border-t border-[#E5DFD6] bg-[#F8F5F1]">
            <div className="container py-4">
              <form onSubmit={handleSearch} className="flex items-center gap-3">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search our collection..."
                  className="search-input flex-1 max-w-md"
                  autoFocus
                />
                <button type="submit" className="btn btn-sm btn-outline">
                  Search
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowSearch(false);
                    setSearchQuery('');
                  }}
                  className="text-sm text-[#6B6560] hover:text-[#2C2825]"
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        )}
      </nav>
      <div className="h-20" /> {/* Spacer for fixed nav */}
    </>
  );
};

export default Navbar;
