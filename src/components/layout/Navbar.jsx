import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = ({ cartCount, onCartClick }) => {
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
    { name: 'Collections', href: '/collections' },
    { name: 'About', href: '/about' },
    { name: 'Journal', href: '/journal' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-6 px-6 lg:px-12 flex items-center justify-between',
        isScrolled || !isHome ? 'bg-pearl border-b border-border py-4' : 'bg-transparent text-white'
      )}
    >
      <div className="flex-1">
        <Link to="/" className="serif-uppercase text-2xl font-semibold tracking-[0.3em]">VELMORA</Link>
      </div>

      <div className="hidden lg:flex items-center gap-12">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.href}
            className="text-xs serif-uppercase tracking-widest hover:text-gold transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-6 flex-1 justify-end">
        <button className="hover:text-gold transition-colors">
          <Search size={20} strokeWidth={1.5} />
        </button>
        <button onClick={onCartClick} className="relative hover:text-gold transition-colors">
          <ShoppingBag size={20} strokeWidth={1.5} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-gold text-pearl text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </button>
        <button 
          className="lg:hidden hover:text-gold transition-colors"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={20} strokeWidth={1.5} />
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-pearl z-[60] p-8 flex flex-col text-onyx">
          <div className="flex justify-end mb-12">
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>
          <div className="flex flex-col gap-8 items-center text-center">
            <Link 
              to="/" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="serif-uppercase text-3xl font-semibold tracking-[0.3em] mb-8"
            >
              VELMORA
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg serif-uppercase tracking-widest hover:text-gold transition-colors"
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
