import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { cn } from '@/lib/utils';

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

  const bgColorClass = isScrolled 
    ? "bg-velmora-base border-b border-velmora-surface/50 py-4 shadow-sm" 
    : isHome 
      ? "bg-transparent py-6 text-white" 
      : "bg-velmora-base py-6 text-velmora-primary";

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 md:px-12",
      bgColorClass
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Mobile Menu Toggle / Logo */}
        <div className="flex items-center gap-4 md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="flex-1 hidden md:block">
           <Link to="/" className="text-2xl font-serif tracking-widest font-semibold">VELMORA</Link>
        </div>

        {/* Center: Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="uppercase-spacing text-xs font-medium hover:text-velmora-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="md:hidden flex-1 text-center">
            <Link to="/" className="text-xl font-serif tracking-widest font-semibold text-center">VELMORA</Link>
        </div>

        {/* Right: Icons */}
        <div className="flex-1 flex items-center justify-end gap-5">
          <button className="hover:text-velmora-accent transition-colors">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button 
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-1 hover:text-velmora-accent transition-colors relative"
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-velmora-accent text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-velmora-base z-40 transition-transform duration-500 ease-in-out md:hidden flex flex-col items-center justify-center gap-8",
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <button 
            className="absolute top-6 left-6"
            onClick={() => setIsMobileMenuOpen(false)}
        >
            <X size={24} />
        </button>
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            to={link.path}
            className="text-2xl font-serif uppercase tracking-[0.2em]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
