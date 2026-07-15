import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Navbar = () => {
  const { totalItems, setIsOpen: setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const transparentNav = false;

  const NavLinks = () => (
    <>
      <Link to="/" className="text-sm uppercase tracking-widest hover:text-muted-foreground transition-colors py-2 md:py-0" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
      <Link to="/shop" className="text-sm uppercase tracking-widest hover:text-muted-foreground transition-colors py-2 md:py-0" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
      <Link to="/shop?category=necklaces" className="text-sm uppercase tracking-widest hover:text-muted-foreground transition-colors py-2 md:py-0" onClick={() => setIsMobileMenuOpen(false)}>Necklaces</Link>
      <Link to="/shop?category=earrings" className="text-sm uppercase tracking-widest hover:text-muted-foreground transition-colors py-2 md:py-0" onClick={() => setIsMobileMenuOpen(false)}>Earrings</Link>
    </>
  );

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-40 transition-all duration-300 border-b bg-background text-foreground shadow-sm"
      )}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Mobile Menu */}
          <div className="md:hidden flex items-center">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <button className="p-2 -ml-2">
                  <Menu className="w-5 h-5 stroke-[1.5]" />
                  <span className="sr-only">Toggle menu</span>
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-background">
                <div className="flex flex-col gap-6 pt-12">
                  <NavLinks />
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Logo */}
          <div className="flex-1 md:flex-none text-center md:text-left pt-1">
            <Link to="/" className="font-serif text-3xl tracking-[0.2em] font-medium block">
              VELMORA
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            <NavLinks />
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button className="p-2 hidden md:block hover:text-muted-foreground transition-colors">
              <Search className="w-5 h-5 stroke-[1.5]" />
              <span className="sr-only">Search</span>
            </button>
            <button 
              className="p-2 relative hover:text-muted-foreground transition-colors"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
              <span className="sr-only">Cart</span>
              {totalItems > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-primary text-[10px] text-primary-foreground flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;