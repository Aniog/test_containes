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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#F8F5F1] border-b border-[#E5DFD3]' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-serif text-2xl tracking-[0.2em] text-[#2C2825]">
          VELMORA
        </Link>

        {/* Center Navigation */}
        <div className="hidden md:flex items-center gap-10 text-sm tracking-[0.1em]">
          <Link to="/shop" className="hover:text-[#B89778] transition-colors">SHOP</Link>
          <a href="#collections" className="hover:text-[#B89778] transition-colors">COLLECTIONS</a>
          <a href="#about" className="hover:text-[#B89778] transition-colors">ABOUT</a>
          <a href="#journal" className="hover:text-[#B89778] transition-colors">JOURNAL</a>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setShowSearch(!showSearch)}
            className="p-2 hover:text-[#B89778] transition-colors"
            aria-label="Search"
          >
            <Search size={18} />
          </button>
          <button 
            onClick={onCartClick}
            className="p-2 hover:text-[#B89778] transition-colors relative"
            aria-label="Cart"
          >
            <ShoppingBag size={18} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#B89778] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Search Bar */}
      {showSearch && (
        <div className="border-t border-[#E5DFD3] bg-[#F8F5F1]">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <input 
              type="text" 
              placeholder="Search our collection..." 
              className="w-full bg-transparent border-b border-[#E5DFD3] py-3 text-sm tracking-wide focus:outline-none placeholder:text-[#6B665F]"
              autoFocus
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;