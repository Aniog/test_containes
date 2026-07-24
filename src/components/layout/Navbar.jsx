import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { cn } from '../../lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Shop', path: '/collections/all' },
    { name: 'Collections', path: '/collections/all' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' }
  ];

  const transparentNavbar = isHomePage && !isScrolled && !isMobileMenuOpen;

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-40 transition-all duration-300 ease-in-out border-b",
        transparentNavbar 
          ? "bg-transparent border-transparent text-white" 
          : "bg-background border-border/50 text-foreground shadow-sm"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        {/* Left: Mobile Menu Toggle / Desktop Empty Space to balance center logo if needed */}
        <div className="flex-1 flex items-center">
          <button 
            className="md:hidden p-2 -ml-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          
          <div className="hidden md:flex flex-1" />
        </div>

        {/* Center: Logo & Desktop Links (or just logo depending on design) */}
        <div className="flex-[2] flex flex-col md:flex-row items-center justify-center gap-8">
          <Link to="/" className="font-serif text-3xl font-medium tracking-[0.2em] uppercase origin-center transition-transform hover:scale-105">
            VELMORA
          </Link>
          
          <nav className="hidden md:flex items-center gap-8 text-sm tracking-widest uppercase font-medium">
            {navLinks.map(link => (
              <Link key={link.name} to={link.path} className="relative group overflow-hidden pb-1">
                <span className="relative z-10">{link.name}</span>
                <span className={cn(
                  "absolute bottom-0 left-0 w-full h-[1px] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300",
                  transparentNavbar ? "bg-white" : "bg-foreground"
                )} />
              </Link>
            ))}
          </nav>
        </div>

        {/* Right: Icons */}
        <div className="flex-1 flex items-center justify-end gap-4">
          <button className="p-2 hover:opacity-70 transition-opacity">
            <Search className="w-5 h-5" />
          </button>
          <button 
            className="p-2 hover:opacity-70 transition-opacity relative group"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center transform group-hover:scale-110 transition-transform">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden absolute top-[79px] left-0 w-full bg-background text-foreground border-b border-border transition-all duration-300 overflow-hidden",
        isMobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
      )}>
        <nav className="flex flex-col container mx-auto px-6 py-4 space-y-6">
          {navLinks.map(link => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="font-serif text-xl tracking-wider uppercase border-b border-border/30 pb-4"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
