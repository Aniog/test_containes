import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';

const Header = () => {
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
    { name: 'Collections', href: '/collections' },
    { name: 'About', href: '/about' },
    { name: 'Journal', href: '/journal' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 md:px-12',
        isScrolled || !isHome
          ? 'bg-white text-black border-b border-[#E5E5E5]'
          : 'bg-transparent text-white'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex-1 lg:flex-none">
          <Link
            to="/"
            className="text-2xl font-serif tracking-widest font-bold"
          >
            VELMORA
          </Link>
        </div>

        {/* Center: Desktop Links */}
        <nav className="hidden lg:flex flex-1 items-center justify-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-sm font-medium tracking-wide uppercase hover:text-gold transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right: Icons */}
        <div className="flex-1 lg:flex-none flex items-center justify-end gap-5">
          <button className="hidden md:block hover:text-gold transition-colors">
            <Search size={22} />
          </button>
          
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative hover:text-gold transition-colors"
          >
            <ShoppingBag size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          <button
            className="lg:hidden hover:text-gold transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white text-black p-6 border-b border-[#E5E5E5] lg:hidden animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-lg font-serif uppercase tracking-widest text-[#1A1A1A]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
