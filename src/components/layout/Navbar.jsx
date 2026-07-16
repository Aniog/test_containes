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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6 px-6 md:px-12 flex items-center justify-between',
        isScrolled || !isHome ? 'bg-background/95 backdrop-blur-sm border-b' : 'bg-transparent text-white'
      )}
    >
      {/* Left: Logo */}
      <div className="flex-1">
        <Link to="/" className="text-2xl font-serif tracking-widest font-light">
          VELMORA
        </Link>
      </div>

      {/* Center: Links */}
      <div className="hidden md:flex flex-[2] justify-center items-center gap-10">
        {['Shop', 'Collections', 'About', 'Journal'].map((item) => (
          <Link
            key={item}
            to={`/${item.toLowerCase()}`}
            className="text-sm uppercase tracking-[0.15em] hover:opacity-100 transition-opacity opacity-80"
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Right: Icons */}
      <div className="flex-1 flex justify-end items-center gap-6">
        <button className="hover:opacity-70 transition-opacity">
          <Search size={20} />
        </button>
        <button
          className="relative hover:opacity-70 transition-opacity"
          onClick={() => setIsCartOpen(true)}
        >
          <ShoppingBag size={20} />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-2 bg-accent text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
        <button
          className="md:hidden hover:opacity-70 transition-opacity"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-background z-[60] flex flex-col p-8">
          <div className="flex justify-between items-center mb-12">
            <span className="text-2xl font-serif tracking-widest">VELMORA</span>
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col gap-8">
            {['Shop', 'Collections', 'About', 'Journal'].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="text-xl font-serif uppercase tracking-widest border-b border-border pb-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
