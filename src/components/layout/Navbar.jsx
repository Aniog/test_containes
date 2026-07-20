import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { cn } from '../../lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { setIsOpen: setCartOpen, cartItemsCount } = useCart();
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
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/collections' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled || !isHome
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm py-4 text-foreground'
          : 'bg-transparent py-6 text-white'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 -ml-2"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Logo */}
        <Link 
          to="/" 
          className="font-serif text-2xl md:text-3xl tracking-widest uppercase relative z-10"
        >
          Velmora
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-sm tracking-widest uppercase hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:text-primary transition-colors hidden md:block" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          
          <button 
            className="p-2 hover:text-primary transition-colors relative"
            onClick={() => setCartOpen(true)}
            aria-label="Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartItemsCount > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold leading-none text-background bg-foreground rounded-full transform translate-x-1/4 -translate-y-1/4">
                {cartItemsCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-background text-foreground z-50 flex flex-col md:hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <Link to="/" className="font-serif text-2xl tracking-widest uppercase">
              Velmora
            </Link>
            <button 
              className="p-2 -mr-2"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex flex-col p-6 space-y-6 flex-grow">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-lg tracking-widest uppercase border-b border-border pb-4"
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-8">
               <button className="flex items-center space-x-2 text-sm tracking-widest uppercase w-full pb-4 border-b border-border">
                 <Search className="w-4 h-4" />
                 <span>Search</span>
               </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}