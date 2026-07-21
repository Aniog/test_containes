import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { items, openCart } = useCartStore();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const cartItemCount = items.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled || !isHome || isMobileMenuOpen
      ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm text-foreground'
      : 'bg-transparent text-primary-foreground'
  }`;

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/shop?category=collections' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' },
  ];

  return (
    <nav className={navClass}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 -ml-2 hover:opacity-75 transition-opacity"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Center Logo (Desktop: Left-ish, Mobile: Center) */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <Link to="/" className="font-serif text-2xl tracking-widest uppercase">
              VELMORA
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 justify-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm uppercase tracking-widest hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center justify-end lg:flex-1 space-x-4">
            <button className="p-2 hover:opacity-75 transition-opacity hidden sm:block">
              <Search size={20} />
            </button>
            <button 
              className="p-2 hover:opacity-75 transition-opacity relative"
              onClick={openCart}
            >
              <ShoppingBag size={20} />
              {cartItemCount > 0 && (
                <span className="absolute top-1 right-1 bg-primary text-primary-foreground text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-background border-b border-border shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1 text-foreground">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-3 py-4 text-base uppercase tracking-widest hover:bg-muted"
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
}