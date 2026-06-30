import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { setIsCartOpen, cartCount } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/#collections' },
    { name: 'About', path: '/#about' },
    { name: 'Journal', path: '/#journal' },
  ];

  const isHome = location.pathname === '/';

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-luxury ${
        isScrolled || isMobileMenuOpen 
          ? 'bg-[#FDFCF8] py-4 border-b border-[#E5E5E5]' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Mobile Menu Trigger */}
        <button 
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Logo */}
        <Link 
          to="/" 
          className={`font-serif text-2xl tracking-[0.3em] font-medium transition-luxury ${
            !isScrolled && isHome && !isMobileMenuOpen ? 'text-[#1A1A1A]' : 'text-[#1A1A1A]'
          }`}
        >
          VELMORA
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path}
              className="text-[11px] uppercase tracking-[0.2em] font-medium hover:text-[#C5A059] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button className="p-2 hover:opacity-60 transition-opacity hidden sm:block">
            <Search className="w-5 h-5" />
          </button>
          <button 
            onClick={() => setIsCartOpen(true)}
            className="p-2 hover:opacity-60 transition-opacity relative"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 bg-[#1A1A1A] text-white text-[8px] w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#FDFCF8] border-b border-[#E5E5E5] overflow-hidden"
          >
            <div className="px-8 py-10 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-serif tracking-widest uppercase"
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-[1px] bg-[#E5E5E5] w-20" />
              <button className="text-[11px] uppercase tracking-widest font-medium text-left">
                Search
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
