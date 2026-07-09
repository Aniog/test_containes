import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag } from 'lucide-react';

const Navbar = ({ cartCount, onCartClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav ${isScrolled ? 'nav-solid' : 'nav-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="serif text-2xl tracking-[0.2em] text-[#2C2825]">
          VELMORA
        </Link>

        {/* Center Navigation */}
        <div className="nav-center hidden md:flex items-center gap-10">
          <Link to="/shop" className="nav-link">Shop</Link>
          <Link to="/collections" className="nav-link">Collections</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/journal" className="nav-link">Journal</Link>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-5">
          <button className="text-[#2C2825] hover:text-[#B8976F] transition-colors">
            <Search size={18} />
          </button>
          <button 
            onClick={onCartClick}
            className="relative text-[#2C2825] hover:text-[#B8976F] transition-colors"
          >
            <ShoppingBag size={18} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#B8976F] text-white text-[10px] flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;