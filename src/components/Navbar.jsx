import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { getCartCount, openCart } = useCart();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav ${isScrolled ? 'nav-solid' : 'nav-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="logo text-2xl text-[#2C2522]">
          VELMORA
        </Link>

        {/* Center Navigation */}
        <div className="nav-center hidden md:flex items-center gap-10">
          <Link to="/shop" className="nav-link text-[#2C2522]">Shop</Link>
          <Link to="/shop" className="nav-link text-[#2C2522]">Collections</Link>
          <Link to="/about" className="nav-link text-[#2C2522]">About</Link>
          <Link to="/journal" className="nav-link text-[#2C2522]">Journal</Link>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-5">
          <button className="text-[#2C2522] hover:text-[#8B7355] transition-colors">
            <Search size={18} />
          </button>
          <button 
            onClick={openCart}
            className="text-[#2C2522] hover:text-[#8B7355] transition-colors relative"
          >
            <ShoppingBag size={18} />
            {getCartCount() > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#8B7355] text-white text-[10px] flex items-center justify-center rounded-full">
                {getCartCount()}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;