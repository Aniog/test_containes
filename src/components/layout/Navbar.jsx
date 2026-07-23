import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { cartCount, setIsCartOpen } = useCart();

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
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6 px-6 lg:px-12",
        isScrolled || !isHome ? "bg-white text-charcoal shadow-sm py-4" : "bg-transparent text-white"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <Link to="/" className="text-2xl font-serif tracking-widest font-bold">
          VELMORA
        </Link>

        {/* Center: Desktop Links */}
        <div className="hidden lg:flex items-center space-x-12">
          <Link to="/shop" className="nav-link">Shop</Link>
          <Link to="/collections" className="nav-link">Collections</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/journal" className="nav-link">Journal</Link>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center space-x-6">
          <button className="hover:text-velmora-gold transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative hover:text-velmora-gold transition-colors"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-velmora-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>
          <button 
            className="lg:hidden hover:text-velmora-gold transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white text-charcoal p-8 space-y-6 flex flex-col items-center shadow-lg animate-in fade-in slide-in-from-top-4 duration-300">
          <Link to="/shop" className="text-xl font-serif">Shop</Link>
          <Link to="/collections" className="text-xl font-serif">Collections</Link>
          <Link to="/about" className="text-xl font-serif">About</Link>
          <Link to="/journal" className="text-xl font-serif">Journal</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
