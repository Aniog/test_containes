import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = ({ cartCount = 0, onCartClick }) => {
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

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/shop' },
    { name: 'About', path: '/' },
    { name: 'Journal', path: '/' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-editorial duration-500',
        isScrolled || !isHome || isMobileMenuOpen
          ? 'bg-background py-4 shadow-sm'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 -ml-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Nav Links - Left (Desktop) */}
          <div className="hidden md:flex items-center space-x-8 flex-1">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-xs uppercase tracking-widest hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Logo - Center */}
          <Link
            to="/"
            className="flex-1 flex justify-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="font-serif text-2xl md:text-3xl tracking-[0.2em] font-medium italic">
              VELMORA
            </span>
          </Link>

          {/* Nav Links - Right (Desktop) */}
          <div className="hidden md:flex items-center justify-end space-x-8 flex-1">
             {navLinks.slice(2).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-xs uppercase tracking-widest hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center space-x-5 pl-4 ml-4 border-l border-border">
              <button className="hover:text-primary transition-colors">
                <Search size={18} strokeWidth={1.5} />
              </button>
              <button 
                className="hover:text-primary transition-colors relative"
                onClick={onCartClick}
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Navigation - Right (Mobile) */}
          <div className="md:hidden flex items-center space-x-4">
            <button className="hover:text-primary transition-colors">
              <Search size={18} strokeWidth={1.5} />
            </button>
            <button 
              className="hover:text-primary transition-colors relative"
              onClick={onCartClick}
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 top-[60px] bg-background z-40 transition-editorial transform md:hidden',
          isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        )}
      >
        <div className="flex flex-col p-8 space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-lg font-serif tracking-widest uppercase py-2 border-b border-border"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 flex flex-col space-y-4">
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Account</span>
            <Link to="/account" className="text-sm uppercase tracking-widest">Login</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
