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
        {/* Logo */}
        <Link to="/" className="logo text-2xl text-[var(--color-text)]">
          VELMORA
        </Link>

        {/* Center Navigation */}
        <div className="nav-links hidden md:flex items-center gap-10 text-sm tracking-[0.1em] uppercase">
          <Link to="/shop" className="hover:text-[var(--color-accent)] transition-colors">Shop</Link>
          <Link to="/shop?category=Collections" className="hover:text-[var(--color-accent)] transition-colors">Collections</Link>
          <Link to="/about" className="hover:text-[var(--color-accent)] transition-colors">About</Link>
          <Link to="/journal" className="hover:text-[var(--color-accent)] transition-colors">Journal</Link>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-5">
          <button 
            onClick={onSearchOpen}
            className="p-2 hover:text-[var(--color-accent)] transition-colors"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
          <button 
            onClick={onCartOpen}
            className="p-2 hover:text-[var(--color-accent)] transition-colors relative"
            aria-label="Cart"
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[var(--color-accent)] text-[var(--color-surface)] text-xs flex items-center justify-center">
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