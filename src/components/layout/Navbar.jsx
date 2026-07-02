import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { cn } from '@/lib/utils';

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

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 md:px-12',
        isScrolled || !isHome
          ? 'bg-white/95 backdrop-blur-sm border-b-[0.5px] border-slate-200'
          : 'bg-transparent text-white'
      )}
    >
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex-1 lg:flex-none">
          <Link
            to="/"
            className="font-serif text-2xl tracking-[0.1em] font-medium"
          >
            VELMORA
          </Link>
        </div>

        {/* Center: Links (Desktop) */}
        <div className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          {['Shop', 'Collections', 'About', 'Journal'].map((link) => (
            <Link
              key={link}
              to={link === 'Shop' ? '/shop' : '#'}
              className="text-sm font-sans tracking-widest uppercase hover:opacity-60 transition-opacity"
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Right: Icons */}
        <div className="flex items-center gap-6 justify-end flex-1 lg:flex-none">
          <button className="hidden md:block hover:opacity-60 transition-opacity">
            <Search className="w-5 h-5 stroke-[1.5px]" />
          </button>
          <button
            className="relative hover:opacity-60 transition-opacity"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag className="w-5 h-5 stroke-[1.5px]" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 text-[10px] w-4 h-4 bg-[#C5A059] text-white rounded-full flex items-center justify-center font-sans tracking-tighter">
                {cartCount}
              </span>
            )}
          </button>
          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[73px] bg-white z-[60] flex flex-col p-8 space-y-8 animate-in fade-in slide-in-from-top-4 duration-300">
          {['Shop', 'Collections', 'About', 'Journal'].map((link) => (
            <Link
              key={link}
              to={link === 'Shop' ? '/shop' : '#'}
              className="text-2xl font-serif tracking-widest uppercase border-b-[0.5px] border-slate-100 pb-4"
            >
              {link}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
