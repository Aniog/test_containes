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
    <nav className={`nav ${isScrolled ? 'nav-solid' : 'nav-transparent'}`}>
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="serif text-2xl tracking-[0.15em] font-medium">
          VELMORA
        </Link>

        {/* Center Navigation */}
        <div className="nav-center hidden md:flex items-center gap-10 text-sm tracking-[0.08em] uppercase">
          <Link to="/shop" className="nav-link">Shop</Link>
          <Link to="/shop" className="nav-link">Collections</Link>
          <Link to="/" className="nav-link">About</Link>
          <Link to="/" className="nav-link">Journal</Link>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-5">
          <button className="p-2 text-[var(--color-base)] hover:text-[var(--color-gold)] transition-colors">
            <Search className="w-4 h-4" />
          </button>
          <button 
            onClick={() => setIsCartOpen(true)}
            className="p-2 relative text-[var(--color-base)] hover:text-[var(--color-gold)] transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 text-[10px] flex items-center justify-center bg-[var(--color-gold)] text-[var(--color-base)] rounded-full">
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