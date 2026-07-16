import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav fixed top-0 left-0 right-0 z-50 ${scrolled ? 'scrolled bg-white' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="serif text-2xl tracking-[0.2em] text-[#1C1C1C]">
          VELMORA
        </Link>

        {/* Center Navigation */}
        <div className="hidden md:flex items-center gap-10 text-sm tracking-[0.1em] uppercase">
          <Link to="/shop" className="hover:text-[#C5A46E] transition-colors">Shop</Link>
          <Link to="/shop" className="hover:text-[#C5A46E] transition-colors">Collections</Link>
          <Link to="/" className="hover:text-[#C5A46E] transition-colors">About</Link>
          <Link to="/" className="hover:text-[#C5A46E] transition-colors">Journal</Link>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <button className="btn-ghost p-2" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button 
            className="btn-ghost p-2 relative" 
            aria-label="Cart"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#C5A46E] text-white text-xs flex items-center justify-center">
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