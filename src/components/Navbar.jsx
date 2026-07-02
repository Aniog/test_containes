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
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="serif text-2xl tracking-[0.2em] text-[var(--color-base)]">
          VELMORA
        </Link>

        <div className="hidden md:flex items-center gap-10 text-sm tracking-[0.08em] uppercase">
          <Link to="/shop">Shop</Link>
          <Link to="/shop">Collections</Link>
          <Link to="/about">About</Link>
          <Link to="/journal">Journal</Link>
        </div>

        <div className="flex items-center gap-5">
          <button className="p-2 hover:text-[var(--color-gold)] transition-colors">
            <Search size={18} />
          </button>
          <button 
            onClick={() => setIsCartOpen(true)}
            className="p-2 hover:text-[var(--color-gold)] transition-colors relative"
          >
            <ShoppingBag size={18} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[var(--color-gold)] text-white text-[10px] flex items-center justify-center">
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