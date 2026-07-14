import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
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
        <div className="container flex items-center justify-between h-20">
          {/* Left: Logo */}
          <Link to="/" className="nav-logo text-[#2c2824]">
            Velmora
          </Link>

          {/* Center: Navigation Links */}
          <div className="nav-links hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'text-[#b89778]' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right: Icons */}
          <div className="flex items-center gap-1">
            {/* Search */}
            <div className="relative">
              {searchOpen ? (
                <form onSubmit={handleSearch} className="flex items-center">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search..."
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
                  className="nav-icon text-[#2c2824]"
                  aria-label="Search"
                >
                  <Search size={18} />
                </button>
              )}
            </div>

            {/* Cart */}
            <button
              onClick={openCart}
              className="nav-icon text-[#2c2824] relative"
              aria-label="Open cart"
            >
              <ShoppingBag size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#b89778] text-[#1a1816] text-[10px] flex items-center justify-center font-medium">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>
      {/* Spacer for fixed nav */}
      <div className="h-20" />
    </>
  );
};

export default Navbar;
