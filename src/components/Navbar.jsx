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
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 lg:px-12',
        isScrolled || !isHome
          ? 'bg-velmora-alabaster border-b border-velmora-charcoal/10 py-3'
          : 'bg-transparent text-velmora-alabaster'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Logo */}
        <Link
          to="/"
          className={cn(
            'text-2xl lg:text-3xl font-serif tracking-widest',
            isScrolled || !isHome ? 'text-velmora-charcoal' : 'text-velmora-alabaster'
          )}
        >
          VELMORA
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                'text-sm uppercase tracking-widest hover:text-velmora-gold transition-colors font-sans',
                isScrolled || !isHome ? 'text-velmora-charcoal' : 'text-velmora-alabaster'
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-6">
          <button className="hidden lg:block p-2 hover:text-velmora-gold transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={onCartClick}
            className="p-2 hover:text-velmora-gold transition-colors relative"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-velmora-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-sans">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-velmora-alabaster z-[60] transition-transform duration-500 lg:hidden',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex items-center justify-between mb-12">
            <span className="text-2xl font-serif tracking-widest text-velmora-charcoal">
              VELMORA
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-velmora-charcoal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-serif uppercase tracking-widest text-velmora-charcoal"
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
