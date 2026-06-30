import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const { pathname } = useLocation();

  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/collections' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6 px-6 md:px-12 flex items-center justify-between',
        isScrolled || !isHome || isMobileMenuOpen
          ? 'bg-background shadow-sm py-4'
          : 'bg-transparent text-foreground'
      )}
    >
      {/* Left: Desktop Menu */}
      <div className="hidden md:flex items-center gap-10 flex-1">
        {navLinks.slice(0, 2).map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="text-[10px] font-bold uppercase tracking-[0.2em] hover:opacity-50 transition-all"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Center: Logo */}
      <Link to="/" className="flex-none text-center">
        <h1 className="text-2xl md:text-3xl font-serif tracking-[0.3em] font-medium uppercase">
          Velmora
        </h1>
      </Link>

      {/* Right: Actions */}
      <div className="hidden md:flex items-center justify-end gap-10 flex-1">
        {navLinks.slice(2).map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="text-[10px] font-bold uppercase tracking-[0.2em] hover:opacity-50 transition-all"
          >
            {link.name}
          </Link>
        ))}
        <div className="flex items-center gap-6 ml-4">
          <button className="hover:opacity-50 transition-opacity">
            <Search size={18} strokeWidth={1.5} />
          </button>
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative hover:opacity-50 transition-opacity"
          >
            <ShoppingBag size={18} strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-primary text-white text-[8px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Actions */}
      <div className="md:hidden flex items-center gap-5">
        <button onClick={() => setIsCartOpen(true)} className="relative">
          <ShoppingBag size={20} strokeWidth={1.5} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] bg-background z-40 md:hidden flex flex-col p-8 gap-8 animate-in fade-in slide-in-from-top-4 duration-500">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-2xl font-serif tracking-widest uppercase py-4 border-b border-muted"
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-auto flex items-center gap-6 pb-12">
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground grayscale">
              Quiet luxury for every day.
            </p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
