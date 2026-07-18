import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { cartCount, setIsCartOpen } = useCart();

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
  }, [location]);

  // Determine header styling
  const headerBaseClass = "fixed w-full top-0 z-40 transition-all duration-300 border-b";
  const headerScrolledClass = isScrolled || !isHome 
    ? "bg-stone-50 border-stone-200 py-4 text-stone-900 shadow-sm"
    : "bg-transparent border-transparent py-6 text-stone-50 hover:bg-stone-50 hover:text-stone-900 hover:border-stone-200 group";

  return (
    <>
      <header className={`${headerBaseClass} ${headerScrolledClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 -ml-2"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {/* Logo */}
            <div className="flex-1 md:flex-none text-center md:text-left">
              <Link to="/" className="font-serif text-3xl tracking-wide uppercase">
                Velmora
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex flex-1 justify-center space-x-12 px-8">
              <Link to="/shop" className="text-sm uppercase tracking-widest hover:text-stone-500 transition-colors">Shop</Link>
              <Link to="/collections" className="text-sm uppercase tracking-widest hover:text-stone-500 transition-colors">Collections</Link>
              <Link to="/about" className="text-sm uppercase tracking-widest hover:text-stone-500 transition-colors">About</Link>
              <Link to="/journal" className="text-sm uppercase tracking-widest hover:text-stone-500 transition-colors">Journal</Link>
            </nav>

            {/* Icons */}
            <div className="flex items-center space-x-6">
              <button className="hover:text-stone-500 transition-colors hidden sm:block">
                <Search className="h-5 w-5" />
              </button>
              <button 
                className="hover:text-stone-500 transition-colors relative"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingBag className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-stone-900 text-stone-50 text-[10px] sm:text-xs font-bold rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-30 bg-stone-50 pt-24 px-4 transition-transform duration-300 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <nav className="flex flex-col space-y-8 text-center text-xl font-serif text-stone-900">
          <Link to="/shop">Shop</Link>
          <Link to="/collections">Collections</Link>
          <Link to="/about">About</Link>
          <Link to="/journal">Journal</Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
