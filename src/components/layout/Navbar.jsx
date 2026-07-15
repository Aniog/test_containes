import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = ({ onOpenCart, cartCount }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-500",
      isScrolled || !isHome ? "bg-white text-velmora-charcoal py-4 shadow-sm" : "bg-transparent text-white py-6"
    )}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl md:text-3xl font-serif tracking-widest font-medium">
            VELMORA
          </Link>

          {/* Center Links - Desktop */}
          <div className="hidden md:flex items-center space-x-10 text-sm tracking-ultra-wide uppercase font-sans">
            <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
            <Link to="#" className="hover:text-gold transition-colors">Collections</Link>
            <Link to="#" className="hover:text-gold transition-colors">About</Link>
            <Link to="#" className="hover:text-gold transition-colors">Journal</Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-5">
            <button className="hover:text-gold transition-colors">
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button onClick={onOpenCart} className="flex items-center space-x-1 hover:text-gold transition-colors relative">
              <ShoppingBag size={20} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
            <button className="md:hidden" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-white z-[60] flex flex-col pt-20 px-8 transition-transform duration-500 md:hidden",
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <button className="absolute top-6 right-6 text-velmora-charcoal" onClick={() => setIsMobileMenuOpen(false)}>
          <X size={30} strokeWidth={1} />
        </button>
        <div className="flex flex-col space-y-8 text-2xl font-serif">
          <Link to="/shop">Shop the Collection</Link>
          <Link to="#">New Arrivals</Link>
          <Link to="#">Best Sellers</Link>
          <Link to="#">Our Story</Link>
          <Link to="#">Journal</Link>
        </div>
        <div className="mt-auto mb-20 space-y-4">
          <p className="text-xs uppercase tracking-widest text-velmora-charcoal/50 font-sans">Need Help?</p>
          <Link to="#" className="block text-sm font-sans">Contact Us</Link>
          <Link to="#" className="block text-sm font-sans">Shipping & Returns</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
