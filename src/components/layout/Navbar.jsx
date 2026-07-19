import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
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
    { name: 'Journal', path: '/journal' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4 md:px-12 md:py-6',
        isScrolled || !isHome
          ? 'bg-background/80 backdrop-blur-md border-b border-border'
          : 'bg-transparent text-white'
      )}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-1 lg:flex-none">
          <Link
            to="/"
            className="brand-title text-2xl font-semibold tracking-[0.3em]"
            style={{ color: (isScrolled || !isHome) ? 'inherit' : 'white' }}
          >
            VELMORA
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex flex-1 justify-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  'text-sm uppercase tracking-widest hover:opacity-70 transition-opacity',
                  isActive ? 'font-medium' : 'font-light'
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-6">
          <button className="hover:opacity-70 transition-opacity lg:block hidden">
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative hover:opacity-70 transition-opacity"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-background z-40 flex flex-col items-center justify-center space-y-8 animate-in fade-in zoom-in duration-300">
            <button 
                className="absolute top-6 right-6"
                onClick={() => setIsMobileMenuOpen(false)}
            >
                <X className="w-8 h-8" />
            </button>
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl brand-title"
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
