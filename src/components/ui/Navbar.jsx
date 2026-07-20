import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
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

  const navbarClasses = cn(
    'fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 md:px-12 py-4 flex items-center justify-between',
    isScrolled || !isHome
      ? 'bg-velmora-warm/95 backdrop-blur-sm border-b border-velmora-taupe/10 py-3'
      : 'bg-transparent text-velmora-warm'
  );

  const linkClasses = cn(
    'text-sm uppercase tracking-widest hover:opacity-70 transition-opacity',
    (isScrolled || !isHome) ? 'text-velmora-charcoal' : 'text-velmora-warm'
  );

  return (
    <>
      <nav className={navbarClasses}>
        {/* Left: Logo */}
        <Link to="/" className="flex-1">
          <h1 className={cn(
            "text-2xl font-serif tracking-widest",
            (isScrolled || !isHome) ? "text-velmora-charcoal" : "text-velmora-warm"
          )}>
            VELMORA
          </h1>
        </Link>

        {/* Center: Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className={linkClasses}>
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right: Icons */}
        <div className="flex-1 flex items-center justify-end gap-5">
          <button className={linkClasses} aria-label="Search">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button 
            className={cn(linkClasses, "relative")} 
            onClick={() => setIsCartOpen(true)}
            aria-label="Cart"
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-velmora-gold text-velmora-warm text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>
          <button 
            className="md:hidden opacity-80"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-velmora-warm flex flex-col p-10">
          <button 
            className="self-end p-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={32} />
          </button>
          <div className="flex flex-col gap-8 mt-12 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="text-3xl font-serif tracking-widest uppercase"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
