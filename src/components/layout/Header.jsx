import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCart } from '@/lib/CartProvider';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
    <>
      <header
        className={cn(
          'fixed top-0 left-0 w-full z-50 transition-all duration-500',
          isScrolled || !isHome
            ? 'bg-velmora-bg/95 backdrop-blur-md py-4 border-b-[0.5px] border-black/10'
            : 'bg-transparent py-6'
        )}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-velmora-charcoal"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="nav-link text-velmora-charcoal"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Logo */}
          <Link
            to="/"
            className="absolute left-1/2 -translate-x-1/2 font-serif text-2xl md:text-3xl tracking-[0.2em] font-medium text-velmora-base"
          >
            VELMORA
          </Link>

          {/* Right Icons */}
          <div className="flex items-center space-x-6">
            <button className="hidden md:block text-velmora-charcoal hover:text-velmora-gold transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsCartOpen(true)}
              className="text-velmora-charcoal hover:text-velmora-gold transition-colors relative"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-velmora-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-velmora-bg z-[100] p-8 md:hidden"
        >
          <button
            className="absolute top-8 right-8 text-velmora-charcoal"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>

          <nav className="flex flex-col space-y-8 mt-16 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-serif text-3xl uppercase tracking-widest text-velmora-charcoal"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="absolute bottom-16 left-0 w-full text-center">
            <p className="font-serif text-sm tracking-widest uppercase text-velmora-grey mb-4">
              Follow Us
            </p>
            <div className="flex justify-center space-x-6">
              <span className="text-xs uppercase tracking-widest">Instagram</span>
              <span className="text-xs uppercase tracking-widest">Pinterest</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
