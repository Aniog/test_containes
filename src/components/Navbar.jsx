import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount, setIsOpen } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4 md:px-12",
      isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : (isHome ? "bg-transparent text-white" : "bg-white text-velmora-dark shadow-sm")
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-1 lg:hidden">
            <button onClick={() => setMobileMenuOpen(true)}>
                <Menu size={24} />
            </button>
        </div>

        <div className="hidden lg:flex flex-1 items-center gap-8 text-sm font-medium tracking-wide uppercase">
          <Link to="/shop" className="hover:text-velmora-accent transition-colors">Shop</Link>
          <Link to="/collections" className="hover:text-velmora-accent transition-colors">Collections</Link>
        </div>

        <Link to="/" className="text-2xl md:text-3xl font-serif tracking-[0.2em] font-medium mx-auto lg:mx-0">
          VELMORA
        </Link>

        <div className="hidden lg:flex flex-1 justify-end items-center gap-8 text-sm font-medium tracking-wide uppercase">
          <Link to="/about" className="hover:text-velmora-accent transition-colors">About</Link>
          <Link to="/journal" className="hover:text-velmora-accent transition-colors">Journal</Link>
          <button className="hover:text-velmora-accent transition-colors"><Search size={20} /></button>
          <button onClick={() => setIsOpen(true)} className="relative hover:text-velmora-accent transition-colors">
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-velmora-accent text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-sans tracking-normal">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        <div className="flex lg:hidden flex-1 justify-end items-center gap-4">
             <button onClick={() => setIsOpen(true)} className="relative">
                <ShoppingBag size={22} />
                {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-velmora-accent text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                        {cartCount}
                    </span>
                )}
            </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-white z-[60] flex flex-col p-12 transition-transform duration-500",
        mobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <button className="absolute top-6 right-6" onClick={() => setMobileMenuOpen(false)}>
          <X size={32} />
        </button>
        <div className="flex flex-col gap-8 text-2xl font-serif mt-12">
          <Link to="/shop" onClick={() => setMobileMenuOpen(false)}>Shop</Link>
          <Link to="/collections" onClick={() => setMobileMenuOpen(false)}>Collections</Link>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link to="/journal" onClick={() => setMobileMenuOpen(false)}>Journal</Link>
        </div>
      </div>
    </nav>
  );
}
