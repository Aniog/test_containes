import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../lib/CartContext';
import { cn } from '../../lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { cartCount, setIsCartOpen } = useCart();

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
    { name: 'Collections', path: '/#collections' },
    { name: 'About', path: '/#about' },
    { name: 'Journal', path: '/#journal' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500 font-sans',
        isScrolled || !isHome
          ? 'bg-background/90 backdrop-blur-md py-4 border-b border-hairline border-accent/20'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Left: Branding */}
        <Link 
          to="/" 
          className={cn(
            "text-2xl font-serif tracking-widest transition-colors",
            !isScrolled && isHome ? "text-background" : "text-foreground"
          )}
        >
          VELMORA
        </Link>

        {/* Center: Desktop Links */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-xs uppercase tracking-widest hover:text-accent transition-colors",
                !isScrolled && isHome ? "text-background/90" : "text-foreground/80"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right: Icons */}
        <div className="flex items-center space-x-6">
          <button 
            className={cn(
              "transition-colors",
              !isScrolled && isHome ? "text-background/90 hover:text-background" : "text-foreground/80 hover:text-foreground"
            )}
          >
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button 
            onClick={() => setIsCartOpen(true)}
            className={cn(
              "relative transition-colors",
              !isScrolled && isHome ? "text-background/90 hover:text-background" : "text-foreground/80 hover:text-foreground"
            )}
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-accent text-background text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>
          <button 
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-background z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="text-2xl font-serif tracking-widest uppercase text-foreground hover:text-accent"
          >
            {link.name}
          </Link>
        ))}
        <button 
          className="absolute top-6 right-6 text-foreground"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <X size={32} strokeWidth={1} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
