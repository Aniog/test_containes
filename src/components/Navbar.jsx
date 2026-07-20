import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { cn } from '@/lib/utils';
import CartDrawer from './CartDrawer';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { openCart, cartCount } = useCartStore();
  const count = cartCount();
  
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navClasses = cn(
    "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 border-b",
    {
      "bg-background/95 backdrop-blur-md border-brand-border text-brand-charcoal": isScrolled || !isHome || isMobileMenuOpen,
      "bg-transparent border-transparent text-white": !isScrolled && isHome && !isMobileMenuOpen,
    }
  );

  return (
    <>
      <nav className={navClasses}>
        <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          
          {/* Mobile Menu Toggle */}
          <div className="xl:hidden flex-1">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <button className="p-2 -ml-2" aria-label="Menu">
                  <Menu className="w-5 h-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-background">
                <nav className="flex flex-col gap-6 mt-12">
                  <Link to="/shop" className="text-xl font-serif text-brand-charcoal tracking-wide hover:text-brand-gold transition-colors">SHOP ALL</Link>
                  <Link to="/shop?category=earrings" className="text-xl font-serif text-brand-charcoal tracking-wide hover:text-brand-gold transition-colors">EARRINGS</Link>
                  <Link to="/shop?category=necklaces" className="text-xl font-serif text-brand-charcoal tracking-wide hover:text-brand-gold transition-colors">NECKLACES</Link>
                  <Link to="/about" className="text-xl font-serif text-brand-charcoal tracking-wide hover:text-brand-gold transition-colors">ABOUT</Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Links (Left) */}
          <div className="hidden xl:flex flex-1 gap-8 items-center">
            <Link to="/shop" className="text-sm tracking-[0.15em] hover:opacity-70 transition-opacity">SHOP</Link>
            <Link to="/shop?category=necklaces" className="text-sm tracking-[0.15em] hover:opacity-70 transition-opacity">COLLECTIONS</Link>
            <Link to="/about" className="text-sm tracking-[0.15em] hover:opacity-70 transition-opacity">ABOUT</Link>
          </div>

          {/* Logo (Center) */}
          <div className="flex-1 flex justify-center">
            <Link to="/" className="font-serif text-3xl tracking-[0.2em] font-medium leading-none">
              VELMORA
            </Link>
          </div>

          {/* Icons (Right) */}
          <div className="flex-1 flex justify-end items-center gap-4 md:gap-6">
            <button className="p-2 -mr-2 hover:opacity-70 transition-opacity aria-label='Search'">
              <Search className="w-5 h-5" />
            </button>
            <button 
              className="p-2 -mr-2 hover:opacity-70 transition-opacity relative"
              onClick={openCart}
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {count > 0 && (
                <span className="absolute top-1 right-1 bg-brand-gold text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>
          </div>

        </div>
      </nav>
      
      <CartDrawer />
    </>
  );
};

export default Navbar;