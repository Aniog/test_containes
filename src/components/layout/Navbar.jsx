import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../lib/CartContext';
import { cn } from '../../lib/utils';

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
    { name: 'Collections', path: '/shop?collection=all' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 py-4 lg:px-12',
        isScrolled || !isHome || isMobileMenuOpen
          ? 'bg-background/95 backdrop-blur-sm border-b'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex-1 lg:flex-none">
          <Link
            to="/"
            className={cn(
              'font-serif text-2xl tracking-[0.2em] transition-colors duration-300',
              !isScrolled && isHome && !isMobileMenuOpen ? 'text-white' : 'text-foreground'
            )}
          >
            VELMORA
          </Link>
        </div>

        {/* Center: Links */}
        <div className="hidden lg:flex flex-1 justify-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'uppercase tracking-[0.15em] text-xs font-medium transition-colors hover:text-accent',
                !isScrolled && isHome ? 'text-white' : 'text-foreground'
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right: Icons */}
        <div className="flex flex-1 lg:flex-none justify-end gap-6 items-center">
          <button
            className={cn(
              'p-1 transition-colors hover:text-accent',
              !isScrolled && isHome && !isMobileMenuOpen ? 'text-white' : 'text-foreground'
            )}
          >
            <Search size={22} strokeWidth={1.5} />
          </button>
          <button
            onClick={() => setIsCartOpen(true)}
            className={cn(
              'p-1 relative transition-colors hover:text-accent',
              !isScrolled && isHome && !isMobileMenuOpen ? 'text-white' : 'text-foreground'
            )}
          >
            <ShoppingBag size={22} strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-accent text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              'lg:hidden p-1 transition-colors hover:text-accent',
              !isScrolled && isHome && !isMobileMenuOpen ? 'text-white' : 'text-foreground'
            )}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col p-8 gap-6 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="uppercase tracking-[0.2em] text-sm font-medium"
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
