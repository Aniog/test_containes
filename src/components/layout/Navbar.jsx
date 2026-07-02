import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
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
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Shop', href: '/shop' },
    { name: 'Collections', href: '/shop?category=Collections' },
    { name: 'About', href: '/about' },
    { name: 'Journal', href: '/journal' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 px-6 md:px-12 flex items-center justify-between',
        isScrolled || !isHome
          ? 'bg-background/95 backdrop-blur-sm border-b border-zinc-100 py-3'
          : 'bg-transparent text-white'
      )}
    >
      {/* Left: Logo */}
      <div className="flex-1">
        <Link
          to="/"
          className={cn(
            'text-2xl font-serif tracking-super-wide font-light',
            !isScrolled && isHome ? 'text-white' : 'text-primary'
          )}
        >
          VELMORA
        </Link>
      </div>

      {/* Center: Desktop Links */}
      <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.href}
            className={cn(
              'text-xs font-sans uppercase tracking-widest hover:opacity-100 transition-opacity',
              !isScrolled && isHome ? 'text-white/80' : 'text-zinc-600 hover:text-primary'
            )}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Right: Icons */}
      <div className="flex-1 flex items-center justify-end gap-5">
        <button
          className={cn(
            'p-1 transition-colors',
            !isScrolled && isHome ? 'hover:text-white/70' : 'hover:text-accent'
          )}
        >
          <Search size={20} strokeWidth={1.5} />
        </button>
        <button
          onClick={() => setIsCartOpen(true)}
          className={cn(
            'p-1 flex items-center gap-1.5 transition-colors group',
            !isScrolled && isHome ? 'hover:text-white/70' : 'hover:text-accent'
          )}
        >
          <ShoppingBag size={20} strokeWidth={1.5} />
          <span className="text-[10px] font-sans font-medium">{cartCount}</span>
        </button>
        <button
          className="md:hidden p-1"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={20} strokeWidth={1.5} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-background z-[60] flex flex-col p-8"
          >
            <div className="flex justify-end mb-12">
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X size={28} strokeWidth={1} />
              </button>
            </div>
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-serif text-primary uppercase tracking-widest"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
