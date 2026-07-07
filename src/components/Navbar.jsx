import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav ${isScrolled ? 'solid' : 'transparent'}`}>
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="serif text-2xl tracking-[0.2em] text-[#2c2522]">
          VELMORA
        </Link>

        {/* Center Navigation */}
        <div className="nav-links hidden md:flex items-center gap-10 text-sm tracking-[0.08em] uppercase">
          <Link to="/shop" className="hover:text-[#8b7355] transition-colors">Shop</Link>
          <Link to="/shop" className="hover:text-[#8b7355] transition-colors">Collections</Link>
          <a href="#about" className="hover:text-[#8b7355] transition-colors">About</a>
          <a href="#journal" className="hover:text-[#8b7355] transition-colors">Journal</a>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-5">
          <button className="p-2 hover:text-[#8b7355] transition-colors" aria-label="Search">
            <Search size={18} />
          </button>
          <button 
            onClick={() => setIsCartOpen(true)}
            className="p-2 hover:text-[#8b7355] transition-colors relative"
            aria-label="Cart"
          >
            <ShoppingBag size={18} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#8b7355] text-white text-[10px] flex items-center justify-center">
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
