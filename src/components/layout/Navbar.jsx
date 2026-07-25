import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { getCartCount, setIsCartOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Shop', path: '/shop' },
    { label: 'Collections', path: '/shop' },
    { label: 'About', path: '/' },
    { label: 'Journal', path: '/' },
  ];

  const isHome = location.pathname === '/';

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHome 
          ? 'bg-velmora-cream/95 backdrop-blur-md border-b border-velmora-taupe/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="serif-heading text-2xl tracking-[0.2em] text-velmora-base">
          VELMORA
        </Link>

        {/* Center Navigation */}
        <div className="hidden md:flex items-center gap-10 text-sm tracking-[0.1em] text-velmora-base">
          {navLinks.map((link) => (
            <Link 
              key={link.label} 
              to={link.path}
              className="hover:text-velmora-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-5">
          <button 
            className="text-velmora-base hover:text-velmora-gold transition-colors"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative text-velmora-base hover:text-velmora-gold transition-colors"
            aria-label="Open cart"
          >
            <ShoppingBag size={20} />
            {getCartCount() > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-velmora-gold text-velmora-base text-[10px] flex items-center justify-center font-medium">
                {getCartCount()}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;