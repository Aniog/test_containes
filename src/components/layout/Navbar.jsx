import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const { totalItems, setIsOpen: setCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navClasses = `fixed w-full z-50 transition-all duration-300 ${
    isHome && !isScrolled 
      ? 'bg-transparent text-white pt-6 pb-4' 
      : 'bg-background/95 backdrop-blur-md text-foreground border-b border-border py-4 shadow-sm'
  }`;

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center justify-between">
          
          {/* Mobile Menu Button */}
          <div className="flex-1 flex md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 -ml-2 text-inherit"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Links Left */}
          <div className="hidden md:flex flex-1 items-center space-x-6 text-sm tracking-wider uppercase">
            <Link to="/shop" className="hover:text-accent transition-colors">Shop</Link>
            <Link to="/collections" className="hover:text-accent transition-colors">Collections</Link>
            <Link to="/about" className="hover:text-accent transition-colors">About</Link>
          </div>

          {/* Logo */}
          <div className="flex-1 flex justify-center">
            <Link to="/" className="text-2xl md:text-3xl font-serif font-semibold tracking-widest text-center">
              VELMORA
            </Link>
          </div>

          {/* Icons Right */}
          <div className="flex-1 flex justify-end items-center space-x-4">
            <button className="p-2 text-inherit hover:text-accent transition-colors" aria-label="Search">
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button 
              className="p-2 relative text-inherit hover:text-accent transition-colors"
              onClick={() => setCartOpen(true)}
              aria-label="Cart"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {totalItems > 0 && (
                <span className="absolute top-1 right-1 bg-accent text-accent-foreground text-[10px] font-medium w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-lg py-4 px-6 flex flex-col space-y-4 text-foreground">
          <Link to="/shop" className="text-base uppercase tracking-widest py-2 border-b border-border/50">Shop</Link>
          <Link to="/collections" className="text-base uppercase tracking-widest py-2 border-b border-border/50">Collections</Link>
          <Link to="/about" className="text-base uppercase tracking-widest py-2 border-b border-border/50">About</Link>
          <Link to="/journal" className="text-base uppercase tracking-widest py-2">Journal</Link>
        </div>
      )}
    </nav>
  );
}