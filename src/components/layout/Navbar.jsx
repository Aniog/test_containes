import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCart } from '@/lib/CartContext';

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

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' },
  ];

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-6 md:px-12",
        isScrolled || !isHome ? "bg-background/90 backdrop-blur-md py-4 border-b border-border/20" : "bg-transparent text-white"
      )}>
        <div className="max-w-[1600px] mx-auto flex justify-between items-center">
          {/* Left: Logo */}
          <Link to="/" className="font-serif text-2xl tracking-[0.2em] font-medium">
            VELMORA
          </Link>

          {/* Center: Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="text-[10px] uppercase tracking-[0.2em] font-light hover:opacity-60 transition-opacity"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right: Icons */}
          <div className="flex items-center gap-6">
            <button className="hover:opacity-60 transition-opacity">
              <Search className="w-5 h-5 stroke-[1.5px]" />
            </button>
            <button 
              className="relative hover:opacity-60 transition-opacity flex items-center gap-2"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.5px]" />
              {cartCount > 0 && (
                <span className={cn(
                  "absolute -top-1 -right-1 w-4 h-4 bg-primary text-white text-[8px] rounded-full flex items-center justify-center font-bold",
                  (!isScrolled && isHome) && "bg-white text-black"
                )}>
                  {cartCount}
                </span>
              )}
            </button>
            <button 
              className="md:hidden hover:opacity-60 transition-opacity"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6 stroke-[1.5px]" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 z-[60] bg-background transition-transform duration-500 ease-in-out md:hidden",
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="p-8 flex justify-between items-center border-b border-border/20">
          <span className="font-serif text-2xl tracking-widest">VELMORA</span>
          <button onClick={() => setIsMobileMenuOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-12 flex flex-col gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="text-xl font-serif tracking-widest uppercase"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
