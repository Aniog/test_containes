import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu } from 'lucide-react';
import { useCart } from './CartContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { cartCount, setIsCartOpen } = useCart();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerBgClass = isHome && !isScrolled ? 'bg-transparent text-white' : 'bg-background text-foreground border-b border-border';
  const logoColorClass = isHome && !isScrolled ? 'text-white' : 'text-foreground';
  const iconColorClass = isHome && !isScrolled ? 'text-white hover:text-white/80' : 'text-foreground hover:text-foreground/80';

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${headerBgClass}`}>
      <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        
        {/* Left / Mobile menu placeholder */}
        <div className="flex-1 flex items-center">
          <button className={`md:hidden p-2 -ml-2 ${iconColorClass}`}>
            <Menu className="w-5 h-5" />
          </button>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/shop" className="text-sm uppercase tracking-widest hover:opacity-70 transition-opacity">Shop</Link>
            <Link to="/shop?category=Collections" className="text-sm uppercase tracking-widest hover:opacity-70 transition-opacity">Collections</Link>
            <Link to="/#about" className="text-sm uppercase tracking-widest hover:opacity-70 transition-opacity">About</Link>
            <Link to="/#journal" className="text-sm uppercase tracking-widest hover:opacity-70 transition-opacity">Journal</Link>
          </nav>
        </div>

        {/* Center Logo */}
        <div className="flex-shrink-0 flex items-center justify-center">
          <Link to="/" className={`font-serif text-2xl md:text-3xl tracking-[0.3em] font-medium uppercase ${logoColorClass}`}>
            VELMORA
          </Link>
        </div>

        {/* Right Icons */}
        <div className="flex-1 flex items-center justify-end gap-4 md:gap-6">
          <button className={`p-2 ${iconColorClass}`}>
            <Search className="w-5 h-5" />
          </button>
          <button 
            className={`p-2 relative ${iconColorClass}`}
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-primary text-primary-foreground text-[10px] flex items-center justify-center rounded-full transform translate-x-1 -translate-y-1">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
