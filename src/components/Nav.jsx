import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { openCart, cartCount } = useCart();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = `fixed top-0 w-full z-40 transition-all duration-300 border-b ${
    isScrolled || !isHome
      ? 'bg-background/95 backdrop-blur-md border-border py-4 text-foreground'
      : 'bg-transparent border-transparent py-6 text-foreground bg-gradient-to-b from-background/50 to-transparent'
  }`;

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-1 md:hidden">
            <button className="p-2 -ml-2">
              <Menu className="w-5 h-5" />
            </button>
          </div>

          {/* Center Logo on mobile, left on desktop */}
          <div className="flex-shrink-0 flex items-center justify-center md:justify-start md:flex-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.2em] font-medium">
              VELMORA
            </Link>
          </div>

          <div className="hidden md:flex flex-1 items-center justify-center gap-10">
            <Link to="/shop" className="text-sm tracking-widest uppercase hover:text-accent transition-colors">Shop</Link>
            <Link to="/collections" className="text-sm tracking-widest uppercase hover:text-accent transition-colors">Collections</Link>
            <Link to="/about" className="text-sm tracking-widest uppercase hover:text-accent transition-colors">About</Link>
            <Link to="/journal" className="text-sm tracking-widest uppercase hover:text-accent transition-colors">Journal</Link>
          </div>

          <div className="flex-1 flex justify-end items-center gap-4 md:gap-6">
            <button className="p-2 hover:text-accent transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 hover:text-accent transition-colors relative" onClick={openCart}>
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-accent text-accent-foreground rounded-full text-[10px] flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};