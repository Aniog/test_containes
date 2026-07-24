import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../lib/CartContext';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
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
    { name: 'Shop All', path: '/shop' },
    { name: 'Collections', path: '/shop?category=collections' },
    { name: 'Our Story', path: '/#story' },
  ];

  const headerClass = cn(
    'fixed top-0 w-full z-40 transition-all duration-300',
    isScrolled || !isHome || isMobileMenuOpen
      ? 'bg-background/95 backdrop-blur-sm shadow-sm border-b'
      : 'bg-transparent text-white'
  );

  const iconClass = cn(
    'w-5 h-5 transition-colors',
    isScrolled || !isHome || isMobileMenuOpen ? 'text-foreground' : 'text-white'
  );

  const linkClass = cn(
    'text-sm tracking-wide uppercase transition-colors hover:text-accent font-medium',
    isScrolled || !isHome || isMobileMenuOpen ? 'text-foreground/80' : 'text-white/90'
  );

  return (
    <>
      <header className={headerClass}>
        {/* Top Announcement Bar */}
        <div className="bg-primary text-primary-foreground text-xs text-center py-2 font-medium tracking-wide">
          COMPLIMENTARY SHIPPING ON ALL US ORDERS
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 -ml-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={iconClass} />
            ) : (
              <Menu className={iconClass} />
            )}
          </button>

          {/* Logo */}
          <Link 
            to="/" 
            className={cn(
              "font-heading text-2xl tracking-widest absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 transition-colors",
              isScrolled || !isHome || isMobileMenuOpen ? "text-foreground" : "text-white"
            )}
          >
            VELMORA
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} className={linkClass}>
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4 lg:gap-6">
            <button className="p-2 -mr-2 hidden sm:block">
              <Search className={iconClass} />
            </button>
            <button 
              className="p-2 -mr-2 relative"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag className={iconClass} />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-accent text-accent-foreground text-[10px] font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 pt-28 bg-background px-4"
          >
            <nav className="flex flex-col gap-6 font-heading text-2xl tracking-wide">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className="py-2 border-b border-border text-foreground hover:text-accent transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
