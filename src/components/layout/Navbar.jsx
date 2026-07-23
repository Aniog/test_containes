import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartItemCount, setIsCartOpen } = useCart();
  const location = useLocation();
  const isHomepage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navClasses = cn(
    'fixed w-full top-0 z-40 transition-all duration-300 ease-in-out',
    {
      'bg-transparent text-white pt-6 pb-4': isHomepage && !isScrolled,
      'bg-background text-foreground shadow-sm py-4': !isHomepage || isScrolled
    }
  );

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 -ml-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link to="/" className="text-2xl font-serif tracking-[0.2em] font-semibold text-center absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
            VELMORA
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8 text-sm uppercase tracking-widest absolute left-1/2 -translate-x-1/2">
            <Link to="/shop" className="hover:opacity-70 transition-opacity">Shop</Link>
            <Link to="/collections" className="hover:opacity-70 transition-opacity">Collections</Link>
            <Link to="/about" className="hover:opacity-70 transition-opacity">About</Link>
            <Link to="/journal" className="hover:opacity-70 transition-opacity">Journal</Link>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4 lg:space-x-6">
            <button className="p-2 -mr-2 hover:opacity-70 transition-opacity hidden lg:block">
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button 
              className="p-2 -mr-2 hover:opacity-70 transition-opacity relative"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center translate-x-1 -translate-y-1">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={cn(
        "lg:hidden fixed inset-0 top-[60px] bg-background text-foreground z-30 transition-transform duration-300 ease-in-out",
        mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col p-8 space-y-6 text-lg uppercase tracking-widest border-t border-border">
          <Link to="/shop" className="hover:text-primary transition-colors">Shop</Link>
          <Link to="/collections" className="hover:text-primary transition-colors">Collections</Link>
          <Link to="/about" className="hover:text-primary transition-colors">About</Link>
          <Link to="/journal" className="hover:text-primary transition-colors">Journal</Link>
        </div>
      </div>
    </nav>
  );
}
