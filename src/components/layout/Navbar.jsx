import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCart } from '@/context/CartContext';

const Navbar = ({ onCartClick }) => {
  const { cartCount } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex items-center justify-between',
        isScrolled || !isHome ? 'bg-background shadow-sm border-b' : 'bg-transparent text-white'
      )}
    >
      <div className="flex-1 lg:hidden">
        <button onClick={() => setIsMobileMenuOpen(true)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <div className="hidden lg:flex flex-1 items-center space-x-8 text-sm uppercase tracking-widest">
        <Link to="/shop" className="hover:text-accent transition-colors">Shop</Link>
        <Link to="#" className="hover:text-accent transition-colors">Collections</Link>
        <Link to="#" className="hover:text-accent transition-colors">About</Link>
        <Link to="#" className="hover:text-accent transition-colors">Journal</Link>
      </div>

      <div className="flex-shrink-0">
        <Link to="/" className="text-2xl font-serif tracking-[0.2em]">VELMORA</Link>
      </div>

      <div className="flex-1 flex items-center justify-end space-x-6">
        <button className="hover:text-accent transition-colors">
          <Search className="w-5 h-5" />
        </button>
        <button className="hover:text-accent transition-colors relative" onClick={onCartClick}>
          <ShoppingBag className="w-5 h-5" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-accent text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold animate-in zoom-in">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-background z-[60] flex flex-col p-6 animate-in slide-in-from-left">
          <div className="flex justify-between items-center mb-12">
            <span className="text-2xl font-serif tracking-[0.2em]">VELMORA</span>
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col space-y-8 text-2xl font-serif">
            <Link to="/shop">Shop All</Link>
            <Link to="#">Collections</Link>
            <Link to="#">About Us</Link>
            <Link to="#">Journal</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
