import { Link } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useCartStore } from '../lib/store';
import { cn } from '../lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const setIsCartOpen = useCartStore((state) => state.setIsCartOpen);
  const cartItems = useCartStore((state) => state.cart);
  
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-foreground hover:text-accent transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <div className="flex-1 md:flex-none text-center md:text-left">
          <Link to="/" className="font-serif text-2xl md:text-3xl tracking-widest uppercase">
            VELMORA
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-sm uppercase tracking-wider font-light">
          <Link to="/shop" className="hover:text-accent transition-colors">Shop</Link>
          <Link to="/shop/collections" className="hover:text-accent transition-colors">Collections</Link>
          <Link to="/about" className="hover:text-accent transition-colors">About</Link>
          <Link to="/journal" className="hover:text-accent transition-colors">Journal</Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <button className="text-foreground hover:text-accent transition-colors">
            <Search size={20} />
          </button>
          <button 
            className="text-foreground hover:text-accent transition-colors relative"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center font-medium">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-md">
          <nav className="flex flex-col py-4 px-6 space-y-4 text-sm uppercase tracking-wider">
            <Link to="/shop" className="hover:text-accent transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
            <Link to="/shop/collections" className="hover:text-accent transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Collections</Link>
            <Link to="/about" className="hover:text-accent transition-colors" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            <Link to="/journal" className="hover:text-accent transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Journal</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;