import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

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

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/shop?category=Collections' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' },
  ];

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6 px-6 md:px-12 flex items-center justify-between',
          isScrolled || !isHome ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent text-white'
        )}
      >
        <div className="flex items-center gap-8 lg:flex-1">
          <button 
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </button>
          
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-xs uppercase tracking-[0.2em] hover:opacity-60 transition-opacity"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <Link
          to="/"
          className={cn(
            "text-2xl md:text-3xl font-serif tracking-[0.3em] transition-colors duration-500",
            isScrolled || !isHome ? "text-primary" : "text-white"
          )}
        >
          VELMORA
        </Link>

        <div className="flex items-center justify-end gap-6 lg:flex-1">
          <button className="hidden md:block hover:opacity-60 transition-opacity text-primary">
             <Search className={cn("w-5 h-5", isScrolled || !isHome ? "text-primary" : "text-white")} />
          </button>
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative hover:opacity-60 transition-opacity"
          >
            <ShoppingBag className={cn("w-5 h-5", isScrolled || !isHome ? "text-primary" : "text-white")} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-white text-primary p-8 flex flex-col"
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-8 right-8"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="mt-20 flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-serif tracking-wider"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <div className="mt-auto pt-8 border-t border-black/5 flex flex-col gap-4">
               <Link to="/account" className="text-sm uppercase tracking-widest">My Account</Link>
               <Link to="/wishlist" className="text-sm uppercase tracking-widest">Wishlist</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
