import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../lib/CartContext';
import { cn } from '../../lib/utils';

export default function Header() {
  const { cartCount, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
  }, [location]);

  const headerThemeClasses = isHome && !isScrolled && !isMobileMenuOpen
    ? 'text-white border-transparent bg-transparent'
    : 'text-foreground border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80';

  const logoThemeClasses = isHome && !isScrolled && !isMobileMenuOpen
    ? 'text-white'
    : 'text-foreground';

  return (
    <header className={cn(
      "fixed top-0 w-full z-40 transition-all duration-300 border-b",
      headerThemeClasses
    )}>
      <div className="max-w-[1600px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2 -ml-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <Link 
          to="/" 
          className={cn(
            "font-serif text-2xl lg:text-3xl tracking-[0.2em] uppercase font-semibold transition-colors duration-300 absolute left-1/2 -translate-x-1/2 lg:static lg:transform-none",
            logoThemeClasses
          )}
        >
          Velmora
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          {['Shop', 'Collections', 'About', 'Journal'].map((item) => (
            <Link 
              key={item}
              to={item === 'Shop' ? '/shop' : '#'} 
              className="text-sm tracking-widest uppercase hover:opacity-70 transition-opacity"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button className="p-2 hover:opacity-70 transition-opacity">
            <Search size={20} />
          </button>
          <button 
            className="p-2 hover:opacity-70 transition-opacity relative"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute top-1 right-0 text-[10px] w-4 h-4 bg-accent text-accent-foreground rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 top-20 bg-background text-foreground z-30 transition-transform duration-300 ease-in-out lg:hidden",
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <nav className="flex flex-col p-6 gap-6">
          {['Shop', 'Collections', 'About', 'Journal'].map((item) => (
            <Link 
              key={item}
              to={item === 'Shop' ? '/shop' : '#'} 
              className="font-serif text-2xl uppercase tracking-wider py-4 border-b border-border/50"
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}