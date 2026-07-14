import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag } from 'lucide-react';

const Navbar = ({ cartCount, onCartOpen, onSearchOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  return (
    <nav className={`nav ${isScrolled || !isHome ? 'solid' : 'transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="serif text-2xl tracking-[0.2em] text-[#1C1C1C]">
          VELMORA
        </Link>

        <div className="nav-links flex items-center gap-10 text-sm tracking-[0.08em] uppercase">
          <Link to="/shop">Shop</Link>
          <Link to="/shop?category=Collections">Collections</Link>
          <Link to="/about">About</Link>
          <Link to="/journal">Journal</Link>
        </div>

        <div className="flex items-center gap-5">
          <button onClick={onSearchOpen} className="p-2 hover:text-[#C5A26F] transition-colors" aria-label="Search">
            <Search size={18} />
          </button>
          <button onClick={onCartOpen} className="p-2 relative hover:text-[#C5A26F] transition-colors" aria-label="Cart">
            <ShoppingBag size={18} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#C5A26F] text-[#1C1C1C] text-[10px] flex items-center justify-center">
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