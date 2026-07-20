import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { cn } from '@/lib/utils';

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
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/collections' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' }
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4 flex items-center justify-between",
        isScrolled || !isHome ? "bg-white text-brand-dark shadow-sm" : "bg-transparent text-white"
      )}
    >
      <div className="flex-1">
        <Link to="/" className="text-2xl font-serif tracking-tighter hover:opacity-80 transition-opacity">
          VELMORA
        </Link>
      </div>

      <div className="hidden md:flex items-center space-x-8">
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            to={link.path} 
            className="text-sm uppercase tracking-widest hover:text-brand-gold transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="flex-1 flex items-center justify-end space-x-6">
        <button className="hover:text-brand-gold transition-colors">
          <Search size={20} />
        </button>
        <button 
          onClick={() => setIsCartOpen(true)}
          className="relative hover:text-brand-gold transition-colors"
        >
          <ShoppingBag size={20} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-brand-gold text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </button>
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white text-brand-dark md:hidden border-t">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="text-lg uppercase tracking-widest"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
