import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
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
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/#collections' },
    { name: 'About', path: '/#about' },
    { name: 'Journal', path: '/#journal' },
  ];

  const headerClass = cn(
    'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 md:px-12 py-4 flex items-center justify-between',
    isScrolled || !isHome
      ? 'bg-white/95 backdrop-blur-md shadow-sm h-16'
      : 'bg-transparent h-20 text-white'
  );

  const linkClass = cn(
    'text-[10px] tracking-[0.2em] uppercase transition-colors duration-200',
    isScrolled || !isHome ? 'text-zinc-800 hover:text-zinc-500' : 'text-white/90 hover:text-white'
  );

  return (
    <>
      <header className={headerClass}>
        {/* Left: Mobile Menu Toggle (on small screens) / Desktop Nav */}
        <div className="flex items-center lg:hidden">
          <button onClick={() => setIsMobileMenuOpen(true)}>
            <Menu className="w-5 h-5" />
          </button>
        </div>

        <nav className="hidden lg:flex items-center gap-10 flex-1">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className={linkClass}>
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Center: Logo */}
        <Link 
          to="/" 
          className={cn(
            "font-serif text-2xl md:text-3xl tracking-[0.3em] font-light transition-all text-center flex-1 lg:flex-none",
            isScrolled || !isHome ? "text-zinc-900 scale-90" : "text-white scale-100"
          )}
        >
          VELMORA
        </Link>

        {/* Right: Icons */}
        <div className="flex items-center justify-end gap-6 flex-1">
          <button className={cn("hidden md:block hover:opacity-70 transition-opacity", isScrolled || !isHome ? "text-zinc-800" : "text-white")}>
            <Search className="w-4 h-4" />
          </button>
          <button 
            onClick={() => setIsCartOpen(true)}
            className={cn("relative hover:opacity-70 transition-opacity", isScrolled || !isHome ? "text-zinc-800" : "text-white")}
          >
            <ShoppingBag className="w-4 h-4" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-zinc-900 text-white text-[8px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={cn(
        "fixed inset-0 z-[60] bg-white transform transition-transform duration-300 ease-in-out p-8 lg:hidden",
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex justify-between items-center mb-16">
          <span className="font-serif text-2xl tracking-[0.2em]">VELMORA</span>
          <button onClick={() => setIsMobileMenuOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="text-2xl font-serif tracking-[0.1em] uppercase border-b border-zinc-100 pb-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
