import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const setIsCartOpen = useCartStore((state) => state.setIsOpen);
  const cartItems = useCartStore((state) => state.items);
  
  const isHome = location.pathname === '/';
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isHome && !isScrolled 
      ? 'bg-transparent text-white border-transparent' 
      : 'bg-background/95 backdrop-blur-md text-foreground border-b border-border/40 shadow-sm'
  }`;

  const navLinks = [
    { name: 'Shop', path: '/collections/all' },
    { name: 'Collections', path: '/collections/all' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' },
  ];

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Mobile Menu */}
        <div className="md:hidden flex-1">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={isHome && !isScrolled ? 'text-white hover:text-white/80' : ''}>
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-10">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    to={link.path}
                    className="text-lg uppercase tracking-wider font-medium hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo */}
        <div className="flex-1 md:flex-none text-center md:text-left">
          <Link to="/" className="text-2xl md:text-3xl font-serif tracking-widest uppercase">
            VELMORA
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex flex-1 justify-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`text-sm uppercase tracking-widest hover:text-primary transition-colors ${
                isHome && !isScrolled ? 'text-white/90 hover:text-white' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Icons */}
        <div className="flex-1 flex justify-end items-center gap-2 md:gap-4">
          <Button variant="ghost" size="icon" className={isHome && !isScrolled ? 'text-white hover:text-white/80' : ''}>
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className={`relative ${isHome && !isScrolled ? 'text-white hover:text-white/80' : ''}`}
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
            <span className="sr-only">Cart</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
