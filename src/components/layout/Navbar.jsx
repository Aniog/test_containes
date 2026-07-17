import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../lib/CartContext';
import { cn } from '../../lib/utils';

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

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 py-4 flex items-center justify-between',
        isScrolled || !isHome ? 'bg-background/90 backdrop-blur-md border-b text-foreground py-3' : 'bg-transparent text-white'
      )}
    >
      {/* Left: Logo */}
      <Link to="/" className="text-xl md:text-2xl font-serif tracking-widest font-bold">
        VELMORA
      </Link>

      {/* Center: Desktop Links */}
      <div className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-widest font-medium">
        <Link to="/shop" className="hover:text-accent transition-colors">Shop</Link>
        <Link to="/shop/collections" className="hover:text-accent transition-colors">Collections</Link>
        <Link to="/about" className="hover:text-accent transition-colors">About</Link>
        <Link to="/journal" className="hover:text-accent transition-colors">Journal</Link>
      </div>

      {/* Right: Icons */}
      <div className="flex items-center space-x-5">
        <button className="hover:text-accent transition-colors">
          <Search size={20} />
        </button>
        <button 
          onClick={() => setIsCartOpen(true)}
          className="hover:text-accent transition-colors relative"
        >
          <ShoppingBag size={20} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-accent text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              {cartCount}
            </span>
          )}
        </button>
        <button 
          className="md:hidden hover:text-accent transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] bg-background z-40 md:hidden flex flex-col p-8 space-y-6 text-xl uppercase tracking-widest font-serif">
          <Link to="/shop">Shop</Link>
          <Link to="/shop/collections">Collections</Link>
          <Link to="/about">About</Link>
          <Link to="/journal">Journal</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
