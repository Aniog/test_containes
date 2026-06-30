import { Link } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useState } from 'react';
import { cn } from '../../lib/utils';

const Navbar = ({ isScrolled }) => {
  const { toggleCart, getCartCount } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <Link 
          to="/" 
          className="text-2xl md:text-3xl font-serif tracking-widest text-foreground font-bold hover:opacity-80 transition-opacity"
        >
          VELMORA
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-wider font-medium">
          <Link to="/collection" className="hover:text-gold transition-colors">Shop</Link>
          <Link to="/collection" className="hover:text-gold transition-colors">Collections</Link>
          <Link to="#" className="hover:text-gold transition-colors">About</Link>
          <Link to="#" className="hover:text-gold transition-colors">Journal</Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:text-gold transition-colors hidden md:block">
            <Search size={22} className="stroke-[1.5]" />
          </button>
          <button 
            className="p-2 hover:text-gold transition-colors relative"
            onClick={toggleCart}
          >
            <ShoppingBag size={22} className="stroke-[1.5]" />
            {getCartCount() > 0 && (
              <span className="absolute top-0 right-0 bg-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                {getCartCount()}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-t border-border shadow-lg py-4 px-6 flex flex-col space-y-4 text-sm uppercase tracking-wider font-medium">
          <Link to="/collection" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-gold transition-colors">Shop</Link>
          <Link to="/collection" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-gold transition-colors">Collections</Link>
          <Link to="#" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-gold transition-colors">About</Link>
          <Link to="#" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-gold transition-colors">Journal</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
