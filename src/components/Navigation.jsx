import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag } from 'lucide-react';

const Navigation = ({ cartCount, onCartClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-[#EDE9E3]' : 'bg-transparent'}`}>
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-serif text-2xl tracking-[3px] text-[#2C2522]">
          VELMORA
        </Link>

        {/* Center Navigation */}
        <div className="hidden md:flex items-center gap-10 text-sm tracking-[1px]">
          <Link to="/shop" className="hover:text-[#C5A26F] transition-colors">Shop</Link>
          <Link to="/shop?category=collections" className="hover:text-[#C5A26F] transition-colors">Collections</Link>
          <Link to="/about" className="hover:text-[#C5A26F] transition-colors">About</Link>
          <Link to="/journal" className="hover:text-[#C5A26F] transition-colors">Journal</Link>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-[#F5F2ED] rounded-full transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button 
            onClick={onCartClick}
            className="p-2 hover:bg-[#F5F2ED] rounded-full transition-colors relative"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-[#C5A26F] text-white text-[10px] rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
