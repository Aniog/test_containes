import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { getCartCount, openCart } = useCart();
  const location = useLocation();
  const cartCount = getCartCount();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  return (
    <nav className={`nav ${isScrolled || !isHome ? 'nav-solid' : 'nav-transparent'}`}>
      <div className="nav-content">
        {/* Logo */}
        <Link to="/" className="nav-logo">
          VELMORA
        </Link>

        {/* Center Navigation Links */}
        <div className="nav-links">
          <Link to="/shop">Shop</Link>
          <Link to="/shop">Collections</Link>
          <Link to="/about">About</Link>
          <Link to="/journal">Journal</Link>
        </div>

        {/* Right Actions */}
        <div className="nav-actions">
          <button className="nav-icon" aria-label="Search">
            <Search className="w-4 h-4" />
          </button>
          <button 
            className="nav-icon relative" 
            onClick={openCart}
            aria-label="Open cart"
          >
            <ShoppingBag className="w-4 h-4" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gold text-surface text-[10px] flex items-center justify-center">
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
