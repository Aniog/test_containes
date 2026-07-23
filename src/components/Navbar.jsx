import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingBag } from 'lucide-react';

const Navbar = ({ cartCount, onCartOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white border-b border-[#E5E0D8]' : 'bg-transparent'}`}>
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="font-serif text-2xl tracking-[0.2em] text-[#1C1C1C]">VELMORA</Link>
        
        <div className="nav-links hidden md:flex items-center gap-10 text-sm tracking-[0.08em]">
          <Link to="/shop" className="hover:text-[#C5A26F] transition-colors">Shop</Link>
          <Link to="/shop?category=Collections" className="hover:text-[#C5A26F] transition-colors">Collections</Link>
          <Link to="/about" className="hover:text-[#C5A26F] transition-colors">About</Link>
          <Link to="/journal" className="hover:text-[#C5A26F] transition-colors">Journal</Link>
        </div>

        <div className="flex items-center gap-5">
          <button onClick={() => setSearchOpen(!searchOpen)} className="p-2 hover:text-[#C5A26F] transition-colors">
            <Search size={18} />
          </button>
          <button onClick={onCartOpen} className="p-2 hover:text-[#C5A26F] transition-colors relative">
            <ShoppingBag size={18} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#C5A26F] text-[#1C1C1C] text-[10px] rounded-full flex items-center justify-center font-medium">
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