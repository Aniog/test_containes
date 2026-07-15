import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCart } from '@/lib/cart-context';
import { Button } from '@/components/ui/button';

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

  const navLinks = [
    { name: 'Shop', href: '/shop' },
    { name: 'Collections', href: '/collections' },
    { name: 'About', href: '/about' },
    { name: 'Journal', href: '/journal' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 py-4 flex items-center justify-between',
        isScrolled || !isHome || isMobileMenuOpen
          ? 'bg-background/95 backdrop-blur-md border-b border-border py-3'
          : 'bg-transparent py-6'
      )}
    >
      {/* Left Interface (Mobile Menu Icon) */}
      <div className="flex md:hidden items-center w-1/3">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 -ml-2 text-foreground"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Logo */}
      <div className="flex justify-center md:justify-start w-1/3">
        <Link
          to="/"
          className={cn(
            "font-serif text-2xl tracking-[0.25em] transition-colors duration-300",
            isScrolled || !isHome ? "text-foreground" : "text-foreground md:text-white"
          )}
        >
          VELMORA
        </Link>
      </div>

      {/* Center Links (Desktop) */}
      <div className="hidden md:flex items-center justify-center space-x-8 w-1/3">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.href}
            className={cn(
              "text-xs uppercase tracking-widest-extra transition-colors duration-300 hover:text-velmora-gold",
              isScrolled || !isHome ? "text-foreground" : "text-white"
            )}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Right Icons */}
      <div className="flex items-center justify-end space-x-2 md:space-x-4 w-1/3">
        <button
          className={cn(
            "p-2 transition-colors duration-300 hover:text-velmora-gold",
            isScrolled || !isHome ? "text-foreground" : "text-foreground md:text-white"
          )}
        >
          <Search className="w-5 h-5" />
        </button>
        <button
          onClick={() => setIsCartOpen(true)}
          className={cn(
            "p-2 relative transition-colors duration-300 hover:text-velmora-gold",
            isScrolled || !isHome ? "text-foreground" : "text-foreground md:text-white"
          )}
        >
          <ShoppingBag className="w-5 h-5" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-velmora-gold text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col p-8 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm uppercase tracking-widest-extra text-foreground hover:text-velmora-gold"
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
