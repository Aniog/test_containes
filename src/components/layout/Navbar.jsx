import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
  const { cartCount, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    { name: 'Collections', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Journal', href: '#' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500',
        isScrolled || !isHome ? 'bg-background/95 backdrop-blur-md py-4 border-b border-border/40' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex-1 lg:hidden">
          <button onClick={() => setIsMobileMenuOpen(true)}>
            <Menu className={cn("w-6 h-6", (isScrolled || !isHome) ? "text-foreground" : "text-white")} />
          </button>
        </div>

        <div className="flex-1 hidden lg:block">
          <Link
            to="/"
            className={cn(
              'font-serif text-2xl tracking-widest',
              (isScrolled || !isHome) ? 'text-foreground' : 'text-white'
            )}
          >
            VELMORA
          </Link>
        </div>

        {/* Center: Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                'uppercase-spaced text-xs font-medium hover:text-accent transition-colors',
                (isScrolled || !isHome) ? 'text-foreground' : 'text-white'
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right: Icons */}
        <div className="flex-1 flex justify-end items-center gap-5 relative">
           {/* Mobile Logo centered */}
          <Link
            to="/"
            className={cn(
              'lg:hidden font-serif text-xl tracking-widest absolute left-1/2 -translate-x-1/2',
              (isScrolled || !isHome) ? 'text-foreground' : 'text-white'
            )}
          >
            VELMORA
          </Link>

          <button className={cn((isScrolled || !isHome) ? 'text-foreground' : 'text-white')}>
            <Search className="w-5 h-5" />
          </button>
          <button 
            onClick={() => setIsCartOpen(true)}
            className={cn('relative', (isScrolled || !isHome) ? 'text-foreground' : 'text-white')}
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-background z-[60] flex flex-col p-8">
          <div className="flex justify-between items-center mb-12">
            <span className="font-serif text-2xl tracking-widest">VELMORA</span>
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-serif text-3xl hover:text-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="mt-auto border-t border-border pt-8 flex flex-col gap-4 text-muted-foreground uppercase-spaced text-[10px]">
            <Link to="#">Login</Link>
            <Link to="#">Currency: USD</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
