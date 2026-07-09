import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
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
    { name: 'Collections', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' },
  ];

  const bgColorClass = isScrolled ? 'bg-white shadow-sm' : isHome ? 'bg-transparent text-white' : 'bg-white';
  const textColorClass = isScrolled ? 'text-charcoal' : isHome ? 'text-white' : 'text-charcoal';
  const borderColorClass = isScrolled ? 'border-stone-100' : isHome ? 'border-white/20' : 'border-stone-100';

  return (
    <nav className={cn(
      'fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b',
      bgColorClass,
      borderColorClass
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className={cn(
              'font-serif text-2xl tracking-[0.1em] font-medium transition-colors',
              textColorClass
            )}>
              VELMORA
            </Link>
          </div>

          {/* Center Links (Desktop) */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'text-sm uppercase tracking-widest font-medium transition-colors hover:opacity-70',
                  textColorClass
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button className={cn('p-2 transition-colors hover:opacity-70', textColorClass)}>
              <Search className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setIsCartOpen(true)}
              className={cn('p-2 relative transition-colors hover:opacity-70 flex items-center', textColorClass)}
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>
            <button 
              className={cn('md:hidden p-2', textColorClass)}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        'md:hidden fixed inset-0 top-16 bg-white z-40 transition-transform duration-300 ease-in-out',
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      )}>
        <div className="px-6 py-8 flex flex-col space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-2xl font-serif text-charcoal border-b border-stone-100 pb-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
