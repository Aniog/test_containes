import { ShoppingBag, Search, Menu, X, Plus, Minus } from 'lucide-react';
import { useCartStore } from '@/lib/store';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export function Navigation() {
  const { isOpen, toggleCart, items } = useCartStore();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 w-full z-40 transition-all duration-300",
          isScrolled 
            ? "bg-background/95 backdrop-blur-sm shadow-sm py-4 border-b border-border" 
            : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          <div className="flex items-center gap-4 hidden md:flex w-1/3">
            <Link to="/shop" className="text-sm font-medium hover:text-primary transition-colors tracking-widest uppercase">Shop</Link>
            <Link to="/collections" className="text-sm font-medium hover:text-primary transition-colors tracking-widest uppercase">Collections</Link>
            <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors tracking-widest uppercase">About</Link>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Menu className="w-6 h-6" />
            </button>
          </div>

          <Link to="/" className="text-2xl md:text-3xl font-serif tracking-widest uppercase font-semibold text-center w-1/3">
            Velmora
          </Link>

          <div className="flex items-center justify-end gap-6 w-1/3">
            <button className="hidden md:block hover:text-primary transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button 
              className="relative hover:text-primary transition-colors group"
              onClick={toggleCart}
            >
              <ShoppingBag className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-background pt-24 px-6 flex flex-col gap-6"
          >
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 left-4"
            >
              <X className="w-6 h-6" />
            </button>
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-xl font-serif tracking-widest uppercase border-b border-border pb-4">Home</Link>
            <Link to="/shop" onClick={() => setMobileMenuOpen(false)} className="text-xl font-serif tracking-widest uppercase border-b border-border pb-4">Shop All</Link>
            <Link to="/collections" onClick={() => setMobileMenuOpen(false)} className="text-xl font-serif tracking-widest uppercase border-b border-border pb-4">Collections</Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="text-xl font-serif tracking-widest uppercase border-b border-border pb-4">Story</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}