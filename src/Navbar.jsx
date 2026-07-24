import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useAtom } from 'jotai';
import { cartCountAtom, isCartOpenAtom } from './lib/store';
import { cn } from './lib/utils';
import { Button } from './components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount] = useAtom(cartCountAtom);
  const [, setIsCartOpen] = useAtom(isCartOpenAtom);
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
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/collections' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex items-center justify-between',
        isScrolled || !isHome ? 'bg-background/95 backdrop-blur-sm border-b' : 'bg-transparent text-white'
      )}
    >
      {/* Left: Logo */}
      <div className="flex-1">
        <Link to="/" className="font-serif text-2xl tracking-[0.2em] font-bold">
          VELMORA
        </Link>
      </div>

      {/* Center: Links (Desktop) */}
      <div className="hidden md:flex items-center gap-10">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="text-xs uppercase tracking-widest font-sans hover:opacity-70 transition-opacity"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Right: Icons */}
      <div className="flex-1 flex justify-end items-center gap-4">
        <button className="p-2 hover:opacity-70 transition-opacity">
          <Search size={20} />
        </button>
        <button 
          className="p-2 hover:opacity-70 transition-opacity relative"
          onClick={() => setIsCartOpen(true)}
        >
          <ShoppingBag size={20} />
          {cartCount > 0 && (
            <span className="absolute top-0 right-0 bg-accent text-accent-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              {cartCount}
            </span>
          )}
        </button>
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[73px] bg-background z-40 md:hidden p-10 flex flex-col gap-8 animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="font-serif text-3xl tracking-widest border-b border-black/5 pb-4"
              onClick={() => setIsMobileMenuOpen(false)}
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
