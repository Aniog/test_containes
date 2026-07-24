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
          ? 'bg-white py-4 shadow-sm'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex-1 hidden md:block">
          <Link to="/" className="font-serif text-2xl tracking-[0.2em] font-medium">
            VELMORA
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className={cn(isScrolled || !isHome ? 'text-primary' : 'text-white')} />
        </button>

        {/* Center: Links (Desktop) */}
        <div className="hidden md:flex items-center gap-12 flex-[2] justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'nav-link transition-colors duration-300',
                isScrolled || !isHome ? 'text-primary' : 'text-white'
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Center: Logo (Mobile) */}
        <div className="md:hidden flex-1 text-center">
           <Link to="/" className="font-serif text-2xl tracking-[0.2em] font-medium">
            VELMORA
          </Link>
        </div>

        {/* Right: Icons */}
        <div className="flex-1 flex items-center justify-end gap-6">
          <button className={cn(isScrolled || !isHome ? 'text-primary' : 'text-white')}>
            <Search size={20} />
          </button>
          <button
            onClick={() => setIsCartOpen(true)}
            className={cn('relative', isScrolled || !isHome ? 'text-primary' : 'text-white')}
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-[60] flex flex-col p-8 md:hidden">
          <div className="flex justify-between items-center mb-12">
            <span className="font-serif text-2xl tracking-[0.2em]">VELMORA</span>
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col gap-8 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-xl tracking-widest uppercase font-serif"
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
