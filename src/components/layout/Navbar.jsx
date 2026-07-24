import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { cn } from '../../lib/utils';
import CartDrawer from '../cart/CartDrawer';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();
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
  }, [location.pathname]);

  const navClass = cn(
    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 py-4 border-b",
    {
      "bg-background/95 backdrop-blur-sm border-border": isScrolled || !isHome || isMobileMenuOpen,
      "bg-transparent border-transparent": !isScrolled && isHome && !isMobileMenuOpen,
      "text-white": !isScrolled && isHome && !isMobileMenuOpen,
      "text-foreground": isScrolled || !isHome || isMobileMenuOpen,
    }
  );

  return (
    <>
      <nav className={navClass}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link to="/" className="text-2xl md:text-3xl font-serif tracking-widest z-10 block">
            VELMORA
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-widest font-medium">
            <Link to="/shop" className="hover:text-primary transition-colors">Shop</Link>
            <Link to="/shop?category=collections" className="hover:text-primary transition-colors">Collections</Link>
            <Link to="/about" className="hover:text-primary transition-colors">About</Link>
            <Link to="/journal" className="hover:text-primary transition-colors">Journal</Link>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <Link to="/shop" aria-label="Search" className="hover:text-primary transition-colors hidden md:block">
              <Search size={20} strokeWidth={1.5} />
            </Link>
            <button 
              aria-label="Cart" 
              className="hover:text-primary transition-colors relative"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-[10px] min-w-4 h-4 flex items-center justify-center rounded-full px-1 font-medium">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg p-6 flex flex-col space-y-4">
            <Link to="/shop" className="text-lg font-serif">Shop</Link>
            <Link to="/shop?category=collections" className="text-lg font-serif">Collections</Link>
            <Link to="/about" className="text-lg font-serif">About</Link>
            <Link to="/journal" className="text-lg font-serif">Journal</Link>
          </div>
        )}
      </nav>

      {/* Cart Drawer Component */}
      <CartDrawer />
    </>
  );
};

export default Navbar;