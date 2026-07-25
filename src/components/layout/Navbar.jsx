import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import CartDrawer from '../cart/CartDrawer';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { itemCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-sm' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link 
              to="/" 
              className={`font-serif text-2xl font-semibold tracking-wider ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              VELMORA
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/shop" className={`text-sm font-medium tracking-wide ${
                isScrolled ? 'text-gray-900' : 'text-white'
              } hover:opacity-70`}>Shop</Link>
              <Link to="/collections" className={`text-sm font-medium tracking-wide ${
                isScrolled ? 'text-gray-900' : 'text-white'
              } hover:opacity-70`}>Collections</Link>
              <Link to="/about" className={`text-sm font-medium tracking-wide ${
                isScrolled ? 'text-gray-900' : 'text-white'
              } hover:opacity-70`}>About</Link>
              <Link to="/journal" className={`text-sm font-medium tracking-wide ${
                isScrolled ? 'text-gray-900' : 'text-white'
              } hover:opacity-70`}>Journal</Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className={`p-2 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                <Search size={20} />
              </button>
              
              <button 
                onClick={() => setIsCartOpen(true)}
                className={`p-2 relative ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}
              >
                <ShoppingBag size={20} />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-accent text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
              
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`md:hidden p-2 ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-6 space-y-4">
              <Link to="/shop" className="block text-lg font-medium text-gray-900">Shop</Link>
              <Link to="/collections" className="block text-lg font-medium text-gray-900">Collections</Link>
              <Link to="/about" className="block text-lg font-medium text-gray-900">About</Link>
              <Link to="/journal" className="block text-lg font-medium text-gray-900">Journal</Link>
            </div>
          </div>
        )}
      </nav>
      
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;
