import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { cn } from '../../lib/utils';
import CartDrawer from '../shop/CartDrawer';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navClasses = cn(
    'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b border-transparent',
    {
      'bg-background border-border text-foreground': isScrolled || !isHome || isMobileMenuOpen,
      'bg-transparent text-white': !isScrolled && isHome && !isMobileMenuOpen,
    }
  );

  const logoClasses = cn(
    'font-serif text-2xl tracking-widest uppercase transition-colors',
    {
      'text-primary': isScrolled || !isHome || isMobileMenuOpen,
      'text-white': !isScrolled && isHome && !isMobileMenuOpen,
    }
  );

  const linkClasses = cn(
    'text-sm font-medium tracking-wide uppercase transition-colors hover:text-accent',
    {
      'text-foreground': isScrolled || !isHome || isMobileMenuOpen,
      'text-white/90': !isScrolled && isHome && !isMobileMenuOpen,
    }
  );

  const iconClasses = cn(
    'w-5 h-5 transition-colors hover:text-accent',
    {
      'text-foreground': isScrolled || !isHome || isMobileMenuOpen,
      'text-white/90': !isScrolled && isHome && !isMobileMenuOpen,
    }
  );

  return (
    <>
      <nav className={navClasses}>
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 -ml-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className={iconClasses} />
              ) : (
                <Menu className={iconClasses} />
              )}
            </button>

            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className={logoClasses}>
                Velmora
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center space-x-10 text-center flex-1">
              <Link to="/shop" className={linkClasses}>Shop</Link>
              <Link to="/collections" className={linkClasses}>Collections</Link>
              <Link to="/about" className={linkClasses}>About</Link>
              <Link to="/journal" className={linkClasses}>Journal</Link>
            </div>

            {/* Icons */}
            <div className="flex items-center justify-end space-x-6 flex-shrink-0">
              <button aria-label="Search" className="hidden sm:block">
                <Search className={iconClasses} />
              </button>
              <button 
                aria-label="Cart" 
                className="relative"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingBag className={iconClasses} />
                <span className="absolute -top-1.5 -right-2 bg-accent text-accent-foreground text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={cn(
            'md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-background border-b border-border',
            isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 border-transparent'
          )}
        >
          <div className="px-4 py-6 flex flex-col space-y-4">
            <Link to="/shop" className="text-foreground text-sm font-medium tracking-wide uppercase">Shop</Link>
            <Link to="/collections" className="text-foreground text-sm font-medium tracking-wide uppercase">Collections</Link>
            <Link to="/about" className="text-foreground text-sm font-medium tracking-wide uppercase">About</Link>
            <Link to="/journal" className="text-foreground text-sm font-medium tracking-wide uppercase">Journal</Link>
          </div>
        </div>
      </nav>
      
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;