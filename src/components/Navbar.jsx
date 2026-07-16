import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingBag } from 'lucide-react';

const Navbar = ({ cartCount, onCartOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav fixed top-0 left-0 right-0 z-50 ${scrolled ? 'scrolled bg-white' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="font-serif text-2xl tracking-[0.2em] text-text">VELMORA</Link>
        
        <div className="hidden md:flex items-center gap-10 text-sm tracking-wider">
          <Link to="/shop" className="hover:text-accent transition-colors">Shop</Link>
          <Link to="/shop?category=earrings" className="hover:text-accent transition-colors">Collections</Link>
          <Link to="/about" className="hover:text-accent transition-colors">About</Link>
          <Link to="/journal" className="hover:text-accent transition-colors">Journal</Link>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:text-accent transition-colors">
            <Search size={18} />
          </button>
          <button 
            onClick={onCartOpen}
            className="p-2 hover:text-accent transition-colors relative"
          >
            <ShoppingBag size={18} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-white text-xs rounded-full flex items-center justify-center">
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
