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
        <Link to="/" className="serif text-2xl tracking-[0.2em] text-[var(--color-text)]">
          VELMORA
        </Link>

        <div className="hidden md:flex items-center gap-10 text-sm tracking-[0.1em] uppercase">
          <Link to="/shop" className="hover:text-[var(--color-gold)] transition-colors">Shop</Link>
          <Link to="/shop?category=Collections" className="hover:text-[var(--color-gold)] transition-colors">Collections</Link>
          <Link to="/about" className="hover:text-[var(--color-gold)] transition-colors">About</Link>
          <Link to="/journal" className="hover:text-[var(--color-gold)] transition-colors">Journal</Link>
        </div>

        <div className="flex items-center gap-5">
          <button onClick={onSearchOpen} className="p-2 hover:text-[var(--color-gold)] transition-colors" aria-label="Search">
            <Search size={18} />
          </button>
          <button onClick={onCartOpen} className="p-2 hover:text-[var(--color-gold)] transition-colors relative" aria-label="Cart">
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