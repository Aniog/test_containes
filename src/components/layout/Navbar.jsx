import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from '../../contexts/CartContext.jsx';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

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
  }, [location]);

  const navClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled || !isHome || mobileMenuOpen
      ? 'bg-background text-foreground border-b border-border shadow-sm'
      : 'bg-transparent text-foreground md:text-white border-transparent'
  }`;

  const linkClass = "text-sm uppercase tracking-widest hover:text-accent hover:opacity-80 transition-colors duration-200";

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 -ml-2"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex-1 md:flex-grow-0 text-center md:text-left">
            <Link to="/" className="font-serif text-2xl md:text-3xl tracking-widest uppercase">
              Velmora
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex justify-center flex-1 space-x-8">
            <Link to="/collections/all" className={linkClass}>Shop</Link>
            <Link to="/collections/all" className={linkClass}>Collections</Link>
            <Link to="#" className={linkClass}>About</Link>
            <Link to="#" className={linkClass}>Journal</Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center justify-end flex-shrink-0 space-x-4 md:space-x-6">
            <button className="p-1 hidden md:block hover:opacity-70 transition-opacity" aria-label="Search">
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button 
              className="p-1 relative hover:opacity-70 transition-opacity" 
              aria-label="Cart"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col">
            <Link to="/collections/all" className="block text-base uppercase tracking-widest py-2 border-b border-border">Shop</Link>
            <Link to="/collections/all" className="block text-base uppercase tracking-widest py-2 border-b border-border">Collections</Link>
            <Link to="#" className="block text-base uppercase tracking-widest py-2 border-b border-border">About</Link>
            <Link to="#" className="block text-base uppercase tracking-widest py-2">Journal</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
