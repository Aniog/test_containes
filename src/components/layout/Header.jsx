import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
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

  const headerBg = isHome && !isScrolled ? 'bg-transparent text-white' : 'bg-background/95 backdrop-blur-md text-foreground border-b border-border/50';
  const logoColor = isHome && !isScrolled ? 'text-white' : 'text-foreground';

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${headerBg}`}>
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2 -ml-2">
                <Menu className="w-5 h-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] flex flex-col pt-16">
              <nav className="flex flex-col gap-6 text-lg">
                <Link to="/collections">Shop</Link>
                <Link to="/collections">Collections</Link>
                <Link to="#">About</Link>
                <Link to="#">Journal</Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Nav - Left */}
        <nav className="hidden md:flex items-center gap-8 w-1/3">
          <Link to="/collections" className="text-sm tracking-wide uppercase hover:text-accent transition-colors">Shop</Link>
          <Link to="/collections" className="text-sm tracking-wide uppercase hover:text-accent transition-colors">Collections</Link>
        </nav>

        {/* Logo - Center */}
        <div className="w-1/3 flex justify-center">
          <Link to="/" className={`font-serif text-3xl tracking-[0.2em] ${logoColor}`}>
            VELMORA
          </Link>
        </div>

        {/* Desktop Nav & Icons - Right */}
        <div className="w-1/3 flex justify-end items-center gap-6">
          <nav className="hidden md:flex items-center gap-8 mr-4">
            <Link to="#" className="text-sm tracking-wide uppercase hover:text-accent transition-colors">About</Link>
            <Link to="#" className="text-sm tracking-wide uppercase hover:text-accent transition-colors">Journal</Link>
          </nav>
          
          <button className="p-2 hover:text-accent transition-colors">
            <Search className="w-5 h-5" />
          </button>
          
          <button 
            className="p-2 relative hover:text-accent transition-colors"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 bg-accent text-accent-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
