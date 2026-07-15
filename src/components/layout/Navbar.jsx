import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar({ onSearchOpen }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { getCartCount, openCart } = useCart();
  const location = useLocation();
  const cartCount = getCartCount();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Shop', path: '/shop' },
    { label: 'Collections', path: '/shop' },
    { label: 'About', path: '/about' },
    { label: 'Journal', path: '/journal' },
  ];

  const isHome = location.pathname === '/';

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled || !isHome 
          ? 'bg-white/95 backdrop-blur-md border-b border-[#E8E4DE]' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Left: Logo */}
        <Link to="/" className="font-serif text-2xl tracking-[3px] text-[#2C2825]">
          VELMORA
        </Link>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex items-center gap-10 text-sm tracking-[1.5px]">
          {navLinks.map((link) => (
            <Link 
              key={link.label} 
              to={link.path}
              className="text-[#5C5651] hover:text-[#2C2825] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: Icons */}
        <div className="flex items-center gap-4">
          <button 
            onClick={onSearchOpen}
            className="p-2 text-[#5C5651] hover:text-[#2C2825] transition-colors"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </button>
          
          <button 
            onClick={openCart}
            className="p-2 text-[#5C5651] hover:text-[#2C2825] transition-colors relative"
            aria-label="Cart"
          >
            <ShoppingBag className="w-4 h-4" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-[#C5A46E] text-white text-[10px] rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Link to="/shop" className="text-xs tracking-[1px] text-[#5C5651]">MENU</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
