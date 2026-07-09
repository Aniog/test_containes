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

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/collections' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6 px-6 md:px-12',
        isScrolled || !isHome ? 'bg-white border-b border-[#E5E5E5]/50 py-4' : 'bg-transparent text-white'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex-1 md:hidden">
          <button onClick={() => setIsMobileMenuOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 hidden md:block">
           <Link to="/" className="text-2xl font-serif tracking-luxury">VELMORA</Link>
        </div>

        {/* Center: Desktop Links */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-sm tracking-luxury uppercase font-sans hover:opacity-70 transition-opacity"
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        {/* Mobile Logo Visibility */}
        <div className="md:hidden absolute left-1/2 -translate-x-1/2">
           <Link to="/" className="text-2xl font-serif tracking-luxury">VELMORA</Link>
        </div>

        {/* Right: Icons */}
        <div className="flex-1 flex items-center justify-end space-x-6">
          <button className="hidden md:block">
            <Search className="w-5 h-5" />
          </button>
          <button onClick={() => setIsCartOpen(true)} className="relative">
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#9D8C70] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-[60] flex flex-col p-8">
          <button onClick={() => setIsMobileMenuOpen(false)} className="self-end mb-12">
            <X className="w-8 h-8 text-[#1A1A1A]" />
          </button>
          <div className="flex flex-col space-y-8">
             {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-serif text-[#1A1A1A]"
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
