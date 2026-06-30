import React from 'react';
import { NavLink } from 'react-router-dom';
import { Search, ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLocation } from 'react-router-dom';
import { useCart } from '@/lib/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const location = useLocation();
  const { itemCount, setIsOpen } = useCart();
  const isHomepage = location.pathname === '/';

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = cn(
    'fixed top-0 w-full z-40 transition-all duration-300 ease-in-out',
    {
      'bg-background/90 backdrop-blur-md border-b border-border shadow-sm': isScrolled || !isHomepage,
      'bg-transparent': !isScrolled && isHomepage,
      'text-foreground': isScrolled || !isHomepage,
      'text-foreground/90': !isScrolled && isHomepage,
    }
  );

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Left: Logo */}
        <NavLink to="/" className="font-serif text-2xl tracking-widest uppercase flex-1">
          Velmora
        </NavLink>

        {/* Center: Links */}
        <div className="hidden md:flex items-center justify-center space-x-8 flex-1">
          <NavLink to="/shop" className="text-sm uppercase tracking-widest hover:text-primary transition-colors">Shop</NavLink>
          <NavLink to="/collections" className="text-sm uppercase tracking-widest hover:text-primary transition-colors">Collections</NavLink>
          <NavLink to="/about" className="text-sm uppercase tracking-widest hover:text-primary transition-colors">About</NavLink>
          <NavLink to="/journal" className="text-sm uppercase tracking-widest hover:text-primary transition-colors">Journal</NavLink>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center justify-end space-x-6 flex-1">
          <button className="hover:text-primary transition-colors">
            <Search className="w-5 h-5" />
            <span className="sr-only">Search</span>
          </button>
          <button 
            className="hover:text-primary transition-colors flex items-center relative"
            onClick={() => setIsOpen(true)}
          >
            <ShoppingBag className="w-5 h-5" />
            <span className="sr-only">Cart</span>
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-primary text-primary-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;