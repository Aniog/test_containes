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
        'fixed top-0 left-0 w-full z-50 transition-all duration-500',
        isScrolled || !isHome
          ? 'bg-background py-4 shadow-sm'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>

        {/* Brand Logo */}
        <Link
          to="/"
          className={cn(
            'text-2xl font-serif tracking-widest absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0',
            !isScrolled && isHome ? 'text-white lg:text-foreground' : 'text-foreground'
          )}
        >
          VELMORA
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'text-xs uppercase tracking-widest transition-colors hover:text-accent',
                !isScrolled && isHome ? 'text-white' : 'text-foreground'
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Icons */}
        <div className={cn(
          "flex items-center space-x-6",
          !isScrolled && isHome ? 'text-white' : 'text-foreground'
        )}>
          <button className="hover:text-accent transition-colors">
            <Search size={20} />
          </button>
          <button
            className="hover:text-accent transition-colors relative"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-accent text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-background z-[60] transition-transform duration-500 lg:hidden',
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="p-6 h-full flex flex-col">
          <div className="flex justify-between items-center mb-12">
            <span className="text-xl font-serif tracking-widest">VELMORA</span>
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-lg font-serif tracking-wide border-b border-platinum pb-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
