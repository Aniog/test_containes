import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { cn } from '../../lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toggleCart, cartCount } = useCart();
  const location = useLocation();
  const isHomepage = location.pathname === '/';

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

  // Determine navbar appearance based on page and scroll
  const isTransparent = isHomepage && !isScrolled && !isMobileMenuOpen;
  
  return (
    <header 
      className={cn(
        'fixed top-0 left-0 w-full z-40 transition-all duration-300',
        isTransparent 
          ? 'bg-transparent text-white' 
          : 'bg-velmora-50/95 backdrop-blur-md text-velmora-900 border-b border-velmora-200/50 shadow-sm'
      )}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20 relative">
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 -ml-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:static md:translate-x-0 md:translate-y-0">
            <Link to="/" className="font-serif text-3xl font-medium tracking-[0.15em] uppercase hover:opacity-80 transition-opacity">
              Velmora
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Link to="/shop" className="text-sm uppercase tracking-widest font-medium link-hover py-1">Shop</Link>
            <Link to="/collections" className="text-sm uppercase tracking-widest font-medium link-hover py-1">Collections</Link>
            <Link to="/about" className="text-sm uppercase tracking-widest font-medium link-hover py-1">About</Link>
            <Link to="/journal" className="text-sm uppercase tracking-widest font-medium link-hover py-1">Journal</Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-2 md:gap-4 -mr-2">
            <button className="p-2 hover:opacity-70 transition-opacity" aria-label="Search">
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button 
              className="p-2 hover:opacity-70 transition-opacity relative" 
              aria-label="Cart"
              onClick={toggleCart}
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className={cn(
                  "absolute top-1 right-0 w-4 h-4 text-[10px] font-bold flex items-center justify-center rounded-full transform translate-x-1/4 -translate-y-1/4",
                  isTransparent ? "bg-white text-velmora-900" : "bg-velmora-900 text-white"
                )}>
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={cn(
          "md:hidden fixed top-20 left-0 w-full h-[calc(100vh-5rem)] bg-velmora-50 text-velmora-900 transition-transform duration-300 ease-in-out px-6 py-8 border-t border-velmora-200",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <nav className="flex flex-col gap-6 text-center">
          <Link to="/shop" className="text-xl font-serif uppercase tracking-widest hover:text-gold-dark transition-colors">Shop All</Link>
          <Link to="/category/earrings" className="text-lg font-serif text-velmora-600 hover:text-gold-dark transition-colors">Earrings</Link>
          <Link to="/category/necklaces" className="text-lg font-serif text-velmora-600 hover:text-gold-dark transition-colors">Necklaces</Link>
          <Link to="/category/huggies" className="text-lg font-serif text-velmora-600 hover:text-gold-dark transition-colors">Huggies</Link>
          <div className="w-full h-[1px] bg-velmora-200 my-4"></div>
          <Link to="/about" className="text-lg font-serif hover:text-gold-dark transition-colors">About Us</Link>
          <Link to="/journal" className="text-lg font-serif hover:text-gold-dark transition-colors">Journal</Link>
          <Link to="/contact" className="text-lg font-serif hover:text-gold-dark transition-colors">Contact</Link>
        </nav>
      </div>
    </header>
  );
}