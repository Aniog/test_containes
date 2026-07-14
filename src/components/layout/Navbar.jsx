import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../cart/CartContext';
import { cn } from '@/lib/utils';
import { CartDrawer } from '../cart/CartDrawer';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { cartCount, setCartOpen } = useCart();
  
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
    'fixed top-0 w-full z-50 transition-all duration-300',
    isHomepage && !isScrolled && !mobileMenuOpen
      ? 'bg-transparent text-white border-transparent'
      : 'bg-background/95 backdrop-blur-md text-foreground border-b border-border/50 shadow-sm'
  );

  return (
    <>
      <nav className={navClasses}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 -ml-2 text-inherit"
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6 stroke-[1.5]" /> : <Menu className="h-6 w-6 stroke-[1.5]" />}
              </button>
            </div>

            {/* Desktop Links - Left */}
            <div className="hidden md:flex items-center space-x-8 lg:space-x-12 w-1/3">
              <Link to="/shop" className="text-sm tracking-widest uppercase hover:opacity-70 transition-opacity">Shop</Link>
              <Link to="/collections" className="text-sm tracking-widest uppercase hover:opacity-70 transition-opacity">Collections</Link>
              <Link to="/about" className="text-sm tracking-widest uppercase hover:opacity-70 transition-opacity">About</Link>
            </div>

            {/* Logo - Center */}
            <div className="flex-shrink-0 flex items-center justify-center w-1/3">
              <Link to="/" className="font-serif text-3xl tracking-[0.2em] font-light">
                VELMORA
              </Link>
            </div>

            {/* Icons - Right */}
            <div className="flex items-center justify-end space-x-4 sm:space-x-6 w-1/3">
              <button aria-label="Search" className="hover:opacity-70 transition-opacity hidden sm:block">
                <Search className="h-5 w-5 stroke-[1.5]" />
              </button>
              <button 
                onClick={() => setCartOpen(true)}
                className="hover:opacity-70 transition-opacity relative group" 
                aria-label="Cart"
              >
                <div className="relative">
                  <ShoppingBag className="h-5 w-5 stroke-[1.5]" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1.5 -right-2 bg-primary text-primary-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "md:hidden absolute top-full left-0 w-full bg-background border-b border-border/50 text-foreground transition-all duration-300 overflow-hidden",
          mobileMenuOpen ? "max-h-screen border-b" : "max-h-0 border-transparent"
        )}>
          <div className="px-4 py-6 space-y-6 flex flex-col items-center">
            <Link to="/shop" className="text-sm tracking-widest uppercase py-2 block w-full text-center">Shop All</Link>
            <Link to="/collections/earrings" className="text-sm tracking-widest uppercase py-2 block w-full text-center">Earrings</Link>
            <Link to="/collections/necklaces" className="text-sm tracking-widest uppercase py-2 block w-full text-center">Necklaces</Link>
            <Link to="/about" className="text-sm tracking-widest uppercase py-2 block w-full text-center">Our Story</Link>
            <Link to="/journal" className="text-sm tracking-widest uppercase py-2 block w-full text-center">Journal</Link>
          </div>
        </div>
      </nav>
      
      <CartDrawer />
    </>
  );
}