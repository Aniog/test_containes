import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CartDrawer } from '@/components/CartDrawer';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeScrollEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Shop All', path: '/shop' },
    { name: 'Collections', path: '/collections' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' },
  ];

  const headerClass = cn(
    "fixed top-0 w-full z-50 transition-all duration-300 border-b",
    isScrolled || !isHome || mobileMenuOpen
      ? "bg-background/95 backdrop-blur-md border-border/40 py-4"
      : "bg-transparent border-transparent py-6",
    !isScrolled && isHome && !mobileMenuOpen ? "text-white" : "text-foreground"
  );

  return (
    <header className={headerClass}>
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <div className="flex md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="hover:bg-transparent">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        <nav className="hidden md:flex gap-8 flex-1">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="text-sm tracking-wide font-medium hover:opacity-70 transition-opacity uppercase"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex-1 md:flex-none text-center">
          <Link to="/" className="font-serif text-2xl md:text-3xl tracking-[0.2em] font-semibold uppercase">
            Velmora
          </Link>
        </div>

        <div className="flex flex-1 justify-end items-center gap-2 md:gap-4">
          <Button variant="ghost" size="icon" className="hover:bg-transparent hidden md:inline-flex">
            <Search className="h-5 w-5" />
          </Button>
          <CartDrawer />
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "absolute top-full left-0 w-full bg-background border-b border-border/40 overflow-hidden transition-all duration-300 md:hidden",
        mobileMenuOpen ? "h-[calc(100vh-73px)] py-8 border-b" : "h-0 py-0 border-transparent"
      )}>
        <nav className="flex flex-col items-center gap-8 text-foreground p-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="font-serif text-2xl tracking-widest uppercase hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}