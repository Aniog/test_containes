import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
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
    { name: 'Collections', path: '/collections' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 py-4 px-6 md:px-12 flex items-center justify-between",
        (isScrolled || !isHome) ? "bg-velmora-cream border-b border-velmora-charcoal/5" : "bg-transparent text-white"
      )}
    >
      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden"
        onClick={() => setIsMobileMenuOpen(true)}
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map(link => (
          <Link 
            key={link.name} 
            to={link.path} 
            className={cn(
              "nav-link",
              (isScrolled || !isHome) ? "text-velmora-charcoal" : "text-white"
            )}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Logo */}
      <Link 
        to="/" 
        className={cn(
          "font-serif text-2xl md:text-3xl tracking-widest-xl",
          (isScrolled || !isHome) ? "text-velmora-charcoal" : "text-white"
        )}
      >
        VELMORA
      </Link>

      {/* Icons */}
      <div className="flex items-center gap-6">
        <button className={cn((isScrolled || !isHome) ? "text-velmora-charcoal" : "text-white")}>
          <Search className="w-5 h-5" />
        </button>
        <button 
          className={cn("relative", (isScrolled || !isHome) ? "text-velmora-charcoal" : "text-white")}
          onClick={() => setIsCartOpen(true)}
        >
          <ShoppingBag className="w-5 h-5" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-velmora-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-velmora-cream z-[60] flex flex-col p-8">
          <div className="flex justify-between items-center mb-12">
            <span className="font-serif text-2xl tracking-widest-xl">VELMORA</span>
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col gap-8">
            {navLinks.map(link => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="text-2xl font-serif uppercase tracking-widest-lg"
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
