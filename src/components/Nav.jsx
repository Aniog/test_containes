import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartCount, openCart } = useCart();
  const location = useLocation();

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
        <Link to="/" className="nav-logo">
          VELMORA
        </Link>

        <div className="nav-links">
          <Link to="/shop">Shop</Link>
          <Link to="/shop?category=earrings">Collections</Link>
          <Link to="/about">About</Link>
          <Link to="/journal">Journal</Link>
        </div>

        <div className="nav-actions">
          <button className="nav-icon" aria-label="Search">
            <Search size={18} />
          </button>
          <button 
            className="nav-icon relative" 
            aria-label="Cart"
            onClick={openCart}
          >
            <ShoppingBag size={18} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-accent text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center" style={{backgroundColor: 'var(--color-accent)'}}>
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
