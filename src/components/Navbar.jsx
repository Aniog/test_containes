import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
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

  const navLinks = [
    { name: 'Shop', href: '/shop' },
    { name: 'Collections', href: '/shop' },
    { name: 'About', href: '/about' },
    { name: 'Journal', href: '/journal' },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4 md:px-12",
        isScrolled || !isHome || isMobileMenuOpen
          ? "bg-background/95 backdrop-blur-md border-b border-border py-3 shadow-sm text-primary"
          : "bg-transparent text-white"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex-1 flex items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden mr-2 hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
          <Link to="/" className="text-2xl font-serif tracking-widest">
            VELMORA
          </Link>
        </div>

        {/* Center: Desktop Nav */}
        <div className="hidden md:flex flex-1 justify-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href}
              className="text-xs font-bold tracking-[0.2em] hover:text-accent transition-colors"
            >
              {link.name.toUpperCase()}
            </Link>
          ))}
        </div>

        {/* Right: Icons */}
        <div className="flex-1 flex items-center justify-end space-x-4">
          <Button variant="ghost" size="icon" className="hidden sm:inline-flex hover:bg-white/10">
            <Search size={20} />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="relative hover:bg-white/10"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border p-6 flex flex-col space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-serif tracking-wide border-b border-border/50 pb-2"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/account" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-lg font-serif tracking-wide border-b border-border/50 pb-2"
          >
            Account
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
