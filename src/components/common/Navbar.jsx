import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { totalItems, setIsCartOpen } = useCart();

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
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4 flex items-center justify-between',
        isScrolled || !isHome ? 'bg-background/90 backdrop-blur-md border-b text-foreground' : 'bg-transparent text-white'
      )}
    >
      {/* Mobile Menu Toggle */}
      <button
        className="lg:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Logo */}
      <Link
        to="/"
        className="font-serif text-2xl tracking-widest uppercase font-bold absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0"
      >
        Velmora
      </Link>

      {/* Desktop Links */}
      <div className="hidden lg:flex items-center gap-8 text-sm uppercase tracking-widest font-medium">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.href}
            className="hover:text-accent transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Icons */}
      <div className="flex items-center gap-6">
        <button className="hidden sm:block hover:text-accent transition-colors">
          <Search size={20} />
        </button>
        <button
          className="relative hover:text-accent transition-colors"
          onClick={() => setIsCartOpen(true)}
        >
          <ShoppingBag size={20} />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-2 bg-accent text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              {totalItems}
            </span>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-background z-50 lg:hidden flex flex-col items-center justify-center gap-8 transition-transform duration-300',
          isMobileMenuOpen ? 'translate-x-0 overflow-hidden' : 'translate-x-full'
        )}
      >
        <button
          className="absolute top-6 right-6"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <X size={32} />
        </button>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.href}
            className="font-serif text-3xl uppercase tracking-widest text-foreground"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
