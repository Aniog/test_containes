import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { cn } from '../../lib/utils';

export default function Navbar() {
  const { totalItems, setIsOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomepage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navClasses = cn(
    'fixed w-full z-40 transition-all duration-300',
    isHomepage 
      ? isScrolled || mobileMenuOpen
        ? 'bg-background/95 backdrop-blur-md shadow-sm text-foreground py-4' 
        : 'bg-transparent text-white py-6'
      : 'bg-background border-b border-stone-200 text-foreground py-4 sticky top-0'
  );

  const iconClasses = "w-5 h-5 md:w-6 md:h-6 transition-colors duration-200 hover:text-primary";

  return (
    <header className={navClasses}>
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <div className="flex-1 md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 -ml-2">
            {mobileMenuOpen ? <X className={iconClasses} /> : <Menu className={iconClasses} />}
          </button>
        </div>

        <div className="flex-1 hidden md:flex items-center space-x-8 text-sm uppercase tracking-[0.15em] font-medium">
          <Link to="/collection" className="hover:text-primary transition-colors">Shop</Link>
          <Link to="/collection" className="hover:text-primary transition-colors">Collections</Link>
          <Link to="#" className="hover:text-primary transition-colors">About</Link>
          <Link to="#" className="hover:text-primary transition-colors">Journal</Link>
        </div>

        <div className="flex-1 text-center md:flex-grow-0">
          <Link to="/" className="font-serif text-2xl md:text-3xl tracking-widest text-shadow-sm uppercase">
            VELMORA
          </Link>
        </div>

        <div className="flex-1 flex justify-end items-center space-x-6">
          <button className="hidden md:block group">
            <Search className={iconClasses} />
          </button>
          <button 
            onClick={() => setIsOpen(true)} 
            className="relative p-1 group"
          >
            <ShoppingBag className={iconClasses} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] font-bold w-4 h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center pointer-events-none shadow-sm">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "absolute top-full left-0 w-full bg-background border-b shadow-lg transition-all duration-300 overflow-hidden flex flex-col md:hidden text-stone-900",
        mobileMenuOpen ? "max-h-[400px] py-4" : "max-h-0"
      )}>
        <nav className="container mx-auto px-4 flex flex-col space-y-6 text-sm uppercase tracking-widest py-6">
          <Link to="/collection" className="hover:text-primary w-full pb-4 border-b border-stone-100">Shop All</Link>
          <Link to="/collection" className="hover:text-primary w-full pb-4 border-b border-stone-100">Earrings & Huggies</Link>
          <Link to="/collection" className="hover:text-primary w-full pb-4 border-b border-stone-100">Necklaces</Link>
          <Link to="#" className="hover:text-primary w-full pb-4">Our Story</Link>
        </nav>
      </div>
    </header>
  );
}
