import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag } from 'lucide-react';

const Navbar = ({ cartCount, onCartClick, searchQuery, setSearchQuery }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav ${isScrolled ? 'solid' : 'transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="serif text-2xl tracking-[0.2em] font-semibold">
          VELMORA
        </Link>

        {/* Center Navigation */}
        <div className="nav-links hidden md:flex items-center gap-10 text-sm tracking-[0.1em] uppercase">
          <Link to="/shop" className="hover:text-[#8B7355] transition-colors">Shop</Link>
          <Link to="/collections" className="hover:text-[#8B7355] transition-colors">Collections</Link>
          <a href="#about" className="hover:text-[#8B7355] transition-colors">About</a>
          <a href="#journal" className="hover:text-[#8B7355] transition-colors">Journal</a>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-5">
          <button 
            onClick={() => setShowSearch(!showSearch)}
            className="p-2 hover:text-[#8B7355] transition-colors"
            aria-label="Search"
          >
            <Search size={18} />
          </button>
          <button 
            onClick={onCartClick}
            className="p-2 hover:text-[#8B7355] transition-colors relative"
            aria-label="Cart"
          >
            <ShoppingBag size={18} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#8B7355] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Search Bar */}
      {showSearch && (
        <div className="border-t border-[#E5E0D8] bg-white">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <input
              type="text"
              placeholder="Search our collection..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-lg outline-none placeholder:text-[#8A847D]"
              autoFocus
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;