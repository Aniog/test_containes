import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { getCartCount, openCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Shop', to: '/shop' },
    { label: 'Collections', to: '/shop' },
    { label: 'About', to: '/about' },
    { label: 'Journal', to: '/journal' },
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHome
          ? 'bg-[#F8F5F1] border-b border-[#E5DFD6]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Left: Logo */}
        <Link to="/" className="font-serif text-2xl tracking-[0.15em] text-[#2C2823]">
          VELMORA
        </Link>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex items-center gap-10 text-sm tracking-[0.05em]">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="text-[#2C2823] hover:text-[#B8976A] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: Icons */}
        <div className="flex items-center gap-5">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="text-[#2C2823] hover:text-[#B8976A] transition-colors p-1"
            aria-label="Search"
          >
            <Search size={18} />
          </button>
          <button
            onClick={openCart}
            className="text-[#2C2823] hover:text-[#B8976A] transition-colors p-1 relative"
            aria-label="Open cart"
          >
            <ShoppingBag size={18} />
            {getCartCount() > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#B8976A] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {getCartCount()}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Search Bar */}
      {searchOpen && (
        <div className="border-t border-[#E5DFD6] bg-[#F8F5F1]">
          <form onSubmit={handleSearch} className="max-w-7xl mx-auto px-6 py-4">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search our collection..."
              className="w-full bg-transparent border-b border-[#E5DFD6] py-2 text-sm tracking-wide focus:outline-none placeholder:text-[#6B6359]"
              autoFocus
            />
          </form>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
