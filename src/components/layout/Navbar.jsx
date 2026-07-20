import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav ${isScrolled ? 'nav-solid' : 'nav-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Left: Logo */}
        <Link to="/" className="logo">
          VELMORA
        </Link>

        {/* Center: Navigation Links */}
        <div className="nav-center hidden md:flex items-center gap-10">
          <Link to="/shop" className="nav-link">Shop</Link>
          <Link to="/shop" className="nav-link">Collections</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/journal" className="nav-link">Journal</Link>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center gap-5">
          <button className="text-base hover:text-gold transition-colors" aria-label="Search">
            <Search size={20} />
          </button>
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative text-base hover:text-gold transition-colors"
            aria-label="Cart"
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gold text-base text-xs flex items-center justify-center">
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