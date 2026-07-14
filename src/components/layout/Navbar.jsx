import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500 py-4 px-6 md:px-12 flex items-center justify-between',
        isScrolled || !isHome ? 'bg-white shadow-sm py-3' : 'bg-transparent text-white'
      )}
    >
      <div className="flex items-center">
        <button 
          className="md:hidden mr-4"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="w-5 h-5" />
        </button>
        
        <Link to="/">
          <h1 className="text-xl md:text-2xl font-serif tracking-[0.3em] font-medium uppercase">Velmora</h1>
        </Link>
      </div>

      <div className="hidden md:flex items-center space-x-8 text-[10px] uppercase tracking-[0.3em] font-medium">
        <Link to="/shop" className="hover:text-velmora-gold transition-colors">Shop</Link>
        <Link to="/shop?collection=new" className="hover:text-velmora-gold transition-colors">Collections</Link>
        <Link to="/about" className="hover:text-velmora-gold transition-colors">About</Link>
        <Link to="/journal" className="hover:text-velmora-gold transition-colors">Journal</Link>
      </div>

      <div className="flex items-center space-x-6">
        <button className="hidden md:block">
          <Search className="w-5 h-5" />
        </button>
        <button onClick={() => setIsCartOpen(true)} className="relative">
          <ShoppingBag className="w-5 h-5" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-primary text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={cn(
        "fixed inset-0 bg-white z-[60] transition-transform duration-500 flex flex-col p-8 md:hidden",
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-xl font-serif uppercase tracking-widest">Menu</h2>
          <button onClick={() => setIsMobileMenuOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="flex flex-col space-y-8 text-lg font-serif uppercase tracking-widest">
          <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)}>Shop All</Link>
          <Link to="/shop?category=Necklaces" onClick={() => setIsMobileMenuOpen(false)}>Necklaces</Link>
          <Link to="/shop?category=Earrings" onClick={() => setIsMobileMenuOpen(false)}>Earrings</Link>
          <Link to="/shop?category=Huggies" onClick={() => setIsMobileMenuOpen(false)}>Huggies</Link>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About Velmora</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
