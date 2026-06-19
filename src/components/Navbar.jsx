import { Link } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useAppStore } from '../store';
import { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cart, setIsCartOpen } = useAppStore();
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    // Always consider scrolled on non-home pages
    if (!isHomePage) {
      setIsScrolled(true);
      return;
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  useEffect(() => {
     setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navClasses = useMemo(() => {
     if (!isHomePage || isScrolled || isMobileMenuOpen) {
       return 'bg-brand-beige border-b border-brand-sand text-brand-dark';
     }
     return 'bg-transparent text-white';
  }, [isHomePage, isScrolled, isMobileMenuOpen]);


  return (
    <nav 
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${navClasses}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="font-serif text-2xl tracking-widest uppercase">
              Velmora
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex ml-10 space-x-8">
            <Link to="/collections/all" className="hover:text-brand-gold transition duration-200">Shop</Link>
            <Link to="/collections/categories" className="hover:text-brand-gold transition duration-200">Collections</Link>
            <Link to="/about" className="hover:text-brand-gold transition duration-200">About</Link>
            <Link to="/journal" className="hover:text-brand-gold transition duration-200">Journal</Link>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            <button className="hover:text-brand-gold transition duration-200">
              <Search className="w-5 h-5" />
            </button>
            <button 
              className="relative hover:text-brand-gold transition duration-200"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag className="w-5 h-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                  {cartItemCount}
                </span>
              )}
            </button>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center ml-2">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="hover:text-brand-gold transition duration-200"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-64' : 'max-h-0'}`}>
        <div className="bg-brand-beige border-b border-brand-sand text-brand-dark px-4 pt-2 pb-6 space-y-4 shadow-lg flex flex-col">
          <Link to="/collections/all" className="block px-3 py-2 hover:bg-brand-sand rounded-md transition" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
          <Link to="/collections/categories" className="block px-3 py-2 hover:bg-brand-sand rounded-md transition" onClick={() => setIsMobileMenuOpen(false)}>Collections</Link>
          <Link to="/about" className="block px-3 py-2 hover:bg-brand-sand rounded-md transition" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <Link to="/journal" className="block px-3 py-2 hover:bg-brand-sand rounded-md transition" onClick={() => setIsMobileMenuOpen(false)}>Journal</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;