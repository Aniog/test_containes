import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag } from 'lucide-react';

const Navbar = ({ cartCount, onCartClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Shop', path: '/shop' },
    { label: 'Collections', path: '/shop' },
    { label: 'About', path: '/' },
    { label: 'Journal', path: '/' },
  ];

  return (
    <nav className={`nav ${isScrolled ? 'solid' : 'transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="serif text-2xl tracking-[0.2em] text-[#2C2825]">
          VELMORA
        </Link>

        {/* Center Navigation */}
        <div className="nav-links hidden md:flex items-center gap-10 text-sm tracking-[0.1em] uppercase">
          {navLinks.map((link) => (
            <Link 
              key={link.label} 
              to={link.path}
              className="hover:text-[#B8976F] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-5">
          <button 
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-2 hover:text-[#B8976F] transition-colors"
            aria-label="Search"
          >
            <Search size={18} />
          </button>
          
          <button 
            onClick={onCartClick}
            className="p-2 hover:text-[#B8976F] transition-colors relative"
            aria-label="Cart"
          >
            <ShoppingBag size={18} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#B8976F] text-[#1C1917] text-[10px] flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Search Bar */}
      {searchOpen && (
        <div className="border-t border-[#E5DFD3] bg-white px-6 py-4">
          <div className="max-w-7xl mx-auto">
            <input 
              type="text" 
              placeholder="Search our collection..." 
              className="w-full py-3 px-4 bg-[#F8F5F1] border border-[#E5DFD3] focus:outline-none focus:border-[#B8976F] text-sm"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
