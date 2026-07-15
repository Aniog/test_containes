import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { cartCount, setIsCartOpen } = useCart();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Shop All', path: '/shop' },
    { name: 'Collections', path: '/shop?collection=new' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 py-4 flex items-center justify-between',
        isScrolled || !isHome
          ? 'bg-background/95 backdrop-blur-sm border-b'
          : 'bg-transparent text-white'
      )}
    >
      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Brand Logo - Left */}
      <Link to="/" className="text-2xl font-serif tracking-widest font-bold">
        VELMORA
      </Link>

      {/* Nav Links - Center (Desktop) */}
      <div className="hidden md:flex items-center space-x-8">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="text-xs uppercase tracking-widestest font-medium hover:opacity-70 transition-opacity"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Icons - Right */}
      <div className="flex items-center space-x-4">
        <button className="hover:opacity-70 transition-opacity">
          <Search size={20} />
        </button>
        <button
          className="relative hover:opacity-70 transition-opacity"
          onClick={() => setIsCartOpen(true)}
        >
          <ShoppingBag size={20} />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] w-4 h-4 flex items-center justify-center rounded-full scale-90">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[73px] bg-background z-40 md:hidden flex flex-col p-8 space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-lg font-serif tracking-widest"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
