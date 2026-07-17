import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { setIsCartOpen, cartCount } = useCart();
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
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 w-full z-50 transition-all duration-500 py-4 px-6 md:px-12 flex items-center justify-between',
          isScrolled || !isHome ? 'bg-white text-primary shadow-sm' : 'bg-transparent text-white'
        )}
      >
        <div className="flex-1 md:block hidden">
          <div className="flex gap-8">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-xs uppercase tracking-widest hover:opacity-70 transition-opacity"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(true)}>
            <Menu className="w-5 h-5" />
          </button>
        </div>

        <Link to="/" className="text-2xl font-serif tracking-[0.3em] uppercase">
          Velmora
        </Link>

        <div className="flex-1 flex justify-end items-center gap-6">
          <div className="md:flex hidden gap-8 mr-8">
            {navLinks.slice(2).map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-xs uppercase tracking-widest hover:opacity-70 transition-opacity"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <button className="hover:opacity-70 transition-opacity">
            <Search className="w-5 h-5" />
          </button>
          <button
            className="relative hover:opacity-70 transition-opacity"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-accent text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 z-[60] bg-white transition-transform duration-500 p-8 flex flex-col',
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex justify-between items-center mb-12">
          <span className="text-xl font-serif tracking-widest uppercase">Velmora</span>
          <button onClick={() => setIsMobileMenuOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="flex flex-col gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-lg uppercase tracking-widest font-serif"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
