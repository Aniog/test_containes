import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { getCartCount, openCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Shop', path: '/shop' },
    { label: 'Collections', path: '/collections' },
    { label: 'About', path: '/about' },
    { label: 'Journal', path: '/journal' },
  ];

  const isHome = location.pathname === '/';

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHome 
          ? 'bg-white/95 backdrop-blur-md border-b border-[#E5DFD4]' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-serif text-2xl tracking-[0.2em] text-[#2C2823]">
          VELMORA
        </Link>

        {/* Center Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm tracking-[0.1em] uppercase transition-colors hover:text-[#B8976F] ${
                location.pathname === link.path ? 'text-[#B8976F]' : 'text-[#2C2823]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-5">
          <button 
            className="text-[#2C2823] hover:text-[#B8976F] transition-colors"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
          <button 
            onClick={openCart}
            className="relative text-[#2C2823] hover:text-[#B8976F] transition-colors"
            aria-label="Cart"
          >
            <ShoppingBag size={20} />
            {getCartCount() > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#B8976F] text-white text-[10px] flex items-center justify-center">
                {getCartCount()}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;