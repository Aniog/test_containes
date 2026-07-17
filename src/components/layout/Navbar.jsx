import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    setIsMobileMenuOpen(false);
  }, [location]);

  const navClass = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled || !isHome || isMobileMenuOpen
      ? 'bg-background/95 backdrop-blur-md border-b border-border text-foreground'
      : 'bg-transparent text-white'
  }`;

  return (
    <nav className={navClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 -ml-2"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Center Logo (Mobile) / Left Logo (Desktop) */}
          <div className="flex-1 flex justify-center md:justify-start md:flex-none">
            <Link to="/" className="font-serif text-2xl tracking-widest uppercase">
              VELMORA
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8 items-center flex-1 justify-center">
            <Link to="/collections/all" className="uppercase tracking-wider text-sm hover:opacity-70 transition-opacity">Shop</Link>
            <Link to="/collections/all" className="uppercase tracking-wider text-sm hover:opacity-70 transition-opacity">Collections</Link>
            <Link to="#" className="uppercase tracking-wider text-sm hover:opacity-70 transition-opacity">About</Link>
            <Link to="#" className="uppercase tracking-wider text-sm hover:opacity-70 transition-opacity">Journal</Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4 md:flex-none">
            <button className="p-2 hover:opacity-70 transition-opacity aria-label='Search'">
              <Search size={20} />
            </button>
            <button 
              className="p-2 hover:opacity-70 transition-opacity relative aria-label='Cart'"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 bg-brand-600 text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background w-full border-b border-border shadow-lg absolute top-20 left-0 text-foreground py-4">
          <div className="flex flex-col space-y-4 px-4 pb-6">
            <Link to="/collections/all" className="uppercase tracking-wider text-sm py-2 border-b border-border/50">Shop</Link>
            <Link to="/collections/all" className="uppercase tracking-wider text-sm py-2 border-b border-border/50">Collections</Link>
            <Link to="#" className="uppercase tracking-wider text-sm py-2 border-b border-border/50">About</Link>
            <Link to="#" className="uppercase tracking-wider text-sm py-2 border-b border-border/50">Journal</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
