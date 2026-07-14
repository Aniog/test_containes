import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag } from 'lucide-react';

const Navbar = ({ cartCount, onCartOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = isScrolled || location.pathname !== '/' 
    ? 'nav-solid' 
    : 'nav-transparent';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all ${navClass}`}>
      <div className="max-w-[1280px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="serif text-2xl tracking-[0.2em] text-charcoal">
          VELMORA
        </Link>

        {/* Center Navigation */}
        <div className="nav-links hidden md:flex items-center gap-10 text-sm tracking-[0.05em]">
          <Link to="/shop" className="nav-link text-charcoal">Shop</Link>
          <Link to="/shop?category=Collections" className="nav-link text-charcoal">Collections</Link>
          <Link to="/about" className="nav-link text-charcoal">About</Link>
          <Link to="/journal" className="nav-link text-charcoal">Journal</Link>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-5">
          <button className="text-charcoal hover:text-gold transition-colors">
            <Search className="w-4 h-4" />
          </button>
          <button 
            onClick={onCartOpen}
            className="text-charcoal hover:text-gold transition-colors relative"
          >
            <ShoppingBag className="w-4 h-4" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold text-charcoal text-[10px] flex items-center justify-center rounded-full">
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