import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useStore } from '@/lib/store';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const { cart, setIsCartOpen } = useStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const navClass = cn(
    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
    {
      "bg-background/95 backdrop-blur-md border-border text-foreground shadow-sm": isScrolled || !isHome,
      "bg-transparent text-primary-foreground": isHome && !isScrolled,
    }
  );

  const links = [
    { name: "Shop", path: "/shop" },
    { name: "Collections", path: "/collections" },
    { name: "About", path: "/about" },
    { name: "Journal", path: "/journal" },
  ];

  return (
    <header className={navClass}>
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        
        {/* Mobile Menu */}
        <div className="md:hidden flex items-center">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <button aria-label="Menu" className="p-2 -ml-2">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-6 mt-12">
                {links.map((link) => (
                  <Link 
                    key={link.name} 
                    to={link.path}
                    className="text-2xl font-heading hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo */}
        <Link to="/" className="text-2xl md:text-3xl font-heading tracking-[0.2em] font-medium z-10 absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
          VELMORA
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2">
          {links.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="text-sm font-medium tracking-wide uppercase hover:opacity-70 transition-opacity"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <button aria-label="Search" className="p-2 hidden md:block hover:opacity-70 transition-opacity">
            <Search className="w-5 h-5 pointer-events-none" />
          </button>
          <button 
            aria-label="Cart" 
            className="p-2 relative hover:opacity-70 transition-opacity"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag className="w-5 h-5 pointer-events-none" />
            {cartItemCount > 0 && (
              <span className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center translate-x-1 -translate-y-1">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}