import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag } from 'lucide-react';

const Navbar = ({ cartCount, onCartClick }) => {
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
        <Link to="/" className="serif text-2xl tracking-[0.2em] text-[#2C2825]">
          VELMORA
        </Link>

        {/* Center Navigation */}
        <div className="nav-links hidden md:flex items-center gap-10 text-sm tracking-[0.1em] uppercase">
          <Link to="/shop" className="hover:text-[#B8976E] transition-colors">Shop</Link>
          <Link to="/collections" className="hover:text-[#B8976E] transition-colors">Collections</Link>
          <a href="#about" className="hover:text-[#B8976E] transition-colors">About</a>
          <a href="#journal" className="hover:text-[#B8976E] transition-colors">Journal</a>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setShowSearch(!showSearch)}
            className="p-2 hover:text-[#B8976E] transition-colors"
            aria-label="Search"
          >
            <Search size={18} />
          </button>
          <button 
            onClick={onCartClick}
            className="p-2 hover:text-[#B8976E] transition-colors relative"
            aria-label="Cart"
          >
            <ShoppingBag size={18} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#B8976E] text-white text-[10px] flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Search Bar */}
      {showSearch && (
        <div className="border-t border-[#E5DFD4] bg-white">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <input 
              type="text" 
              placeholder="Search our collection..." 
              className="w-full py-3 px-4 bg-[#F8F5F1] border border-[#E5DFD4] focus:outline-none focus:border-[#B8976E] text-sm"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
