import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CartDrawer from '../cart/CartDrawer';
import { useCart } from '@/store/useCart';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = `fixed top-0 w-full z-50 transition-all duration-300 ${
    isScrolled || !isHome
      ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm py-4'
      : 'bg-transparent py-6'
  }`;

  const textClasses = `text-sm uppercase tracking-widest transition-colors ${
    !isScrolled && isHome ? 'text-white hover:text-velmora-gold' : 'text-primary hover:text-velmora-gold'
  }`;

  return (
    <>
      <nav className={navClasses}>
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden ${!isScrolled && isHome ? 'text-white' : 'text-primary'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Center/Left Logo */}
          <Link to="/" className="flex-1 md:flex-none text-center md:text-left">
            <span className={`font-serif text-2xl md:text-3xl tracking-widest uppercase transition-colors ${
              !isScrolled && isHome ? 'text-white' : 'text-primary'
            }`}>
              Velmora
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex flex-1 justify-center space-x-8">
            <Link to="/collections/all" className={textClasses}>Shop</Link>
            <Link to="/collections" className={textClasses}>Collections</Link>
            <Link to="/about" className={textClasses}>About</Link>
            <Link to="/journal" className={textClasses}>Journal</Link>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className={`${!isScrolled && isHome ? 'text-white hover:text-velmora-gold' : 'text-primary hover:text-velmora-gold'} transition-colors`}>
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button 
              className={`relative ${!isScrolled && isHome ? 'text-white hover:text-velmora-gold' : 'text-primary hover:text-velmora-gold'} transition-colors`}
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-velmora-gold text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-24 px-4 flex flex-col space-y-6">
          <Link to="/collections/all" className="text-xl font-serif uppercase tracking-widest border-b border-border pb-4" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
          <Link to="/collections" className="text-xl font-serif uppercase tracking-widest border-b border-border pb-4" onClick={() => setIsMobileMenuOpen(false)}>Collections</Link>
          <Link to="/about" className="text-xl font-serif uppercase tracking-widest border-b border-border pb-4" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <Link to="/journal" className="text-xl font-serif uppercase tracking-widest border-b border-border pb-4" onClick={() => setIsMobileMenuOpen(false)}>Journal</Link>
        </div>
      )}

      {/* Cart Drawer Placeholder */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;