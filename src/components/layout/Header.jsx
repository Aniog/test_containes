import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { cn } from '../../lib/utils';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();
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
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const headerBg = isHome && !isScrolled && !mobileMenuOpen 
    ? 'bg-transparent text-white' 
    : 'bg-background text-foreground shadow-sm';

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        headerBg
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 -ml-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Nav Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-8 flex-1">
            <Link to="/shop" className="text-sm tracking-widest uppercase hover:opacity-70 transition-opacity">Shop</Link>
            <Link to="/shop?category=collections" className="text-sm tracking-widest uppercase hover:opacity-70 transition-opacity">Collections</Link>
            <Link to="#" className="text-sm tracking-widest uppercase hover:opacity-70 transition-opacity">About</Link>
            <Link to="#" className="text-sm tracking-widest uppercase hover:opacity-70 transition-opacity">Journal</Link>
          </nav>

          {/* Logo */}
          <Link to="/" className="flex-1 lg:flex-none text-center lg:text-left">
            <span className="font-serif text-3xl tracking-[0.2em] font-medium uppercase">Velmora</span>
          </Link>

          {/* Action Icons */}
          <div className="flex items-center justify-end gap-4 flex-1">
            <button className="p-2 hover:opacity-70 transition-opacity">
              <Search size={22} className="stroke-[1.5]" />
            </button>
            <button 
              className="p-2 relative hover:opacity-70 transition-opacity"
              onClick={() => setIsOpen(true)}
            >
              <ShoppingBag size={22} className="stroke-[1.5]" />
              {totalItems > 0 && (
                <span className="absolute top-1 right-0 sm:-right-1 bg-primary text-primary-foreground text-[10px] sm:text-xs font-medium w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={cn(
        "lg:hidden fixed inset-0 top-20 bg-background text-foreground z-40 transform transition-transform duration-300",
        mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col p-8 gap-6 text-lg font-serif">
          <Link to="/shop" className="hover:text-primary transition-colors">Shop All</Link>
          <Link to="/shop?category=earrings" className="hover:text-primary transition-colors">Earrings</Link>
          <Link to="/shop?category=necklaces" className="hover:text-primary transition-colors">Necklaces</Link>
          <Link to="/shop?category=huggies" className="hover:text-primary transition-colors">Huggies</Link>
          <div className="w-full h-px bg-border my-2" />
          <Link to="#" className="hover:text-primary transition-colors">About Us</Link>
          <Link to="#" className="hover:text-primary transition-colors">Journal</Link>
        </div>
      </div>
    </header>
  );
}